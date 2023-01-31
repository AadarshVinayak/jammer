import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Track 1", artist: "Artist 1", album: "Album 1", id: 1 },
        { name: "Track 2", artist: "Artist 2", album: "Album 2", id: 2 },
        { name: "Track 3", artist: "Artist 3", album: "Album 3", id: 3 },
      ],
      playlistName: "Playlist 1",
      playlistTracks: [
        { name: "Track 4", artist: "Artist 4", album: "Album 4", id: 4 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }

  addTrack(track) {
    // Check if the track is already in the playlist
    let isInPlaylist = this.state.playlistTracks.find(
      (playlistTrack) => playlistTrack.id === track.id
    );

    // If the track is not in the playlist, add it to the end of the playlist
    if (!isInPlaylist) {
      this.setState({
        playlistTracks: [...this.state.playlistTracks, track],
      });
    }
  }

  removeTrack(track) {
    let updatedPlaylistTracks = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );

    // Set the new state of the playlist
    this.setState({
      playlistTracks: updatedPlaylistTracks,
    });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
}

export default App;