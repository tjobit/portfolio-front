const baseUrl = "http://localhost:3030";

export async function getProjects() {
  return fetch(`${baseUrl}/project`).then((res) => res.json());
}

export async function getProject(id) {
  return fetch(`${baseUrl}/project/${id}`).then((res) => res.json());
}
