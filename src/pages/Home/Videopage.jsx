import React from 'react'
import "./VideoPage.css";
import logoNavbar from '../../assets/logo_navbar.png';
import { Link } from 'react-router-dom';

const VideoPage = () => {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {

        return (<>
            <div className="video-background">
                <div className="video-foreground">
                    <iframe title='video-nabbo' src="https://www.youtube.com/embed/rHN_jVENpNc?autoplay=1&mute=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                </div>
            </div>
            <div className='container-scritte_mobile'>
                <div id="vidtop-content">
                    <div className="vid-info">

                        <center><img src={logoNavbar} alt='logo_navbar' height="50px" /></center>
                        <p style={{ color: 'white' }} className='prehome-text'>⭐ Creatore di video gaming. Un essere mitologico: metà streamer, metà capelli.⭐<span className='here'></span> — check him out <span className='careers'> here </span></p>
                        <center><Link to='/home'>
                            <button style={{ marginTop: '5%', color: 'white' }} class="button-54">Go to the Home</button>
                        </Link></center>
                    </div>
                </div>
            </div>
        </>)
    }
    else {
        return (
            <>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe title='video-nabbo' src="https://www.youtube.com/embed/rHN_jVENpNc?autoplay=1&mute=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='container-scritte'>
                    <div id="vidtop-content">
                        <div className="vid-info">

                            <center><img src={logoNavbar} alt='logo_navbar' height="50px" /></center>
                            <p style={{ color: 'white' }} className='prehome-text'>⭐ Creatore di video gaming. Un essere mitologico: metà streamer, metà capelli.⭐<span className='here'></span> — check him out <span className='careers'> here </span></p>
                            <center><Link to='/home'>
                                <button style={{ marginTop: '5%', color: 'white' }} class="button-54">Go to the Home</button>
                            </Link></center>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default VideoPage