import "./AboutMe.css";
import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: `WORK, LEARN, CONTRIBUTE AND GROW ----- Passionate about coding and blockchain technology. Software Engineer at Cybage software with excellent problem-solving skills and ability to perform well in a team. Strong hold on web2 and now upgrading to web3 and sharing some important content on this platform.`,
    highlights: {
      bullets: [
        "Full Stack web development",
        "Interactive Front End as per design",
        "React Js",
        "Building REST API",
        "DSA and Algorithm",
      ],
      heading: "Here are few highlights : ",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => {
      return (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  console.log(renderHighlights());

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}>
                Hire Me
              </button>
              <a href="finalResume.pdf" download="Varun Patle.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
