import BlogPostLayout from "../components/BlogPostLayout";

const PARAGRAPHS = [
  "Most people use AI to write faster. I use it to build faster, and the difference matters.",
  "My workflow is specification-driven. Before I touch Claude Code or Cursor, I write a planning document covering data models, API contracts, component architecture, and edge cases. The spec has to be detailed enough that an engineer could build from it without asking a single clarifying question. That is the bar.",
  "Then I direct the agents to implement against it. They are capable but literal. Vague spec, vague output. Precise spec, very good output. The skill is in the thinking, not the prompting.",
  "Then I review everything. I do not merge code I have not understood. Agents make subtle architectural decisions that compound over time. Catching a wrong assumption early is cheap. Catching it three sprints later is not.",
  "The most important thing I have learned: AI does not replace product thinking. It rewards it. The better your requirements and edge case thinking, the more useful the agent becomes. The people who get the most from these tools are not the best prompters. They are the clearest thinkers.",
];

export default function BlogClaudeCodeWorkflow() {
  return (
    <BlogPostLayout
      title="How I Use Claude Code in My Product Workflow"
      paragraphs={PARAGRAPHS}
    />
  );
}
