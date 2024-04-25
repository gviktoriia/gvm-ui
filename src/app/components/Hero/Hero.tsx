import { Box, Typography } from "@mui/material";
import React from "react";
import CTAButton from "../Buttons/CTAButton";
import SecondaryButton from "../Buttons/SecondaryButton";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      sx={{
        minHeight: "90vh",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "42px", md: "30px", xs: "22px" },
          weight: "700",
        }}
      >
        GVM-UI Template
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "24px", md: "20px", xs: "18px" },
          weight: "400",
          maxWidth: "800px",
          padding: "30px",
        }}
      >
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </Typography>
      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
        <CTAButton title="Get started" />
        <SecondaryButton title="Read the docs" />
      </Box>
    </Box>
  );
};

export default Hero;
