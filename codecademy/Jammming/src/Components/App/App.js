import React from 'react';
import './App.css';
import Playlist from "../components/Playlist.js"
import SearchBar from "../components/SearchBar.js"
import SearchResults from "../components/SearchResults.js"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: {
        name: "some city pop",
        artist: "some artist",
        album: "some albun",
        id: "001"
      }
    }
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  };
}

export default App;
