import React from "react";
import { getProjects } from "../../services";
import ProjectCardAdmin from "./ProjectCardAdmin";
import { Colors } from "../../assets/color";
import { Button } from "@mui/material";

const style = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    width: "35vw",
  },
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "85%"
  }
};

function ProjectSelector() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div style={style.main}>
      <div style={style.projectContainer}>
        {projects.map((project) => (
          <ProjectCardAdmin key={project.id} project={project} />
        ))}
      </div>
      <Button
        style={{
          backgroundColor: Colors.button,
          color: Colors.font,
          width: "50%",
          margin: "20px 0",
        }}
      >
        Add Project
      </Button>
    </div>
  );
}

export default ProjectSelector;
