import { Grid, Typography } from "@mui/material";
import React from "react";

export interface HeaderTypographyProps {
  small_title?: string;
  title: string;
  subtitle?: string;
  title_font_size?: {
    lg: string;
    md: string;
    xs: string;
  };
  subtitle_font_size?: {
    lg: string;
    md: string;
    xs: string;
  };
  maxWidth?: string;
  align?: "left" | "center" | "right";
}

const HeaderTypography: React.FC<HeaderTypographyProps> = ({
  small_title,
  title,
  subtitle,
  title_font_size,
  subtitle_font_size,
  maxWidth,
  align,
}) => {
  return (
    <Grid
      container
      direction="column"
      rowGap={3}
      textAlign={align || "center"}
      alignItems={align || "center"}
      justifyContent={align || "center"}
      maxWidth={maxWidth || "900px"}
    >
      <Grid item>
        <Typography
          sx={{
            fontSize: { lg: "18px", md: "14px", xs: "12px" },
            weight: "700px",
          }}
        >
          {small_title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: title_font_size || { lg: "36px", md: "30px", xs: "26px" },
            weight: "700px",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: subtitle_font_size || {
              lg: "22px",
              md: "20px",
              xs: "18px",
            },
            weight: "400px",
          }}
        >
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderTypography;
