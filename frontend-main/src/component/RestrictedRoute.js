import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RestrictedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" /> : element;
};

export default RestrictedRoute;
