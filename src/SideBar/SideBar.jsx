import React from "react";
import "./SideBar.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOption from "./SideBarOption/SideBarOption";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
        alt=""
        className="sidebar__logo"
      />
      <ul className="items">
        <SideBarOption title="Home" icon={HomeIcon} />
        <SideBarOption title="Search" icon={SearchIcon} />
        <SideBarOption title="Library" icon={LibraryMusicIcon} />
      </ul>
    </div>
  );
};

export default SideBar;
