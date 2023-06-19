import React, { useRef } from "react";
import "./LoginPage.css";
import { useUpdateUser } from "../../../contexts/UserContext";
import { seachUser } from "../../../services/user.service";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

  //remove saved user from the local storage
  localStorage.removeItem('user');

  //set state
  // const [uname, setUname] = useState("");
  // const [password, setPassword] = useState("");

  //use contexts with custom hooks
  // const currentUser = useUser();
  const updateUser = useUpdateUser();

  //useRef to hold reference to input elements
  const usernnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  //navigation
  const navigate = useNavigate();

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

    //find user using api
    const loginUser = async () => {
      //add trycatch when caling external api ******
      const users = await seachUser({ username: uname, password: password });

      if (users.length) {
        let valid_user = users[0];
        //login success
        showValidLogin();
        //set user details
        updateUser({
          email: valid_user.email,
          name: valid_user.name,
          username: valid_user.username,
          isLoggedIn: true,
        });

        //store in local storage **
        localStorage.setItem('user',JSON.stringify(valid_user));

        navigate("/");
      } else {
        //login fail
        showInvalidLogin();
      }
    };

    loginUser();
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
    <div className="login-container">
      <div className="login">
        <form id="form-login" onSubmit={submitForm}>
          <div className="form-login-input-group">
            <div className="form-login-input-label">
              {" "}
              <label>
                <b>User Name</b>
              </label>
            </div>
            <div className="form-login-input">
              <input
                autoFocus
                ref={usernnameRef}
                type="text"
                name="uname"
                id="uname"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-login-input-group">
            <div className="form-login-input-label">
              {" "}
              <label>
                <b>Password</b>
              </label>
            </div>
            <div className="form-login-input">
              <input
                ref={passwordRef}
                type="password"
                name="psw"
                id="psw"
                placeholder="Password"
              />
            </div>
          </div>

          <p className="btn-container">
            <input type="submit" name="login" id="login" value="Login" />
            <button className="btn-sign-up">
              <Link to="/signup">SignUp</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
