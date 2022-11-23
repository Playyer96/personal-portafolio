import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Danilo</h2>
        <div className="prompt">
          <p>Unreal And Unity developer with a passion to learn new stuff</p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Unity, Unreal, HTML, CSS, React</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>.NET, NodeJS, AWS</span>
          </li>
          <li className="item">
            <h2>Lenguages</h2>
            <span>C#, C++, Javascript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
