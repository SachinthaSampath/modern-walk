import React from "react";
import "../Typography.css";

export default function H1({ children,className }) {
  console.log(className);
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}
