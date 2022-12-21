import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import ContactIcons from "../components/ContactIcons";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
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
      <div className="aboutme">
        <h2>Hi, I'm Dani</h2>
        <div className="prompt">
          <p>Unreal And Unity developer with a passion to learn new stuff</p>
          <ContactIcons />
          <button onClick={() => navigate("/about")}>About Me!</button>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">{skillsList}</ol>
      </div>
    </Fragment>
  );
};

export default React.memo(Home);
