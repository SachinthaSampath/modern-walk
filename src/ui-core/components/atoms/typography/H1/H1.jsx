import React from "react";
import "../Typography.css";
export default function H1({children}) {
  return (
    <h1 className="main-heading">
      {children}
    </h1>
  );
}
