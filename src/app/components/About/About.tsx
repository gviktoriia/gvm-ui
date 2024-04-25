import { Box, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../FeatureCard";

const About = () => {
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
        How GVM-UI works
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "24px", md: "20px", xs: "18px" },
          weight: "400",
          maxWidth: "800px",
          padding: "30px",
        }}
      >
        GVM-UI revolutionizes Next.js development by providing a structured and
        efficient approach to building modern user interfaces.
      </Typography>
      <FeatureCard />
    </Box>
  );
};

export default About;
