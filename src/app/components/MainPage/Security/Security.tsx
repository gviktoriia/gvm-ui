import React from "react";
import TwoColumnLayout from "../../layouts/TwoColumnLayout";
import { AUTH_FEATURES } from "../../../../../utils/featuresUtils";
import { Grid } from "@mui/material";
import FeatureCard from "../../cards/FeatureCard";
import { LineChart } from "@mui/x-charts";

const Security = () => {
  return (
    <TwoColumnLayout
      small_title="The security first platform"
      title="Simplify your security with authentication services"
      subtitle="Define access roles for the end-users, and extend your
    authorization capabilities to implement dynamic access control."
      align="left"
      maxWidth="550px"
      content={
        <Grid container gap={1}>
          {AUTH_FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              height={{ lg: "60px", md: "60px", xs: "100px" }}
            />
          ))}
        </Grid>
      }
      picture={
        <Grid paddingTop={{ lg: "150px", sm: "50px" }}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </Grid>
      }
    />
  );
};

export default Security;
