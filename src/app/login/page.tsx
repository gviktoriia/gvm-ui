import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import { Box, Grid, Typography } from "@mui/material";
import SignupForm from "../components/Form/SignupForm";
import PasswordForm from "../components/Form/PasswordForm";
import GradientArrowButton from "../components/buttons/GradientArrowButton";
import SocialAuth from "../components/Form/SocialAuth";

const page = () => {
  return (
    <StandardLayout
      title="Sign in to your account"
      content={
        <Grid
          container
          direction="column"
          justifyContent="center"
          width={{ xs: "100%", sm: "60%", md: "30%" }}
        >
          <Grid item justifyContent="center" textAlign="center">
            <SignupForm
              title="Email"
              example="E.g., viktoriiahvozdak@gmail.com"
            />
          </Grid>
          <Grid item justifyContent="center" textAlign="center">
            <PasswordForm />
          </Grid>
          <GradientArrowButton title="Sign In" />
          <Box
            display="flex"
            flexDirection="row"
            gap={2}
            textAlign="center"
            justifyContent="center"
          >
            <Typography>Dont have an account?</Typography>
            <Typography component="a" href="/signup">
              Sign up
            </Typography>
          </Box>
          <SocialAuth />
        </Grid>
      }
    />
  );
};

export default page;
