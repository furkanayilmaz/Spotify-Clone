import React from 'react'
import useAuth from './useAuth'
import style from './Dashboard.module.css'

function Dashboard({code}) {
    const accessToken = useAuth(code)
    // console.log({code})
    return (
        <div className={style.dashboard_background}>
            <h1 className={style.helloMsg}>Good Morning</h1>
            <img src="./alarm.svg" className={style.alarmSVG}/>
            <div className={style.likedSongSmallContainer}></div>
            <h1 className={style.likedSongContainerMsg}>Liked Songs</h1>
            <img className={style.likedImageContainerImage} src="./Users/furkanayilmaz/Desktop/Code/Frontend/React/spotify/src/favorite.svg"/>

            {/* Second Container*/}
            <div className={style.secondContainer}></div>
            <h1 className={style.secondContainerMsg}>The Weeknd</h1>
            <img src="https://i.scdn.co/image/ab6761610000e5eb94fbdb362091111a47db337d" className={style.secondContainerImage} />
        </div>
    )
}

export default Dashboard
