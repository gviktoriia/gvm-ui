import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

const EditIcons = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" gap={6}>
      <IconButton aria-label="delete" size="large">
        <Delete />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <Edit />
      </IconButton>
    </Box>
  );
};

export default EditIcons;
