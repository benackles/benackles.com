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
      "Built the design system behind MeetCard, using Figma and Storybook to connect design and development, standardize reusable components, and ship product faster with consistency.",
    linkLabel: "Explore Deck",
    href: "https://dub.sh/IMBS33e",
  },
  {
    eyebrow: "Independent · Zero-to-One GTM",
    name: "MeetCard",
    dot: "signal",
    wip: true,
    summary:
      "Built a networking product from concept to market, spanning product strategy, UX, development, positioning, messaging, pricing, and go-to-market.",
    linkLabel: "Preview MeetCard.io",
    href: "https://dub.sh/UTaYGJJ",
  },
  {
    eyebrow: "Enumerate · AI Product Launch",
    name: "Numa AI",
    dot: "enumerate",
    summary:
      "Helped introduce agentic workflows into an established SaaS platform, unifying five AI capabilities into one clear product story focused on completed work, not just assistance.",
    linkLabel: "View Numa AI",
    href: "https://dub.sh/LcRtkwY",
  },
  {
    eyebrow: "Storyblok · Company-level Positioning",
    name: "Storyblok",
    dot: "storyblok",
    summary:
      "Led a company-wide repositioning and rebrand to break through a crowded headless CMS market, sharpening the category story, messaging architecture, and value proposition across developers, marketers, and enterprise buyers.",
    linkLabel: "View storyblok.com",
    href: "https://dub.sh/Te5acgB",
  },
  {
    eyebrow: "BigCommerce · Developer GTM",
    name: "Catalyst",
    dot: "bigcommerce",
    summary:
      "Led GTM for a major developer initiative to accelerate headless storefront builds, shaping the positioning, launch strategy, partner adoption, and developer story around a composable reference storefront.",
    linkLabel: "Visit Catalyst",
    href: "https://dub.sh/LGdyGTp",
  },
  {
    eyebrow: "BigCommerce · Developer Education",
    name: "GraphQL Storefront API",
    dot: "bigcommerce",
    summary:
      "Revived a stalled developer release, brought Cart & Checkout into the story, and helped turn the API into a clearer path to headless commerce ahead of Catalyst.",
    linkLabel: "Watch the series",
    href: "https://dub.sh/DBIoDaX",
  },
];
