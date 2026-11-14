package com.jimjeam.canalesplayer;

final class Channel {
    final String name;
    final String group;
    final String url;

    Channel(String name, String group, String url) {
        this.name = name;
        this.group = group;
        this.url = url;
    }

    @Override
    public String toString() {
        return name;
    }
}
