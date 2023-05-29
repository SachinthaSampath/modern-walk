import React from "react";
import "./SectionLayout.css";
import H2 from "../../components/atoms/typography/H2/H2";

export default function SectionLayout({ children, heading }) {
  return (
    <div className="flex-container">
      <H2 className="flex-container-heading">{heading}</H2>
      <div className="flex-container-main">{children}</div>
    </div>
  );
}
