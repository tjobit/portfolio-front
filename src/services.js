const baseUrl = "http://localhost:3030";

export async function getProjects() {
  return fetch(`${baseUrl}/project`).then((res) => res.json());
}
