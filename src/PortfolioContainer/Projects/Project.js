import React from "react";
import Qkart from "../../images/qkart.jpg";
import Xflix from "../../images/xflix.jpg";
import Qtrip from "../../images/qtrip.jpg";
import Shout from "../../images/shout.jpg";
import ScreenHeading from "./../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "./../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projects = [
    {
      title: "QKart",
      description: "E-commerce web application",
      githubLink: "https://github.com/varun8468/Qkart",
      deployedLink: "https://varuns-qkart.netlify.app",
      image: Qkart,
    },
    {
      title: "XFlix",
      description: "A video streaming web application",
      githubLink: "https://github.com/varun8468/XFlix",
      deployedLink: "https://varuns-xflix.netlify.app",
      image: Xflix,
    },
    {
      title: "QTrip",
      description: "A resort booking web application",
      githubLink: "https://github.com/varun8468/QTrip",
      deployedLink: "https://varuns-qtrip.netlify.app",
      image: Qtrip,
    },
    {
      title: "Shout",
      description: "A social network web application",
      githubLink: "https://github.com/varun8468/Shout",
      deployedLink: "",
      image: Shout,
    },
  ];

  function ProjectView({ project }) {
    return (
      <>
        <div className="project-container">
          <div className="card">
            <img className="card-img-top" src={project.image} alt="error" />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="btn-container">
                <a href={project.githubLink} class="btn btn-primary" target="_blank">
                  Code
                </a>
                {project.deployedLink!=""?<a href={project.deployedLink} class="btn btn-primary" target="_blank">
                  Visit site
                </a>:<button disabled class="btn btn-secondary">Not deployed</button>}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"All the projects that I have completed"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {projects.map((project) => {
              return (
                <div className="col-12 col-sm-12 col-xs-12 mt-4 col-lg-6 view">
                  <ProjectView project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
