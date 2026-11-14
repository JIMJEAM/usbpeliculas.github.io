package com.jimjeam.canalesplayer;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.media3.common.MediaItem;
import androidx.media3.common.MimeTypes;
import androidx.media3.common.PlaybackException;
import androidx.media3.common.Player;
import androidx.media3.exoplayer.ExoPlayer;
import androidx.media3.ui.AspectRatioFrameLayout;
import androidx.media3.ui.PlayerView;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class MainActivity extends Activity {
    private static final Pattern GROUP_PATTERN = Pattern.compile("group-title=\"([^\"]*)\"");
    private static final String CHANNELS_URL =
            "https://pelisplaya.net/canales-autorizados.m3u";

    private final ArrayList<Channel> channels = new ArrayList<>();
    private final ExecutorService ioExecutor = Executors.newSingleThreadExecutor();
    private ExoPlayer player;
    private String selectedUrl;
    private String selectedMimeType;
    private PlayerView playerView;
    private TextView statusText;
    private Button openExternalButton;
    private Button refreshChannelsButton;
    private Button resizeModeButton;
    private EditText searchInput;
    private ListView channelList;
    private ArrayAdapter<Channel> channelAdapter;
    private boolean isRefreshingChannels;
    private boolean isFillScreen;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        setContentView(R.layout.activity_main);

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.rootLayout), (view, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            int padding = Math.round(12 * getResources().getDisplayMetrics().density);
            view.setPadding(systemBars.left + padding, systemBars.top + padding,
                    systemBars.right + padding, systemBars.bottom + padding);
            return insets;
        });
        playerView = findViewById(R.id.playerView);
        searchInput = findViewById(R.id.searchInput);
        channelList = findViewById(R.id.channelList);
        statusText = findViewById(R.id.statusText);
        openExternalButton = findViewById(R.id.openExternalButton);
        refreshChannelsButton = findViewById(R.id.refreshChannelsButton);
        resizeModeButton = findViewById(R.id.resizeModeButton);

        playerView.setResizeMode(AspectRatioFrameLayout.RESIZE_MODE_FIT);
        updateResizeModeButton();
        resizeModeButton.setOnClickListener(view -> {
            isFillScreen = !isFillScreen;
            playerView.setResizeMode(isFillScreen
                    ? AspectRatioFrameLayout.RESIZE_MODE_ZOOM
                    : AspectRatioFrameLayout.RESIZE_MODE_FIT);
            updateResizeModeButton();
        });
        player = new ExoPlayer.Builder(this).build();
        playerView.setPlayer(player);
        player.addListener(new Player.Listener() {
            @Override
            public void onPlayerError(PlaybackException error) {
                statusText.setText("No se pudo reproducir este stream. Prueba abrirlo en otra app.");
                openExternalButton.setVisibility(View.VISIBLE);
            }
        });

        openExternalButton.setOnClickListener(view -> openSelectedChannelExternally());

        channelAdapter = createChannelAdapter();
        channelList.setAdapter(channelAdapter);
        channelList.setOnItemClickListener((parent, view, position, id) -> {
            Channel channel = (Channel) parent.getItemAtPosition(position);
            if (channel != null) playChannel(channel);
        });

        refreshChannelsButton.setOnClickListener(view -> refreshChannels());
        searchInput.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence value, int start, int count, int after) {}

            @Override
            public void onTextChanged(CharSequence value, int start, int before, int count) {
                channelAdapter.getFilter().filter(value);
            }

            @Override
            public void afterTextChanged(Editable value) {}
        });

        loadBundledChannels();
        refreshChannels();
    }

    private void updateResizeModeButton() {
        String mode = isFillScreen ? "Llenar pantalla" : "Ajustar pantalla";
        resizeModeButton.setText(mode);
        resizeModeButton.setContentDescription(
                "Modo de imagen: " + mode + ". Pulsa para cambiar el ajuste.");
    }

    private ArrayAdapter<Channel> createChannelAdapter() {
        return new ArrayAdapter<Channel>(
                this,
                android.R.layout.simple_list_item_1,
                channels
        ) {
            @Override
            public View getView(int position, View convertView, android.view.ViewGroup parent) {
                TextView row = (TextView) super.getView(position, convertView, parent);
                Channel channel = getItem(position);
                if (channel != null && channel.group != null && !channel.group.isEmpty()
                        && !channel.group.equals("-")) {
                    row.setText(channel.name + "\n" + channel.group);
                    row.setTextSize(15);
                }
                row.setTextColor(0xFFFFFFFF);
                row.setPadding(20, 14, 20, 14);
                return row;
            }
        };
    }

    private void loadBundledChannels() {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                getAssets().open("channels.m3u"), StandardCharsets.UTF_8))) {
            ArrayList<Channel> bundledChannels = parseChannels(reader);
            replaceChannels(bundledChannels);
            statusText.setText(bundledChannels.size() + " canales (lista incluida en la app)");
        } catch (IOException error) {
            statusText.setText("No se pudo cargar channels.m3u: " + error.getMessage());
        }
    }

    private void refreshChannels() {
        if (isRefreshingChannels) return;

        isRefreshingChannels = true;
        refreshChannelsButton.setEnabled(false);
        statusText.setText("Comprobando actualizaciones de la lista...");

        ioExecutor.execute(() -> {
            try {
                ArrayList<Channel> updatedChannels = downloadChannels();
                runOnUiThread(() -> {
                    if (isFinishing() || isDestroyed()) return;
                    replaceChannels(updatedChannels);
                    statusText.setText(updatedChannels.size() + " canales (lista actualizada)");
                    finishChannelRefresh();
                });
            } catch (IOException error) {
                android.util.Log.w("CanalesPlayer", "No se pudo actualizar la lista M3U.", error);
                runOnUiThread(() -> {
                    if (isFinishing() || isDestroyed()) return;
                    int availableChannels = channelAdapter.getCount();
                    if (availableChannels > 0) {
                        statusText.setText("No se pudo actualizar; se conserva la lista local ("
                                + availableChannels + " canales).");
                    } else {
                        statusText.setText("No se pudo descargar la lista ni cargar la copia local.");
                    }
                    finishChannelRefresh();
                });
            }
        });
    }

    private void finishChannelRefresh() {
        isRefreshingChannels = false;
        refreshChannelsButton.setEnabled(true);
    }

    private ArrayList<Channel> downloadChannels() throws IOException {
        HttpURLConnection connection = (HttpURLConnection) new URL(CHANNELS_URL).openConnection();
        connection.setConnectTimeout(10000);
        connection.setReadTimeout(15000);
        connection.setInstanceFollowRedirects(true);
        connection.setRequestProperty("Accept", "audio/x-mpegurl, application/vnd.apple.mpegurl, text/plain");

        try {
            int responseCode = connection.getResponseCode();
            if (responseCode < 200 || responseCode >= 300) {
                throw new IOException("El servidor respondió con HTTP " + responseCode + ".");
            }
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                    connection.getInputStream(), StandardCharsets.UTF_8))) {
                return parseChannels(reader);
            }
        } finally {
            connection.disconnect();
        }
    }

    private ArrayList<Channel> parseChannels(BufferedReader reader) throws IOException {
        ArrayList<Channel> parsedChannels = new ArrayList<>();
        String currentInfo = null;
        String line;

        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.startsWith("#EXTINF:")) {
                currentInfo = line;
            } else if (!line.isEmpty() && !line.startsWith("#") && currentInfo != null
                    && (line.startsWith("http://") || line.startsWith("https://"))) {
                parsedChannels.add(new Channel(parseName(currentInfo), parseGroup(currentInfo), line));
                currentInfo = null;
            }
        }
        if (parsedChannels.isEmpty()) {
            throw new IOException("La lista recibida no contiene canales válidos.");
        }
        return parsedChannels;
    }

    private void replaceChannels(ArrayList<Channel> updatedChannels) {
        String query = searchInput.getText().toString();
        channels.clear();
        channels.addAll(updatedChannels);
        channelAdapter = createChannelAdapter();
        channelList.setAdapter(channelAdapter);
        if (!query.isEmpty()) channelAdapter.getFilter().filter(query);
    }

    private String parseName(String extinf) {
        int comma = extinf.lastIndexOf(',');
        if (comma >= 0 && comma < extinf.length() - 1) {
            return extinf.substring(comma + 1).trim();
        }
        return "Canal sin nombre";
    }

    private String parseGroup(String extinf) {
        Matcher matcher = GROUP_PATTERN.matcher(extinf);
        return matcher.find() ? matcher.group(1).trim() : "";
    }

    private void playChannel(Channel channel) {
        selectedUrl = channel.url;
        selectedMimeType = inferMimeType(channel.url);
        openExternalButton.setVisibility(View.GONE);
        statusText.setText("Cargando: " + channel.name);

        MediaItem.Builder mediaItem = new MediaItem.Builder().setUri(channel.url);
        if (selectedMimeType != null) mediaItem.setMimeType(selectedMimeType);

        player.setMediaItem(mediaItem.build());
        player.prepare();
        player.play();
    }

    private String inferMimeType(String url) {
        String path = Uri.parse(url).getLastPathSegment();
        String lowerPath = path == null ? "" : path.toLowerCase(Locale.ROOT);

        if (lowerPath.endsWith(".mpd")) return MimeTypes.APPLICATION_MPD;
        if (lowerPath.endsWith(".m3u8") || !lowerPath.contains(".")) return MimeTypes.APPLICATION_M3U8;
        if (lowerPath.endsWith(".flv")) return "video/x-flv";
        return null;
    }

    private void openSelectedChannelExternally() {
        if (selectedUrl == null) return;

        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setDataAndType(Uri.parse(selectedUrl),
                selectedMimeType == null ? "video/*" : selectedMimeType);
        try {
            startActivity(Intent.createChooser(intent, "Abrir canal con"));
        } catch (ActivityNotFoundException error) {
            statusText.setText("No hay otra app instalada que pueda abrir este canal.");
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (player != null) player.pause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ioExecutor.shutdownNow();
        if (player != null) {
            player.release();
            player = null;
        }
    }
}
