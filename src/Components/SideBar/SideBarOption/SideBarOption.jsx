import React from "react";
import './SideBarOption.scss'
import {useStateValue} from '../../../StateProvider';


const SideBarOption = ({ title, Icon, id }) => {


  const [,dispatch] = useStateValue();

  const setPlaylistId = (id) => {
      dispatch({
        type : 'SET_PLAYLIST_ID',
        playlistId : id
      })
  }
  return (<div className="sidebarOption" onClick={() =>{setPlaylistId(id)} }>
     {Icon &&  <Icon className='sidebarOption__icon'/>}
     {Icon ? <h4>{title}</h4> : <p>{title}</p>}
  </div>)
}

export default SideBarOption;
