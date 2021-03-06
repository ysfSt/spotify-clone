export const initialState = {
  user: null,
  playlists: [],
  playlistId: null,
  trackId: null,
  playing: false,
  items: null,
  tracks: [],
  // token: process.env.REACT_APP_TOKEN_KEY,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      break;
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      break;
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
      break;
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlistId: action.playlistId,
      };
      break;
    case "SET_TRACK_ID":
      return {
        ...state,
        trackId: action.trackId,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
