import { Colors } from "../../assets/color";
import React from "react";

function UserCard({ user, setCurrentUser }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "70%",
      margin: "10px",
      borderRadius: "40px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: Colors.third,
      transform: isHovered ? "scale(1.05)" : "scale(1)",
      cursor: isHovered ? "pointer" : "default",
    },
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style.container}
      onClick={() => setCurrentUser(user.id)}
    >
      <h3>{user.name}</h3>
    </div>
  );
}

export default UserCard;
