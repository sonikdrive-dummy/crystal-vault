import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const posts = [
  {
    slug: "ultimate-cloud-storage-guide",
    title: "The Ultimate Guide to Secure Cloud Storage",
    excerpt:
      "Best practices to protect your files, from encryption to zero-knowledge setups.",
    date: "2025-06-15",
    author: "Team SonikDrive",
    readTime: "6 min read",
    tag: "Security",
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
  },
];

const Blogs = () => {
  // Basic SEO without extra deps
  useEffect(() => {
    const title = "SonikDrive Blog – Cloud Storage Tips & Insights";
    document.title = title;

    const desc =
      "Read the latest on secure cloud storage, sync performance, and productivity from SonikDrive.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // Canonical
    const href = window.location.origin + "/blogs";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", href);

    // JSON-LD structured data (ItemList of BlogPosting)
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "blogs-jsonld";
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "SonikDrive Blog",
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          author: { "@type": "Organization", name: p.author },
          url: window.location.origin + "/blogs#" + p.slug,
        },
      })),
    };
    ld.text = JSON.stringify(data);
    // remove old one if exists
    const existing = document.getElementById("blogs-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(ld);

    return () => {
      // optional cleanup
      const added = document.getElementById("blogs-jsonld");
      if (added) added.remove();
    };
  }, []);

  const groupedByTag = useMemo(() => {
    return posts.reduce<Record<string, typeof posts>>((acc, p) => {
      acc[p.tag] = acc[p.tag] ? [...acc[p.tag], p] : [p];
      return acc;
    }, {});
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SonikDrive Blog</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tips, guides, and insights on secure cloud storage, sync performance,
                and productivity.
              </p>
            </header>

            <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
              {/* Articles */}
              <div className="grid sm:grid-cols-2 gap-6">
                {posts.map((post, idx) => (
                  <motion.article
                    key={post.slug}
                    id={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-glow transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{post.tag}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <a
                          href={`#${post.slug}`}
                          className="text-primary font-medium hover:underline"
                          aria-label={`Read ${post.title}`}
                        >
                          Read more
                        </a>
                      </CardFooter>
                    </Card>
                  </motion.article>
                ))}
              </div>

              {/* Sidebar */}
              <aside className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {Object.keys(groupedByTag).map((tag) => (
                        <li key={tag}>
                          <a href={`#${tag.toLowerCase()}`} className="hover:underline">
                            {tag} ({groupedByTag[tag].length})
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">About this blog</CardTitle>
                    <CardDescription>
                      Articles from the SonikDrive team to help you get more from the cloud.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
