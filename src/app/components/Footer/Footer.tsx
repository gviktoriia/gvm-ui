import { GitHub, LinkedIn, Twitter, X } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import FooterBlock from "./FooterBlock";
import { FOOTER_OPTIONS } from "../../../../utils/footerUtils";

const Footer = () => {
  return (
    <>
      <Divider
        sx={{
          backgroundColor: "rgb(0, 0, 0, 5%)",
          width: "100%",
        }}
      />
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
        <Grid
          container
          direction={{ sm: "row", xs: "column" }}
          gap={{ xs: 3, sm: 0 }}
        >
          <Grid item xs={2}>
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
                GVM-UI
              </Typography>
            </Grid>
          </Grid>
          {FOOTER_OPTIONS.map((data, index) => (
            <FooterBlock
              key={index}
              title={data.title}
              options={data.options}
            />
          ))}
        </Grid>
        <Divider
          sx={{
            backgroundColor: "rgb(0, 0, 0, 5%)",
            width: "100%",
            marginTop: "40px",
          }}
        />
        <Grid
          container
          width="100%"
          paddingTop="40px"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography>© GVM-UI - All rights reserved.</Typography>
          </Grid>
          <Grid item>
            <Grid container columnGap={4}>
              <X />
              <GitHub />
              <LinkedIn />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
