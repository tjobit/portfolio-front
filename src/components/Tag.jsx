function Tag({ name, color }) {
  const style = {
    tag: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
      margin: "5px",
      borderRadius: "20px",
      backgroundColor: color,
      width: "24%",
    },
    span: {
      fontSize: "1.5vh",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };

  return (
    <div style={style.tag}>
      <span style={style.span}>{name}</span>
    </div>
  );
}

export default Tag;
