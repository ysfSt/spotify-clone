import React from "react";
import './SideBarOption.scss'

const sideBarOption = ({ title, Icon }) => (
  <div className="sidebarOption">
     {Icon &&  <Icon className='sidebarOption__icon'/>}
     {Icon ? <h4>{title}</h4> : <p>{title}</p>}
  </div>)

export default sideBarOption;
