import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "Playlist 1",
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar onSearch={this.search} />
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
              onSave={this.savePlaylist}
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

  async savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    await Spotify.savePlaylist(this.state.playlistName, trackURIs);
  }

  async search(term) {
    this.setState({
      searchResults: await Spotify.search(term),
    });
  }
}

export default App;
