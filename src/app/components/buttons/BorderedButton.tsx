import React from "react";
import { CTAButtonProps } from "./GradientArrowButton";
import { Button } from "@mui/material";

const BorderedButton: React.FC<CTAButtonProps> = ({ title, link }) => {
  return (
    <Button
      component="a"
      href={link}
      sx={{
        border: "2px solid",
        borderColor: "text.primary",
        color: "text.primary",
        width: "100px",
        height: "30px",
        borderRadius: "20px",
        textTransform: "none",
        fontWeight: "700",
        "&:hover": {
          backgroundColor: "text.primary",
          color: "background.default",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default BorderedButton;
