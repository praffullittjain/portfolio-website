const SKILLS = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Claude Code",
  "Cursor",
  "Product Strategy",
  "User Research",
  "SQL",
  "Sprint Planning",
  "REST APIs",
  "A/B Testing",
];

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">
            <p>
              I spent four years at Oracle owning product roadmap and
              shipping a recruiting product used by enterprise HR teams
              globally, starting as an engineer and growing into someone who
              drove cross-functional alignment, defined requirements, and
              measured outcomes.
            </p>
            <p>
              I am now completing an MBA at Imperial, consulting on a live
              GTM strategy for a green-tech scale-up, volunteering as a
              Product Manager and Full-Stack Engineer at Ditch the Label
              where I am building digital safety education tools for young
              people, and developing an end-to-end booking and practice
              management platform for a therapy practice using Claude Code
              and Cursor.
            </p>
            <p>
              I am looking for a role where I can drive innovation and keep
              building things that matter.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg shadow-sm px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
