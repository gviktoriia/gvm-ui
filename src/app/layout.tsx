"use client";

import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { getDesignTokens } from "../../theme/theme";
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Providers } from "./components/Auth/Provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GVM-UI Template | NextJS Methodology",
  description:
    "Explore the best practices, insights, and methodologies for building high-performance web applications with Next.js. Learn about server-side rendering, static site generation, API routes, and more to optimize your Next.js projects.",
  metadataBase: new URL("https://gvm-ui.vercel.app/"),
  keywords: "Next.js, Starter Template, GVM-UI, NextJS methodology",
  openGraph: {
    title: "NextJS Methodology | Best Practices and Insights",
    description:
      "Explore the best practices, insights, and methodologies for building high-performance web applications with Next.js. Learn about server-side rendering, static site generation, API routes, and more to optimize your Next.js projects.",
    url: "https://gvm-ui.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gvm-ui.vercel.app/",
    creator: "@gv_v_m",
    title: "NextJS Methodology | Best Practices and Insights",
    description:
      "Explore the best practices, insights, and methodologies for building high-performance web applications with Next.js. Learn about server-side rendering, static site generation, API routes, and more to optimize your Next.js projects.",
  },
};

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
