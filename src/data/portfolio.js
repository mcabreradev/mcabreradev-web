export const portfolio = {
  personal: {
    name: "Miguelángel Cabrera",
    initials: "mc",
    role: "Senior Software Engineer",
    location: "Buenos Aires, Argentina",
    email: "mcabrera.dev@gmail.com",

    // Para agregar tu foto:
    // 1. Guardala en public/images/profile.jpg
    // 2. Cambiá null por "/images/profile.jpg"
    photo: null,
    photoAlt: "Miguelángel Cabrera",
  },

  navigation: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "AI & Agents",
      href: "#ai",
    },
    {
      label: "Expertise",
      href: "#expertise",
    },
  ],

  hero: {
    title: "Building digital products",
    highlightedTitle: "that work beautifully.",

    description:
      "I'm Miguelángel, a Senior Software Engineer with 15+ years of experience building web applications. I specialize in React, TypeScript and Node.js, and I'm exploring AI engineering and agentic workflows.",

    primaryAction: {
      label: "Explore my work",
      href: "#projects",
    },

    secondaryAction: {
      label: "Get in touch",
      href: "#contact",
    },
  },

  specialties: [
    "Frontend Engineering",
    "Full-Stack Development",
    "AI & Agentic Workflows",
  ],

  about: {
    eyebrow: "A little about me",
    title: "Engineering with a human touch.",

    paragraphs: [
      "I'm a senior software engineer who enjoys making complex products easier to use and maintain. I bring a strong frontend background, full-stack experience and a practical approach to solving product problems.",

      "Over the past 15+ years, I've worked on software across fintech, e-commerce, insurtech and proptech. My experience includes modernizing React applications, building reusable interfaces, integrating APIs and improving frontend performance.",

      "I enjoy working closely with product, design and backend teams to turn business requirements into clear, reliable user experiences. I also explore how AI-assisted development and agentic workflows can support the way software is planned, built and reviewed.",
    ],

    stats: [
      {
        value: "15+",
        label: "years of experience",
      },
      {
        value: "4",
        label: "industries explored",
      },
    ],
  },

  experience: {
    eyebrow: "Professional experience",
    title: "Work that makes a difference.",

    description:
      "I've worked with product and engineering teams to modernize applications, build complex workflows and deliver software used in different industries.",

    roles: [
      {
        id: "itti",
        company: "itti · MUV",
        role: "Senior Frontend Engineer",
        period: "Jun 2025 – Aug 2026",
        location: "Argentina",

        summary:
          "Contributed to the modernization of internal platforms supporting operational workflows for drivers, passengers, trips, billing and back-office teams.",

        highlights: [
          "Modernized legacy React screens using a feature-based architecture.",
          "Improved server-state management with TanStack Query and implemented role-based access controls.",
          "Built AI-assisted workflows for planning, implementation, code review, release notes and testing.",
        ],

        technologies: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Tailwind CSS",
          "Vitest",
          "Docker",
        ],
      },

      {
        id: "dbaccess",
        company: "DBACCESS",
        role: "Frontend Engineer",
        period: "May 2023 – Jan 2025",
        location: "Remote",

        summary:
          "Worked on SaaS products in hospitality and insurance, turning complex business requirements into customer-facing and administrative workflows.",

        highlights: [
          "Built features for a white-label hotel property management platform, including bookings, payments, refunds and integrations.",
          "Delivered insurance workflows for onboarding, quoting, invoicing, payments and renewals.",
          "Improved frontend performance through code splitting, asset optimization and caching.",
        ],

        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "NestJS",
          "AWS Amplify",
          "Stripe",
        ],
      },

      {
        id: "clevertech",
        company: "Clevertech",
        role: "Frontend Engineer",
        period: "2021 – 2023",
        location: "Remote",

        summary:
          "Developed features for a mobile-first construction industry product used to support equipment, workforce and billing operations.",

        highlights: [
          "Built workflows for equipment tracking, employee scheduling and billing.",
          "Improved frontend performance and maintainability through refactoring and state-management improvements.",
          "Collaborated with distributed teams to address production issues and deliver operational features.",
        ],

        technologies: [
          "React",
          "TypeScript",
          "Ionic",
          "Node.js",
          "GraphQL",
        ],
      },

      {
        id: "southernminds",
        company: "SouthernMinds",
        role: "Frontend Engineer",
        period: "Dec 2020 – Apr 2021",
        location: "Buenos Aires",

        summary:
          "Contributed to a headless e-commerce platform with server-side rendering, focusing on storefront performance and commerce workflows.",

        highlights: [
          "Co-developed a server-rendered storefront using Next.js.",
          "Worked on product and checkout integrations with Shopify, Stripe and GraphQL.",
        ],

        technologies: [
          "React",
          "TypeScript",
          "Next.js",
          "Shopify",
          "Stripe",
          "GraphQL",
        ],
      },

      {
        id: "leniolabs",
        company: "Leniolabs LLC",
        role: "Frontend Engineer",
        period: "Nov 2018 – Dec 2020",
        location: "Buenos Aires",

        summary:
          "Worked on frontend solutions for a U.S.-based mortgage and lending platform, contributing to financial workflows and reusable interfaces.",

        highlights: [
          "Built reusable UI components with Storybook.",
          "Developed interfaces for mortgage processing and lending workflows.",
          "Improved maintainability by refactoring shared frontend logic.",
        ],

        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "Storybook",
        ],
      },
    ],
  },

  projectsSection: {
    eyebrow: "Selected projects",
    title: "Ideas in motion.",

    description:
      "Open-source work, product ideas and experiments that reflect how I like to think and build.",

    note:
      "Much of my professional work was built for private companies. I'd be happy to talk through my experience and contributions.",
  },

  projects: [
    {
      id: "filter",
      category: "Open source · npm package",
      title: "@mcabreradev/filter",

      description:
        "An open-source TypeScript library for querying and filtering arrays with declarative syntax. It supports MongoDB-style operators and SQL-like wildcards, with zero runtime dependencies.",

      tags: ["TypeScript", "Open source", "npm"],
      theme: "lime",

      links: [
        {
          label: "npm",
          href: "https://www.npmjs.com/package/@mcabreradev/filter",
        },
        {
          label: "GitHub",
          href: "https://github.com/mcabreradev/filter",
        },
        {
          label: "Docs",
          href: "https://mcabreradev-filter.vercel.app/",
        },
      ],
    },

    {
      id: "hermes",
      category: "AI agents · Experimental project",
      title: "Hermes SDD Agency",

      description:
        "An experimental workflow where Hermes coordinates specialized agents for implementation, review and refactoring, using specifications to guide development and human review to validate the results.",

      tags: ["AI agents", "Orchestration", "OpenSpec"],
      theme: "purple",

      links: [
        {
          label: "Visit project",
          href: "https://mcabreradev.github.io/hermes-sdd-agency/",
        },
      ],
    },

    {
      id: "te-falta-uno",
      category: "Product concept · In development",
      title: "Te Falta Uno",

      description:
        "A sports event platform I'm planning and building to help teams organize games and activities. The MVP combines a native iOS app with a Go API and PostgreSQL, with attention to invitations, availability and concurrent registrations.",

      tags: ["Product design", "SwiftUI", "Go", "PostgreSQL"],
      theme: "dark",
      links: [],
    },

    {
      id: "gatekeepr",
      category: "Product concept · Personal project",
      title: "Gatekeepr",

      description:
        "An idea for making Telegram bot management more approachable through a multi-tenant web application.",

      tags: ["Astro", "React", "TypeScript"],
      theme: "dark",
      links: [],
    },

    {
      id: "bots",
      category: "Automation · Personal projects",
      title: "Bots & experiments",

      description:
        "From Discord bots to a Slack standup assistant and an Alexa skill for Argentine train schedules, I enjoy building tools that solve everyday problems.",

      tags: ["Node.js", "TypeScript", "Automation"],
      theme: "dark",

      links: [
        {
          label: "Explore GitHub",
          href: "https://github.com/mcabreradev",
        },
      ],
    },
  ],

  ai: {
    eyebrow: "AI & agentic engineering",
    title: "Building with AI, thoughtfully.",

    introduction:
      "I'm exploring how AI agents and large language models can support the software development lifecycle.",

    description:
      "My current experiments focus on agent orchestration, specification-driven development and workflows for planning, implementation, testing and review. I see AI as a tool that supports engineering judgment, with human ownership over decisions and quality.",

    topics: [
      "Orchestrating specialized agents with Hermes.",
      "Using OpenSpec and specifications to guide implementation.",
      "Exploring AI-assisted research, planning, coding, testing and review.",
      "Experimenting with LLM tools and local or cloud-based models.",
    ],
  },

  expertise: {
    eyebrow: "The toolkit",
    title: "What I bring to the table.",

    groups: [
      {
        name: "Frontend",
        technologies: [
          "React",
          "TypeScript",
          "JavaScript",
          "Next.js",
          "TanStack Query",
          "Redux",
          "Tailwind CSS",
          "Storybook",
        ],
      },

      {
        name: "Backend & APIs",
        technologies: [
          "Node.js",
          "NestJS",
          "Laravel",
          "REST APIs",
          "GraphQL",
          "PostgreSQL",
        ],
      },

      {
        name: "Quality & delivery",
        technologies: [
          "Testing",
          "Vitest",
          "Jest",
          "React Testing Library",
          "Git",
          "Docker",
          "CI/CD",
        ],
      },

      {
        name: "AI & agents",
        technologies: [
          "Agentic workflows",
          "Hermes",
          "OpenSpec",
          "AI-assisted development",
        ],
      },

      {
        name: "Learning",
        technologies: [
          "Go",
          "Rust",
          "AI engineering",
          "LLM applications",
          "Agent orchestration",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Have something in mind?",
    title: "Let's make something good.",

    description:
      "I'm interested in remote software engineering opportunities and collaborations on thoughtful digital products. If you're building something interesting, I'd love to hear about it.",

    buttonLabel: "Email me",

    secondaryAction: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/mcabreradev/",
    },
  },

  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mcabreradev/",
      external: true,
    },

    {
      label: "GitHub",
      href: "https://github.com/mcabreradev",
      external: true,
    },

    {
      label: "Email",
      href: "mailto:mcabrera.dev@gmail.com",
      external: false,
    },
  ],

  seo: {
    title: "Miguelángel Cabrera | Senior Software Engineer",

    description:
      "Miguelángel Cabrera is a senior software engineer specializing in React, TypeScript and Node.js, while exploring AI engineering and agentic workflows.",
  },
};
