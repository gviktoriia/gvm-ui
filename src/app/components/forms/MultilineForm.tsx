import { TextField } from "@mui/material";
import React from "react";
import { StandardFormProps } from "./StandardForm";

const MultilineForm: React.FC<StandardFormProps> = ({
  title,
  example,
  name,
  defaultValue,
}) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label={title}
      name={name}
      defaultValue={defaultValue}
      multiline
      rows={5}
      sx={{ m: 1, width: "100%" }}
      InputProps={{
        placeholder: example,
      }}
    />
  );
};

export default MultilineForm;
