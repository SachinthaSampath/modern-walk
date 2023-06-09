import React, { useContext, useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";

const LoginPage = () => {
  //set state
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  //useContext
  const { user, setUser } = useContext(UserContext);

  //function to handle form submission
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    //validate username
    if (!uname.trim()) {
      // alert("Please enter valid username!");
      let el = document.getElementById("uname");
      el?.focus();
      return;
    }

    //validate password
    if (!password) {
      // alert("Please enter valid password!");
      let el = document.getElementById("psw");
      el?.focus();
      return;
    }

    //send request to JSON Server and find user with the username
    axios
      .get("http://localhost:5000/users", {
        params: {
          username: uname,
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.length) {
          let user = response.data[0];
          //validate password
          let received_psw = user.password;
          if (received_psw === password) {
            //update state
            setUser({
              name: user.name,
              email: user.email,
              username: user.username,
              isLoggedIn: true,
            });
            showValidLogin();
          } else {
            showInvalidLogin();
          }
        } else {
          showInvalidLogin();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("finally");
      });
  };

  //show invalid login status
  const showInvalidLogin = () => {
    alert("Invalid credentials!");
    let el = document.getElementById("uname") as HTMLInputElement;
    el?.focus();
    el?.select();
  };

  //show valid login status
  const showValidLogin = () => {
    alert("Login success!");
    //save login status
    window.localStorage.loggedIn = true;
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
              autoFocus
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
