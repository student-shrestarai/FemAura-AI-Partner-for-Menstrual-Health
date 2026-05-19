import React from 'react'
import{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
     const[loggedUser , setloggedUser] = useState({ email:"" , password:"" })
       const[message  , setMessage] = useState("")

      


        const handleChange = (e) => {
    const { name, value } = e.target;
    setloggedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

       const handleLogin= async(e)=>{
        e.preventDefault()
        console.log("Aunthenticating User" , loggedUser)
        if(loggedUser.email===''|| loggedUser.password===''){
            setMessage("Filed cannot be Empty")
            return
        }
          
      try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loggedUser),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const result = await response.text(); // your Spring Boot returns a String report
    localStorage.setItem("userEmail", loggedUser.email);
    console.log("Server Response:", result);
    alert("Login Suceesful!");

    navigate("/home", { state: { reportData: result } });
  } catch (error) {
    console.error("Error submitting data:", error);
    alert("Failed to submit data. See console for details.");
  }


    
  };


  const handleRegister=()=>{
    navigate("/")
  }

     
  return (

   <div className="auth-body">
<div className="login-container">
      <h3>FemAura Login</h3>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor='email' className="login-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="login-input"
            value={loggedUser.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor='password' className="login-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="login-input"
            value={loggedUser.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login_button">Login</button>
         <p>Not Registered ?</p>
         <button type="submit" onClick={handleRegister} className="reg_button">Register</button>

      </form>
      {message && (
        <p className="error-message">
          {message}
        </p>
      )}
    </div>
    </div>
  )
}

export default Login
