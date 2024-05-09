"use client";

import { Alert, Box, Grid } from "@mui/material";
import StandardLayout from "../layouts/StandardLayout";
import StandardForm from "../forms/StandardForm";
import PasswordForm from "../forms/PasswordForm";
import SocialAuth from "../forms/SocialAuth";
import { useRef } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Check } from "@mui/icons-material";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const adminEmail = useRef("");
  const adminPass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("credentials", {
      email: adminEmail.current,
      password: adminPass.current,
      redirect: true,
      callbackUrl: props.callbackUrl ?? "https://gvm-ui.vercel.app/",
    });
  };

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
          <form
            onSubmit={onSubmit}
            style={{
              textAlign: "center",
            }}
          >
            <Grid item justifyContent="center" textAlign="center">
              <StandardForm
                title="Email"
                name="email"
                example="E.g., viktoriiahvozdak@gmail.com"
                onChange={(e) => (adminEmail.current = e.target.value)}
              />
            </Grid>
            <Grid item justifyContent="center" textAlign="center">
              <PasswordForm
                onChange={(e) => (adminPass.current = e.target.value)}
              />
            </Grid>
            <Box
              display="flex"
              textAlign="center"
              justifyContent="center"
              gap={3}
              marginBottom={6}
            >
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "30px",
                  borderRadius: "20px",
                  textTransform: "none",
                }}
              >
                Login
              </button>
              <Link
                href={props.callbackUrl ?? "/"}
                style={{
                  border: "1px solid text.primary",
                }}
              >
                Cancel
              </Link>
            </Box>
            <Grid item justifyContent="center" textAlign="center">
              {!!props.error && (
                <Alert icon={<Check fontSize="inherit" />} severity="error">
                  Authentication failed.
                </Alert>
              )}
            </Grid>
          </form>
          <SocialAuth />
        </Grid>
      }
    />
  );
};

export default Login;
