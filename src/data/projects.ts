/*
  Dots carry the brand colour of the company the work was for; the one
  independent project (Pinched) keeps its own. Values live in
  src/styles/global.css.
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
  /** Short status tag shown beside the title. */
  status?: "WIP" | "BETA";
  /** Set on the one project shown full width above the grid. */
  featured?: boolean;
  summary: string;
  linkLabel: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    eyebrow: "Independent · Build & GTM",
    name: "Pinched",
    dot: "signal",
    status: "BETA",
    featured: true,
    summary:
      "Took a meal-prep app from first prototype to launch, solo. I designed the product, shipped the web app, and ran the go-to-market: positioning, Free and Pro pricing, a staged beta, a founding-member offer, and creator partnerships. No paid ads.",
    linkLabel: "Visit Pinched.app",
    href: "https://pinched.app",
  },
  {
    eyebrow: "Enumerate · AI Product Launch",
    name: "Numa AI",
    dot: "enumerate",
    summary:
      "Helped reposition five separate AI capabilities into one clearer product story around agentic work, giving customers a simpler way to understand how AI could move from assistance to completed work.",
    linkLabel: "View Numa AI",
    href: "https://dub.sh/LcRtkwY",
  },
  {
    eyebrow: "Storyblok · Company-level Positioning",
    name: "Storyblok",
    dot: "storyblok",
    summary:
      "Led a company-wide repositioning to break Storyblok out of a crowded headless CMS market, sharpening the category story, differentiation, and messaging across developers, marketers, and enterprise buyers.",
    linkLabel: "View storyblok.com",
    href: "https://dub.sh/Te5acgB",
  },
  {
    eyebrow: "BigCommerce · Developer GTM",
    name: "Catalyst",
    dot: "bigcommerce",
    summary:
      "Led GTM for a developer initiative that reduced the complexity of headless storefront builds, shaping the positioning, launch strategy, partner adoption, and developer story around a composable reference storefront.",
    linkLabel: "Visit Catalyst",
    href: "https://dub.sh/LGdyGTp",
  },
  {
    eyebrow: "BigCommerce · Developer Education",
    name: "GraphQL Storefront API",
    dot: "bigcommerce",
    summary:
      "Completed a stalled GraphQL Storefront API release with Cart & Checkout, then helped evolve the story from standalone API capability toward a clearer path to building headless storefronts with Catalyst.",
    linkLabel: "Watch the series",
    href: "https://dub.sh/DBIoDaX",
  },
];
