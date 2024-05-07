import { Button } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export interface CTAButtonProps {
  title?: string;
  link?: string;
  width?: string;
  height?: string;
  bgImage?: string;
}

const GradientArrowButton = ({
  title,
  link,
  width,
  height,
  bgImage,
}: CTAButtonProps) => {
  return (
    <Button
      endIcon={<KeyboardDoubleArrowRightIcon />}
      href={link}
      sx={{
        borderRadius: "40px",
        backgroundImage:
          bgImage ||
          "linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)",
        marginTop: "10px",
        marginBottom: "10px",
        padding: "6px 24px",
        width: { width },
        height: { height },
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

export default GradientArrowButton;
