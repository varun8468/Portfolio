import React, { useState } from "react";
import ScreenHeading from "./../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "./../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "React Js", ratingPercentage: 80 },
    { skill: "Node Js", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "HTML5, CSS3", ratingPercentage: 80 },
    { skill: "PHP", ratingPercentage: 80 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "Laravel", ratingPercentage: 80 },
    { skill: "Angular", ratingPercentage: 60 },
  ];

  const projectDetails = [
    {
      title: "QKart",
      duration: { fromDate: "July'2022", toDate: "Aug'2023" },
      description: "E-commerce web application",
      subHeading: "Technologies used: React Js, Material UI",
    },
    {
      title: "XFlix",
      duration: { fromDate: "Aug'2022", toDate: "Sep'2023" },
      description: "A video streaming web application",
      subHeading: "Technologies used: React Js, Material UI",
    },
    {
      title: "QTrip",
      duration: { fromDate: "Jun'2022", toDate: "July'2023" },
      description: "A resort booking web application",
      subHeading: "Technologies used: HTML, JS, Bootstrap",
    },
    {
      title: "Shout",
      duration: { fromDate: "Feb'2022", toDate: "April'2023" },
      description: "A social network web application",
      subHeading: "Technologies used: PHP (Laravel), Angular",
    },
    
    
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Sunbeam institute, Pune"}
        subHeading={"PG Diploma in Advance Computing"}
        fromDate={"April'2021"}
        toDate={"Sep'2021"}
      />
      <ResumeHeading
        heading={"Crio"}
        subHeading={"Full Stack Fellowship course"}
        fromDate={"2021"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"G. H. Raisoni college of engineering, Nagpur"}
        subHeading={"Bachelor of Engineering"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Government Polytechnic, Sakoli"}
        subHeading={"Diploma in Mechanical engineering"}
        fromDate={"2013"}
        toDate={"2016"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Cybage Software"}
        subHeading={"Software Engineer"}
        fromDate={"Jan'2022"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as a PHP developer
        </span>
      </div>
      {/* <div className="experience-description">
        <span className="resume-description-text">
          - Here I have to write about what work you were doing in company
        </span>
        <br />
        <span className="resume-description-text">
          - What you have done so far and what u got from company
        </span>
        <br />
        <span className="resume-description-text">
          - What you have done so far and what u got from company
        </span>
      </div> */}
      </div>,
      
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => {
          return (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => {
          return (
            <ResumeHeading
              key={index}
              heading={projectDetails.title}
              subHeading={projectDetails.subHeading}
              description={projectDetails.description}
              fromDate={projectDetails.duration.fromDate}
              toDate={projectDetails.duration.toDate}
            />
          );
        })}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Coding"
          description="I like to play with code "
        />
        <ResumeHeading
          heading="Chess"
          description="I like to play chess in free time, won some prices in college time"
        />
      </div>

  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      return (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="oops... no internet connection"
            className="bullet-logo"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffsetStyle.style}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
