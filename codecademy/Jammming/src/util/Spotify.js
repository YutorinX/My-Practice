import clientID from "./clientID.js"

// const clientID = ""
const redirectURI = window.location.href //"http://localhost:3000/"
let accessToken = ""

const Spotify = {
    getAccessToken() {
        if (accessToken.length) return accessToken

        let urlAccessToken = undefined
        let urlTokenExpiresIn = undefined

        const url = window.location.href
        if (url.match(/access_token=([^&]*)/)) {
            urlAccessToken = url.match(/access_token=([^&]*)/)
            urlTokenExpiresIn = url.match(/expires_in=([^&]*)/)
        }

        if (urlAccessToken && urlTokenExpiresIn) {
            accessToken = urlAccessToken[1]
            const expiresIn = urlTokenExpiresIn[1]

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        }
        else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
    },

    async search(term) {
        accessToken = this.getAccessToken()

        return await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            })
            .then(response => response.json()).then(jsonResponse => {
                if (!jsonResponse.tracks) return []
                return jsonResponse.tracks.items.map(track => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }
                })
            })
    },

    savePlaylist(playlistName, trackURIs) {
        if (!playlistName.length && !trackURIs.length) return

        accessToken = this.getAccessToken()
        const headers = { Authorization: `Bearer ${accessToken}` }
        let userID

        fetch(`https://api.spotify.com/v1/me`, { headers: headers })
            .then(response => response.json()).then(jsonResponse => {
                userID = jsonResponse.id

                // create playlist w/ tracks
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ name: playlistName })

                }).then(response => response.json()).then(jsonResponse => {
                    const playlistID = jsonResponse.id

                    // save tracks to playlist
                    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                        headers: headers,
                        method: "POST",
                        body: JSON.stringify({ uris: trackURIs })
                    })
                })
            })
    }
}


export default Spotify
