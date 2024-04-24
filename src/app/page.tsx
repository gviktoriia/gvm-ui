"use client";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
        sx={{
          minHeight: "42vh",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "42px", md: "30px", xs: "22px" },
            weight: "700",
          }}
        >
          GVM-UI Template
        </Typography>
      </Box>
    </>
  );
}
