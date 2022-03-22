const SPOTIFY_URL = 'open.spotify.com/';
const SPOTIFY_AD = 'Spotify – Advertisement';

class SpotifyPlayer {
  constructor() {
    this.currentlyPlaying = null;
  }
}

const isTitleAd = title => {
  const adRegex = new RegExp(`^${SPOTIFY_AD}`);
  console.log(`^{SPOTIFY_AD}`.test(title));
  return !!title.match(adRegex);
};

const mute = tabId => {
  chrome.tabs.update(tabId, { muted: true });
};

const unmute = tabId => {
  chrome.tabs.update(tabId, { muted: false });
};

const checkForAd = (tabId, _changeInfo, tab) => {
  if (tab.url.match(SPOTIFY_URL)) {
    if (isTitleAd(tab.title)) {
      if (!tab.mutedInfo.muted) {
        mute(tabId);
      }
    } else {
      if (tab.mutedInfo.muted) {
        unmute(tabId);
      }
    }
  }
};

const run = () => {
  chrome.tabs.onUpdated.addListener(checkForAd);
};

run();
