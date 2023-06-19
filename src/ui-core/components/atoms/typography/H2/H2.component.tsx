import React from "react";
import "../Typography.css";
import { H2Props } from "./H2.types";



export default function H2({ children,className }:H2Props) {
  
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}
