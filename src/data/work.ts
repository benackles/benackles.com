import type { IconName } from "../components/Icon.astro";

export interface Job {
  company: string;
  role: string;
  period: string;
  /** Decorative — the company name beside it carries the meaning. */
  icon: IconName;
}

export const WORK: Job[] = [
  {
    company: "Enumerate",
    role: "Sr. Product Marketing Manager",
    period: "2025 — Sept 2026",
    icon: "sparkles",
  },
  {
    company: "Storyblok",
    role: "Product Marketing Manager",
    period: "2024 — 2025",
    // Perceptual map — the artifact of positioning work.
    icon: "chart-scatter",
  },
  {
    company: "BigCommerce",
    role: "Product Marketing Manager, DX",
    period: "2021 — 2023",
    icon: "test-tube",
  },
];

export const CURRENTLY_BUILDING =
  "Exploring product marketing from both sides: building a zero-to-one product with MeetCard and a working Storybook design system with Deck.";
