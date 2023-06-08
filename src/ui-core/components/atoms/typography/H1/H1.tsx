import React from "react";
import "../Typography.css";

type H1Props={
  children:React.ReactNode
}
export default function H1({children}:H1Props) {
  return (
    <h1 className="main-heading">
      {children}
    </h1>
  );
}
