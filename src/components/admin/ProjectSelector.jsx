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
    height: "100%",
  },
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflowY: "scroll",
  },
};

function ProjectSelector({newProjectAlert, setNewProjectAlert, setCurrentProject}) {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  React.useEffect(() => {
    if (newProjectAlert) {
      getProjects().then((data) => {
        setProjects(data);
      });
    }
    setNewProjectAlert(false);
  }, [newProjectAlert]);

  return (
    <div style={style.main}>
      <div style={style.projectContainer}>
        {projects.map((project) => (
          <ProjectCardAdmin setCurrentProject={setCurrentProject} key={project.id} project={project} />
        ))}
      </div>
      <Button
        onClick={() => setCurrentProject(0)}
        style={{
          backgroundColor: Colors.button,
          color: Colors.primary,
          width: "50%",
          margin: "20px 0",
        }}
      >
        New Project
      </Button>
    </div>
  );
}

export default ProjectSelector;
