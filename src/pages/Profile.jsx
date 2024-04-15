import Header from "../components/Header";
import { Colors } from "../assets/color.js";

const style = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  },
  section: {
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
    width: "100%",
    marginTop: "-60vh",
    zIndex: "-5",
  },
  lifeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  h2: {
    fontSize: "5vh",
    fontWeight: "bold",
    padding: "0",
    margin: "0",
  },
  experiences1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60vh",
    marginTop: "-12vh",
    marginRight: "-18vh",
  },
  experiences2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60vh",
    marginTop: "10vh",
    marginLeft: "-15vh",
  },
  date: {
    fontSize: "3vh",
    fontWeight: "normal",
    padding: "0",
    margin: "0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  input: {
    width: "50vh",
    height: "2vh",
    fontSize: "3vh",
    margin: "1vh",
    padding: "1vh",
    border: "none",
    borderRadius: "10px",
    color: Colors.primary,
    backgroundColor: Colors.button
  },
};

function Profile() {
  return (
    <div style={style.main}>
      <Header />
      <div style={style.section}>
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
      </div>
      <img
        style={style.threelineTop}
        src="./src/assets/svgs/threeline.svg"
        alt="three line"
      />
      <div>
        <h1 style={style.h1}>Studies and work experiences</h1>
        <div style={style.lifeContainer}>
          <div style={style.experiences1}>
            <div>
              <h2 style={style.h2}>High school</h2>
              <div style={style.date}>2019-2020</div>
            </div>
            <div>
              <h2 style={style.h2}>Intern at Wedge</h2>
              <div style={style.date}>2022</div>
            </div>
            <div>
              <h2 style={style.h2}>Engineering school</h2>
              <div style={style.date}>2022-2025</div>
            </div>
          </div>
          <img
            style={{ height: "65vh" }}
            src="./src/assets/svgs/lifeline.svg"
            alt="ligne de vie"
          />
          <div style={style.experiences2}>
            <div>
              <h2 style={style.h2}>Technical degree</h2>
              <div style={style.date}>2020-2022</div>
            </div>
            <div>
              <h2 style={style.h2}>Intern at MetalMaker</h2>
              <div style={style.date}>2024</div>
            </div>
            <div>
              <h2 style={style.h2}>Apprentice at ST</h2>
              <div style={style.date}>2022-2025</div>
            </div>
          </div>
        </div>
      </div>
      <img
        style={style.threelineTop}
        src="./src/assets/svgs/threeline.svg"
        alt="three line"
      />
      <div style={style.section}>
        <h1 style={style.h1}>My resumee</h1>
        <div>
          <iframe
            style={{ width: "60vw", height: "90vh" }}
            src="./src/assets/resumee.pdf"
          ></iframe>
        </div>
      </div>
      <img
        style={style.threelineTop}
        src="./src/assets/svgs/threeline.svg"
        alt="three line"
      />
      <div style={style.section}>
        <h1 style={style.h1}>Contact me</h1>
        <form style={style.form} action='mailto:tommjobit@live.fr' method='post' encType='text/plain'>
            <input style={style.input} type='email' placeholder='Your email' />
            <input style={style.input} type='text' placeholder='Subject' />
            <textarea placeholder='Your message'></textarea>
            <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
