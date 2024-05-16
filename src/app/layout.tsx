import { Metadata } from "next";
import RootLayoutProvider from "./RootLayoutProvider";

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
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
