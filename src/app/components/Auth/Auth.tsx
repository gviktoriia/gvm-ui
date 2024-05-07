import { getServerSession } from "next-auth/next";
import { Box, Typography } from "@mui/material";
import BorderedButton from "../buttons/BorderedButton";
import { authOptions } from "../../../../utils/authOptions";

export async function Auth() {
  const session = await getServerSession(authOptions);

  return (
    <Box>
      {session && (
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
