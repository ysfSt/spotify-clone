import React from "react";
import "./Login.scss";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
        alt=""
      />
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
};

export default Login;
