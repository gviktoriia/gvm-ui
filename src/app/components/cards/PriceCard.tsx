import { Box, Card, Divider, Typography } from "@mui/material";
import React from "react";
import GradientArrowButton from "../buttons/GradientArrowButton";
import PriceOptions from "../MainPage/Price/PriceOptions";
import { PRICE_OPTIONS } from "../../../../utils/pricesUtils";

interface PriceCardProps {
  title: string;
  price: number;
  subtitle: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, subtitle }) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: "40px",
        padding: "30px",
      }}
    >
      <Box textAlign="left" marginBottom="20px">
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          {title}
        </Typography>
        <Box display="flex" flexDirection="row">
          <Typography
            sx={{
              opacity: "50%",
              fontSize: "18px",
            }}
          >
            $
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            {price}
          </Typography>
          <Typography
            sx={{
              opacity: "50%",
              fontSize: "18px",
            }}
          >
            /mo
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <GradientArrowButton
        title="Get started"
        bgImage="linear-gradient(to right, #303030 0%, #79CBCA  51%, #303030  100%)"
        height="30px"
      />
      <Divider
        sx={{
          margin: "30px 0",
          backgroundColor: "rgb(0, 0, 0, 5%)",
          width: "100%",
        }}
      />
      {PRICE_OPTIONS.map((option, index) => (
        <PriceOptions key={index} title={option.title} list={option.options} />
      ))}
    </Card>
  );
};

export default PriceCard;
