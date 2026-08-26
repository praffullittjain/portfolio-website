const PROJECTS = [
  {
    title: "Ditch the Label: Digital Safety Platform",
    tags: ["React", "Node.js", "PostgreSQL", "Claude Code"],
    description:
      "A safeguarding-compliant gamified learning platform for young people aged 11 to 18, covering online safety, bullying, and digital extortion. Built from scratch as sole Product Manager and Full-Stack Engineer for a UK youth charity. Students earn badges and progress toward becoming Champions.",
    link: "https://dtl-safety-quiz.netlify.app/",
    linkLabel: "View live",
  },
  {
    title: "Therapy Practice Platform",
    tags: ["React", "Node.js", "Claude Code", "Cursor"],
    description:
      "An end-to-end booking and practice management platform for a therapy practice. Patient-facing web app for discovery and booking, plus a companion mobile app for the therapist to manage bookings in real time. Owned the full product lifecycle from discovery through to deployment.",
    link: null,
    linkLabel: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-sage/10 text-sage-dark rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed flex-1">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex self-start items-center rounded-lg bg-sage px-5 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
                >
                  {project.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
