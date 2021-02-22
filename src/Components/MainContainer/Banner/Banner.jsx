import React from "react";
import "./Banner.scss";
import {useStateValue} from '../../../StateProvider';

const Banner = () => {

    const [{playlists, playlistId},dispath] = useStateValue();
    const playlistIndex = playlists.findIndex((item)=> item.id === playlistId);
    const playlistClicked = playlists[playlistIndex];


  return (
    <div className="banner">
      {/* <img className='banner__albumcover'
        src="https://upload.wikimedia.org/wikipedia/en/4/4d/TwilightCoverDrive.jpg"
        alt=""
      /> */}
      <img className='banner__albumcover'
        src={playlistClicked && playlistClicked?.images[0]?.url}
        alt=""
      />

      <div className="banner__info">
        <h2>{playlistClicked && playlistClicked?.name}</h2>
        <p>{playlistClicked && playlistClicked?.description}</p>
      </div>
    </div>
  );
};

export default Banner;
