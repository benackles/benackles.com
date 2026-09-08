/*
  Dots carry the brand colour of the company the work was for; the two
  independent projects keep their own. Values live in src/styles/global.css.
*/
export type DotColor =
  | "bigcommerce"
  | "storyblok"
  | "enumerate"
  | "signal";

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
    eyebrow: "Independent · Developer Experience",
    name: "Deck Design System",
    dot: "signal",
    wip: true,
    summary:
      "Built a working design system in Storybook to explore component architecture, documentation, testing, and the workflows behind modern frontend development.",
    linkLabel: "Explore Deck",
    href: "https://deck.meetcard.io/",
  },
  {
    eyebrow: "Independent · Zero-to-One GTM",
    name: "MeetCard",
    dot: "signal",
    wip: true,
    summary:
      "Built the positioning, messaging, pricing, product narrative, and go-to-market foundation for a professional networking product from the ground up.",
    linkLabel: "Preview MeetCard.io",
    href: "https://beta.meetcard.io/",
  },
  {
    eyebrow: "Enumerate · AI Product Launch",
    name: "Numa AI",
    dot: "enumerate",
    summary:
      "Positioned embedded AI around the work it completes, bringing five capabilities together under one clear product story.",
    linkLabel: "View Numa AI",
    href: "https://goenumerate.com/products/numa-ai",
  },
  {
    eyebrow: "Storyblok · Company-level Positioning",
    name: "Storyblok",
    dot: "storyblok",
    summary:
      "Built a messaging architecture that positioned the same headless CMS for developers, marketers, and enterprise buyers without fragmenting the product story.",
    linkLabel: "View storyblok.com",
    href: "https://www.storyblok.com",
  },
  {
    eyebrow: "BigCommerce · Developer GTM",
    name: "Catalyst",
    dot: "bigcommerce",
    summary:
      "Turned BigCommerce's composable commerce strategy into an open-source storefront developers could evaluate, adopt, and build with.",
    linkLabel: "Visit Catalyst",
    href: "https://www.catalyst.dev",
  },
  {
    eyebrow: "BigCommerce · Developer Education",
    name: "GraphQL Storefront API",
    dot: "bigcommerce",
    summary:
      "Turned a technical API into a guided developer journey, moving from product value to implementation through a video solution series.",
    linkLabel: "Watch the series",
    href: "https://www.youtube.com/watch?v=BSU3ufg8-wU",
  },
];
