import { Box } from "@mui/material";
import React from "react";
import HeaderTypography, {
  HeaderTypographyProps,
} from "../headers/HeaderTypography";
import Blog from "../Blog/Blog";

export interface StandardLayoutProps extends HeaderTypographyProps {
  content?: React.ReactNode;
}

const StandardLayout: React.FC<StandardLayoutProps> = ({
  small_title,
  title,
  subtitle,
  title_font_size,
  subtitle_font_size,
  maxWidth,
  align,
  content = null,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      paddingTop="5vh"
      paddingBottom="5vh"
      sx={{
        minHeight: "90vh",
      }}
    >
      <HeaderTypography
        small_title={small_title}
        title={title}
        subtitle={subtitle}
        title_font_size={title_font_size}
        subtitle_font_size={subtitle_font_size}
        maxWidth={maxWidth}
        align={align}
      />
      <Box
        display="flex"
        width="100%"
        justifyContent={align || "center"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default StandardLayout;
