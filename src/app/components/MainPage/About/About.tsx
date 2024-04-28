import { Grid } from "@mui/material";
import FeatureCard from "../../cards/FeatureCard";
import { FEATURES } from "../../../../../utils/featuresUtils";
import StandardLayout from "../../layouts/StandardLayout";

const About: React.FC = () => {
  return (
    <StandardLayout
      title="How GVM-UI works"
      subtitle="GVM-UI revolutionizes Next.js development by providing a structured and efficient approach to building modern user interfaces."
      content={
        <Grid container width="100%" justifyContent="center" gap={3}>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </Grid>
      }
    />
  );
};

export default About;
