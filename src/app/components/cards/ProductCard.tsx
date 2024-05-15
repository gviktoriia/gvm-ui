"use client";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import EditIcons from "./EditIcons";

export interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  isAdmin?: boolean;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  description,
  link,
  isAdmin,
  price,
}) => {
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
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          maxWidth: "300px",
          color: "black",
          textAlign: "right",
        }}
      >
        {price} $
      </Typography>
      {isAdmin ? <EditIcons postId={id} /> : null}
    </Grid>
  );
};

export default ProductCard;
