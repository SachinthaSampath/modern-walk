"use client";
import React, { ReactNode, useState } from "react";
// import StateChangeTestChild from "./StateChangeTestChild";

const StateChangeTestParent = ({ children }: { children: ReactNode }) => {
  const [count, setCout] = useState(0);

  console.log("StateChangeTestParent is rendering");

  return (
    <div>
      <button
        onClick={() => {
          setCout((prevCount) => prevCount + 1);
        }}
      >
        {count}
      </button>
      <div>
        {/* <StateChangeTestChild /> */}
        {children}
      </div>
    </div>
  );
};

export default StateChangeTestParent;
