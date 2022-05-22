import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am </span>
          <sapn>Mahendra Gupta</sapn>
          <span>
            Full Stack Developer with high level of experience in Software
            Development,producting quality work!
          </span>
        </div>

        <button className="button i-button">Hire Me!</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt=""></img>
          </a>
          <a href="">
            <img src={Linkedin} alt=""></img>
          </a>
          <a href="">
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt=""></img>
        <img src={Vector2} alt=""></img>
        <img src={boy} alt=""></img>
        <div>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
      </div>
    </div>
  );
};

export default intro;
