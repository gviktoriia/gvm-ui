"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import PostCard from "../cards/PostCard";
import { useSession } from "next-auth/react";
import FilledButton from "../buttons/FilledButton";
import { Post } from "@prisma/client";
import { BLOG_CREATE_ROUTE, BLOG_ROUTE } from "../../../../utils/routesUtil";

interface BlogData {
  posts: Post[];
}

const Blog: React.FC<BlogData> = ({ posts }) => {
  const { data: session, status, update } = useSession();
  const isAuth = status === "authenticated";
  return (
    <Box>
      {isAuth && (
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <FilledButton title="New post" link={BLOG_CREATE_ROUTE} />
        </Box>
      )}
      <Grid container textAlign="center" justifyContent="center">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.createdAt}
            image={post.image}
            description={post.description}
            link={`${BLOG_ROUTE}/${post.id}`}
            isAdmin={isAuth}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
