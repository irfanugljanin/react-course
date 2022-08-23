import "./style.css";
import { useEffect, useState } from "react";

const Login = () => {
  let [auth, setAuth] = useState("signin");
  let [signedin, setSignedin] = useState(false);

  const changeAuth = () => {
    setAuth(auth === "signin" ? "signup" : "signin");
  };

  if (auth === "signin") {
    return (
      <div className="container">
        <div className="title">React</div>
        <div className="login-signup">
          <button>Login</button>
          <button onClick={changeAuth}>SignUp</button>
        </div>
        <button className="signin-google">Sign in with Google</button>
        <p>or</p>
        <input type="email" placeholder="yours@example.com" />
        <input type="password" placeholder="your password" />
        <p>Don't remember your password?</p>
        <button className="submit">sign in</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="title"></div>
      <div className="">
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <a onClick={changeAuth}>Already Registered? Click here!</a>
      </div>
    </div>
  );
};

export default Login;
