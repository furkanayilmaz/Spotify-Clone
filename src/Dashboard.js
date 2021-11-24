import React from 'react'
import useAuth from './useAuth'
import styles from './Dashboard.module.css'

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    // console.log({code})
    return (
        <div className={styles.background}>
            <h1 className={styles.greeting}>Good Afternoon</h1>

            <div className={styles.container1}></div>
            <svg className={styles.container1Img} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g class="nc-icon-wrapper" fill="#ffffff"><path d="M57.085,10.888A16.885,16.885,0,0,0,32,12.36,16.885,16.885,0,0,0,6.915,10.888a16.626,16.626,0,0,0,0,23.6l24.4,24.227a.971.971,0,0,0,1.368,0l24.4-24.227A16.626,16.626,0,0,0,57.085,10.888Z" fill="#ffffff"></path></g></svg>
            <h1 className={styles.container1Text}>Liked Songs</h1>

           <div className={styles.container2}></div>
           <h1 className={styles.container2Text}>The Weeknd</h1>
           {/*<img className={styles.container2Img} src="./assets/ab6761610000e5eb94fbdb362091111a47db337d.jpg" /> */}
           <div className={styles.container2Img}></div>

            <div className={styles.container3}></div>
            <h1 className={styles.container3Text}>Feride Hilal Akin</h1>
            <div className={styles.container3Img}></div>


            <div className={styles.musicContainer}></div>
            <div className={styles.musicImg}></div>
            <h1 className={styles.musicName}>Yak</h1>
            <h1 className={styles.musicArtist}>Bilal Sonses</h1>
            <svg className={styles.playMusicFromOtherDevices} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" class="nc-icon-wrapper"><path opacity=".3" d="M7 4v16h10V4H7zm5 1c1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 1 1 0-4zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#000000"></path><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 20V4h10v16H7zm5-11c1.1 0 2-.9 2-2s-.9-2-2-2a2 2 0 1 0 0 4zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#000000"></path></g></svg>
            <svg className={styles.pauseMusic} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" class="nc-icon-wrapper"><path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" fill="#ffffff"></path></g></svg>

            <div className={styles.bottomNavigationBar}></div>
            <h1 className={styles.navigatorHome}>Home</h1>
            <svg className={styles.homeIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#ffffff"><path d="M23.633,10.226l-11-9a1,1,0,0,0-1.266,0L5,6.435V4.5A.5.5,0,0,0,4.5,4h-1a.5.5,0,0,0-.5.5V8.071L.367,10.226a1,1,0,0,0,1.266,1.548L3,10.656V22a1,1,0,0,0,1,1h6V18.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V23h6a1,1,0,0,0,1-1V10.656l1.367,1.118a1,1,0,0,0,1.29-1.529ZM13.5,14h-3a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v3A.5.5,0,0,1,13.5,14Z" fill="#ffffff"></path></g></svg>

            <h1 className={styles.navigatorSearch}>Search</h1>
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g class="nc-icon-wrapper" stroke-width="1" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="7.5" r="6"></circle> <line x1="15.5" y1="15.5" x2="11.742" y2="11.742"></line> </g></svg>

            <h1 className={styles.libraryNavigator}>Your Library</h1>
            <svg className={styles.libraryIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" class="nc-icon-wrapper"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" fill="#ffffff"></path></g></svg>
        </div>
    )
}

export default Dashboard
