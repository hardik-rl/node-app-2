import React, { useState } from "react";
import { signupUser } from "./api";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...signup };
    data[name] = value;
    setSignup(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signupUser(signup);
      if (response.status !== 201) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = response.data;
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-25 mx-auto my-5 card p-4">
      <h3 className="text-primary mb-4">Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First name"
          onChange={handleChange}
          value={signup.firstName}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last name"
          onChange={handleChange}
          value={signup.lastName}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
          value={signup.email}
        />
      </div>
      <div className="mb-3">
        <label>Gender</label>

        <select
          className="form-select"
          name="gender"
          onChange={handleChange}
          value={signup.gender}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleChange}
          value={signup.password}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login?</a>
      </p>
    </form>
  );
};

export default SignUp;
