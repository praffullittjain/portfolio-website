import { Link } from "react-router-dom";

export default function BlogPostLayout({ title, paragraphs }) {
  return (
    <article className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-sage-dark hover:text-sage transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          {title}
        </h1>

        <div className="flex flex-col gap-5 text-gray-700 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
