import React from "react";
import StandardLayout from "../../layouts/StandardLayout";
import GradientArrowButton from "../../buttons/GradientArrowButton";

const CTASection = () => {
  return (
    <StandardLayout
      small_title="The security first platform"
      title="Take control of your business"
      subtitle="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      content={<GradientArrowButton title="Get Started" />}
    />
  );
};

export default CTASection;
