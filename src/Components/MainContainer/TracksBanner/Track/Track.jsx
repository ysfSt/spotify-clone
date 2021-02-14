import React from 'react'
import './Track.scss'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import numeral from 'numeral'
import moment from 'moment'

const Track = ({number, title,albumTitle, duration}) => {

    return (
        <div className='track'>
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
