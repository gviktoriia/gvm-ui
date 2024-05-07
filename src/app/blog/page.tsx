"use client";
import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import Blog from "../components/Blog/Blog";
import { useSession } from "next-auth/react";
import AdminBlog from "../components/Blog/AdminBlog";
import { Box } from "@mui/material";

const page = () => {
  const { data: session, status, update } = useSession();

  return (
    <StandardLayout
      title="Our Bloogs & Insights"
      subtitle="Welcome to the GVM-UI Blog, where we share valuable insights, industry updates, success stories, and more. Dive into our collection of articles crafted to inform, inspire, and engage our readers. "
      align="center"
      content={
        <Box>
          {status === "authenticated" && <AdminBlog />}
          {!session && <Blog />}
        </Box>
      }
    />
  );
};

export default page;
