import api from "../../shared/api/api";

export const getAllUsers = () => api.get("/users");

export const addUsers = (data) => api.post("/users", data);
