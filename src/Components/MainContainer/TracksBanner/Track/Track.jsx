import React from 'react'
import './Track.scss'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import numeral from 'numeral'
import { useStateValue } from '../../../../StateProvider';

const Track = ({number, title,albumTitle, duration, id}) => {


    const [{trackId},dispatch] = useStateValue();
    console.log(trackId);
    const setTrackId = (id) => {
        dispatch({
          type : 'SET_TRACK_ID',
          trackId : id
        })
    }


    return (
        <div className='track' onClick={() => {setTrackId(id)}}>
            <div className="track__left">
                <div>{number}</div>
                <div>{title}</div>
                <div>{albumTitle}</div>
            </div>
            <div className="track__right">
            {duration ? 
               numeral(duration).format('0:00').slice(2)
             : <AccessTimeIcon/>
             }
             
             </div>
        </div>
    )
}

export default Track
