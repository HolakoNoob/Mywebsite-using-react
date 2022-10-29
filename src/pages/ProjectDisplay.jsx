import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjecList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.url}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
