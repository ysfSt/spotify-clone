import React from 'react'
import './TracksBanner.scss'
import {useStateValue} from '../../../StateProvider';
import Track from './Track/Track';




const TracksBanner = () => {

    const [{tracks, playlistId}, dispatch] = useStateValue();

    const updatedTracks = tracks?.map(trackData => {
        console.log(trackData.track);
        const id = trackData.track.id;
        const title = trackData.track.name;
        const  albumTitle= trackData.track.album?.name;
        const albumImageUrl = trackData.track.album.images[2].url;
        const previewUrl = trackData.track.preview_url;

        const duration = trackData.track.duration_ms/1000;
        return{
            id,title,albumTitle,duration,albumImageUrl,previewUrl
        }
    })
    console.log(updatedTracks);
    return (
        <div className='tracksBanner'>
            {playlistId ?
            (<>
                <Track number='#' title='Title' albumTitle="Album" />
                {updatedTracks?.map((track) => <Track  key = {track.id} id={track.id} number={updatedTracks.indexOf(track) + 1} title={track.title} duration={track.duration} albumTitle={track.albumTitle} albumImageUrl={track.albumImageUrl} previewUrl={track.previewUrl}/>)}
            </>) : (<h1>Choose a Playlist</h1>)
            }

        </div>
    )
}

export default TracksBanner;
