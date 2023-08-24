"use client";

import React, { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import ThemeProvider from "./ThemeContext";
import { CartProvider } from "./CartContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <ThemeProvider>
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default Providers;
