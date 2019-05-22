import React from 'react';
import './App.css';
import Playlist from "../Playlist/Playlist.js"
import SearchBar from "../SearchBar/SearchBar.js"
import SearchResults from "../SearchResults/SearchResults.js"
import Spotify from "../../util/Spotify.js"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [{
        name: "some city pop",
        artist: "some artist",
        album: "some album",
        id: "000"
      }],

      playlistName: "City Pops",

      playlistTracks: [{
          name: "trackname1",
          artist: "artistname1",
          album: "album1",
          id: "001",
        },
        {
          name: "trackname2",
          artist: "artistname2",
          album: "album2",
          id: "002",
        },
        {
          name: "trackname3",
          artist: "artistname3",
          album: "album3",
          id: "003",
        },
      ]
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }
    this.setState({ playlistTracks: this.state.playlistTracks.concat(track) })
  }

  removeTrack(track) {
    const trackNo = this.state.playlistTracks.findIndex(tr => tr.id === track.id)
    this.setState(this.state.playlistTracks.splice(trackNo, 1))
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks
  }

  search(term) {
    this.setState({ searchResults: Spotify.search(term) })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
