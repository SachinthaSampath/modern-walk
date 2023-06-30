import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./ui-core";
import { MensClothing } from "./ui-core";
import { WomensClothing } from "./ui-core";
import { LoginPage } from "./ui-core";
import { SignUpPage } from "./ui-core";

import { useUserContext } from "./contexts/";

import { User } from "./types/User";
import { GlobalStyles } from "./ui-core";
import { ThemeProvider } from "styled-components";

function App() {
  const { setUser: updateUser } = useUserContext();

  //get user from local storage and check when page reload
  useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (savedUser) {
      let valid_user: User = JSON.parse(savedUser);
      //set user details
      updateUser({
        email: valid_user.email,
        name: valid_user.name,
        username: valid_user.username,
        isLoggedIn: true,
      });
    }
  }, []);


  //define theme colors
  const theme = {
    background:{
      mens:"#2BD9AF",
      womens:"#FF5E84"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <div className="main-container">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mens" element={<MensClothing />} />
              <Route path="/womens" element={<WomensClothing />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </Router>
        </div> 
    </ThemeProvider>
  );
}

export default App;
