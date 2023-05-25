import React from "react";
import "./H1.css";

export default function H1({children}) {
  return (
    <h1 className="main-heading" href="https">
      {children}
    </h1>
  );
}
