"use client";
import { Box, Typography } from "@mui/material";
import BorderedButton from "../buttons/BorderedButton";
import { useSession } from "next-auth/react";

export function Auth() {
  const { data: session, status } = useSession();

  return (
    <Box>
      {status === "authenticated" && (
        <Box
          display="flex"
          textAlign="center"
          flexDirection={{ lg: "row", md: "row", sm: "column" }}
          gap={2}
        >
          <Typography
            sx={{
              color: "text.primary",
            }}
          >
            {session.user && session.user.name}
          </Typography>
          <Box textAlign="center" margin="auto">
            <BorderedButton title="Logout" link="/api/auth/signout" />
          </Box>
        </Box>
      )}

      {!session && <BorderedButton title="Login" link="/api/auth/signin" />}
    </Box>
  );
}
