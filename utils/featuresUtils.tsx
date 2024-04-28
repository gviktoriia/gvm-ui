import { ReactElement } from "react";
import ListIcon from "@mui/icons-material/List";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BoltIcon from "@mui/icons-material/Bolt";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";

interface Feature {
  title: string;
  description?: string;
  icon?: ReactElement;
  isButton?: boolean;
  button_text?: string;
}

export const AUTH_FEATURES: Feature[] = [
  {
    title: "Simplify your security",
    icon: <ListIcon />,
  },
  {
    title: "Customer identity",
    icon: <FingerprintIcon />,
  },
  {
    title: "Adaptable authentication",
    icon: <SettingsAccessibilityIcon />,
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Next.js Integration",
    description:
      "Built on the Next.js framework, GVM-UI harnesses the capabilities of React for rapid UI development.",
    icon: <IntegrationInstructionsIcon />,
  },
  {
    title: "Responsive Design",
    description:
      "Ensure your applications look and feel great on any device with GVM-UI's responsive design principles.",
    icon: <PhonelinkIcon />,
  },
  {
    title: "Component-based Architerture",
    description:
      "Our methodology follows a component-based architecture, allowing developers to create reusable UI components that enhance maintainability and scalability.",
    icon: <GridViewIcon />,
  },
  {
    title: "Customizable Styling",
    description:
      "Tailor your UI effortlessly with CSS modules and styled components included in the GVM-UI template.",
    icon: <SettingsSuggestIcon />,
  },
  {
    title: "Optimized Performance",
    description:
      "Follow best practices for performance optimization, including code splitting and server-side rendering.",
    icon: <BoltIcon />,
  },
  {
    title: "Ready-to-Use Components",
    description:
      "Access a rich library of reusable UI components to kickstart your project development.",
    icon: <ChecklistRtlIcon />,
  },
];

export const SECURITY_FEATURES: Feature[] = [
  {
    title: "Optimized for security",
    description:
      "Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.",
    isButton: true,
    button_text: "Learn more",
  },
  {
    title: "Extensibility",
    description:
      "Your login box must find the right balance between user convenience, privacy and security.",
    isButton: false,
  },
  {
    title: "Infinite options",
    description:
      "Quickly apply filters to refine your issues lists and create custom views.",
    isButton: false,
  },
];
