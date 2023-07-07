import React, { useState } from "react";
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
    <div className="flex h-screen items-center">
      <form
        id="form-sign-up"
        onSubmit={submitForm}
        className="mx-auto space-y-4 rounded-xl p-6 shadow-lg md:w-1/2 xl:w-1/3 "
      >
        <div className="flex flex-col items-stretch">
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <input
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            type="text"
            name="uname"
            id="uname"
            placeholder="Username"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="psw"
            id="psw"
            placeholder="Password"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            type="password"
            name="repsw"
            id="repsw"
            placeholder="Confirm Password"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <p className="my-4">
          <input
            type="submit"
            name="sign-up"
            id="sign-up"
            value="Sign Up"
            className="mt-3 w-full rounded-full bg-violet-600 px-3 py-1 font-medium text-white hover:cursor-pointer hover:bg-violet-800"
          />
          <button className="mt-3 w-full rounded-full bg-green-600 px-3 py-1 font-medium text-white hover:cursor-pointer hover:bg-green-800">
            <Link to="/login">Login</Link>
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
