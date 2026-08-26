import { Link } from "react-router-dom";

const POSTS = [
  {
    title: "How I Use Claude Code in My Product Workflow",
    summary:
      "Specification-driven development, agent orchestration, and why the skill is in the thinking not the prompting.",
    href: "/blog/claude-code-workflow",
  },
  {
    title: "What Building for Vulnerable Users Taught Me About Product Design",
    summary:
      "How the no PII constraint on the DTL platform drove better architecture decisions than I would have made without it.",
    href: "/blog/vulnerable-users",
  },
  {
    title: "Why I Build in My Own Time",
    summary:
      "The honest answer to why I spend evenings and weekends building products nobody is paying me to build.",
    href: "/blog/building-own-time",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-offwhite py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Blog</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <div
              key={post.href}
              className="rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                {post.summary}
              </p>
              <Link
                to={post.href}
                className="mt-6 inline-flex self-start items-center text-sm font-semibold text-terracotta-dark hover:text-terracotta transition-colors"
              >
                Read more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
