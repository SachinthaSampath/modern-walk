import React, { ReactNode } from "react";
import "@/app/globals-store1.css";

const Store1Layout = ({ children }: { children: React.ReactNode }):ReactNode => {
  return <div className="bg-slate-400">{children}</div>;
};

export default Store1Layout;
