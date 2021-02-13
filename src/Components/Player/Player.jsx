import React, { useState, useEffect } from "react";
import "./Player.scss";
import SideBar from "../SideBar/SideBar";
import MainContainer from "../MainContainer/MainContainer";
import Footer from "../Footer/Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <SideBar />
      <MainContainer spotify={spotify} />
      <Footer />
    </div>
  );
};

export default Player;
