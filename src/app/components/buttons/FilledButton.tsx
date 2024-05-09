import { Button } from "@mui/material";
import React from "react";
import { CTAButtonProps } from "./GradientArrowButton";

const FilledButton: React.FC<CTAButtonProps> = ({ title, link }) => {
  return (
    <Button
      component="a"
      href={link}
      sx={{
        backgroundColor: "text.primary",
        color: "background.default",
        width: "100px",
        height: "30px",
        borderRadius: "20px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "text.secondary",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default FilledButton;
