import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const FeatureCard = () => {
  return (
    <Card
      sx={{
        width: { xs: "240px", sm: "300px", md: "400px" },
        textAlign: "left",
      }}
    >
      <CardHeader
        avatar={<IntegrationInstructionsIcon />}
        titleTypographyProps={{
          variant: "h6",
          sx: { fontWeight: "600" },
        }}
        title="Next.js Integration"
      />
      <CardContent>
        <Typography variant="body2">
          Built on the Next.js framework, GVM-UI harnesses the capabilities of
          React for rapid UI development.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
