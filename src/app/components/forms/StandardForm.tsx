import { TextField } from "@mui/material";
import React from "react";

export interface StandardFormProps {
  title: string;
  example?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
}

const StandardForm: React.FC<StandardFormProps> = ({
  title,
  example,
  name,
  required,
  defaultValue = " ",
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
    />
  );
};

export default StandardForm;
