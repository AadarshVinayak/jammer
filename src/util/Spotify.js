const client_id = "9c0abde5820d4faeb4d8d874e2d29750";
const redirectUri = "http://localhost:3000/callback";

let accessToken = "";

const Spotify = {
  getAccessToken() {
    if (accessToken !== "") {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = url;
    }
  },

  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonResponse) => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.items.map((track) => ({
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            id: track.id,
            uri: track.uri,
          }));
        } else {
          return [];
        }
      });
  },
};

export default Spotify;
