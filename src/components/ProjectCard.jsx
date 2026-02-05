import React from "react";
import Title from "./Title";
import Button from "./Button";
import "../pages/ProjectPage/Project.css";

const ProjectCard = ({ project }) => {
  return (
    <section className="project">
      <div className="project-content">
        <div className="text-area">
          <Title subTitle={project.subTitle} mainTitle={project.mainTitle} />
          <div className="project-info">
            <p className="duration-text">
              <strong>DURATION</strong> {project.duration}
            </p>
            <p className="role-text">
              <strong>PROJECT ROLE</strong> {project.role}
            </p>
            <p className="detail-text">{project.detail}</p>
          </div>
          <div className="button-group">
            <Button text="WEBSITE  →" />
            <Button text="PROPOSAL  →" />
          </div>
        </div>

        <div className="image-display-area">
          {project.images &&
            project.images.map((src, idx) => (
              <div key={idx} className="image-wrapper">
                <img src={src} alt={`${project.mainTitle} screen ${idx}`} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
