import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import ImageSlider from "../components/ImageSlider";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <ImageSlider cards={project.images} />
      <div className="project-info">
        <h2>Description:</h2>
        {project.descriptions.map((item, index) => (
          <p key={index} className="item">
            {item}
          </p>
        ))}
        <h2>Responsabilities:</h2>
        {project.responsabilities.map((item, index) => (
          <p key={index} className="item">
            {item}
          </p>
        ))}
        <GitHubIcon />
      </div>
    </div>
  );
}

export default ProjectDisplay;
