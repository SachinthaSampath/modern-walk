import React, { LegacyRef } from "react";

export type InputFieldProps = {
  type: string;
  value?: string | number;
  className?: string;
  name?: string;
  id?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  placeholder?: string;
  autofocus?: boolean;
};
