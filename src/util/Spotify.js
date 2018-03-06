import config from './config.json'
const CLIENT_ID = config.clientid
const REDIRECT_URI = 'http://localhost:3000/'
const API_URL = 'https://api.spotify.com/v1'
let accessToken, userID, playlistID

if (!config.clientid) {
  window.alert('clientid value from config.json is not defined, refer to the README')
}

const Spotify = {
  getAccessToken () {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

    if (accessToken) {
      return accessToken
    }

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]
      const expiresIn = Number(expiresInMatch[1])
      window.setTimeout(() => accessToken = '', expiresIn * 1000)
      window.history.pushState('Access Token', null, '/')
      return accessToken
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`
      window.location = accessUrl
    }
  },

  search (term) {
    accessToken = Spotify.getAccessToken()
    const fetchURL = `${API_URL}/search?type=track&q=${term}`
    const headers = {headers: {Authorization: `Bearer  ${accessToken}`}}

    return fetch (fetchURL, headers)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Request failed!')
      }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
      if (jsonResponse.tracks.items) {
        return jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
        })
      } else return []
    })
  },

  savePlaylist (name, trackURIs) {
    if (!name || !trackURIs) return
    const accessToken = Spotify.getAccessToken()
    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    const createPlaylistHeaders = {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({
        name: name
      })
    }
    const addTracksHeaders = {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({
        'uris': trackURIs
      })
    }

    // User ID
    return fetch (`${API_URL}/me`, {headers: headers})
      .then(response => response.json())
      .then(jsonResponse => {
        userID = jsonResponse.id
        // console.log(userID)
        // Create playlist
        return fetch (`${API_URL}/users/${userID}/playlists`, createPlaylistHeaders)
          .then(response => response.json())
          .then(jsonResponse => {
            playlistID = jsonResponse.id
            // Add tracks to playlist
            return fetch(`${API_URL}/users/${userID}/playlists/${playlistID}/tracks`, addTracksHeaders)
          })
      })
  },
  // TODO If time allows, when you hit enter get playlist and populate
  // getPlaylist (name) {
  //   accessToken = Spotify.getAccessToken()
  //   const headers = {
  //     Authorization: `Bearer ${accessToken}`
  //   }
  // }
}

export default Spotify
