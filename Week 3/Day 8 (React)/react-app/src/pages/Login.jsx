import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();


const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }


  const handleLogin = () => {

  localStorage.setItem("isLoggedIn", "true");
  navigate("/dashboard");
};


  return (
    <div className="container login-page">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
