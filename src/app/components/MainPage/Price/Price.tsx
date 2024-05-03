import React from "react";
import StandardLayout from "../../layouts/StandardLayout";
import PriceCard from "../../cards/PriceCard";
import { PRICES } from "../../../../../utils/pricesUtils";
import { Grid } from "@mui/material";

const Price = () => {
  return (
    <StandardLayout
      small_title="Pricing plans"
      title="Flexible plans and features"
      subtitle="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
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
  );
};

export default Price;
