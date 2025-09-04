"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { getPostBySlug } from "@/data/blogs";
import NotFound from "./NotFound";

const BlogDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    const title = `${post.title} – SonikDrive Blog`;
    document.title = title;

    const desc = post.excerpt;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // Canonical
    const href = window.location.origin + `/blogs/${post.slug}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", href);

    // JSON-LD BlogPosting
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "blogpost-jsonld";
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
      mainEntityOfPage: href,
    };
    ld.text = JSON.stringify(data);
    const existing = document.getElementById("blogpost-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(ld);

    return () => {
      const added = document.getElementById("blogpost-jsonld");
      if (added) added.remove();
    };
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <nav className="mb-6 text-sm">
              <Link href="/blogs" className="story-link text-muted-foreground">← Back to Blog</Link>
            </nav>

            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString()} • {post.readTime} • {post.tag}
              </p>
            </header>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="prose dark:prose-invert max-w-none py-6">
                  {post.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </CardContent>
              </Card>
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
