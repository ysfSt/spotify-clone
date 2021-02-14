import React from "react";
import "./MainContainer.scss";
import Header from './Header/Header';
import Banner from './Banner/Banner';
import TracksBanner from './TracksBanner/TracksBanner';

const MainContainer = ({spotify}) => {
  return (
    <div className="mainContainer">
      <Header/>
      <Banner/>
      <TracksBanner/>
    </div>
  );
};

export default MainContainer;
