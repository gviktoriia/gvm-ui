import { Button } from "@mui/material";
import React from "react";
import { CTAButtonProps } from "./GradientArrowButton";

const FilledButton: React.FC<CTAButtonProps> = ({ title, link }) => {
  return (
    <Button
      sx={{
        backgroundColor: "text.primary",
        color: "background.default",
        width: "100px",
        height: "30px",
        borderRadius: "20px",
        textTransform: "none",
      }}
    >
      {title}
    </Button>
  );
};

export default FilledButton;
