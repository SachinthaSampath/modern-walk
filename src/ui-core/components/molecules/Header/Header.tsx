import React, { useContext } from "react";
import { Link } from "react-router-dom";
import H1 from "../../atoms/typography/H1/H1";
import "./Header.css";
import { useUser } from "../../../../contexts/UserContext";

type HeaderProps = {
  headingText: string;
};

export default function Header({ headingText }: HeaderProps) {
  const user = useUser();

  return (
    <div className="main-heading-container">
      <div className="heading-titile">
        <Link to="/">
          <H1>{headingText}</H1>
        </Link>
      </div>
      <div className="heading-user-section">
        <p><img src="/user.png"/> {user?.name}</p>
        <p><Link to="/login">Logout</Link></p>
      </div>
    </div>
  );
}
