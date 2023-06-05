import React, { useState } from "react";

import "./LoginPage.css";

const LoginPage = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uname.trim()) {
      alert("Please enter valid username!");
      return;
    }
    if (!password) {
      alert("Please enter valid password!");
      return;
    }
    console.log(uname, password);
  };

  return (
    <div className="login-container">
      <div className="login">
        <form id="form-login" onSubmit={submitForm}>
          <p>
            <label>
              <b>User Name</b>
            </label>
            <input
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              type="text"
              name="uname"
              id="uname"
              placeholder="Username"
            />
          </p>

          <p>
            <label>
              <b>Password</b>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="psw"
              id="psw"
              placeholder="Password"
            />
          </p>

          <p>
            <input type="submit" name="login" id="login" value="Login" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
