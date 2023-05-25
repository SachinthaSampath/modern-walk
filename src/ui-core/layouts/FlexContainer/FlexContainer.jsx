import React from "react";
import "./FlexContainer.css";

export default function FlexContainer({ children, heading }) {
  return (
    <div className="flex-container">
      <h2 className="flex-container-heading">{heading}</h2>
      <div className="flex-container-main">{children}</div>
    </div>
  );
}
