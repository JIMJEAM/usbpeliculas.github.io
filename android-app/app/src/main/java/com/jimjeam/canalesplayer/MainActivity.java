package com.jimjeam.canalesplayer;

import android.app.Activity;
import android.app.PictureInPictureParams;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Rational;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Filter;
import android.widget.FrameLayout;
import android.widget.HorizontalScrollView;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
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
import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class MainActivity extends Activity {
    private static final Pattern GROUP_PATTERN = Pattern.compile("group-title=\"([^\"]*)\"");
    private static final String CHANNELS_URL = "https://pelisplaya.net/canales-autorizados.m3u";
    private static final long PLAYER_CONTROLS_HIDE_DELAY_MS = 5000;
    private static final int MAX_RECONNECT_ATTEMPTS = 3;

    private final ArrayList<Channel> allChannels = new ArrayList<>();
    private final ArrayList<Channel> displayedChannels = new ArrayList<>();
    private final ArrayList<String> categories = new ArrayList<>();
    private final ExecutorService ioExecutor = Executors.newSingleThreadExecutor();
    private final Handler controlsHandler = new Handler(Looper.getMainLooper());
    private final Runnable hidePlayerControlsRunnable = this::hidePlayerControls;
    private final Runnable hideGestureHudRunnable = this::hideGestureHud;

    private ExoPlayer player;
    private String selectedUrl;
    private String selectedMimeType;
    private String selectedChannelName = "";
    private String currentCategory = "Todos";
    private int reconnectAttempts = 0;

    private View rootLayout;
    private TextView appTitle;
    private FrameLayout playerContainer;
    private PlayerView playerView;
    private TextView statusText;
    private Button openExternalButton;
    private Button refreshChannelsButton;
    private ImageButton resizeModeButton;
    private ImageButton pipToggleButton;
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
    private LinearLayout categoryContainer;
    private HorizontalScrollView categoryScrollView;
    private LinearLayout gestureHud;
    private ImageView gestureHudIcon;
    private TextView gestureHudText;
    private LinearLayout bufferingOverlay;
    private TextView bufferingText;

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

        initViews();
        setupPlayer();
        setupVolumeControls();
        setupGestures();
        setupChannelAdapters();

        loadBundledChannels();
        refreshChannels();
        showPlayerControls();
    }

    private void initViews() {
        rootLayout = findViewById(R.id.rootLayout);
        appTitle = findViewById(R.id.appTitle);
        playerContainer = findViewById(R.id.playerContainer);
        playerView = findViewById(R.id.playerView);
        searchInput = findViewById(R.id.searchInput);
        channelList = findViewById(R.id.channelList);
        statusText = findViewById(R.id.statusText);
        openExternalButton = findViewById(R.id.openExternalButton);
        refreshChannelsButton = findViewById(R.id.refreshChannelsButton);
        resizeModeButton = findViewById(R.id.resizeModeButton);
        pipToggleButton = findViewById(R.id.pipToggleButton);
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
        categoryContainer = findViewById(R.id.categoryContainer);
        categoryScrollView = findViewById(R.id.categoryScrollView);
        gestureHud = findViewById(R.id.gestureHud);
        gestureHudIcon = findViewById(R.id.gestureHudIcon);
        gestureHudText = findViewById(R.id.gestureHudText);
        bufferingOverlay = findViewById(R.id.bufferingOverlay);
        bufferingText = findViewById(R.id.bufferingText);

        ViewCompat.setOnApplyWindowInsetsListener(rootLayout, (view, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            int padding = isFullscreen ? 0
                    : Math.round(12 * getResources().getDisplayMetrics().density);
            view.setPadding(systemBars.left + padding, systemBars.top + padding,
                    systemBars.right + padding, systemBars.bottom + padding);
            return insets;
        });

        playerView.setResizeMode(AspectRatioFrameLayout.RESIZE_MODE_FIT);
        updateResizeModeButton();
        resizeModeButton.setOnClickListener(view -> {
            isFillScreen = !isFillScreen;
            playerView.setResizeMode(isFillScreen
                    ? AspectRatioFrameLayout.RESIZE_MODE_ZOOM
                    : AspectRatioFrameLayout.RESIZE_MODE_FIT);
            updateResizeModeButton();
        });

        pipToggleButton.setOnClickListener(view -> enterPipMode());
        fullscreenToggleButton.setOnClickListener(view -> {
            if (isFullscreen && isAutoFullscreen) isAutoFullscreen = false;
            setFullscreen(!isFullscreen);
        });

        playlistToggleButton.setOnClickListener(view -> {
            if (fullscreenChannelPanel.getVisibility() == View.VISIBLE) {
                setPlaylistPanelVisible(false);
            } else {
                setPlaylistPanelVisible(true);
            }
        });
        closePlaylistButton.setOnClickListener(view -> setPlaylistPanelVisible(false));
        openExternalButton.setOnClickListener(view -> openSelectedChannelExternally());
        refreshChannelsButton.setOnClickListener(view -> refreshChannels());

        searchInput.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                applyCurrentFilters();
            }

            @Override
            public void afterTextChanged(Editable s) {}
        });
    }

    private void setupPlayer() {
        player = new ExoPlayer.Builder(this).build();
        player.setVolume(1f);
        playerView.setPlayer(player);
        player.addListener(new Player.Listener() {
            @Override
            public void onPlaybackStateChanged(int playbackState) {
                if (playbackState == Player.STATE_BUFFERING) {
                    bufferingOverlay.setVisibility(View.VISIBLE);
                    bufferingText.setText("Cargando señal en vivo...");
                } else if (playbackState == Player.STATE_READY) {
                    bufferingOverlay.setVisibility(View.GONE);
                    reconnectAttempts = 0;
                    hasPlaybackError = false;
                    statusText.setText("En vivo: " + selectedChannelName);
                }
            }

            @Override
            public void onPlayerError(PlaybackException error) {
                if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS && selectedUrl != null) {
                    reconnectAttempts++;
                    bufferingOverlay.setVisibility(View.VISIBLE);
                    bufferingText.setText("Reconectando canal (" + reconnectAttempts + "/" + MAX_RECONNECT_ATTEMPTS + ")...");
                    controlsHandler.postDelayed(() -> {
                        if (player != null && selectedUrl != null) {
                            player.prepare();
                            player.play();
                        }
                    }, 2000);
                } else {
                    bufferingOverlay.setVisibility(View.GONE);
                    hasPlaybackError = true;
                    statusText.setText("No se pudo reproducir este stream. Prueba abrirlo en otra app.");
                    if (!isFullscreen) openExternalButton.setVisibility(View.VISIBLE);
                }
            }
        });
    }

    private void setupGestures() {
        playerView.setOnTouchListener(new View.OnTouchListener() {
            private float startX;
            private float startY;
            private int startVolume;
            private float startBrightness;
            private boolean isDragging;
            private static final int TOUCH_SLOP = 20;

            @Override
            public boolean onTouch(View v, MotionEvent event) {
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        startX = event.getX();
                        startY = event.getY();
                        startVolume = volumeSeekBar.getProgress();
                        WindowManager.LayoutParams lp = getWindow().getAttributes();
                        startBrightness = lp.screenBrightness < 0 ? 0.5f : lp.screenBrightness;
                        isDragging = false;
                        break;
                    case MotionEvent.ACTION_MOVE:
                        float deltaY = startY - event.getY();
                        if (!isDragging && (Math.abs(deltaY) > TOUCH_SLOP || Math.abs(event.getX() - startX) > TOUCH_SLOP)) {
                            isDragging = true;
                        }
                        if (isDragging) {
                            float height = v.getHeight() > 0 ? v.getHeight() : 500f;
                            float percentDelta = (deltaY / height);
                            if (startX < v.getWidth() / 2f) {
                                // Gesture left: Brightness
                                float newBrightness = Math.max(0.05f, Math.min(1.0f, startBrightness + percentDelta));
                                WindowManager.LayoutParams layoutParams = getWindow().getAttributes();
                                layoutParams.screenBrightness = newBrightness;
                                getWindow().setAttributes(layoutParams);
                                showGestureHud(R.drawable.ic_brightness, "Brillo: " + Math.round(newBrightness * 100) + "%");
                            } else {
                                // Gesture right: Volume
                                int newVol = Math.max(0, Math.min(100, Math.round(startVolume + percentDelta * 100)));
                                volumeSeekBar.setProgress(newVol);
                                setPlayerVolume(newVol);
                                showGestureHud(newVol == 0 ? R.drawable.ic_volume_mute : R.drawable.ic_volume_up,
                                        "Volumen: " + newVol + "%");
                            }
                            return true;
                        }
                        break;
                    case MotionEvent.ACTION_UP:
                        if (!isDragging) {
                            togglePlayerControls();
                        }
                        break;
                }
                return true;
            }
        });
    }

    private void showGestureHud(int iconRes, String text) {
        controlsHandler.removeCallbacks(hideGestureHudRunnable);
        gestureHudIcon.setImageResource(iconRes);
        gestureHudText.setText(text);
        gestureHud.setVisibility(View.VISIBLE);
        controlsHandler.postDelayed(hideGestureHudRunnable, 1200);
    }

    private void hideGestureHud() {
        if (gestureHud != null) {
            gestureHud.setVisibility(View.GONE);
        }
    }

    private void enterPipMode() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            try {
                PictureInPictureParams.Builder pipBuilder = new PictureInPictureParams.Builder();
                pipBuilder.setAspectRatio(new Rational(16, 9));
                enterPictureInPictureMode(pipBuilder.build());
            } catch (Exception e) {
                android.util.Log.w("CanalesPlayer", "Error al activar Picture-in-Picture", e);
            }
        }
    }

    @Override
    public void onPictureInPictureModeChanged(boolean isInPictureInPictureMode, Configuration newConfig) {
        super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig);
        if (isInPictureInPictureMode) {
            hidePlayerControls();
            setPlaylistPanelVisible(false);
            rootLayout.setPadding(0, 0, 0, 0);
            appTitle.setVisibility(View.GONE);
            searchInput.setVisibility(View.GONE);
            volumeControls.setVisibility(View.GONE);
            categoryScrollView.setVisibility(View.GONE);
            statusText.setVisibility(View.GONE);
            refreshChannelsButton.setVisibility(View.GONE);
            openExternalButton.setVisibility(View.GONE);
            channelList.setVisibility(View.GONE);
            ViewGroup.LayoutParams params = playerContainer.getLayoutParams();
            params.height = ViewGroup.LayoutParams.MATCH_PARENT;
            playerContainer.setLayoutParams(params);
        } else {
            setFullscreen(isFullscreen);
        }
    }

    @Override
    protected void onUserLeaveHint() {
        super.onUserLeaveHint();
        if (player != null && player.isPlaying() && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            enterPipMode();
        }
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
        if (player != null) player.setVolume(volume / 100f);
        if (volume > 0) lastAudibleVolume = volume;
        updateMuteButton();
    }

    private void updateMuteButton() {
        boolean muted = volumeSeekBar.getProgress() == 0;
        muteButton.setImageResource(muted
                ? R.drawable.ic_volume_mute : R.drawable.ic_volume_up);
        muteButton.setContentDescription(muted ? "Activar sonido" : "Silenciar");
    }

    private void updateResizeModeButton() {
        String description = isFillScreen ? "Llenar pantalla" : "Ajustar pantalla";
        resizeModeButton.setImageResource(isFillScreen
                ? R.drawable.ic_zoom_screen : R.drawable.ic_fit_screen);
        resizeModeButton.setContentDescription(
                "Modo de imagen: " + description + ". Pulsa para cambiar el ajuste.");
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
        categoryScrollView.setVisibility(visibility);
        statusText.setVisibility(visibility);
        refreshChannelsButton.setVisibility(visibility);
        channelList.setVisibility(visibility);
        openExternalButton.setVisibility(!fullscreen && hasPlaybackError ? View.VISIBLE : View.GONE);

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

    private void togglePlayerControls() {
        if (arePlayerControlsVisible) {
            hidePlayerControls();
        } else {
            showPlayerControls();
        }
    }

    private void showPlayerControls() {
        controlsHandler.removeCallbacks(hidePlayerControlsRunnable);
        arePlayerControlsVisible = true;
        resizeModeButton.setVisibility(View.VISIBLE);
        pipToggleButton.setVisibility(View.VISIBLE);
        fullscreenToggleButton.setVisibility(View.VISIBLE);
        playlistToggleButton.setVisibility(View.VISIBLE);
        closePlaylistButton.setVisibility(fullscreenChannelPanel.getVisibility() == View.VISIBLE
                ? View.VISIBLE : View.INVISIBLE);
        controlsHandler.postDelayed(hidePlayerControlsRunnable, PLAYER_CONTROLS_HIDE_DELAY_MS);
    }

    private void hidePlayerControls() {
        arePlayerControlsVisible = false;
        View focusedView = getCurrentFocus();
        if (focusedView == resizeModeButton || focusedView == pipToggleButton
                || focusedView == fullscreenToggleButton || focusedView == playlistToggleButton
                || focusedView == closePlaylistButton) {
            focusedView.clearFocus();
        }
        resizeModeButton.setVisibility(View.INVISIBLE);
        pipToggleButton.setVisibility(View.INVISIBLE);
        fullscreenToggleButton.setVisibility(View.INVISIBLE);
        playlistToggleButton.setVisibility(View.INVISIBLE);
        closePlaylistButton.setVisibility(View.INVISIBLE);
    }

    private void setupChannelAdapters() {
        channelAdapter = createChannelAdapter();
        channelList.setAdapter(channelAdapter);
        fullscreenChannelList.setAdapter(channelAdapter);
        channelList.setOnItemClickListener((parent, view, position, id) ->
                playSelectedChannel(parent, position));
        fullscreenChannelList.setOnItemClickListener((parent, view, position, id) ->
                playSelectedChannel(parent, position));
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
                displayedChannels
        ) {
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                View row = convertView == null
                        ? MainActivity.this.getLayoutInflater().inflate(R.layout.channel_list_item, parent, false)
                        : convertView;
                Channel channel = getItem(position);
                if (channel != null) {
                    TextView name = row.findViewById(R.id.channelName);
                    TextView group = row.findViewById(R.id.channelGroup);
                    name.setText(channel.name);
                    if (channel.group != null && !channel.group.isEmpty() && !channel.group.equals("-")) {
                        group.setText(channel.group);
                        group.setVisibility(View.VISIBLE);
                    } else {
                        group.setVisibility(View.GONE);
                    }
                }
                return row;
            }

            @Override
            public Filter getFilter() {
                return new Filter() {
                    @Override
                    protected FilterResults performFiltering(CharSequence constraint) {
                        String query = constraint == null ? "" : constraint.toString().trim().toLowerCase(Locale.ROOT);
                        ArrayList<Channel> filtered = new ArrayList<>();
                        for (Channel channel : allChannels) {
                            boolean matchesCategory = currentCategory.equals("Todos")
                                    || (channel.group != null && channel.group.equalsIgnoreCase(currentCategory));
                            boolean matchesQuery = query.isEmpty()
                                    || channel.name.toLowerCase(Locale.ROOT).contains(query)
                                    || (channel.group != null && channel.group.toLowerCase(Locale.ROOT).contains(query));
                            if (matchesCategory && matchesQuery) {
                                filtered.add(channel);
                            }
                        }
                        FilterResults results = new FilterResults();
                        results.values = filtered;
                        results.count = filtered.size();
                        return results;
                    }

                    @Override
                    @SuppressWarnings("unchecked")
                    protected void publishResults(CharSequence constraint, FilterResults results) {
                        displayedChannels.clear();
                        if (results.values != null) {
                            displayedChannels.addAll((ArrayList<Channel>) results.values);
                        }
                        notifyDataSetChanged();
                    }
                };
            }
        };
    }

    private void applyCurrentFilters() {
        if (channelAdapter != null) {
            channelAdapter.getFilter().filter(searchInput.getText().toString());
        }
    }

    private void updateCategoriesBar() {
        LinkedHashSet<String> distinctGroups = new LinkedHashSet<>();
        distinctGroups.add("Todos");
        for (Channel channel : allChannels) {
            if (channel.group != null && !channel.group.trim().isEmpty() && !channel.group.trim().equals("-")) {
                distinctGroups.add(channel.group.trim());
            }
        }
        categories.clear();
        categories.addAll(distinctGroups);

        categoryContainer.removeAllViews();
        float density = getResources().getDisplayMetrics().density;
        int padH = Math.round(14 * density);
        int padV = Math.round(6 * density);
        int marginH = Math.round(4 * density);

        for (String cat : categories) {
            Button pill = new Button(this);
            pill.setText(cat);
            pill.setTextSize(12);
            pill.setAllCaps(false);
            pill.setPadding(padH, padV, padH, padV);
            pill.setFocusable(true);

            LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
                    ViewGroup.LayoutParams.WRAP_CONTENT, Math.round(36 * density));
            lp.setMargins(marginH, 0, marginH, 0);
            pill.setLayoutParams(lp);

            boolean isSelected = cat.equalsIgnoreCase(currentCategory);
            pill.setBackgroundResource(isSelected ? R.drawable.category_tab_selected : R.drawable.category_tab_unselected);
            pill.setTextColor(isSelected ? Color.WHITE : Color.parseColor("#CBD5E1"));

            pill.setOnClickListener(v -> {
                currentCategory = cat;
                updateCategoriesBar();
                applyCurrentFilters();
            });
            categoryContainer.addView(pill);
        }
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
                    int availableChannels = displayedChannels.size();
                    if (availableChannels > 0) {
                        statusText.setText("Se conserva la lista local (" + availableChannels + " canales).");
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
        allChannels.clear();
        allChannels.addAll(updatedChannels);
        updateCategoriesBar();
        applyCurrentFilters();
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
        selectedChannelName = channel.name;
        selectedMimeType = inferMimeType(channel.url);
        reconnectAttempts = 0;
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
        controlsHandler.removeCallbacks(hideGestureHudRunnable);
        if (player != null && !isInPictureInPictureModeCompat()) {
            player.pause();
        }
    }

    private boolean isInPictureInPictureModeCompat() {
        return Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && isInPictureInPictureMode();
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
        controlsHandler.removeCallbacks(hideGestureHudRunnable);
        if (player != null) {
            player.release();
            player = null;
        }
    }
}
