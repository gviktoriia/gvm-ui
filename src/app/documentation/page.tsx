import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import { Grid, Typography } from "@mui/material";
import { RULES } from "../../../utils/documentationUtils";

const page = () => {
  return (
    <StandardLayout
      title="Documentation"
      subtitle="Rules how to use the template more effectively."
      content={
        <Grid container direction="column" gap={3}>
          {RULES.map((rule, index) => (
            <Grid item key={index}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                {rule.title}
              </Typography>
              <Typography>{rule.description}</Typography>
            </Grid>
          ))}{" "}
        </Grid>
      }
    />
  );
};

export default page;
