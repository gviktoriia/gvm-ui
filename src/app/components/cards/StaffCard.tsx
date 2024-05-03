import { X } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";

interface StaffCardProps {
  name: string;
  position: string;
  image?: string;
  link?: string;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  position,
  image,
  link,
}) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "black" }}
            aria-label="recipe"
            src={image}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings" component="a" href={link}>
            <X />
          </IconButton>
        }
        title={name}
        subheader={position}
      />
    </Card>
  );
};

export default StaffCard;
