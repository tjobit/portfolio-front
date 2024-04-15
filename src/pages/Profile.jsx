import Header from "../components/Header";

const style = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  },
  introduction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5vh",
  },
  h1: {
    fontSize: "8vh",
    fontWeight: "bold",
    padding: "0",
    margin: "0",
    paddingBottom: "2vh",
  },
  description: {
    fontSize: "3vh",
    fontWeight: "normal",
    padding: "0",
    margin: "0",
    paddingBottom: "2vh",
    width: "70%",
  },
  networks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
    paddingTop: "2vh",
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
    top: "10%",
    left: "0",
    width: "100%",
    zIndex: "-1",
  },
};

function Profile() {
  return (
    <div style={style.main}>
      <Header />
      <div style={style.introduction}>
        <h1 style={style.h1}>Who am I ?</h1>
        <div style={style.description}>
          My name is Tomm JOBIT, and I am 22 years old. I work as a full-stack
          developer. Currently, I am studying computer science at the
          engineering school of Le Mans and in apprenticeship at
          STMicroelectronics.
        </div>
        <div style={style.description}>
          I enjoy developing projects in my free time, especially ones that can
          make a positive impact on people`s daily lives. I collaborate with a
          group of friends to create such projects.
        </div>

        <div style={style.networks}>
          <a href="https://github.com/tjobit">
            <img
              style={{ width: "15vh" }}
              src="./src/assets/svgs/githubIcon.svg"
              alt="github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/tjobit/">
            <img
              style={{ width: "15vh" }}
              src="./src/assets/svgs/linkedinIcon.svg"
              alt="linkedin icon"
            />
          </a>
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
    </div>
  );
}

export default Profile;
