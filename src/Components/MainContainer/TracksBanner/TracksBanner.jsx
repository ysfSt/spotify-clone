import React from 'react'
import './TracksBanner.scss'
import {useStateValue} from '../../../StateProvider';
import AccessTimeIcon from '@material-ui/icons/AccessTime';



const TracksBanner = () => {

    const [{tracksBanner}, dispatch] = useStateValue();
    console.log(tracksBanner);
    return (
        <div className='tracksBanner'>
            <div className="tracksBanner__left">
                <div>#</div>
                <div>Title</div>
                <div>Album</div>
            </div>
            <div className="tracksBanner__right">
                <AccessTimeIcon/>
            </div>
        </div>
    )
}

export default TracksBanner;
