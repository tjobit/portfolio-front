import React from "react";
import Header from "../components/Header";
import { getProjects } from "../services";
import ProjectCard from '../components/ProjectCard';

const style = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  h1: {
    fontSize: "8vh",
    fontWeight: "bold",
    padding: "0",
    margin: "0",
    paddingBottom: "2vh",
  },
  onelineTop: {
    position: "absolute",
    top: "0",
    left: "-25%",
    width: "100%",
    zIndex: "-1",
  },
  threelineTop: {
    width: "100%",
    zIndex: "-5",
    marginTop: "-66vh",
  },
};

function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div style={style.main}>
      <Header />
      <h1 style={style.h1}>Check my projects</h1>
      <div style={style.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <img
        style={style.onelineTop}
        src="./src/assets/svgs/oneline.svg"
        alt="one line"
      />
      <img
        style={style.threelineTop}
        src="./src/assets/svgs/threeline.svg"
        alt="three line"
      />
    </div>
  );
}

export default Projects;
