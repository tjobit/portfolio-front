import React from "react";
import { Colors } from "../../assets/color";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import UserSelector from "../../components/admin/UserSelector";
import { TextField, Button } from "@mui/material";

const style = {
  global: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "90vh",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "65vw",
  },
  coupleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
};

function AdminUsers() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={style.global}>
      <HeaderAdmin />
      <div style={style.main}>
        <UserSelector />
      </div>
      <div style={style.sectionContainer}>
        <TextField
          label="Name"
          variant="outlined"
          onChange={handleName}
          value={name}
          style={{ width: "50%" }}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={handlePassword}
          value={password}
          style={{ width: "50%" }}
        />

        <div style={style.coupleContainer}>
          <Button
            style={{
              backgroundColor: Colors.buttonDel,
              color: Colors.primary,
              width: "30%",
              margin: "20px 0",
            }}
          >
            Delete User
          </Button>
          <Button
            style={{
              backgroundColor: Colors.button,
              color: Colors.primary,
              width: "30%",
              margin: "20px 0",
            }}
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
