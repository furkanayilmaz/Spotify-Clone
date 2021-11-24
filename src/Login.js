import React from 'react'
import style from './Login.module.css'


function Login() {
    let authorizationURL = "https://accounts.spotify.com/authorize?client_id=83a8e9308c2847e48066ac7d304b2751&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
   
    return (
        <div className={style.loginBackground}>
            <button className={style.LoginButton}></button>
            <h3 className={style.LoginButtonMessage}><a href={authorizationURL}>Auth With Spotify</a></h3>
        </div>
    )
}

export default Login