import React from "react";
import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";
import { Modal, Box, TextField, Button } from "@mui/material";
import { Colors } from "../assets/color";
import { login } from "../services";

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
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    bgcolor: Colors.third,
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  },
  adminConnect: {
    position: "absolute",
    bottom: "1vh",
    right: "1vh",
    cursor: "pointer",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
};

function Landing() {
  const [open, setOpen] = React.useState(false);
  const [errorConnection, setErrorConnection] = React.useState(false);
  function handleOpen() {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      window.location.href = "/adminProjects";
    } else {
      setOpen(true)
    }
  }

  const handleClose = () => setOpen(false);

  async function handleConnection() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const data = await login(name, password);
    if (data.accessToken) {
      window.location.href = "/adminProjects";
    } else {
      setErrorConnection(true);
    }
  }

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
            wrapper="span"
            repeat={Infinity}
            speed={50}
          />
        </h1>
        <h2 style={style.h2}>Developing things with my friends</h2>
        <img
          style={style.profilePicture}
          src="./src/assets/svgs/me.svg"
          alt="picture me"
        />
      </div>
      <div style={style.adminConnect}>
        <img onClick={handleOpen} src="./src/assets/svgs/admin.svg" />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.modal}>
            <div style={style.modalContent}>
              <h2 style={style.h2}>Admin connection</h2>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
                margin="normal"
                required
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                style={{ width: "100%" }}
                margin="normal"
                required
                type="password"
              />
              {errorConnection && (
                <div style={{ color: "red" }}>Wrong name or password</div>
              )}
              <Button
                style={{
                  backgroundColor: Colors.button,
                  color: Colors.font,
                  width: "20%",
                  margin: "20px 0",
                }}
                variant="contained"
                type="submit"
                onClick={handleConnection}
              >
                Connect
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <img style={style.threelines} src="./src/assets/svgs/threeline.svg" />
      <img style={style.oneline} src="./src/assets/svgs/oneline.svg" />
    </div>
  );
}

export default Landing;
