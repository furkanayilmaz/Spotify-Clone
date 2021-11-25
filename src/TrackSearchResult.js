import React from 'react'
import './TrackSearchResult.css'

export default function TrackSearchResult({ track, chooseTrack }) {

    function handlePlay() {
        chooseTrack(track);
    }

    return (
        <div
            className="d-flex m-2 align-items-center"
            style={{ cursor: 'pointer' }}
            onClick={handlePlay}
        >
            <img src={track.albumUrl} style={{ height: '41px', width: '41px' }} />
            <div className="ml-3 bg-primary text-white">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}