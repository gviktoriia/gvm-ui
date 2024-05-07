import { GitHub, X } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import React from "react";

const SocialAuth = () => {
  return (
    <>
      <Divider
        sx={{
          backgroundColor: "rgb(0, 0, 0, 5%)",
          width: "100%",
          marginTop: "40px",
        }}
      />
      <Box
        display="flex"
        flexDirection="row"
        textAlign="center"
        justifyContent="center"
        gap={5}
      >
        <IconButton aria-label="delete">
          <X />
        </IconButton>
        <IconButton aria-label="delete" component="a" href="/api/auth/signin">
          <GitHub />
        </IconButton>
      </Box>
    </>
  );
};

export default SocialAuth;
