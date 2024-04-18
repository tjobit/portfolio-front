import React from "react";
import { Colors } from "../../assets/color";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import ProjectSelector from "../../components/admin/ProjectSelector";
import { TextField, Button } from "@mui/material";
import { addProject, getProject, updateProject, deleteProject } from "../../services";

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
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [thumbnailUrl, setThumbnailUrl] = React.useState("");
  const [pictures, setPictures] = React.useState([]);
  const [nbParticipants, setNbParticipants] = React.useState(1);
  const [tags, setTags] = React.useState([]);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [githubUrl, setGithubUrl] = React.useState("");
  const [websiteUrl, setWebsiteUrl] = React.useState("");
  const [newProjectAlert, setNewProjectAlert] = React.useState(false);

  const [currentProject, setCurrentProject] = React.useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleThumbnail = (e) => {
    setThumbnailUrl(e.target.value);
  };

  const handlePictures = (e) => {
    setPictures(e.target.value.split(","));
  };

  const handleNbParticipants = (e) => {
    setNbParticipants(e.target.value);
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleGithubUrl = (e) => {
    setGithubUrl(e.target.value);
  };

  const handleWebsiteUrl = (e) => {
    setWebsiteUrl(e.target.value);
  };

  async function handleAddProject() {
    if (!formValid()) return;
    const result = await addProject(
      name,
      description,
      nbParticipants,
      tags,
      githubUrl,
      websiteUrl,
      startDate,
      endDate,
      thumbnailUrl,
      pictures
    );

    if (result.error) {
      alert(result.error);
    } else {
      setNewProjectAlert(true);
    }
  }

  function formValid() {
    return (
      name !== "" &&
      description !== "" &&
      thumbnailUrl !== "" &&
      pictures.length > 0 &&
      nbParticipants > 0 &&
      tags.length > 0 &&
      startDate !== "" &&
      endDate !== "" &&
      githubUrl !== "" &&
      websiteUrl !== ""
    );
  }

  React.useEffect(() => {
    if (currentProject > 0) {
      getProject(currentProject).then((data) => {
        setName(data.name);
        setDescription(data.description);
        setThumbnailUrl(data.thumbnailUrl);
        setPictures(data.picturesUrl);
        setNbParticipants(data.nbParticipants);
        setTags(data.tags);
        setStartDate(data.startDate);
        setEndDate(data.endDate);
        setGithubUrl(data.githubUrl);
        setWebsiteUrl(data.websiteUrl);
      });
    } else {
      setName("");
      setDescription("");
      setThumbnailUrl("");
      setPictures([]);
      setNbParticipants(1);
      setTags([]);
      setStartDate("");
      setEndDate("");
      setGithubUrl("");
      setWebsiteUrl("");
    }
  }, [currentProject]);

  async function handleUpdateProject() {
    if (!formValid()) return;

    const result = await updateProject(
      currentProject,
      name,
      description,
      nbParticipants,
      tags,
      githubUrl,
      websiteUrl,
      startDate,
      endDate,
      thumbnailUrl,
      pictures
    );

    if (result.error) {
      alert(result.error);
    } else {
      setNewProjectAlert(true);
    }
  }

  async function handleDeleteProject() {
    const result = await deleteProject(currentProject);

    if (result.error) {
      alert(result.error);
    } else {
      setCurrentProject(0);
      setNewProjectAlert(true);
    }
  }

  return (
    <div style={style.global}>
      <HeaderAdmin />
      <div style={style.main}>
        <ProjectSelector
          newProjectAlert={newProjectAlert}
          setNewProjectAlert={setNewProjectAlert}
          setCurrentProject={setCurrentProject}
        />
        <div style={style.sectionContainer}>
          <TextField
            label="Project Title"
            placeholder="Project Title"
            value={name}
            onChange={handleName}
            variant="outlined"
            style={{ width: "80%", margin: "20px 0" }}
          />
          <TextField
            label="Project Description"
            placeholder="Project Description"
            value={description}
            onChange={handleDescription}
            variant="outlined"
            style={{ width: "80%", margin: "20px 0" }}
          />
          <div style={style.coupleContainer}>
            <TextField
              label="Thumbnail URL"
              placeholder="Thumbnail URL"
              value={thumbnailUrl}
              onChange={handleThumbnail}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="Pictures URL"
              placeholder="Pictures URL 1, Pictures URL 2, Pictures URL 3"
              value={pictures.toString()}
              onChange={handlePictures}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          <div style={style.coupleContainer}>
            <TextField
              label="Team size"
              value={nbParticipants}
              onChange={handleNbParticipants}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="Tags"
              placeholder="Tag1, Tag2, Tag3"
              value={tags.toString()}
              onChange={handleTags}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          <div style={style.coupleContainer}>
            <TextField
              label="Github URL"
              placeholder="Github URL"
              value={githubUrl}
              onChange={handleGithubUrl}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="Website URL"
              placeholder="Website URL"
              value={websiteUrl}
              onChange={handleWebsiteUrl}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          <div style={style.coupleContainer}>
            <TextField
              label="Start date"
              placeholder="AAAA-MM-DD"
              value={startDate}
              onChange={handleStartDate}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
            <TextField
              label="End date"
              placeholder="AAAA-MM-DD"
              value={endDate}
              onChange={handleEndDate}
              variant="outlined"
              style={{ width: "35%", margin: "20px 0" }}
            />
          </div>
          {formValid() ? null : (
            <p style={{ color: "red" }}>Please fill all the fields</p>
          )}
          {currentProject > 0 ? (
            <div style={style.coupleContainer}>
              <Button
                onClick={handleDeleteProject}
                style={{
                  backgroundColor: Colors.buttonDel,
                  color: Colors.primary,
                  width: "40%",
                  margin: "20px 0",
                }}
              >
                Delete Project
              </Button>
              <Button
                onClick={handleUpdateProject}
                style={{
                  backgroundColor: Colors.button,
                  color: Colors.primary,
                  width: "40%",
                  margin: "20px 0",
                }}
              >
                Update Project
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleAddProject}
              style={{
                backgroundColor: Colors.button,
                color: Colors.primary,
                width: "40%",
                margin: "20px 0",
              }}
            >
              Add Project
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
