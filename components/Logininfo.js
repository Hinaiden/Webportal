import React, { useState } from 'react'
import Frame from "../assets/Frame.png"
import "./Logininfo.css"


function Logininfo() {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(
      <i class="icon fa-sharp fa-solid fa-eye"></i>
    );
  
    const handleToggle = () => {
      if (type === "password") {
        setIcon(<i class="icon fa-sharp fa-solid fa-eye"></i>);
        setType("text");
      } else {
        setIcon(<i class="icon fa-sharp fa-solid fa-eye-slash"></i>);
        setType("password");
      }
    };
  return (
    <div className="login">
    <div className="icon">
<img className="frame" src = {Frame} />
  <h5>Secure Identity NFT</h5>
  </div>
    <span className="loginTitle">Login</span>
    <form className="loginForm">
      <label>User ID</label>
      <input
        type="text"
        className="loginInput"
        placeholder="Enter your user id"
      />
      <label>Password</label>
      <div className="position">
      <input
        type={type}
        className="loginInput"
        placeholder="Enter your password"
      />
      <span className="eye" onClick={handleToggle}>
        {icon}
      </span>
      </div>
      <button className="loginButton" type="submit ">
        Login
      </button>
    </form>
    <div className="reminder">
    </div>
  </div>
  )
}

export default Logininfo