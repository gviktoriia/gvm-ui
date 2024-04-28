import { Box, keyframes } from "@mui/material";
import Image from "next/image";

const partners_list = [
  { logo: "images/amazon_logo.svg", title: "Amazon" },
  { logo: "images/dhl_logo.svg", title: "DHL" },
  { logo: "images/uber_logo.svg", title: "Uber" },
  { logo: "images/fedex_logo.svg", title: "FedEx" },
];

const IconsSlider = () => {
  return (
    <Box
      sx={{
        minWidth: "240px",
        display: "flex",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      {partners_list.map((icon, index) => (
        <Box
          sx={{
            width: { xs: "50px", sm: "100px", md: "200px" },
          }}
        >
          <Image
            key={index}
            src={icon.logo}
            width={200}
            height={140}
            alt={icon.title}
          />
        </Box>
      ))}
    </Box>
  );
};

export default IconsSlider;
