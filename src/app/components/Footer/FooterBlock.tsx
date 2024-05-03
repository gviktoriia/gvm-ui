import { Grid, Typography } from "@mui/material";
import React from "react";

interface FooterBlockProps {
  title: string;
  options: string[];
}

const FooterBlock: React.FC<FooterBlockProps> = ({ title, options }) => {
  return (
    <Grid item xs={2.5}>
      <Grid
        container
        direction="column"
        textAlign={{ sm: "left", xs: "center" }}
      >
        <Typography
          sx={{
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
        {options.map((option, index) => (
          <Typography key={index}>{option}</Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterBlock;
