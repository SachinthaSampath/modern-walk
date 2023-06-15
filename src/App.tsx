import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./ui-core/pages/HomePage/HomePage";
import MensClothing from "./ui-core/pages/MensClothing/MensClothing";
import WomensClothing from "./ui-core/pages/WomensClothing/WomensClothing";
import LoginPage from "./ui-core/pages/LoginPage/LoginPage";
import SignUpPage from "./ui-core/pages/SignUpPage/SignUpPage";

import "./App.css";
import UserProvider from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  console.log(process.env.REACT_APP_API_BASE_URL);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
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
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
