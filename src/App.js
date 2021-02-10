import React, { useState, useEffect } from "react";
import "./App.scss";
import SideBar from "./Components/SideBar/SideBar";
import Login from "./Components/Login/Login";
import PLayer from "./Components/Player/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider.js";

const spotify = new SpotifyWebApi();
console.log(spotify);

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();
  console.log(user, token);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    console.log(_token);
    if (_token) {
      console.log("inside _token ");
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user, // means user : user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        return dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <PLayer spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
