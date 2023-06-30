import StyledButton from "./Button.styled";
import { ButtonProps } from "./Button.types";

function Button({ children, type }: ButtonProps): React.JSX.Element {
  return <StyledButton type={type}>{children}</StyledButton>;
}
export default Button;
