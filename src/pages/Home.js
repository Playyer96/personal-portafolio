import React, { Fragment } from "react";
import _ from "lodash";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

const Home = () => {
  const skills = _.uniq([
    "Unity",
    "Unreal",
    "HTML",
    "CSS",
    "React",
    ".NET",
    "NodeJS",
    "AWS",
    "C#",
    "C++",
    "Javascript",
    "TypeScript",
  ]);
  const skillsList = _.compact(skills).map((skill, index) => (
    <li key={index} className="item">
      {skill}
    </li>
  ));

  return (
    <Fragment>
      <div className="about">
        <h2>Hi, I'm Dani</h2>
        <div className="prompt">
          <p>Unreal And Unity developer with a passion to learn new stuff</p>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/danisvs/", "_blank")
            }
          />
          <GithubIcon onClick={() => window.open("https://github.com/Playyer96", "_blank")} />
          <EmailIcon />
        </div>
        <button>About Me!</button>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">{skillsList}</ol>
      </div>
    </Fragment>
  );
};

export default React.memo(Home);
