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
import androidx.media3.ui.PlayerView;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class MainActivity extends Activity {
    private static final Pattern GROUP_PATTERN = Pattern.compile("group-title=\"([^\"]*)\"");

    private final ArrayList<Channel> channels = new ArrayList<>();
    private ExoPlayer player;
    private String selectedUrl;
    private String selectedMimeType;
    private TextView statusText;
    private Button openExternalButton;

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
        PlayerView playerView = findViewById(R.id.playerView);
        EditText searchInput = findViewById(R.id.searchInput);
        ListView channelList = findViewById(R.id.channelList);
        statusText = findViewById(R.id.statusText);
        openExternalButton = findViewById(R.id.openExternalButton);

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

        ArrayAdapter<Channel> adapter = new ArrayAdapter<Channel>(
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
        channelList.setAdapter(adapter);
        channelList.setOnItemClickListener((parent, view, position, id) -> {
            Channel channel = adapter.getItem(position);
            if (channel != null) playChannel(channel);
        });

        searchInput.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence value, int start, int count, int after) {}

            @Override
            public void onTextChanged(CharSequence value, int start, int before, int count) {
                adapter.getFilter().filter(value);
            }

            @Override
            public void afterTextChanged(Editable value) {}
        });

        loadChannels(adapter);
    }

    private void loadChannels(ArrayAdapter<Channel> adapter) {
        String currentInfo = null;
        int loaded = 0;

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                getAssets().open("channels.m3u"), StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                line = line.trim();
                if (line.startsWith("#EXTINF:")) {
                    currentInfo = line;
                } else if (!line.isEmpty() && !line.startsWith("#") && currentInfo != null
                        && (line.startsWith("http://") || line.startsWith("https://"))) {
                    String name = parseName(currentInfo);
                    String group = parseGroup(currentInfo);
                    channels.add(new Channel(name, group, line));
                    currentInfo = null;
                    loaded++;
                }
            }
            adapter.notifyDataSetChanged();
            statusText.setText(loaded + " canales disponibles");
        } catch (IOException error) {
            statusText.setText("No se pudo cargar channels.m3u: " + error.getMessage());
        }
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
        if (player != null) {
            player.release();
            player = null;
        }
    }
}
