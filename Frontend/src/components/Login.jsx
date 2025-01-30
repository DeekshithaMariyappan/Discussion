import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';
import axios from 'axios';
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin =async (e) =>{
    e.preventDefault()
    try{
        console.log("event triggered");
        const req = await axios.post("http://localhost:3001/login",{
          
          email:email,
          password:password
        })
        alert(req.data.response);
        if(req.data.loginStatus){
          setIsLoggedIn;
          navigate("/home");
        }
        else{
          navigate("/")
        }
      }
        catch(err){
          console.log(err);
        }
  }
  return (
    
    <div className="form-container">
      <h2 style={{color:'white'}}>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="switch-link">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      </div>
    
  );
};


  
export default Login;
