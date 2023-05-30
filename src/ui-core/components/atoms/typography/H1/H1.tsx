import React from "react";
import "../Typography.css";

type Props={
  children:any
}
export default function H1({children}:Props) {
  return (
    <h1 className="main-heading">
      {children}
    </h1>
  );
}
