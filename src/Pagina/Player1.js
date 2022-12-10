import React from "react";
import Player from "@madzadev/audio-player";

const tracks = [{
        url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
        title: "Madza - Chords of Life",
        tags: ["house"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        title: "Madza - Late Night Drive",
        tags: ["dnb"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        title: "Madza - Persistence",
        tags: ["dubstep"],
    },
    {
        url: "https://cdn.pixabay.com/download/audio/2021/12/22/audio_9da2a60074.mp3",
        title: "Modern chillout",
        tags: ["dubstep"],
    },
    {
        url: "https://cdn.pixabay.com/download/audio/2021/05/20/audio_cb31fe8a54.mp3",
        title: "fluidity",
        tags: ["dubstep"],
    },
];

const colors = `html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #7CFC00;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #9440f3;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #9440f3;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`;

const Player1 = () => {
    return ( 
        <Player 
        trackList = {tracks}
        includeTags = {true}
        includeSearch = {true}
        showPlaylist = {true}
        autoPlayNextTrack = {true}
        customColorScheme = {colors}
        />
    )
}

export default Player1;