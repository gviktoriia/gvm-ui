import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { ReactElement } from "react";

interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: ReactElement;
  height?: { lg: string; md: string; xs: string };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  height,
}) => {
  return (
    <Card
      sx={{
        width: { xs: "240px", sm: "300px", md: "360px", lg: "420px" },
        height: height,
        textAlign: "left",
      }}
    >
      <CardHeader
        avatar={icon}
        titleTypographyProps={{
          variant: "h6",
          sx: { fontWeight: "600" },
        }}
        title={title}
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
