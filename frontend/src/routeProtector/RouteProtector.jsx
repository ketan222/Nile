import React, { useEffect, useState } from "react";
import isTokenExpired from "../utils/TokenExpired.js"; // your utility
import { useCont } from "../Context/Context.jsx";
import { Navigate } from "react-router-dom";

export default function RouteProtector({ children }) {
  const { user, logoutBuyer } = useCont();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user-jwt");
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("user-jwt");
      logoutBuyer();
      setRedirect(true);
    }
    setCheckingAuth(false);
  }, [logoutBuyer]);

  if (checkingAuth) {
    // Optional: render loading or null while checking
    return null;
  }

  if (redirect || !user) {
    localStorage.removeItem("user-jwt");
    logoutBuyer();
    return <Navigate to="/login" replace />;
  }

  return children;
}
