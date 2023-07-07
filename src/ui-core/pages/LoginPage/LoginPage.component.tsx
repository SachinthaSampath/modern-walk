import React, { useRef } from "react";
import { useUserContext } from "../../../contexts";
import { UsersAPI } from "../../../services";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageProps } from "./LoginPageProps";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const LoginPage: React.FC<LoginPageProps> = (): React.JSX.Element => {
  //remove saved user from the local storage
  localStorage.removeItem("user");

  //set state
  // const [uname, setUname] = useState("");
  // const [password, setPassword] = useState("");

  //use contexts with custom hooks
  const { setUser } = useUserContext();

  //useRef to hold reference to input elements
  const usernnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  //navigation
  const navigate = useNavigate();

  //use reqct query mutation for login
  const loginUserMutation = useMutation({
    mutationFn: UsersAPI.seachUser,

    onSuccess: (data, variables, context) => {
      //variables - arguments send by mutate() call
      //console.log(variables);

      //validate login on query success
      if (data.length) {
        let valid_user = data[0];
        //login success
        showValidLogin();
        //set user details
        setUser({
          email: valid_user.email,
          name: valid_user.name,
          username: valid_user.username,
          isLoggedIn: true,
        });

        //store in local storage **
        localStorage.setItem("user", JSON.stringify(valid_user));

        navigate("/");
      } else {
        //login fail
        showInvalidLogin();
      }
    },
  });

  //function to handle form submission
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    //get values from input fields
    let uname = usernnameRef.current?.value || "";
    let password = passwordRef.current?.value || "";

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

    //call react query mutation with parameters
    loginUserMutation.mutate({
      username: uname,
      password: password,
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
    // alert("Login success!");
    //save login status
    window.localStorage.loggedIn = true;
  };

  return (
    <>
      <div className="h-screen flex items-center">
        <form
          className="mx-auto space-y-4 rounded-xl p-6 shadow-lg md:w-1/2 xl:w-1/3 "
          id="form-login"
          onSubmit={submitForm}
        >
          <div className="flex flex-col items-stretch">
            <label className="block text-sm font-medium text-slate-700">
              {/* User Name */}
            </label>
            <input
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
             py-1 text-sm placeholder-slate-400 shadow-sm
             focus:border-sky-500 
             focus:outline-none focus:ring-1 focus:ring-sky-500"
              autoFocus
              ref={usernnameRef}
              type="text"
              name="uname"
              id="uname"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col items-stretch">
            <label className="block text-sm font-medium text-slate-700">
              {/* Password */}
            </label>

            <input
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
          py-1 text-sm placeholder-slate-400 shadow-sm
          focus:border-sky-500 
          focus:outline-none focus:ring-1 focus:ring-sky-500"
              ref={passwordRef}
              type="password"
              name="psw"
              id="psw"
              placeholder="Password"
            />
          </div>

          <p className="my-4">
            <input
              type="submit"
              name="login"
              id="login"
              value="Login"
              className="mt-3 w-full rounded-full bg-violet-600 px-3 py-1 font-medium text-white hover:cursor-pointer hover:bg-violet-800"
            />
            <button className="mt-3 w-full rounded-full bg-green-600 px-3 py-1 font-medium text-white hover:cursor-pointer hover:bg-green-800">
              <Link to="/signup">SignUp</Link>
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
