import type { IconName } from "./components/Icon.astro";

/*
  The "Book a time" CTA is parked until scheduling is set up. Flip this to
  true to bring it back; the header needs no other change, because the nav
  pill and the CTA share one right-aligned group. With the CTA present the
  nav sits immediately to its left, and without it the nav takes the corner
  the CTA would have occupied.
*/
export const SHOW_BOOKING_CTA = false;

export const SITE = {
  title: "Ben Ackles",
  url: "https://benackles.com",
  description:
    "Ben Ackles is a product marketer in Boulder, Colorado working on positioning, messaging, and go-to-market strategy for technical products.",
  author: "Ben Ackles",
  bookingUrl: "https://cal.com/benackles",
} as const;

/*
  Drives both the header nav and the footer links.

  Blog and Uses are parked for now: their entries are commented out here and
  their routes are disabled by the leading underscore on src/pages/_blog/ and
  src/pages/_uses.astro (Astro skips underscore-prefixed files when building
  routes). To bring either back, uncomment its line and drop the underscore.
*/
export const NAV = [
  { label: "About", href: "/" },
  // { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  // { label: "Uses", href: "/uses" },
] as const;

/*
  The twitter, github and mail glyphs are still registered in
  src/components/Icon.astro if any of these come back later.
*/
export const SOCIALS: { label: string; href: string; icon: IconName }[] = [
  {
    label: "LinkedIn",
    href: "https://dub.sh/ntwphhm",
    icon: "linkedin",
  },
];
