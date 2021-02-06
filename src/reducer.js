export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  token: REACT_APP_TOKEN_KEY,
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
    default:
      return state;
  }
};

export default reducer;