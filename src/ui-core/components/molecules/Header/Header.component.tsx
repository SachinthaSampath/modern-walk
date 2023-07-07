import { Link } from "react-router-dom";
import { H1 } from "../../atoms"; 
import { useUserContext } from "../../../../contexts";
import { HeaderProps } from "./Header.types";

export default function Header({
  headingText,
}: HeaderProps): React.JSX.Element {
  const {user} = useUserContext();

  return (
    <div className="flex justify-between py-4 px-3">
      <div className="flex justify-center w-full overflow-hidden h-10">
        <Link className="font-bold text-3xl text-center hover:text-4xl transition-all " to="/">
          <H1 >{headingText}</H1>
        </Link>
      </div>
      <div className="flex justify-between items-center space-x-2 shrink-0">
        {user.isLoggedIn ? (
          <>
            <p className="flex items-center">
              <img className="w-6 lg:w-8" src="/user.png" alt="User icon" /> &nbsp;{user?.name}
            </p>
            <p>
              <Link to="/login" className="hover:ring-1 px-3 py-1 rounded-full">Logout</Link>
            </p>
          </>
        ) : (
          <>
            <p>
              <Link to="/login" className="hover:ring-1 px-3 py-1 rounded-full">Login</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
