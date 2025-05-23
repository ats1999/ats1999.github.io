import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { truncateByWords } from "@/lib/utils";
import Link from "next/link";
import { PublishedDate } from "@/components/PublishedDate";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="h-6 text-md font-bold text-muted-foreground">
                  <PublishedDate date={post.metadata.publishedAt} />
                </p>
                <h1 className="font-bold text-xl text-muted-foreground">
                  {post.metadata.title}
                </h1>
                <p>{truncateByWords(post.metadata.summary, 30)}</p>
              </div>
            </Link>
            <Link
              className="flex flex-col space-y-1 mb-8 text-blue-500"
              href={`/blog/${post.slug}`}
            >
              Read More 👉
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
