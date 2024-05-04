import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import SignupForm from "../components/Form/SignupForm";
import { Box, Grid, Typography } from "@mui/material";
import GradientArrowButton from "../components/buttons/GradientArrowButton";
import PasswordForm from "../components/Form/PasswordForm";
import SocialAuth from "../components/Form/SocialAuth";

const page = () => {
  return (
    <StandardLayout
      title="Create your free account"
      content={
        <Grid
          container
          direction="column"
          justifyContent="center"
          width={{ xs: "100%", sm: "60%", md: "30%" }}
        >
          <Grid item justifyContent="center" textAlign="center">
            <SignupForm title="Full Name" example="E.g., Viktoriia Hvozdak" />
          </Grid>
          <Grid item justifyContent="center" textAlign="center">
            <SignupForm
              title="Email"
              example="E.g., viktoriiahvozdak@gmail.com"
            />
          </Grid>
          <Grid item justifyContent="center" textAlign="center">
            <PasswordForm />
          </Grid>
          <GradientArrowButton title="Sign up" />
          <Box
            display="flex"
            flexDirection="row"
            gap={2}
            textAlign="center"
            justifyContent="center"
          >
            <Typography>Already have an account?</Typography>
            <Typography component="a" href="/login">
              Sign in
            </Typography>
          </Box>
          <SocialAuth />
        </Grid>
      }
    />
  );
};

export default page;
