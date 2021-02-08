import React from "react";
import "./SideBar.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOption from "./SideBarOption/SideBarOption";

const SideBar = () => {
  console.log(HomeIcon);
  return (
    <div className="sidebar">
      <img
        src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
        alt=""
        className="sidebar__logo"
      />
        <SideBarOption title="Home" Icon={HomeIcon} />
        <SideBarOption title="Search" Icon={SearchIcon} />
        <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
    </div>
  );
};

export default SideBar;
