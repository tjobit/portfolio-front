import { Colors } from "../../assets/color";

const style = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30vh",
    backgroundColor: Colors.third,
    borderRadius: "20px",
  },
  h1: {
    fontSize: "3vh",
  }
};

function MetricsCard({ title, metric }) {
  return (
    <div style={style.card}>
      <h1 style={style.h1}>{title}</h1>
      <h3>{metric}</h3>
    </div>
  );
}

export default MetricsCard;
