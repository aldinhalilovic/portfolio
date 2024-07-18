import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <div className="ProjectWrapper" id="projects">
        <div
          style={{
            width: "100%",
            height: 300,
            margin: "100px 0",
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 48, fontWeight: 600, fontStyle: "italic" }}>
            "Simplicity is the soul of efficiency."
          </h1>
        </div>
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
