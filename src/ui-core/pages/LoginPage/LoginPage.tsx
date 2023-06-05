import React from "react";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login">
        <form id="form-login" >
          <label>
            <b>User Name</b>
          </label>
          <input type="text" name="uname" id="uname" placeholder="Username" />
          <br />
          <br />
          <label>
            <b>Password</b>
          </label>
          <input type="password" name="psw" id="psw" placeholder="Password" />
          <br />
          <br />
          <input type="button" name="login" id="login" value="Login" />
          <br />
          <br /> 
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
