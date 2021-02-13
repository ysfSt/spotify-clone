import React from "react";
import "./MainContainer.scss";
import Header from './Header/Header';

const MainContainer = ({spotify}) => {
  return (
    <div className="mainContainer">
      <Header/>
    </div>
  );
};

export default MainContainer;
