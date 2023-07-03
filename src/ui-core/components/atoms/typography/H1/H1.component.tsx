import "../Typography.scss";
import { H1Props } from "./H1.types";

export default function H1({ children }: H1Props): React.JSX.Element {
  return <h1 className="main-heading">{children}</h1>;
}
