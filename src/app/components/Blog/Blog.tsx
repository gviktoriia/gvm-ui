"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import PostCard from "../cards/PostCard";
import { useSession } from "next-auth/react";
import FilledButton from "../buttons/FilledButton";
import { POSTS } from "../../../../utils/postUtils";
import { Post } from "@prisma/client";

interface BlogData {
  posts: Post[];
}

const Blog: React.FC<BlogData> = ({ posts }) => {
  const { status } = useSession();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <FilledButton title="New post" link="/blog/create/" />
      </Box>
      <Grid container textAlign="center" justifyContent="center">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            date={post.createdAt}
            image={post.image}
            description={post.description}
            link={"blog/" + post.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
