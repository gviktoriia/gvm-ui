import { Box, Grid } from "@mui/material";
import React from "react";
import PostCard from "../cards/PostCard";
import { POSTS } from "../../../../utils/postUtils";

const Blog = () => {
  return (
    <Box>
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
