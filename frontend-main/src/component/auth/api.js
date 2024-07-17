import api from "../../shared/api/api";

export const signupUser = (data) => api.post("/auth/signup", data);

export const loginUser = (data) => api.post("/auth/login", data);
