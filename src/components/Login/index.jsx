import React, { useState } from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="container">
      <div className="title">React</div>
      <div className="login-signup">
        <button>Login</button>
        <button>SignUp</button>
      </div>
      <button className="signin-google">Sign in witg Google</button>
      <p>or</p>
      <input type="text" placeholder="yours@example.com" />
      <input type="text" placeholder="your password" />
      <p>Don't remember your password?</p>
      <button className="submit">LOG IN ></button>
    </div>
  );
};

export default Login;
