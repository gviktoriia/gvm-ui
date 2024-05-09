"use client";

import { TextField } from "@mui/material";
import React from "react";

export interface StandardFormProps {
  title?: string;
  example?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StandardForm: React.FC<StandardFormProps> = ({
  title,
  example,
  name,
  required,
  defaultValue,
  onChange,
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      required={required}
      label={title}
      name={name}
      defaultValue={defaultValue}
      type="text"
      id="outlined-start-adornment"
      sx={{ m: 1, width: "100%" }}
      InputProps={{
        placeholder: example,
      }}
      onChange={onChange}
      {...rest}
    />
  );
};

export default StandardForm;
