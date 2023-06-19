import React from "react";
import { InputFieldProps } from "./InputField.types";

const InputField = ({ value, className, type, name, id }: InputFieldProps) => {
  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        name={name}
        id={id}
      />
    </>
  );
};
export default InputField;
