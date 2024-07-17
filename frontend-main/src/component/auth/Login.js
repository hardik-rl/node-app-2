import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "./api";
import { useAuth } from "../AuthContext";
import useLogin from "../../shared/store/useLogin";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setIsLogin, isLogin } = useLogin();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLogin = { ...loginData };
    copyLogin[name] = value;
    setLoginData(copyLogin);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      return toast.error("email and password are required");
    }
    try {
      const response = await loginUser(loginData);
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        login();
        setIsLogin(true);
        toast.success("Login User Successfully");
        setTimeout(() => {
          navigate("/");
        }, 200);
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="w-25 mx-auto my-5 card p-4">
        <h3 className="text-primary mb-4">Login</h3>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email..."
            value={loginData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password..."
            value={loginData.password}
          />
        </div>
        <button className="btn btn-primary mt-4 mb-2" type="submit">
          Login
        </button>
        <p className="forgot-password text-right">
          Does't have an account ?<Link to="/signup">Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
