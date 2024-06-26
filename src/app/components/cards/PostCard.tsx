"use client";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import EditIcons from "./EditIcons";

export interface PostCardProps {
  id: number;
  title: string;
  date: Date;
  image: string;
  description: string;
  link: string;
  isAdmin?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  date,
  image,
  description,
  link,
  isAdmin,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const MAX_TITLE_LENGTH = 26;
  let cardTitle = title;
  if (title.length > MAX_TITLE_LENGTH) {
    cardTitle = title.substring(0, MAX_TITLE_LENGTH) + "...";
  }
  const cardDescription = description.substring(0, 40) + "...";
  return (
    <Grid
      item
      component="a"
      href={link}
      sx={{
        textDecoration: "none",
        padding: "30px",
        textAlign: "left",
      }}
    >
      <Image
        src={image}
        alt={cardTitle}
        width={300}
        height={200}
        style={{
          borderRadius: "20px",
        }}
      />
      <Typography
        sx={{
          fontSize: "14px",
          color: "grey",
        }}
      >
        {formattedDate}
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          maxWidth: "300px",
        }}
      >
        {cardTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "grey",
        }}
      >
        {cardDescription}
      </Typography>
      {isAdmin ? <EditIcons postId={id} /> : null}
    </Grid>
  );
};

export default PostCard;
