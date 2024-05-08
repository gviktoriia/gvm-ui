import React from "react";
import PostDetails from "@/app/components/Post/PostDetails";
import prisma from "../../../../lib/prisma";

const page = async () => {
  const posts = await prisma.post.findMany({
    include: {
      admin: {
        select: {
          nickname: true,
        },
      },
    },
  });

  return <PostDetails posts={posts} />;
};

export default page;
