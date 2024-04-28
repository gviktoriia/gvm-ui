import React from "react";
import CTAButton from "../../buttons/GradientArrowButton";
import SecondaryButton from "../../buttons/StartIconButton";
import StandardLayout from "../../layouts/StandardLayout";
import { Grid } from "@mui/material";

const Hero = () => {
  return (
    <StandardLayout
      title="GVM-UI Template"
      subtitle="Our landing page template works on all devices, so you only have to set
    it up once, and get beautiful results forever."
      title_font_size={{ lg: "42px", md: "32px", xs: "24px" }}
      align="center"
      content={
        <Grid container justifyContent="center" gap={2}>
          <CTAButton title="Get started" />
          <SecondaryButton title="Read the docs" />
        </Grid>
      }
    />
  );
};

export default Hero;
