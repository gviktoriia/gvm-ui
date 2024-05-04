import { TextField } from "@mui/material";
import React from "react";

interface SignupFormProps {
  title: string;
  example?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ title, example }) => {
  return (
    <TextField
      fullWidth
      label={title}
      id="outlined-start-adornment"
      sx={{ m: 1, width: "100%" }}
      InputProps={{
        placeholder: example,
      }}
    />
  );
};

export default SignupForm;
