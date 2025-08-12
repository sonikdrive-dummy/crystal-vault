export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  readTime: string;
  tag: string;
  content: string[]; // simple paragraphs
};

export const posts: BlogPost[] = [
  {
    slug: "ultimate-cloud-storage-guide",
    title: "The Ultimate Guide to Secure Cloud Storage",
    excerpt:
      "Best practices to protect your files, from encryption to zero-knowledge setups.",
    date: "2025-06-15",
    author: "Team SonikDrive",
    readTime: "6 min read",
    tag: "Security",
    content: [
      "Cloud storage security starts with encryption—both at rest and in transit.",
      "Use strong, unique passwords and enable two-factor authentication for every account.",
      "For maximum privacy, consider providers that offer client-side or zero-knowledge encryption.",
      "Regularly review app permissions and connected devices to minimize exposure.",
    ],
  },
  {
    slug: "speed-up-sync",
    title: "10 Ways to Speed Up Your File Sync",
    excerpt:
      "Practical tips to boost sync performance across devices and networks.",
    date: "2025-05-28",
    author: "Team SonikDrive",
    readTime: "4 min read",
    tag: "Performance",
    content: [
      "Ensure your client is updated to the latest version for performance improvements.",
      "Exclude large temp folders and cache directories from sync.",
      "Use wired connections or 5 GHz Wi‑Fi for faster throughput.",
      "Enable differential sync so only changed blocks are uploaded.",
    ],
  },
  {
    slug: "choose-right-plan",
    title: "How to Choose the Right Cloud Plan for You",
    excerpt:
      "Storage vs. price vs. collaboration: picking the plan that fits your workflow.",
    date: "2025-04-10",
    author: "Team SonikDrive",
    readTime: "5 min read",
    tag: "Planning",
    content: [
      "Start by estimating your current storage usage and growth for the next 12 months.",
      "If you collaborate frequently, prioritize features like shared folders and access controls.",
      "Balance price with performance: faster sync and reliable uptime save productivity time.",
      "Choose a provider with transparent pricing and easy plan upgrades.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
