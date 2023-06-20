import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts";
import { ThemeProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <UserProvider>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </UserProvider>
);
