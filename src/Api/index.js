import SpotifyWebApi from "spotify-web-api-node";

class ApiRequests {
  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: "3b8aed36648c478882c6f606dc906e72", 
      clientSecret: "7890e522333d4947bc6d68c20e6d57a5",
      redirectUri: "http://www.example.com/callback",
    });
    this.spotifyApi.setAccessToken(

      `BQDQsMwU-yGnvXMs9--Z8lVFQ2zMUwPq7UHYZZEDzLnw0z6KJh5jbqBN4Ad-m0tNgE__MMpoKeJ6Bb8ur5c`

    );
  }

  //-OKOK
  TopTenTracks = async (name) => {
    try {
      const artist = await this.spotifyApi.searchArtists(name);
      const topTracks = await this.spotifyApi.getArtistTopTracks(
        artist.body.artists.items[0].id,
        `GB`
      );
      return topTracks.body.tracks;
    } catch (error) {
      console.log(error);
    }
  };

  //-OKOK
  TopTenArtists = async (name) => {
    try {
      const artists = await this.spotifyApi.searchArtists(name);
      return artists.body.artists.items
    } catch (error) {
      console.log(error);
    }
  };

  //-OKOK
  TopTenAlbumsRandomArtist = async (name) => {
    try {
      const artists = await this.spotifyApi.searchArtists(name);
      const artistsArray = artists.body.artists.items;
      const randomArtist = 
        artistsArray[Math.floor(Math.random() * artistsArray.length)];
      const artistAlbumsArray = await this.spotifyApi.getArtistAlbums(randomArtist.id);
        return artistAlbumsArray.body.items
     } catch (error) {
      console.log(error);
    }
  };

  //-OKOK
  randomPlaylistInfo = async (mood) => {
    try {
      const moodPlaylist = await this.spotifyApi.searchPlaylists(mood);
      const playlists = moodPlaylist.body.playlists.items;
      const randomPlaylist =
        playlists[Math.floor(Math.random() * playlists.length)];
      const playlistDetails = await this.spotifyApi.getPlaylist(
        randomPlaylist.id
      );
      return playlistDetails.body;
    } catch (error) {
      console.log(error);
    }
  };
}



export default new ApiRequests();
