import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PostCardProps {
  title: string;
  date: Date;
  image: string;
  description: string;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  date,
  image,
  description,
  link,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        alt={title}
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
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "grey",
        }}
      >
        {cardDescription}
      </Typography>
    </Grid>
  );
};

export default PostCard;