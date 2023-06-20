import { ButtonProps } from "./Button.types";

function Button({ children }: ButtonProps):React.JSX.Element {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
export default Button;
