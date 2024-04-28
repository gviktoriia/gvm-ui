import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="40px"
      paddingBottom="40px"
      width="100%"
      sx={{
        textAlign: "center",
      }}
    >
      <Grid container direction={{ sm: "row", xs: "column" }}>
        <Grid item xs={4}>
          <Grid container direction="column" textAlign="left">
            <Typography>GVM-UI</Typography>
            <Typography>© GVM-UI - All rights reserved.</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="column" textAlign="left">
            <Typography>Products</Typography>
            <Typography>Features</Typography>
            <Typography>Integrations</Typography>
            <Typography>Pricing & Plans</Typography>
            <Typography>Changelog</Typography>
            <Typography>Our method</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="column" textAlign="left">
            <Typography>Company</Typography>
            <Typography>About us</Typography>
            <Typography>Diversity & Inclusion</Typography>
            <Typography>Blog</Typography>
            <Typography>Careers</Typography>
            <Typography>Financial statements</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="column" textAlign="left">
            <Typography>Resources</Typography>
            <Typography>Community</Typography>
            <Typography>Terms of service</Typography>
            <Typography>Report a vulnerability</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="column" textAlign="left">
            <Typography>Legals</Typography>
            <Typography>Refund policy</Typography>
            <Typography>Terms & Conditions</Typography>
            <Typography>Privacy policy</Typography>
            <Typography>Brand Kit</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
