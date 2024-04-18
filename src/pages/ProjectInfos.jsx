import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Tag from "../components/Tag";
import { Colors } from "../assets/color";

const style = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
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
  img: {
    width: "auto",
    maxWidth: "50%",
    borderRadius: "20px",
    marginBottom: "2vh",
  },
  picturesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  picture: {
    width: "auto",
    maxWidth: "45%",
    height: "auto",
    maxHeight: "80vh",
    borderRadius: "20px",
    marginBottom: "2vh",
  },
  h2: {
    fontSize: "6vh",
    fontWeight: "bold",
    padding: "0",
    margin: "0",
  },
  commonInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  text: {
    fontSize: "3vh",
    padding: "0",
    margin: "0",
    marginLeft: "2vh",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "20%",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "80%",
  },
  icon: {
    width: "auto",
    height: "20vh",
    margin: "0",
    padding: "0",
  },
};

function ProjectInfos() {
  const { project } = useLoaderData();

  return (
    <div style={style.main}>
      <Header />
      <h1 style={style.h1}>{project.name}</h1>
      <img style={style.img} src={project.thumbnailUrl} alt={project.name} />
      <p style={style.text}>{project.longDescription}</p>
      <img
        style={style.onelineTop}
        src="../src/assets/svgs/oneline.svg"
        alt="one line"
      />
      <img
        style={style.threelineTop}
        src="../src/assets/svgs/threeline.svg"
        alt="three line"
      />
      <h1 style={style.h1}>Pictures</h1>
      <div style={style.picturesContainer}>
        {project.picturesUrl.map((picture, index) => (
          <img
            style={style.picture}
            key={index}
            src={picture}
            alt={project.name}
          />
        ))}
      </div>
      <img
        style={style.threelineTop}
        src="../src/assets/svgs/threeline.svg"
        alt="three line"
      />
      <h1 style={style.h1}>More infos</h1>
      <div style={style.commonInfo}>
        <div>
          <h2 style={style.h2}>Date</h2>
          <p style={style.text}>
            From {project.startDate} to {project.endDate}
          </p>
        </div>
        <div>
          <h2 style={style.h2}>Team</h2>
          <p style={style.text}>
            {project.nbParticipants} person
            {project.nbParticipants > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div style={style.section}>
        <h2 style={style.h2}>Tags</h2>
        <div style={style.sectionContainer}>
          {project.tags.map((tag, index) => (
            <Tag key={index} name={tag} color={Colors.button} />
          ))}
        </div>
      </div>
      <div style={style.section}>
        <h2 style={style.h2}>External Links</h2>
        <div style={style.sectionContainer}>
          <a href={project.githubUrl} >
            <img style={style.icon} src="../src/assets/svgs/githubIcon.svg" alt="github" />
          </a>
          {project.websiteUrl && (
            <a href={project.websiteUrl} >
              <img style={style.icon} src="../src/assets/svgs/internet.svg" alt="internet" />
            </a>
          )}
        </div>
      </div>
      <img
        style={style.threelineTop}
        src="../src/assets/svgs/threeline.svg"
        alt="three line"
      />
    </div>
  );
}

export default ProjectInfos;
