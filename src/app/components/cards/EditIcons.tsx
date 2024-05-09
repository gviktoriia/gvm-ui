"use client";
import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import { deletePost } from "../../../../actions/post/actions";

interface EditIconsProps {
  postId: number;
}

const EditIcons: React.FC<EditIconsProps> = ({ postId }) => {
  const handleDeleteClick = async () => {
    await deletePost(Number(postId));
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" gap={6}>
      {/* <Link href={`/blog`}> */}
      <IconButton aria-label="delete" size="large" onClick={handleDeleteClick}>
        <Delete />
      </IconButton>
      {/* </Link> */}
      {/* <Link href={`/blog/${postId}/edit`} passHref> */}
      <IconButton aria-label="delete" size="large">
        <Edit />
      </IconButton>
      {/* </Link> */}
    </Box>
  );
};

export default EditIcons;
