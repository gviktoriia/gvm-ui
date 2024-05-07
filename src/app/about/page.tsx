import React from "react";
import HeaderTypography from "../components/headers/HeaderTypography";
import StandardLayout from "../components/layouts/StandardLayout";
import GradientArrowButton from "../components/buttons/GradientArrowButton";
import TwoColumnLayout from "../components/layouts/TwoColumnLayout";
import Image from "next/image";
import StaffCard from "../components/cards/StaffCard";
import { STAFF } from "../../../utils/staffUtils";
import { Grid } from "@mui/material";
import TeamFeatureCard from "../components/cards/TeamFeatureCard";
import { TEAM_FEATURES } from "../../../utils/featuresUtils";

const page = () => {
  return (
    <>
      <StandardLayout
        small_title="The folks behind the product"
        title="Turning security into innovation"
        content={<></>}
      />
      <StandardLayout
        title="Our story (so far)"
        subtitle="We have transformed product development, making it faster, simpler... better! That's why in just three years we now help more developers build projects than anyone else."
        content={
          <TwoColumnLayout
            title="We came together over a shared excitement about building a product that could solve our own problem of where our next favourite hack is coming from. But also a product that helps everyone thrive in this market: from founders and engineers to companies and investors. 
            GVM-UI is a product that connects people around the topics and ideas that fascinate them. The idea that we can use technology to take our experience, as security lovers, to a new dimension and leave the computer industry in better shape while we're at it. You can dive into the atoms that make up a product, share the moments that move you and discuss the ideas you find compelling."
            title_font_size={{ xs: "14px", md: "14px", lg: "16px" }}
            picture={
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={380}
                height={240}
                alt="Cutie"
              />
            }
            content={<></>}
          />
        }
      />
      <StandardLayout
        title="We are a happy, small team"
        subtitle="Various versions of Lorem Ipsum have evolved over the years, sometimes by accident, sometimes on purpose, and by injecting humour and the like."
        content={
          <Grid
            container
            width="100%"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
            gap={3}
          >
            {STAFF.map((empl, index) => (
              <StaffCard
                key={index}
                name={empl.name}
                position={empl.position}
                image={empl.image}
                link={empl.link}
              />
            ))}
          </Grid>
        }
      />
      <StandardLayout
        title="Join a team of makers"
        subtitle="We are makers at heart. Problem solvers and storytellers. We are a diverse team of individuals who build things to make our customers happy."
        content={
          <Grid
            container
            width="100%"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
            gap={5}
          >
            {TEAM_FEATURES.map((feature, index) => (
              <Grid item xs={3} key={index}>
                <TeamFeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </Grid>
            ))}
          </Grid>
        }
      />
      <StandardLayout
        small_title="The security first platform"
        title="Supercharge your security"
        subtitle="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        content={<GradientArrowButton title="Start building" />}
      />
    </>
  );
};

export default page;
