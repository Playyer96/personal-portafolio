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
        <p className="description">{project.description}</p>
        <h2>Responsabilities:</h2>
        <p className="responsabilities">{project.responsabilities}</p>
        <GitHubIcon />
      </div>
    </div>
  );
}

export default ProjectDisplay;
