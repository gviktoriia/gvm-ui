import { Button } from "@mui/material";
import React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { CTAButtonProps } from "./GradientArrowButton";

const StartIconButton = ({ title, link }: CTAButtonProps) => {
  return (
    <Button
      startIcon={<AutoFixHighIcon />}
      href={link}
      sx={{
        borderRadius: "40px",
        backgroundColor: "#E5E4E2",
        margin: "10px",
        padding: "6px 24px",
        fontSize: "18px",
        fontWeight: "500",
        textAlign: "center",
        textTransform: "none",
        "&:hover": {
          backgroundPosition: "right center",
          textDecoration: "none",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default StartIconButton;
