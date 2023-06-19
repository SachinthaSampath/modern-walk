import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./ui-core";
import { MensClothing } from "./ui-core";
import { WomensClothing } from "./ui-core";
import { LoginPage } from "./ui-core";
import { SignUpPage } from "./ui-core";

import "./App.css";
import { useUpdateUser } from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { User } from "./types/User";

function App() {
  const queryClient = new QueryClient();
  const updateUser = useUpdateUser();

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

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
