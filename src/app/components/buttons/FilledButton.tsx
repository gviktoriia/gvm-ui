import { Button } from "@mui/material";
import React from "react";
import { CTAButtonProps } from "./GradientArrowButton";

interface FilledButtonProps extends CTAButtonProps {
  onClick?: () => void;
}

const FilledButton: React.FC<FilledButtonProps> = ({
  title,
  link,
  onClick,
}) => {
  return (
    <Button
      component="a"
      href={link}
      onClick={onClick}
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
