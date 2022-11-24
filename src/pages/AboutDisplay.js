import React from "react";
import "../styles/AboutDisplay.css";
import test from "../assets/profile-pic.png";

function AboutDisplay() {
  return (
    <div className="main">
      <div className="about">
        <img src={test} />
        <div className="about-text">
          <h1> Hi I'm Dani</h1>
          <h5>
            Unity & Unreal <span>Developer</span>
          </h5>
          <p>
            Developer Engineer at Optic Power with a Engineering in Digital
            Entertainment Degree from Universidad Pontificia Bolivariana. Strong
            passion and interest for game development, web development and game
            design and willing to learn new technologies. Passionate about
            Programming, Game Development, and VR/AR experiences creation. Love
            working with multidisciplinary teams, and I am interested in
            Object-Oriented Programming (OOP), Computer Graphics, and Agile
            Methodologies.
          </p>
        </div>
        <button>Let's Talk</button>
      </div>
    </div>
  );
}

export default AboutDisplay;
