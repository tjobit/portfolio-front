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
