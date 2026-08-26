import BlogPostLayout from "../components/BlogPostLayout";

const PARAGRAPHS = [
  "When I started building the digital safety platform for Ditch the Label, I thought the hard part would be the technology. It was not. The hard part was the constraints.",
  "The users are young people aged 11 to 18, many of whom are dealing with bullying, online abuse, or worse. That changes everything about how you design. You cannot store their data. You cannot ask them to create accounts. You cannot gamify in ways that feel exploitative. Every decision has a safeguarding implication and you have to think it through before you build it, not after.",
  "The constraint I found most interesting was the no PII requirement. We could not store any student identifiable information, which meant the entire progression and tracking model had to be anonymised by design. That single constraint drove the architecture of the whole platform. Session-based tracking, badge state held client-side, no persistent user profiles. It simplified the system in ways I did not expect.",
  "The lesson I took from it: constraints are not obstacles to good product design. They are often the source of it. The best decisions I made on this project came directly from the hardest limitations. When you cannot do the obvious thing, you are forced to find a better one.",
];

export default function BlogVulnerableUsers() {
  return (
    <BlogPostLayout
      title="What Building for Vulnerable Users Taught Me About Product Design"
      paragraphs={PARAGRAPHS}
    />
  );
}
