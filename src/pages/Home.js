import React from "react";
import { useNavigate } from "react-router-dom";
import ContactIcons from "../components/ContactIcons";
import "../styles/Home.css";
import CardDisplay from "../components/CardDisplay";
import { SkillsList } from "../helpers/SkillsList";

const Home = () => {
  const navigate = useNavigate();
  // const skills = [
  //   "Unity",
  //   "Unreal",
  //   "HTML",
  //   "CSS",
  //   "React",
  //   ".NET",
  //   "NodeJS",
  //   "AWS",
  //   "C#",
  //   "C++",
  //   "Javascript",
  //   "TypeScript",
  // ];

  return (
    <div>
      <div className="aboutme">
        <h2>
          Hi, I'm <span>Dani</span>
        </h2>
        <div className="prompt">
          <p>Unreal And Unity developer with a passion to learn new stuff</p>
          <ContactIcons />
          <button onClick={() => navigate("/about")}>About Me!</button>
        </div>
      </div>
      <div class="skills" id="skills">
        <h2 class="skill-header">Skills</h2>

        <div className="projects">
          <div className="projectList">
            {SkillsList.map((skill, index) => {
              return <CardDisplay key={index} image={skill.icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
