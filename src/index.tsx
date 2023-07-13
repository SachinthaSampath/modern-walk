import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts";
import { ThemeProvider } from "./contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </UserProvider>
  </QueryClientProvider>
);
