import React from "react";
import './SideBarOption.scss'

const sideBarOption = ({ title, Icon }) => {

  return (<div className="sidebar__option">
     <Icon />
     <p>{title}</p>
  </div>)
};

export default sideBarOption;
