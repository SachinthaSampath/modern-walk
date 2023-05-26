import React from "react";
import "../Typography.css";

export default function H1({ children }) {
  return (
    <h2 className="main-heading">
      {children}
    </h2>
  );
}
