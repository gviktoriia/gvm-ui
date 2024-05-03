import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FeatureCardProps } from "./FeatureCard";

const TeamFeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          {description}
        </Typography>
      </Grid>
    </Box>
  );
};

export default TeamFeatureCard;
