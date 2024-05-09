import StandardLayout from "@/app/components/layouts/StandardLayout";
import EditPost from "@/app/components/Post/EditPost";
import React from "react";
import prisma from "../../../../../lib/prisma";

const page = async () => {
  const posts = await prisma.post.findMany();
  console.log(posts);

  return (
    <StandardLayout
      title="Edit post"
      content={<EditPost postsInfo={posts} />}
    />
  );
};

export default page;
