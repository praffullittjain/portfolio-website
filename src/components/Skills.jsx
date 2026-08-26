const SKILL_CATEGORIES = [
  {
    title: "Technical",
    items: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Python",
      "Java",
      "REST APIs",
      "HTML/CSS/JavaScript",
    ],
  },
  {
    title: "AI and Prototyping",
    items: [
      "Claude Code",
      "Cursor",
      "LLM Prompt Engineering",
      "Specification-driven Development",
    ],
  },
  {
    title: "Product",
    items: [
      "Backlog Management",
      "User Stories",
      "Acceptance Criteria",
      "Sprint Planning",
      "Stakeholder Management",
      "User Research",
    ],
  },
  {
    title: "Data",
    items: ["SQL", "Google Analytics", "Product Metrics", "A/B Testing", "KPI Tracking"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="bg-sage/10 border-b border-sage/20 px-6 py-4">
                <h3 className="font-semibold text-sage-dark">
                  {category.title}
                </h3>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-offwhite text-gray-700 rounded-md px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
