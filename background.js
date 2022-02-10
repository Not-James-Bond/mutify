const SPOTIFY_URL = 'open.spotify.com/';
const SPOTIFY_AD = 'Spotify – Advertisement';

const random = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

class SpotifyPlayer {
  constructor() {
    this.currentlyPlaying = null;
  }
}
