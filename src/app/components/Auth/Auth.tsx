import { Box, Typography } from "@mui/material";
import BorderedButton from "../buttons/BorderedButton";
import { useSession } from "next-auth/react";

export function Auth() {
  const { data: session, status, update } = useSession();

  return (
    <Box>
      {status === "authenticated" && (
        <Box display="flex" flexDirection="row" gap={2}>
          <Typography
            sx={{
              color: "black",
            }}
          >
            Signed in as {session.user && session.user.name}
          </Typography>
          <BorderedButton title="Logout" link="/api/auth/signout" />
        </Box>
      )}

      {!session && <BorderedButton title="Login" link="/login" />}
    </Box>
  );
}
