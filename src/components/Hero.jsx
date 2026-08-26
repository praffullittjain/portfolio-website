const STATS = [
  "4 years at Oracle",
  "Imperial MBA 2026",
  "Building in my own time",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
        Praffullitt Jain
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl">
        Engineer turned Product Owner. Building with Claude Code and Cursor.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {STATS.map((stat) => (
          <span
            key={stat}
            className="rounded-full bg-sage/10 text-sage-dark border border-sage/20 px-4 py-2 text-sm font-medium"
          >
            {stat}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sage-dark transition-colors"
        >
          View my work
        </a>
        <a
          href="https://linkedin.com/in/praffullitt-jain/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-sage px-6 py-3 text-sm font-semibold text-sage hover:bg-sage hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
