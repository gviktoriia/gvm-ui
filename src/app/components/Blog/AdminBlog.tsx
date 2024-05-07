import { Box, Grid } from "@mui/material";
import React from "react";
import { POSTS } from "../../../../utils/postUtils";
import PostCard from "../cards/PostCard";
import FilledButton from "../buttons/FilledButton";

const AdminBlog = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <FilledButton title="New post" />
      </Box>
      <Grid container textAlign="center" justifyContent="center">
        {POSTS.map((post, index) => (
          <PostCard
            key={index}
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

export default AdminBlog;
