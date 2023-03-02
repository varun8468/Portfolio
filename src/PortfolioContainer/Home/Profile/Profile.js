import React from 'react'
import Typical from 'react-typical';
// import '../../index.css'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className='colz-icon'>
                        <a href="https://www.facebook.com/varunpatle2212" target="_blank">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="www.linkedin.com/in/varun-patle-685242226" target="_blank">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://twitter.com/patle_varun?t=MGOPvDUfYzS7jYSQeSEeQg&s=09" target="_blank">
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>                 
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Varun</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev 👨‍💻",
                                2000,
                                "Full Stack Developer 👨‍💻",
                                2000,
                                "Problem solver 👨‍💻",
                                2000,
                                "MERN Stack Developer",
                                2000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className='btn primary-btn' onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}>
                        Hire Me
                    </button>
                    <a href="finalResume.pdf" download='Varun Patle.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
