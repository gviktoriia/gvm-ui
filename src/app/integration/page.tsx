import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import FeatureCard from "../components/cards/FeatureCard";
import { Grid } from "@mui/material";
import { INTEGRATION_FEATURES } from "../../../utils/featuresUtils";
import GradientArrowButton from "../components/buttons/GradientArrowButton";

const page = () => {
  return (
    <>
      <StandardLayout
        small_title="Integrations & Add-ons"
        title="Make Stellar uniquely yours"
        subtitle="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
        content={
          <Grid container width="100%" justifyContent="center" gap={3}>
            {INTEGRATION_FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </Grid>
        }
      />
      <StandardLayout
        small_title="The security first platform"
        title="Build your own integration"
        subtitle="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        content={<GradientArrowButton title="Start building" />}
      />
    </>
  );
};

export default page;
