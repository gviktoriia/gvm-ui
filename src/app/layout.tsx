"use client";

import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { getDesignTokens } from "../../theme/theme";
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Providers } from "./components/Auth/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  return (
    <html lang="en">
      <Head>
        <title>GVM-UI Template</title>
        <meta property="og:title" content="GVM-UI Template" key="title" />
      </Head>
      <body
        style={{
          margin: 0,
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Providers>
            <Navbar
              mode={mode}
              toggle={() => setMode(mode === "light" ? "dark" : "light")}
            />
            {children}
          </Providers>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
