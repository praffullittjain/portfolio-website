import headshot from "../assets/praffullitt-headshot.jpg";

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
      <img
        src={headshot}
        alt="Praffullitt Jain"
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md border-4 border-white ring-1 ring-gray-100"
      />

      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
        Praffullitt Jain
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl">
        Engineer turned Product Owner
      </p>

      <span className="mt-5 inline-block rounded-full bg-terracotta/10 text-terracotta-dark border border-terracotta/20 px-3.5 py-1 text-xs font-medium">
        Open to roles in London
      </span>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
