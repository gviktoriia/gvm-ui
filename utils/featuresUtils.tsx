import { ReactElement } from "react";

import {
  List,
  Fingerprint,
  SettingsAccessibility,
  IntegrationInstructions,
  GitHub,
  GpsNotFixed,
  OfflineBolt,
  Grass,
  ChecklistRtl,
  Bolt,
  SettingsSuggest,
  GridView,
  Phonelink,
} from "@mui/icons-material";
import Image from "next/image";

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
    icon: <List />,
  },
  {
    title: "Customer identity",
    icon: <Fingerprint />,
  },
  {
    title: "Adaptable authentication",
    icon: <SettingsAccessibility />,
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Next.js Integration",
    description:
      "Built on the Next.js framework, GVM-UI harnesses the capabilities of React for rapid UI development.",
    icon: <IntegrationInstructions />,
  },
  {
    title: "Responsive Design",
    description:
      "Ensure your applications look and feel great on any device with GVM-UI's responsive design principles.",
    icon: <Phonelink />,
  },
  {
    title: "Component-based Architerture",
    description:
      "Our methodology follows a component-based architecture, allowing developers to create reusable UI components that enhance maintainability and scalability.",
    icon: <GridView />,
  },
  {
    title: "Customizable Styling",
    description:
      "Tailor your UI effortlessly with CSS modules and styled components included in the GVM-UI template.",
    icon: <SettingsSuggest />,
  },
  {
    title: "Optimized Performance",
    description:
      "Follow best practices for performance optimization, including code splitting and server-side rendering.",
    icon: <Bolt />,
  },
  {
    title: "Ready-to-Use Components",
    description:
      "Access a rich library of reusable UI components to kickstart your project development.",
    icon: <ChecklistRtl />,
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

export const TEAM_FEATURES: Feature[] = [
  {
    title: "Passionate",
    description:
      "You are passionate about digital products of any kind and are a builder at heart.",
    icon: <Grass />,
  },
  {
    title: "Energetic",
    description:
      "You are passionate about digital products of any kind and are a builder at heart.",
    icon: <OfflineBolt />,
  },
  {
    title: "Achiever",
    description:
      "You are passionate about digital products of any kind and are a builder at heart",
    icon: <GpsNotFixed />,
  },
];

export const INTEGRATION_FEATURES: Feature[] = [
  {
    title: "GitHub",
    description:
      "Configure the GitHub integration by authenticating and selecting which repos to connect to GVM-UI.",
    icon: <GitHub />,
  },
  {
    title: "TypeScript",
    description:
      "Configure the TypeScript integration by authenticating and selecting which repos to connect to GVM-UI.",
    icon: (
      <Image
        src="https://www.svgrepo.com/show/306891/typescript.svg"
        alt="TypeScript"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Material UI",
    description:
      "Configure the Material UI integration by authenticating and selecting which repos to connect to GVM-UI.",
    icon: (
      <Image
        src="https://icons.veryicon.com/png/o/object/material-design-icons-1/material-ui.png"
        alt="MUI"
        width={24}
        height={24}
      />
    ),
  },
];
