export type DotColor =
  | "blue"
  | "pink"
  | "green"
  | "amber"
  | "violet"
  | "red";

export interface Project {
  eyebrow: string;
  name: string;
  dot: DotColor;
  wip?: boolean;
  summary: string;
  linkLabel: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    eyebrow: "BigCommerce · Developer GTM",
    name: "Catalyst",
    dot: "blue",
    summary:
      "Turned BigCommerce's composable commerce strategy into an open-source storefront developers could evaluate, adopt, and build with.",
    linkLabel: "Visit Catalyst",
    href: "https://www.catalyst.dev",
  },
  {
    eyebrow: "Independent · Developer Experience",
    name: "Deck Design System",
    dot: "pink",
    wip: true,
    summary:
      "Built a working design system in Storybook to explore component architecture, documentation, testing, and the workflows behind modern frontend development.",
    linkLabel: "Explore Deck",
    href: "#",
  },
  {
    eyebrow: "Storyblok · Audience Positioning",
    name: "Storyblok",
    dot: "green",
    summary:
      "Built a messaging architecture that positioned the same headless CMS for developers, marketers, and enterprise buyers without fragmenting the product story.",
    linkLabel: "View audience pages",
    href: "https://www.storyblok.com",
  },
  {
    eyebrow: "BigCommerce · Developer Education",
    name: "GraphQL Storefront API",
    dot: "amber",
    summary:
      "Turned a technical API into a guided developer journey, moving from product value to implementation through a video solution series.",
    linkLabel: "Watch the series",
    href: "#",
  },
  {
    eyebrow: "Enumerate · AI Product Launch",
    name: "Numa AI",
    dot: "violet",
    summary:
      "Positioned embedded AI around the work it completes, bringing five capabilities together under one clear product story.",
    linkLabel: "View Numa AI",
    href: "#",
  },
  {
    eyebrow: "Independent · Zero-to-One GTM",
    name: "MeetCard",
    dot: "red",
    wip: true,
    summary:
      "Built the positioning, messaging, pricing, product narrative, and go-to-market foundation for a professional networking product from the ground up.",
    linkLabel: "Visit MeetCard",
    href: "#",
  },
];
