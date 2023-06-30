import React from "react";
import { styled } from "styled-components";

import { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = styled.input`
  padding: 5px;
  border: 1px solid black;
  margin-left: 10px;
  border: none;
  border-radius: 3px;
  padding: 8px;
`;
export default InputField;
