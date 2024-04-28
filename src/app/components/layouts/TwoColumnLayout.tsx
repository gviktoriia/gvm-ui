import { Box, Grid } from "@mui/material";
import React, { ReactElement } from "react";
import HeaderTypography from "../headers/HeaderTypography";
import { StandardLayoutProps } from "./StandardLayout";

export interface TwoColumnLayoutProps extends StandardLayoutProps {
  picture: ReactElement;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  small_title,
  title,
  subtitle,
  title_font_size,
  maxWidth,
  align,
  content,
  picture,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="40px"
      paddingBottom="40px"
      sx={{
        textAlign: "center",
      }}
    >
      <Grid container direction={{ sm: "row", xs: "column" }}>
        <Grid item xs={6} textAlign="left">
          <Grid container gap={3}>
            <HeaderTypography
              small_title={small_title}
              title={title}
              subtitle={subtitle}
              title_font_size={title_font_size}
              align={align}
              maxWidth={maxWidth}
            />
            {content}
          </Grid>
        </Grid>
        <Grid item xs={6} justifyContent="center">
          {picture}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnLayout;
