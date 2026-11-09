/*
  Dots carry the brand colour of the company the work was for; the one
  independent project (Pinched) keeps its own. Values live in
  src/styles/global.css.
*/
export type DotColor =
  | "bigcommerce"
  | "storyblok"
  | "enumerate"
  | "signal"
  | "pinched";

/*
  Every outbound link is routed through dub.sh so clicks are tracked. Labels
  name the destination rather than repeating the URL, since a dub.sh href
  would make a URL label misleading anyway.
*/
export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  eyebrow: string;
  name: string;
  dot: DotColor;
  /** Short status tag shown beside the title. */
  status?: "WIP" | "BETA";
  /** Set on the one project shown full width above the grid. */
  featured?: boolean;
  summary: string;
  /*
    One destination for most projects; Pinched has two, the marketing site
    and the app itself. The grid shows the first, the featured card lists
    them all.
  */
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    eyebrow: "Independent · Build & GTM",
    name: "Pinched",
    dot: "pinched",
    status: "BETA",
    featured: true,
    summary:
      "Took a meal-prep app from first prototype to launch, solo. I designed the product, shipped the web app, and ran the go-to-market: positioning, Free and Pro pricing, a staged beta, a founding-member offer, and creator partnerships. No paid ads.",
    links: [
      { label: "View marketing site", href: "https://dub.sh/p3OpEHk" },
      { label: "Launch app", href: "https://dub.sh/l0iC907" },
    ],
  },
  {
    eyebrow: "Enumerate · AI Product Launch",
    name: "Numa AI",
    dot: "enumerate",
    summary:
      "Repositioned five separate AI capabilities into one product story around agentic work: AI that finishes the task, not just assists.",
    links: [{ label: "View Numa AI", href: "https://dub.sh/LcRtkwY" }],
  },
  {
    eyebrow: "Storyblok · Positioning",
    name: "Storyblok",
    dot: "storyblok",
    summary:
      "Led the company-wide repositioning that broke Storyblok out of a crowded headless CMS market, across developer and enterprise audiences.",
    links: [{ label: "View storyblok.com", href: "https://dub.sh/Te5acgB" }],
  },
  {
    eyebrow: "BigCommerce · Developer GTM",
    name: "Catalyst",
    dot: "bigcommerce",
    summary:
      "Led GTM for a composable reference storefront that cut the complexity of headless builds: positioning, launch, and partner adoption.",
    links: [{ label: "Visit Catalyst", href: "https://dub.sh/LGdyGTp" }],
  },
  {
    eyebrow: "BigCommerce · Dev Rel",
    name: "GraphQL Storefront API",
    dot: "bigcommerce",
    summary:
      "Shipped a stalled GraphQL Storefront API release with Cart & Checkout, then reframed it as the on-ramp to headless storefronts.",
    links: [{ label: "Watch the series", href: "https://dub.sh/DBIoDaX" }],
  },
];
