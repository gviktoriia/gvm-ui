import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import { Grid } from "@mui/material";
import { PRICES } from "../../../utils/pricesUtils";
import PriceCard from "../components/cards/PriceCard";
import GradientArrowButton from "../components/buttons/GradientArrowButton";

const page = () => {
  return (
    <>
      <StandardLayout
        title="Simple plans for everyone"
        subtitle="Cut down overhead costs and ditch clunky software. Get a flexible, purpose-built tool to simplify your security with authentication services."
        content={
          <Grid
            container
            width="100%"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
            gap={3}
          >
            {PRICES.map((option, index) => (
              <Grid item key={index} xs={3.5}>
                <PriceCard
                  key={index}
                  title={option.title}
                  price={option.price}
                  subtitle={option.subtitle}
                />
              </Grid>
            ))}
          </Grid>
        }
      />
      <StandardLayout
        title="Stop overpaying for software"
        subtitle="There are many variations available, but the majority have suffered alteration in some form, by injected humour."
        content={<></>}
      />
      <StandardLayout
        small_title="The security first platform"
        title="Take control of your business"
        subtitle="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        content={<GradientArrowButton title="Start building" />}
      />
    </>
  );
};

export default page;
