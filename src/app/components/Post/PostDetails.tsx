"use client";

import StandardLayout from "../layouts/StandardLayout";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Post } from "@prisma/client";
import { usePathname } from "next/navigation";
import EditIcons from "../cards/EditIcons";
import { useSession } from "next-auth/react";

interface PostWithAdmin extends Post {
  admin: {
    nickname: string;
  };
}

interface PostDetailsProps {
  posts: PostWithAdmin[];
}

const PostDetails: React.FC<PostDetailsProps> = ({ posts }) => {
  const path: string = usePathname();
  const { data: session, status, update } = useSession();
  const isAuth = status === "authenticated";

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

  const lastFormattedDate = new Date(post.lastModifiedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
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
            <Box display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                {post.description}
              </Typography>
              {isAuth ? <EditIcons postId={post.id} /> : null}
            </Box>
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
          <Typography
            sx={{
              fontSize: "14px",
              color: "grey",
            }}
          >
            Last modified {lastFormattedDate}
          </Typography>
        </Grid>
      }
    />
  );
};

export default PostDetails;
