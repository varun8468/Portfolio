import React, {useState, useRef} from "react";
import Typical from "react-typical";
import {toast} from 'react-toastify';
import "./ContactMe.css";
import emailjs from '@emailjs/browser';

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setBool(true);
      emailjs.sendForm('service_5zq3qzk', 'template_v8rxcbe', form.current, 'qRr0Q5EM3mZrcwkj_')
        .then((result) => {
            console.log(result.text);
            setBanner("Thank you for contacting me !");
            toast.success("Thank you for contacting me !");
            setBool(false);
        }, (error) => {
            console.log(error.text);
        });
    };
 

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send your email here !</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={sendEmail} >
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name"/>

            <label htmlFor="email">Email</label>
            <input type="email" name="user_email"/>

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message"/>

            <div className="send-btn" >
              <button type="submit">
                Send<i className="fa fa-paper-plane"/>
                <div className="load">
                  {bool ? <img src={load1} alt="image not found" /> : ""}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
