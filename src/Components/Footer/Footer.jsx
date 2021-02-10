import React from "react";
import "./Footer.scss";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';

const Footer = () => {
  return <div className="footer">
    <div className="footer__left">
      {/* Album and song details */}
    </div>
    <div className="footer__center">
      {/* Player Controls */}
      <ShuffleRoundedIcon/>
      <SkipPreviousRoundedIcon/>
      <PlayCircleOutlineIcon/>
      <SkipNextRoundedIcon/>
      <RepeatRoundedIcon/>
    </div>
    <div className="footer__right">
      {/* Volume Controls */}
    </div>
  </div>;
};

export default Footer;
