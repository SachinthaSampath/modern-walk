import { Link } from "react-router-dom";
import { H1 } from "../../atoms";
import "./Header.css";
import { useUser } from "../../../../contexts/UserContext";
import { HeaderProps } from "./Header.types";

export default function Header({
  headingText,
}: HeaderProps): React.JSX.Element {
  const user = useUser();

  return (
    <div className="main-heading-container">
      <div className="heading-titile">
        <Link to="/">
          <H1>{headingText}</H1>
        </Link>
      </div>
      <div className="heading-user-section">
        {user.isLoggedIn ? (
          <>
            <p>
              <img src="/user.png" alt="User icon" /> {user?.name}
            </p>
            <p>
              <Link to="/login">Logout</Link>
            </p>
          </>
        ) : (
          <>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
