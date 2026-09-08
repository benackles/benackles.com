export interface UsesItem {
  name: string;
  description: string;
}

export interface UsesCategory {
  title: string;
  items: UsesItem[];
}

export const USES: UsesCategory[] = [
  {
    title: "Productivity",
    items: [
      {
        name: "Notion",
        description:
          "My centralized second brain, used for campaign planning, positioning maps, and launch calendars.",
      },
      {
        name: "Linear",
        description:
          "Keeps product and marketing in sync. Ideal for tracking cross-functional launches with engineering precision.",
      },
      {
        name: "Figma",
        description:
          "Where I build decks, draft wireframes, and collaborate on visual assets directly with product designers.",
      },
      {
        name: "Loom",
        description:
          "Crucial for async stakeholder updates, walking through launch strategies, and keeping remote teams aligned.",
      },
    ],
  },
  {
    title: "Research & Analysis",
    items: [
      {
        name: "Gong",
        description:
          "A goldmine for win/loss analysis and voice-of-customer insights. Essential for refining product messaging.",
      },
      {
        name: "Klue",
        description:
          "Central hub for competitive intelligence, sales battlecards, and tracking competitor product updates.",
      },
      {
        name: "Wynter",
        description:
          "My go-to for messaging testing. Getting direct, rapid feedback from verified B2B buyers is a superpower.",
      },
      {
        name: "SparkToro",
        description:
          "A brilliant tool for audience research, mapping where target customers hang out and what they read.",
      },
    ],
  },
  {
    title: "Content & Writing",
    items: [
      {
        name: "Arc Browser",
        description:
          "The ultimate research workspace. Split-screen views and folder structures keep complex campaigns organized.",
      },
      {
        name: "Hemingway Editor",
        description:
          "Enforces clear, concise writing. Invaluable for strip-mining buzzwords out of landing page copy.",
      },
      {
        name: "Grammarly",
        description:
          "The final safety check for tone, polish, and grammatical accuracy across all external-facing materials.",
      },
      {
        name: "Typefully",
        description:
          "Where I draft, schedule, and analyze thought leadership threads and product announcement narratives.",
      },
    ],
  },
  {
    title: "Design & Presentation",
    items: [
      {
        name: "Pitch",
        description:
          "Helps me spin up beautiful pitch decks, board updates, and launch briefs incredibly fast.",
      },
      {
        name: "Canva",
        description:
          "The fastest way to mock up quick social graphics, simple one-pagers, or custom campaign assets.",
      },
      {
        name: "Whimsical",
        description:
          "For collaborative virtual mapping of customer journeys, positioning frameworks, and GTM flows.",
      },
      {
        name: "Miro",
        description:
          "My virtual canvas of choice for running post-mortems, GTM kickoffs, and interactive strategy workshops.",
      },
    ],
  },
  {
    title: "Analytics",
    items: [
      {
        name: "Amplitude",
        description:
          "Vital for deep product adoption research, mapping customer activation, and segmenting usage behavior.",
      },
      {
        name: "Mixpanel",
        description:
          "How I track the performance of feature launches and measure product marketing campaign attribution.",
      },
      {
        name: "Google Analytics",
        description:
          "Keeps tabs on landing page conversion, blog traffic, and general website campaign performance.",
      },
      {
        name: "Tableau",
        description:
          "Where I review aggregate enterprise data and synthesize high-level performance reporting for executives.",
      },
    ],
  },
];
