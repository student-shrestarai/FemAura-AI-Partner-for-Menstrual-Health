import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reg.css";

const Registration = () => {
  const navigate = useNavigate();

  const [regUsers, setRegUsers] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      regUsers.name === "" ||
      regUsers.email === "" ||
      regUsers.password === "" ||
      regUsers.role === ""
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regUsers),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const result = await response.text();
      console.log("Server Response:", result);
      alert("Data submitted successfully!");

      navigate("/login", { state: { reportData: result } });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. See console for details.");
    }
  };

  const onLogin = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegUsers((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="reg-page-container">
      <div className="reg-card">
        <h2 className="reg-title">FemAura Registration</h2>

        <form onSubmit={onSubmit} className="reg-form-box">
          <div className="reg-input-group">
            <label className="reg-label">Name</label>
            <input
              type="text"
              name="name"
              className="reg-input-box"
              value={regUsers.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="reg-input-group">
            <label className="reg-label">Email</label>
            <input
              type="email"
              name="email"
              className="reg-input-box"
              value={regUsers.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="reg-input-group">
            <label className="reg-label">Password</label>
            <input
              type="password"
              name="password"
              className="reg-input-box"
              value={regUsers.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="reg-input-group">
            <label className="reg-label">Role</label>
            <input
              type="text"
              name="role"
              className="reg-input-box"
              value={regUsers.role}
              onChange={handleChange}
              placeholder="Enter your role"
            />
          </div>

          <button type="submit" className="reg-btn">
            Register
          </button>

          <p className="reg-login-text">Already Registered?</p>

          <button type="button" onClick={onLogin} className="goto-login-btn">
            Login
          </button>
        </form>

        {message && <p className="reg-message">{message}</p>}
      </div>
    </div>
  );
};

export default Registration;
