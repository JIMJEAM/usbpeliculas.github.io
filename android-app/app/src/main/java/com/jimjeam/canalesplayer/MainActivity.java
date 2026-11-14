package com.jimjeam.canalesplayer;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.FrameLayout;
import android.widget.ListView;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
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
    private static final long PLAYER_CONTROLS_HIDE_DELAY_MS = 5000;

    private final ArrayList<Channel> channels = new ArrayList<>();
    private final ExecutorService ioExecutor = Executors.newSingleThreadExecutor();
    private final Handler controlsHandler = new Handler(Looper.getMainLooper());
    private final Runnable hidePlayerControlsRunnable = this::hidePlayerControls;
    private ExoPlayer player;
    private String selectedUrl;
    private String selectedMimeType;
    private View rootLayout;
    private TextView appTitle;
    private FrameLayout playerContainer;
    private PlayerView playerView;
    private TextView statusText;
    private Button openExternalButton;
    private Button refreshChannelsButton;
    private ImageButton resizeModeButton;
    private ImageButton fullscreenToggleButton;
    private ImageButton playlistToggleButton;
    private ImageButton closePlaylistButton;
    private ImageButton muteButton;
    private ImageButton volumeDownButton;
    private ImageButton volumeUpButton;
    private EditText searchInput;
    private SeekBar volumeSeekBar;
    private View volumeControls;
    private View fullscreenChannelPanel;
    private ListView channelList;
    private ListView fullscreenChannelList;
    private ArrayAdapter<Channel> channelAdapter;
    private boolean isRefreshingChannels;
    private boolean isFillScreen;
    private boolean isFullscreen;
    private boolean isAutoFullscreen;
    private boolean hasPlaybackError;
    private boolean arePlayerControlsVisible = true;
    private int lastAudibleVolume = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        setVolumeControlStream(AudioManager.STREAM_MUSIC);
        setContentView(R.layout.activity_main);

        rootLayout = findViewById(R.id.rootLayout);
        appTitle = findViewById(R.id.appTitle);
        playerContainer = findViewById(R.id.playerContainer);
        ViewCompat.setOnApplyWindowInsetsListener(rootLayout, (view, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            int padding = isFullscreen ? 0
                    : Math.round(12 * getResources().getDisplayMetrics().density);
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
        fullscreenToggleButton = findViewById(R.id.fullscreenToggleButton);
        playlistToggleButton = findViewById(R.id.playlistToggleButton);
        closePlaylistButton = findViewById(R.id.closePlaylistButton);
        fullscreenChannelPanel = findViewById(R.id.fullscreenChannelPanel);
        fullscreenChannelList = findViewById(R.id.fullscreenChannelList);
        volumeControls = findViewById(R.id.volumeControls);
        volumeSeekBar = findViewById(R.id.volumeSeekBar);
        muteButton = findViewById(R.id.muteButton);
        volumeDownButton = findViewById(R.id.volumeDownButton);
        volumeUpButton = findViewById(R.id.volumeUpButton);

        playerView.setResizeMode(AspectRatioFrameLayout.RESIZE_MODE_FIT);
        updateResizeModeButton();
        resizeModeButton.setOnClickListener(view -> {
            isFillScreen = !isFillScreen;
            playerView.setResizeMode(isFillScreen
                    ? AspectRatioFrameLayout.RESIZE_MODE_ZOOM
                    : AspectRatioFrameLayout.RESIZE_MODE_FIT);
            updateResizeModeButton();
        });
        fullscreenToggleButton.setOnClickListener(view -> {
            if (isFullscreen && isAutoFullscreen) isAutoFullscreen = false;
            setFullscreen(!isFullscreen);
        });
        playlistToggleButton.setOnClickListener(view -> {
            if (fullscreenChannelPanel.getVisibility() == View.VISIBLE) {
                setPlaylistPanelVisible(false);
            } else {
                searchInput.setText("");
                setPlaylistPanelVisible(true);
            }
        });
        closePlaylistButton.setOnClickListener(view -> setPlaylistPanelVisible(false));

        player = new ExoPlayer.Builder(this).build();
        player.setVolume(1f);
        playerView.setPlayer(player);
        player.addListener(new Player.Listener() {
            @Override
            public void onPlayerError(PlaybackException error) {
                hasPlaybackError = true;
                statusText.setText("No se pudo reproducir este stream. Prueba abrirlo en otra app.");
                if (!isFullscreen) openExternalButton.setVisibility(View.VISIBLE);
            }
        });

        openExternalButton.setOnClickListener(view -> openSelectedChannelExternally());
        setupVolumeControls();

        channelAdapter = createChannelAdapter();
        channelList.setAdapter(channelAdapter);
        fullscreenChannelList.setAdapter(channelAdapter);
        channelList.setOnItemClickListener((parent, view, position, id) ->
                playSelectedChannel(parent, position));
        fullscreenChannelList.setOnItemClickListener((parent, view, position, id) ->
                playSelectedChannel(parent, position));

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
        showPlayerControls();
    }

    private void updateResizeModeButton() {
        String description = isFillScreen ? "Llenar pantalla" : "Ajustar pantalla";
        resizeModeButton.setImageResource(isFillScreen
                ? R.drawable.ic_zoom_screen : R.drawable.ic_fit_screen);
        resizeModeButton.setContentDescription(
                "Modo de imagen: " + description + ". Pulsa para cambiar el ajuste.");
    }

    private void setupVolumeControls() {
        volumeSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if (fromUser) setPlayerVolume(progress);
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {}

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {}
        });
        volumeDownButton.setOnClickListener(view -> adjustPlayerVolume(-10));
        volumeUpButton.setOnClickListener(view -> adjustPlayerVolume(10));
        muteButton.setOnClickListener(view -> toggleMute());
        updateMuteButton();
    }

    private void adjustPlayerVolume(int change) {
        int volume = Math.max(0, Math.min(100, volumeSeekBar.getProgress() + change));
        volumeSeekBar.setProgress(volume);
        setPlayerVolume(volume);
    }

    private void toggleMute() {
        int volume = volumeSeekBar.getProgress();
        if (volume > 0) {
            lastAudibleVolume = volume;
            volume = 0;
        } else {
            volume = lastAudibleVolume > 0 ? lastAudibleVolume : 50;
        }
        volumeSeekBar.setProgress(volume);
        setPlayerVolume(volume);
    }

    private void setPlayerVolume(int volume) {
        player.setVolume(volume / 100f);
        if (volume > 0) lastAudibleVolume = volume;
        updateMuteButton();
    }

    private void updateMuteButton() {
        boolean muted = volumeSeekBar.getProgress() == 0;
        muteButton.setImageResource(muted
                ? R.drawable.ic_volume_mute : R.drawable.ic_volume_up);
        muteButton.setContentDescription(muted ? "Activar sonido" : "Silenciar");
    }

    private void setFullscreen(boolean fullscreen) {
        isFullscreen = fullscreen;
        rootLayout.setBackgroundResource(fullscreen
                ? android.R.color.black : R.drawable.app_background);
        getWindow().setStatusBarColor(fullscreen ? Color.BLACK : Color.TRANSPARENT);
        getWindow().setNavigationBarColor(fullscreen ? Color.BLACK : Color.TRANSPARENT);
        if (!fullscreen) setPlaylistPanelVisible(false);
        int visibility = fullscreen ? View.GONE : View.VISIBLE;
        appTitle.setVisibility(visibility);
        searchInput.setVisibility(visibility);
        volumeControls.setVisibility(visibility);
        statusText.setVisibility(visibility);
        refreshChannelsButton.setVisibility(visibility);
        channelList.setVisibility(visibility);
        openExternalButton.setVisibility(!fullscreen && hasPlaybackError
                ? View.VISIBLE : View.GONE);

        ViewGroup.LayoutParams playerParams = playerContainer.getLayoutParams();
        playerParams.height = fullscreen
                ? ViewGroup.LayoutParams.MATCH_PARENT
                : Math.round(220 * getResources().getDisplayMetrics().density);
        playerContainer.setLayoutParams(playerParams);

        fullscreenToggleButton.setImageResource(fullscreen
                ? R.drawable.ic_fullscreen_exit : R.drawable.ic_fullscreen);
        fullscreenToggleButton.setContentDescription(fullscreen
                ? "Salir de pantalla completa" : "Activar pantalla completa");

        WindowInsetsControllerCompat insetsController =
                WindowCompat.getInsetsController(getWindow(), rootLayout);
        if (fullscreen) {
            insetsController.setSystemBarsBehavior(
                    WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            insetsController.hide(WindowInsetsCompat.Type.systemBars());
        } else {
            insetsController.show(WindowInsetsCompat.Type.systemBars());
        }
        ViewCompat.requestApplyInsets(rootLayout);
        showPlayerControls();
    }

    private void setPlaylistPanelVisible(boolean visible) {
        fullscreenChannelPanel.setVisibility(visible ? View.VISIBLE : View.GONE);
        playlistToggleButton.setContentDescription(visible
                ? "Ocultar lista de canales" : "Mostrar lista de canales sobre el video");
        showPlayerControls();
    }

    private void showPlayerControls() {
        controlsHandler.removeCallbacks(hidePlayerControlsRunnable);
        arePlayerControlsVisible = true;
        resizeModeButton.setVisibility(View.VISIBLE);
        fullscreenToggleButton.setVisibility(View.VISIBLE);
        playlistToggleButton.setVisibility(View.VISIBLE);
        closePlaylistButton.setVisibility(fullscreenChannelPanel.getVisibility() == View.VISIBLE
                ? View.VISIBLE : View.INVISIBLE);
        controlsHandler.postDelayed(hidePlayerControlsRunnable, PLAYER_CONTROLS_HIDE_DELAY_MS);
    }

    private void hidePlayerControls() {
        arePlayerControlsVisible = false;
        View focusedView = getCurrentFocus();
        if (focusedView == resizeModeButton || focusedView == fullscreenToggleButton
                || focusedView == playlistToggleButton || focusedView == closePlaylistButton) {
            focusedView.clearFocus();
        }
        resizeModeButton.setVisibility(View.INVISIBLE);
        fullscreenToggleButton.setVisibility(View.INVISIBLE);
        playlistToggleButton.setVisibility(View.INVISIBLE);
        closePlaylistButton.setVisibility(View.INVISIBLE);
    }

    private void playSelectedChannel(AdapterView<?> parent, int position) {
        Channel channel = (Channel) parent.getItemAtPosition(position);
        if (channel != null) {
            playChannel(channel);
            setPlaylistPanelVisible(false);
        }
    }

    private ArrayAdapter<Channel> createChannelAdapter() {
        return new ArrayAdapter<Channel>(
                this,
                R.layout.channel_list_item,
                R.id.channelName,
                channels
        ) {
            @Override
            public View getView(int position, View convertView, android.view.ViewGroup parent) {
                View row = convertView == null
                        ? MainActivity.this.getLayoutInflater()
                                .inflate(R.layout.channel_list_item, parent, false)
                        : convertView;
                Channel channel = getItem(position);
                if (channel != null) {
                    TextView name = row.findViewById(R.id.channelName);
                    TextView group = row.findViewById(R.id.channelGroup);
                    name.setText(channel.name);
                    if (channel.group != null && !channel.group.isEmpty()
                            && !channel.group.equals("-")) {
                        group.setText(channel.group);
                        group.setVisibility(View.VISIBLE);
                    } else {
                        group.setVisibility(View.GONE);
                    }
                }
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
        fullscreenChannelList.setAdapter(channelAdapter);
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
        hasPlaybackError = false;
        openExternalButton.setVisibility(View.GONE);
        statusText.setText("Cargando: " + channel.name);

        MediaItem.Builder mediaItem = new MediaItem.Builder().setUri(channel.url);
        if (selectedMimeType != null) mediaItem.setMimeType(selectedMimeType);

        player.setMediaItem(mediaItem.build());
        player.prepare();
        player.play();
        if (getResources().getConfiguration().orientation == Configuration.ORIENTATION_LANDSCAPE
                && !isFullscreen) {
            isAutoFullscreen = true;
            setFullscreen(true);
        }
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
    public void onUserInteraction() {
        super.onUserInteraction();
        showPlayerControls();
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getAction() == KeyEvent.ACTION_DOWN && isNavigationKey(event.getKeyCode())) {
            boolean controlsWereHidden = !arePlayerControlsVisible;
            boolean channelListHasFocus = channelList.hasFocus() || fullscreenChannelList.hasFocus();
            showPlayerControls();

            if (controlsWereHidden && !channelListHasFocus) {
                playlistToggleButton.requestFocus();
                if (event.getKeyCode() == KeyEvent.KEYCODE_DPAD_CENTER
                        || event.getKeyCode() == KeyEvent.KEYCODE_ENTER) {
                    return true;
                }
            }
        }
        return super.dispatchKeyEvent(event);
    }

    private boolean isNavigationKey(int keyCode) {
        return keyCode == KeyEvent.KEYCODE_DPAD_UP
                || keyCode == KeyEvent.KEYCODE_DPAD_DOWN
                || keyCode == KeyEvent.KEYCODE_DPAD_LEFT
                || keyCode == KeyEvent.KEYCODE_DPAD_RIGHT
                || keyCode == KeyEvent.KEYCODE_DPAD_CENTER
                || keyCode == KeyEvent.KEYCODE_ENTER;
    }

    @Override
    protected void onStart() {
        super.onStart();
        showPlayerControls();
    }

    @Override
    protected void onStop() {
        super.onStop();
        controlsHandler.removeCallbacks(hidePlayerControlsRunnable);
        if (player != null) player.pause();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE
                && selectedUrl != null && !isFullscreen) {
            isAutoFullscreen = true;
            setFullscreen(true);
        } else if (newConfig.orientation == Configuration.ORIENTATION_PORTRAIT
                && isAutoFullscreen) {
            isAutoFullscreen = false;
            setFullscreen(false);
        }
    }

    @Override
    public void onBackPressed() {
        if (fullscreenChannelPanel.getVisibility() == View.VISIBLE) {
            setPlaylistPanelVisible(false);
            return;
        }
        if (isFullscreen) {
            if (isAutoFullscreen) isAutoFullscreen = false;
            setFullscreen(false);
            return;
        }
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ioExecutor.shutdownNow();
        controlsHandler.removeCallbacks(hidePlayerControlsRunnable);
        if (player != null) {
            player.release();
            player = null;
        }
    }
}
