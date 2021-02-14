import React from "react";
import "./Banner.scss";
import {useStateValue} from '../../../StateProvider';

const Banner = () => {

    const [{playlists},dispath] = useStateValue();
    console.log(playlists);


  return (
    <div className="banner">
      {/* <img className='banner__albumcover'
        src="https://upload.wikimedia.org/wikipedia/en/4/4d/TwilightCoverDrive.jpg"
        alt=""
      /> */}
      <img className='banner__albumcover'
        src={playlists.length > 0? playlists[2]?.images[0]?.url : ''}
        alt=""
      />

      <div className="banner__info">
        <h2>{playlists.length > 0? playlists[2]?.name : 'PLAYLIST'}</h2>
        <p>{playlists.length > 0? playlists[2]?.description : 'descrption ...'}</p>
      </div>
    </div>
  );
};

export default Banner;
