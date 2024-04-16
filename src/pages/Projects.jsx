import Header from "../components/Header";

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
    position: "absolute",
    width: "100%",
    bottom: "0",
    zIndex: "-5",
  },
};

function Projects() {
  return (
    <div style={style.main}>
      <Header />
      <h1 style={style.h1}>Check my projects</h1>
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
