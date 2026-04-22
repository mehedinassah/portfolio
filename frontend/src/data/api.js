import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export const projectsApi = {
  getAll: () => api.get("/projects"),
  getById: (id) => api.get(`/projects/${id}`),
};

export const skillsApi = {
  getAll: () => api.get("/skills"),
};

export const contactApi = {
  send: (data) => api.post("/contact", data),
};

export default api;
