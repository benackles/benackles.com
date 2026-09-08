import type { IconName } from "../components/Icon.astro";

export interface Job {
  company: string;
  role: string;
  period: string;
  icon: IconName;
}

export const WORK: Job[] = [
  {
    company: "Enumerate",
    role: "Senior Product Marketing Manager",
    period: "2025 — Present",
    icon: "atom",
  },
  {
    company: "Storyblok",
    role: "Product Marketing Manager",
    period: "2024 — 2025",
    icon: "chart-line",
  },
  {
    company: "BigCommerce",
    role: "Product Marketing Manager, DX",
    period: "2021 — 2023",
    icon: "database",
  },
];

export const CURRENTLY_BUILDING =
  "Exploring product marketing from both sides: building a zero-to-one product with MeetCard and a working Storybook design system with Deck.";
