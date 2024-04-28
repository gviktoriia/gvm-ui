import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import HeaderTypography, {
  HeaderTypographyProps,
} from "../headers/HeaderTypography";
import GradientArrowButton from "../buttons/GradientArrowButton";

export interface AnimatedCardProps extends HeaderTypographyProps {
  button_text?: string;
  card_width?: string;
  isButton?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  subtitle,
  button_text,
  card_width,
  isButton,
}) => {
  return (
    <Card
      sx={{
        width: card_width || "100%",
        padding: "80px 50px",
        borderRadius: "40px",
        border: "1px solid #b1b3b1",
        backgroundColor: "transparent",
      }}
    >
      <CardContent>
        <Grid container direction="column" gap={3}>
          <HeaderTypography
            title={title}
            subtitle={subtitle}
            align="left"
            title_font_size={{ lg: "26px", md: "22px", xs: "18px" }}
            subtitle_font_size={{ lg: "20px", md: "18px", xs: "16px" }}
            maxWidth="540px"
          />
          {isButton ? (
            <GradientArrowButton
              title={button_text}
              bgImage="linear-gradient(to right, #303030 0%, #79CBCA  51%, #303030  100%)"
              width="170px"
              height="40px"
            />
          ) : (
            <></>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AnimatedCard;
