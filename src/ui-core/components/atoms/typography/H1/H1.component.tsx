import "../Typography.css";
import { H1Props } from "./H1.types";


export default function H1({children}:H1Props) {
  return (
    <h1 className="main-heading">
      {children}
    </h1>
  );
}
