import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import AvatarImg from "./profil.jpeg";
import { useStateValue } from "../../../StateProvider";
const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, songs, ..." />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
