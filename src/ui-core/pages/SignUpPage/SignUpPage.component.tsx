import React, { useState } from "react";
import "./SignUpPage.css";
import { createUser } from "../../../services/user.service";
import { Link, useNavigate } from "react-router-dom";
import { SignUpPageProps } from "./SignUpPageProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UsersAPI } from "../../../services";

const SignUpPage: React.FC<SignUpPageProps> = (): React.JSX.Element => {
  //set state
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [rePassword, setRePassword] = useState("");

  //navigation
  const navigate = useNavigate();

  //queryClient to invalidate query data
  const quaryClient = useQueryClient();

  //crate mutation
  const signUpUserMutation = useMutation({
    mutationFn: UsersAPI.createUser,
    onSuccess: (data, variables, context) => {
      showValidSignUp();
      //invalidate cached query result
      quaryClient.invalidateQueries(["users"]);
    },
  });

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

    //send valid data to mutation
    signUpUserMutation.mutate({
      name: name,
      username: uname,
      password: password,
      email: email,
    });
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
          <div className="form-sign-up-input-group">
            <div className="form-sign-up-input-label">
              <label>
                <b>Name</b>
              </label>
            </div>
            <div className="form-sign-up-input">
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-sign-up-input-group">
            <div className="form-sign-up-input-label">
              <label>
                <b>Email</b>
              </label>
            </div>
            <div className="form-sign-up-input">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-sign-up-input-group">
            <div className="form-sign-up-input-label">
              {" "}
              <label>
                <b>User Name</b>
              </label>
            </div>
            <div className="form-sign-up-input">
              <input
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                type="text"
                name="uname"
                id="uname"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-sign-up-input-group">
            <div className="form-sign-up-input-label">
              <label>
                <b>Password</b>
              </label>
            </div>
            <div className="form-sign-up-input">
              {" "}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="psw"
                id="psw"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-sign-up-input-group">
            <div className="form-sign-up-input-label">
              <label>
                <b>Confirm Password</b>
              </label>
            </div>
            <div className="form-sign-up-input">
              {" "}
              <input
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                name="repsw"
                id="repsw"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <p className="btn-container">
            <input type="submit" name="sign-up" id="sign-up" value="Sign Up" />
            <button className="btn-sign-up">
              <Link to="/login">Login</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
