import React from "react";
import "./Footer.scss";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import {Grid, Slider, slider} from '@material-ui/core';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import {useStateValue} from '../../StateProvider';


const Footer = () => {

const [{playlists, playlistId},dispatch] = useStateValue();
// const playlistIndex = playlists.findIndex((item)=> item.id === playlistId);
// const playlistClicked = playlists[playlistIndex];


  return <div className="footer">
    <div className="footer__left">
      {/* Album and song details */}
      <img  className="footer__albumcover" src="https://upload.wikimedia.org/wikipedia/en/4/4d/TwilightCoverDrive.jpg" alt=""/>
      <div className="footer__songInfo">
        <h4>Song Name</h4>
        <p>Artist</p>
      </div>
    </div>
    <div className="footer__center">
      {/* Player Controls */}
      <ShuffleRoundedIcon className='footer__icon footer__green'/>
      <SkipPreviousRoundedIcon className='footer__icon'/>
      <PlayCircleOutlineIcon className='footer__icon' fontSize='large'/>
      <SkipNextRoundedIcon className='footer__icon'/>
      <RepeatRoundedIcon className='footer__icon footer__green'/>
    </div>
    <div className="footer__right">
      {/* Volume Controls */}
      <PlaylistPlayRoundedIcon/>
      <Grid container spacing={2}>
        <Grid item>
      <VolumeDownRoundedIcon/>
        </Grid>
        <Grid item xs>
      <Slider/>
        </Grid>
        <Grid item>
      <VolumeUpRoundedIcon/>
        </Grid>
      </Grid>
    </div>
  </div>;
};

export default Footer;
