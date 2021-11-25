import React from 'react'

export default function TrackSearchResult({ track }) {

    return (
        <h1>{track.title}</h1>
       /*  <div
            className="d-flex m-2 align-items-center"
            style={{ cursor: 'pointer' }}
        >
            <img src={track.albumUrl} style={{ height: '41px', width: '41px'}} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div> */
    )
}