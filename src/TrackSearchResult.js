import React from 'react'
import './TrackSearchResult.css'

export default function TrackSearchResult({ track }) {
    return (
        <div>
            <h1 className="songName">{track.title}</h1>
            <img className="songImage" src={track.albumUrl} style={{height: '41px', width: '41px'}} />
            <h1 className="artist">{track.artist}</h1>

        </div>

      /*   <div
            className="d-flex m-2 align-items-center"
            style={{cursor: 'pointer'}}
        >
            <img src={track.albumUrl} style={{height: '41px', width: '41px'}} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div> */
    )
}