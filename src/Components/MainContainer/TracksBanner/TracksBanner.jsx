import React from 'react'
import './TracksBanner.scss'
import {useStateValue} from '../../../StateProvider';
import Track from './Track/Track';




const TracksBanner = () => {

    const [{tracks}, dispatch] = useStateValue();

    const updatedTracks = tracks?.map(trackData => {
        const id = trackData.track.id;
        const title = trackData.track.name;
        const  albumTitle= trackData.track.album?.name;

        const duration = trackData.track.duration_ms/1000;
        return{
            id,title,albumTitle,duration
        }
    })
    console.log(updatedTracks);
    return (
        <div className='tracksBanner'>
            <Track number='#' title='Title' albumTitle="Album" />
            {updatedTracks?.map((track) => <Track key = {track.id} number={updatedTracks.indexOf(track) + 1} title={track.title} duration={track.duration} albumTitle={track.albumTitle}/>)}
        </div>
    )
}

export default TracksBanner;
