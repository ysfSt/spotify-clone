import React from "react";
import "./SideBar.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOption from "./SideBarOption/SideBarOption";
import { useStateValue } from "../../StateProvider";

const SideBar = () => {
  const [{playlists},disptch] = useStateValue();
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
        <br/>
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr/>
        {playlists?.map(playlist => <SideBarOption key={playlist.id} id={playlist.id} title={playlist.name}/>)}
    </div>
  );
};

export default SideBar;
