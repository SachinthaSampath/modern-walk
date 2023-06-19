import React from "react";
import "./SectionLayout.css";
import { H2 } from "../../components/atoms";
import { SectionLayoutProps } from "./SectionLayout.types";

export default function SectionLayout({
  children,
  heading,
}: SectionLayoutProps) {
  return (
    <div className="flex-container">
      <H2 className="flex-container-heading">{heading}</H2>
      <div className="flex-container-main">{children}</div>
    </div>
  );
}
