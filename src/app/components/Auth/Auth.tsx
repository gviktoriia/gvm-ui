import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Box } from "@mui/material";
import BorderedButton from "../buttons/BorderedButton";

export async function Auth() {
  const session = await getServerSession(authOptions);

  return (
    <Box>
      {session && (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
          <a href="/api/auth/signout">Sign out</a>
        </div>
      )}

      {!session && <BorderedButton title="Login" link="/login" />}
    </Box>
  );
}
