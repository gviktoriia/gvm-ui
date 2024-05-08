import { TextField } from "@mui/material";
import React from "react";

export interface StandardFormProps {
  title: string;
  example?: string;
  name?: string;
}

const StandardForm: React.FC<StandardFormProps> = ({
  title,
  example,
  name,
}) => {
  return (
    <TextField
      fullWidth
      label={title}
      name={name}
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
