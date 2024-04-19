import React from "react";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import MetricsCard from "../../components/admin/MetricsCard";
import { getProjects, getUsers, getPicutres } from "../../services";

const style = {
  global: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
  },
  metricsSection: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
  },
};

function AdminMetrics() {
  const [projectsNumber, setProjectsNumber] = React.useState(0);
  const [usersNumber, setUsersNumber] = React.useState(0);
  const [picturesNumber, setPicturesNumber] = React.useState(0);

  async function getProjectsNumber() {
    const projects = await getProjects();
    setProjectsNumber(projects.length);
  }

  async function getUsersNumber() {
    const users = await getUsers();
    setUsersNumber(users.length);
  }

  async function getPicturesNumber() {
    const pictures = await getPicutres();
    setPicturesNumber(pictures.length);
  }

  React.useEffect(() => {
    getProjectsNumber();
    getUsersNumber();
    getPicturesNumber();
  }, []);

  return (
    <div style={style.global}>
      <HeaderAdmin />
      <div style={style.metricsSection}>
        <MetricsCard title="Projects" metric={projectsNumber} />
        <MetricsCard title="Users" metric={usersNumber} />
        <MetricsCard title="Pictures" metric={picturesNumber} />
      </div>
    </div>
  );
}

export default AdminMetrics;
