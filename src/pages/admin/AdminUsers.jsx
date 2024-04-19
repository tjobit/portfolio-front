import React from "react";
import { Colors } from "../../assets/color";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import UserSelector from "../../components/admin/UserSelector";
import { TextField, Button } from "@mui/material";
import { getUser, addUser, deleteUser, updateUser } from "../../services";

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
    justifyContent: "space-evenly",
    width: "65vw",
    height: "80vh",
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
  const [currentUser, setCurrentUser] = React.useState(0);
  const [newUserAlert, setNewUserAlert] = React.useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  React.useEffect(() => {
    if (currentUser > 0) {
      getUser(currentUser).then((data) => {
        setName(data.name);
      });
    } else {
      setName("");
      setPassword("");
    }
  }, [currentUser]);

  function formValid() {
    return name.length > 0 && password.length > 0;
  }

  function formValidUpdate() {
    return name.length > 0;
  }

  async function handleAddUser() {
    if (!formValid()) return;
    const result = await addUser(name, password);

    if (result.error) {
      alert(result.error);
    } else {
      setNewUserAlert(true);
    }
  }

  async function handleUpdateUser() {
    if (!formValidUpdate()) return;
    const result = await updateUser(currentUser, name);

    if (result.error) {
      alert(result.error);
    } else {
      setNewUserAlert(true);
    }
  }

  async function handleDeleteUser() {
    const result = await deleteUser(currentUser);

    if (result.error) {
      alert(result.error);
    } else {
      setCurrentUser(0);
      setNewUserAlert(true);
    }
  }

  return (
    <div style={style.global}>
      <HeaderAdmin />
      <div style={style.main}>
        <UserSelector
          newUserAlert={newUserAlert}
          setNewUserAlert={setNewUserAlert}
          setCurrentUser={setCurrentUser}
        />
        <div style={style.sectionContainer}>
          <TextField
            label="Name"
            variant="outlined"
            onChange={handleName}
            value={name}
            style={{ width: "50%" }}
          />

          {currentUser == 0 && (
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={handlePassword}
              value={password}
              style={{ width: "50%" }}
            />
          )}

          {!formValid() && currentUser == 0 && (
            <p style={{ color: "red" }}>Please fill all fields</p>
          )}

          {!formValidUpdate() && currentUser > 0 && (
            <p style={{ color: "red" }}>Please fill the field</p>
          )}

          {currentUser > 0 ? (
            <div style={style.coupleContainer}>
              <Button
                onClick={handleDeleteUser}
                style={{
                  backgroundColor: Colors.buttonDel,
                  color: Colors.primary,
                  width: "35%",
                  margin: "20px 0",
                }}
              >
                Delete User
              </Button>
              <Button
                onClick={handleUpdateUser}
                style={{
                  backgroundColor: Colors.button,
                  color: Colors.primary,
                  width: "35%",
                  margin: "20px 0",
                }}
              >
                Update User
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleAddUser}
              style={{
                backgroundColor: Colors.button,
                color: Colors.primary,
                width: "50%",
                margin: "20px 0",
              }}
            >
              Add User
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
