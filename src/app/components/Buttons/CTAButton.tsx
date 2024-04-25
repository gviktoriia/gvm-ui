import { Button } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface CTAButtonProps {
  title: string;
}

const CTAButton = ({ title }: CTAButtonProps) => {
  return (
    <Button
      endIcon={<KeyboardDoubleArrowRightIcon />}
      sx={{
        borderRadius: "40px",
        backgroundImage:
          "linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)",
        margin: "10px",
        padding: "6px 24px",
        fontSize: "18px",
        fontWeight: "500",
        textAlign: "center",
        textTransform: "none",
        transition: "0.5s",
        backgroundSize: "200% auto",
        color: "white",
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

export default CTAButton;
