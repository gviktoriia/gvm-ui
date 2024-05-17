import React from "react";
import StandardLayout from "../../layouts/StandardLayout";
import { Grid } from "@mui/material";
import GradientArrowButton from "../../buttons/GradientArrowButton";
import StartIconButton from "../../buttons/StartIconButton";
import {
  DOCUMENTATION_ROUTE,
  LOGIN_ROUTE,
} from "../../../../../utils/routesUtil";

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
          <GradientArrowButton title="Get started" link={LOGIN_ROUTE} />
          <StartIconButton title="Read the docs" link={DOCUMENTATION_ROUTE} />
        </Grid>
      }
    />
  );
};

export default Hero;
