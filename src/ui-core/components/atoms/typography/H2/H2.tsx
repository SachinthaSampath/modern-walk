import React from "react";
import "../Typography.css";

type Props={
  children:any,
  className:string
}

export default function H1({ children,className }:Props) {
  
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}
