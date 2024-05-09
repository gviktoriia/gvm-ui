import React from "react";
import StandardLayout from "../components/layouts/StandardLayout";
import Blog from "../components/Blog/Blog";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../utils/authOptions";

const page = async () => {
  const posts = await prisma.post.findMany();
  const session = await getServerSession(authOptions);

  return (
    <StandardLayout
      title="Our Bloogs & Insights"
      subtitle="Welcome to the GVM-UI Blog, where we share valuable insights, industry updates, success stories, and more. Dive into our collection of articles crafted to inform, inspire, and engage our readers. "
      align="center"
      content={<Blog posts={posts} />}
    />
  );
};

export default page;
