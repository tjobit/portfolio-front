import HeaderAdmin from "../../components/admin/HeaderAdmin";
import ProjectSelector from "../../components/admin/ProjectSelector";
import { TextField } from "@mui/material";

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

function AdminProjects() {
  return (
    <div style={style.global}>
      <HeaderAdmin />
      <div style={style.main}>
        <ProjectSelector />
        <div style={style.sectionContainer}>
          <TextField
            label="Project Title"
            placeholder="Project Title"
            variant="outlined"
            style={{ width: "80%", margin: "20px 0" }}
          />
          <TextField
            label="Project Description"
            placeholder="Project Description"
            variant="outlined"
            style={{ width: "80%", margin: "20px 0" }}
          />
          <div style={style.coupleContainer}>
            <TextField
              label="Thumbnail URL"
              placeholder="Thumbnail URL"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="Pictures URL"
              placeholder="Pictures URL 1, Pictures URL 2, Pictures URL 3"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          <div style={style.coupleContainer}>
            <TextField
              label="Team"
              placeholder="Team participants"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="Tags"
              placeholder="Tag1, Tag2, Tag3"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          <div style={style.coupleContainer}>
            <TextField
              label="Github URL"
              placeholder="Github URL"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="Website URL"
              placeholder="Website URL"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          <div style={style.coupleContainer}>
            <TextField
              label="Start date"
              placeholder="AAAA-MM-DD"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="End date"
              placeholder="AAAA-MM-DD"
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
