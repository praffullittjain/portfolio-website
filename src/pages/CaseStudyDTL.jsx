import { Link } from "react-router-dom";
import DTLArchitectureDiagram from "../components/DTLArchitectureDiagram";

const TAGS = ["React", "Node.js", "PostgreSQL", "Claude Code", "Cursor"];

export default function CaseStudyDTL() {
  return (
    <article className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-sage-dark hover:text-sage transition-colors mb-8"
        >
          &larr; Back to Projects
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ditch the Label: Digital Safety Platform
        </h1>
        <p className="mt-3 text-gray-500">
          Product Manager &amp; Full-Stack Engineer, April 2026 to Present
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-sage/10 text-sage-dark rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              The Problem
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ditch the Label, a UK youth charity, had deep expertise in
              child safety and an existing relationship with schools but no
              scalable way to deliver educational content to students
              directly. The content existed but the experience of consuming
              it was passive, linear, and had poor completion rates among
              young users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              My Role
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Volunteer Product Manager and Full-Stack Engineer. I initiated
              this engagement after meeting Dominic, the CEO, at a
              conference and proposing that I could help build something
              they had been wanting but did not have the technical capacity
              to deliver. I owned the full product lifecycle end to end
              with no other product person on the team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Discovery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I conducted research with educators, child safety
              organisations, and subject matter experts to understand what
              young people needed and what safeguarding frameworks
              required. I reviewed existing course formats and identified
              the core problem: this was an engagement problem, not a
              content problem. The material was good but the format was
              wrong for an 11 to 18 year old audience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              What I Decided to Build
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A gamified learning platform where students earn badges on
              completing modules and progress toward becoming recognised
              Champions in their school. Topics covered: online safety,
              bullying, digital extortion, sexual education, and gender
              identity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              What I Cut
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A student login and profile system. The safeguarding
              requirement to store no student PII meant I designed an
              anonymised-by-design data model from the start. This
              constraint simplified the architecture and made school
              deployment significantly easier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How I Built It: The Spec First
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Before writing a single line of code I wrote a planning
              document covering: data model (how badge state, module
              completion, and session tracking would be stored without any
              student PII), API contracts (endpoints for module
              progression, badge assignment, and completion tracking),
              component architecture (how the React frontend would manage
              state client-side without persistent user profiles), edge
              cases (what happens when a student closes the browser
              mid-module, how completion is validated, how the Champion
              threshold is calculated). Only once the spec was solid did I
              direct Claude Code and Cursor to implement against it. I
              reviewed all generated code critically before merging.
            </p>
          </section>

          <DTLArchitectureDiagram />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Outcome
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Live platform deployed at dtl-safety-quiz.netlify.app. Ready
              for pilot with schools. The engagement model is validating
              the core hypothesis that young people respond to progression
              and recognition in ways they do not respond to passive
              content.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="https://dtl-safety-quiz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            View live
          </a>
          <Link
            to="/#projects"
            className="text-sm font-medium text-sage-dark hover:text-sage transition-colors"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
