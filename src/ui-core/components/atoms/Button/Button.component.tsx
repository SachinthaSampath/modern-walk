import { ButtonProps } from "./Button.types";

function Button({ children }: ButtonProps) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
export default Button;
