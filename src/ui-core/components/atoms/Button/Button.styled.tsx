import { css, styled } from "styled-components";

const StyledButton = styled.button<{ type?: string }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: "#BF4F74";
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    cursor: pointer;
  }

  ${({ type }) =>
    type == "primary" &&
    css`
      background: #bf4f74;
      color: white;
    `}

  ${({ type }) =>
    type == "danger" &&
    css`
      background: red;
      color: white;
    `}
`;

export default StyledButton;
