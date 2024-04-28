import React from "react";
import StandardLayout from "../../layouts/StandardLayout";
import AnimatedCard from "../../cards/AnimatedCard";
import { SECURITY_FEATURES } from "../../../../../utils/featuresUtils";
import { Grid } from "@mui/material";

const Advertisement = () => {
  return (
    <StandardLayout
      title="Faster. Smarter."
      subtitle="There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      content={
        <>
          <Grid container direction="column" rowGap={3}>
            <Grid item>
              {SECURITY_FEATURES.slice(0, -2).map((option, index) => (
                <AnimatedCard
                  key={index}
                  title={option.title}
                  subtitle={option.description}
                  button_text={option.button_text}
                  isButton={option.isButton}
                />
              ))}
            </Grid>
            <Grid item>
              <Grid
                container
                direction={{ md: "row", sm: "column", xs: "column" }}
                justifyContent="center"
                spacing={3}
              >
                {SECURITY_FEATURES.slice(-2).map((option, index) => (
                  <Grid item xs={6} key={index}>
                    <AnimatedCard
                      title={option.title}
                      subtitle={option.description}
                      button_text={option.button_text}
                      isButton={option.isButton}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </>
      }
    />
  );
};

export default Advertisement;
