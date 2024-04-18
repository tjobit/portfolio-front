import React from "react";
import { Colors } from "../../assets/color";
import { getUsers } from "../../services";
import UserCard from "./UserCard";
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

function UserSelector({ newUserAlert, setNewUserAlert, setCurrentUser }) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  React.useEffect(() => {
    if (newUserAlert) {
      getUsers().then((data) => {
        setUsers(data);
      });
    }
    setNewUserAlert(false);
  }, [newUserAlert]);

  return (
    <div style={style.main}>
      <div style={style.projectContainer}>
        {users.map((user) => (
          <UserCard setCurrentUser={setCurrentUser} key={user.id} user={user} />
        ))}
      </div>
      <Button
        onClick={() => setCurrentUser(0)}
        style={{
          backgroundColor: Colors.button,
          color: Colors.primary,
          width: "50%",
          margin: "20px 0",
        }}
      >
        New User
      </Button>
    </div>
  );
}

export default UserSelector;
