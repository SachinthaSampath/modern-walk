import React from "react";
import { Link } from "react-router-dom";
import H1 from "../../atoms/typography/H1/H1";
import "./Header.css";

type HeaderProps={
  headingText:string
}

export default function Header({headingText}:HeaderProps) {
  return (
    <div className="main-heading-container">
      <Link to="/">
        <H1>{headingText}</H1>
      </Link>
    </div>
  );
}
