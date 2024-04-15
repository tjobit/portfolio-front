import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";

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
  },
  h2: {
    fontSize: "5vh",
    fontWeight: "normal",
    padding: "0",
    margin: "0",
    paddingBottom: "5vh",
  },
  introduction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10vh",
  },
  threelines: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    zIndex: "-1",
  },
  oneline: {
    position: "absolute",
    top: "0",
    left: "-25%",
    width: "100%",
    zIndex: "-1",
  },
  profilePicture: {
    width: "35vh",
  },
};

function Landing() {
  return (
    <div style={style.main}>
      <Header />
      <div style={style.introduction}>
        <h1 style={style.h1}>
          I’m Tomm Jobit, I like 
          <TypeAnimation
            sequence={[
              " React",
              1000,
              " Node",
              1000,
              " TypeScript",
              1000,
              " Java",
              1000,
              " Prisma",
              1000,
              " Figma",
              1000,
              " Express",
              1000,
              " PostrgeSQL",
              1000,
              " Electron",
              1000,
            ]}
            wrapper='span'
            repeat={Infinity}
            speed={50}
            />
        </h1>
        <h2 style={style.h2}>Developing things with my friends</h2>
        <img style={style.profilePicture} src="./src/assets/svgs/me.svg" alt="picture me" />
      </div>
      <img style={style.threelines} src="./src/assets/svgs/threeline.svg" />
      <img style={style.oneline} src="./src/assets/svgs/oneline.svg" />
    </div>
  );
}

export default Landing;
