const clientID = "5daeddd929e047af9f88bedcb1f8533e"
const redirectURI = "http://localhost:3000/"
let accessToken = ""
let expiresIn = ""

const Spotify = {
    getAccessToken() {
        if (accessToken.length) return accessToken

        const urlAccessToken = window.locaton.href.match(/access_token=([^&]*)/)
        const urlTokenExpiresIn = window.locaton.href.match(/expires_in=([^&]*)/)

        if (urlAccessToken.length && urlTokenExpiresIn.length) {
            accessToken = urlAccessToken[1]
            expiresIn = urlTokenExpiresIn[1]

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        }
        else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
    },

    search(term) {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then(response => response.json()).then(jsonResponse => {
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
    }
}


export default Spotify
