import { Box, Grid, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";

interface PriceOptionsProps {
  title: string;
  list: string[];
}

const PriceOptions: React.FC<PriceOptionsProps> = ({ title, list }) => {
  return (
    <Grid container direction="column" textAlign="left" marginBottom="10px">
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        {title}
      </Typography>
      {list.map((option, index) => (
        <Box display="flex" flexDirection="row">
          <DoneIcon />
          <Typography
            sx={{
              fontSize: "16px",
            }}
            key={index}
          >
            {option}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default PriceOptions;
