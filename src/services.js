const baseUrl = "http://localhost:3030";

export async function getProjects() {
  return fetch(`${baseUrl}/project`).then((res) => res.json());
}

export async function getProject(id) {
  return fetch(`${baseUrl}/project/${id}`).then((res) => res.json());
}

export async function login(name, password) {
  const result = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  }).then((res) => res.json());

  localStorage.setItem("accessToken", result.accessToken);  
  localStorage.setItem("refreshToken", result.refreshToken);

  return result;
}

export async function addProject(name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl) {
  const result = await fetch(`${baseUrl}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      name,
      description,
      nbParticipants: parseInt(nbParticipants),
      tags,
      githubUrl,
      websiteUrl,
      startDate,
      endDate,
      thumbnailUrl,
      picturesUrl,
    }),
  }).then((res) => res.json());

  return result;
}

export async function updateProject(id, name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl) {
  console.log("updateProject", id, name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl)
  
  const result = await fetch(`${baseUrl}/project/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      name,
      description,
      nbParticipants: parseInt(nbParticipants),
      tags,
      githubUrl,
      websiteUrl,
      startDate,
      endDate,
      thumbnailUrl,
      picturesUrl,
    }),
  }).then((res) => res.json());

  return result;
}

export async function deleteProject(id) {
  const result = await fetch(`${baseUrl}/project/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json());

  return result;
}

export async function getUsers() {
  return fetch(`${baseUrl}/user`).then((res) => res.json());
}