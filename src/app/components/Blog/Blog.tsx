import { Box, Grid } from "@mui/material";
import React from "react";
import PostCard from "../cards/PostCard";
import { POSTS } from "../../../../utils/postUtils";
import { useSession } from "next-auth/react";
import FilledButton from "../buttons/FilledButton";

const Blog = () => {
  const { data: session, status, update } = useSession();

  return (
    <Box>
      {status === "authenticated" && (
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <FilledButton title="New post" />
        </Box>
      )}
      <Grid container textAlign="center" justifyContent="center">
        {POSTS.map((post) => (
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
