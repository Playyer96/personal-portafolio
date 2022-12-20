import React from "react";
import { useParam, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p className="description">
        <b>Description:</b> <br/>{project.description}
      </p>
      <p>
        <b>Responsabilities:</b> <br/>{project.responsabilities}
      </p>

      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
