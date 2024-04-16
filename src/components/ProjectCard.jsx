import React from "react";
import Tag from "./Tag";
import { Colors } from "../assets/color";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const style = {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "25vw",
      height: "40vh",
      padding: "10px",
      margin: "10px",
      borderRadius: "20px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: Colors.third,
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      cursor: isHovered ? 'pointer' : 'default',
      transition: "0.3s",
      textDecoration: "none",
      color: Colors.font,
    },
    img: {
      width: "auto",
      maxWidth: "100%",
      height: "50%",
      borderRadius: "20px",
    },
    h3: {
      margin: "0",
      padding: "0",
      fontSize: "3vh",
      fontWeight: "bold",
    },
    tagsContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
    },
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <Link style={style.card} to={"/projectInfos/" + project.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3 style={style.h3}>{project.name}</h3>
      <img style={style.img} src={project.thumbnailUrl} alt={project.name} />
      <p>{project.description}</p>
      <div style={style.tagsContainer}>
        {project.tags.map((tag, index) => {
          if (index < 3) {
            return <Tag key={index} name={tag} color={Colors.button} />;
          } else if (index === 3) {
            return (
              <Tag
                key={index}
                name={`${project.tags.length - 3} more`}
                color={Colors.secondary}
              />
            );
          }
        })}
      </div>
    </Link>
  );
}

export default ProjectCard;
