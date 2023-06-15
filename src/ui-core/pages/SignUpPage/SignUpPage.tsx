import React, { useState } from "react";
import "./SignUpPage.css";
import { createUser } from "../../../services/user.service";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  //set state
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [rePassword, setRePassword] = useState("");

  //navigation
  const navigate = useNavigate();

  //function to handle form submission
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    //validate name
    if (!name.trim()) {
      let el = document.getElementById("name");
      el?.focus();
      return;
    }

    //validate email
    if (!email.trim()) {
      let el = document.getElementById("email");
      el?.focus();
      return;
    }

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
    //compare passwords
    if (password !== rePassword) {
      let el = document.getElementById("repsw") as HTMLInputElement;
      el?.focus();
      el?.select();
      return;
    }

    // console.log(name, email, uname, password, rePassword);

    //send request to JSON Server and find user with the username
    (async () => {
      try {
        await createUser({
          name: name,
          username: uname,
          password: password,
          email: email,
        });
        showValidSignUp();
      } catch (error) {
        showInvalidSignUp();
      }
    })();
  };

  //show invalid sign up status
  const showInvalidSignUp = () => {
    alert("Unable to sign up!");
  };

  //show valid sign up status
  const showValidSignUp = () => {
    alert("Sign up success!");
    //redirect to login page
    navigate("/login");
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <form id="form-sign-up" onSubmit={submitForm}>
          <p>
            <label>
              <b>Name</b>
            </label>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </p>

          <p>
            <label>
              <b>Email</b>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </p>

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
            <label>
              <b>Confirm Password</b>
            </label>
            <input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              name="repsw"
              id="repsw"
              placeholder="Confirm Password"
            />
          </p>

          <p>
            <input type="submit" name="sign-up" id="sign-up" value="Sign Up" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
