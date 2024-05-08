"use client";
import React from "react";
import StandardLayout from "../layouts/StandardLayout";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Post } from "@prisma/client";
import { usePathname } from "next/navigation";

interface PostWithAdmin extends Post {
  admin: {
    nickname: string;
  };
}

interface PostDetailsProps {
  posts: PostWithAdmin[]; // Use PostWithAdmin instead of Post
}

const PostDetails: React.FC<PostDetailsProps> = ({ posts }) => {
  const path: string = usePathname();
  const routeId: string = path.substring(path.lastIndexOf("/") + 1);

  const filteredPost = posts.filter((post) => post.id.toString() === routeId);

  if (filteredPost.length === 0) {
    return <div>Post not found</div>;
  }

  const post = filteredPost[0];

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <StandardLayout
      title={post.title}
      content={
        <Grid container direction="column" gap={3}>
          <Box>
            <Typography
              sx={{
                borderRadius: "20px",
                backgroundColor: "black",
                display: "inline-block",
                padding: "4px 8px",
                color: "white",
                fontSize: "18px",
              }}
            >
              {post.category}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={3}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "grey",
              }}
            >
              By {post.author}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "grey",
              }}
            >
              {formattedDate}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ lg: "row", xs: "column" }}
            gap={2}
          >
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {post.description}
            </Typography>
            <Box
              position="relative"
              textAlign="center"
              justifyContent="center"
              minWidth="300px"
              height="300px"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Grid>
      }
    />
  );
};

export default PostDetails;
