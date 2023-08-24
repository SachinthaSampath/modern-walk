import React, { ReactNode } from "react";
import "@/app/globals-store2.css";
const Store2Layout = ({ children }: { children: React.ReactNode }):ReactNode => {
  return <div className="bg-yellow-100">{children}</div>;
};

export default Store2Layout;
