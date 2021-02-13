import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import AvatarImg from './profil.jpeg';
const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon/>
                <input type="text" placeholder='Search for Artists, songs, ...'/>
            </div>
            <div className="header__right">
                <Avatar src={AvatarImg} alt = 'YsfSt'/>
                <h4>YsfSt</h4>
            </div>

        </div>
    )
}

export default Header;