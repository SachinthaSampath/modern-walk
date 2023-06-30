import { Link } from "react-router-dom";
import { H1 } from "../../atoms";
import { useUserContext } from "../../../../contexts";
import { HeaderProps } from "./Header.types";
import StyledHeader from "./Header.styled";

export default function Header({
  headingText,
}: HeaderProps): React.JSX.Element {

  const { user } = useUserContext();

  return (
    
    <StyledHeader>
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
    </StyledHeader>
  );
}
