const EXPERIENCE = [
  {
    org: "Imperial College Business School",
    role: "Full-time MBA",
    dates: "September 2025 to September 2026",
    highlight: {
      tag: "Live consulting engagement",
      title: "GTM consulting for a European green-tech scale-up",
      detail: "Country prioritisation framework, EEA WISE database analysis.",
    },
    bullets: [
      "President, LGBTQ+ and Allies Careers Club: corporate partnerships, speaker panels, mentoring programmes.",
      "Panelist at Capco Trans Visibility event on lived experiences and inclusive workplace design.",
    ],
  },
  {
    org: "Oracle",
    role: "Senior Application Engineer",
    dates: "April 2024 to August 2025",
    bullets: [
      "Owned end-to-end product backlog for Job Offers: user stories, acceptance criteria, sprint planning, QA coordination.",
      "Led cross-functional alignment across engineering, QA, design, and dependent teams to ship on time.",
      "Reduced server load and latency by 17% via UI migration from Oracle ADF to VBCS.",
      "Scaled AI adoption across 10 HR workflows: prompt design, measurement framework, post-launch iteration.",
      "Shipped Autocomplete feature reducing data entry errors through user feedback and dynamic field validation.",
    ],
  },
  {
    org: "Oracle",
    role: "Application Engineer",
    dates: "July 2021 to March 2024",
    bullets: [
      "Technical and product contact for 50+ international enterprise clients on HCM Cloud Journeys.",
      "Resolved 200+ bugs across the full stack, identifying systemic patterns and implementing platform-wide fixes.",
      "Designed and built REST APIs automating task assignment across employee lifecycle events.",
      "Diagnosed and resolved recurring HR data upload failures, reducing error rates and accelerating go-lives.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-2.5 sm:left-3 top-2 bottom-2 w-0.5 bg-sage/30" />

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((entry) => (
              <div key={`${entry.org}-${entry.role}`} className="relative">
                <div className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-sage ring-4 ring-white" />

                <p className="text-sm font-medium text-sage-dark">
                  {entry.dates}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {entry.role}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{entry.org}</p>

                {entry.highlight && (
                  <div className="mb-4 rounded-lg border-l-4 border-terracotta bg-terracotta/10 px-4 py-3">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wide text-terracotta-dark mb-1">
                      {entry.highlight.tag}
                    </span>
                    <p className="text-sm font-semibold text-gray-900">
                      {entry.highlight.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {entry.highlight.detail}
                    </p>
                  </div>
                )}

                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-gray-700 text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-sage"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
