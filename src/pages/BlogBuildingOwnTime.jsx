import BlogPostLayout from "../components/BlogPostLayout";

const PARAGRAPHS = [
  "People sometimes ask why I spend my evenings and weekends building products nobody is paying me to build. The honest answer is that I do not know how to stop.",
  "The DTL platform started with a conversation at a conference. I met the CEO, heard what they were trying to do, and walked away thinking I could help. A few weeks later I was conducting research with educators and child safety experts and mapping out a data model. Nobody asked me to. I just saw something worth doing.",
  "The therapist platform started the same way. A close friend runs a therapy practice and was managing everything manually. Bookings by text message, no way to see her week at a glance, no way for new clients to find her. I asked if I could build her something. Six months later she has a patient-facing booking platform and a mobile app to manage her practice.",
  "What I have learned from both projects is that building in your own time is the best product education there is. Nobody is telling you what to prioritise. Nobody is writing the requirements. Nobody is unblocking you when you are stuck. You have to do all of it, which means you learn all of it.",
  "It also means you only build things you genuinely believe in. That filter makes the work better.",
];

export default function BlogBuildingOwnTime() {
  return (
    <BlogPostLayout
      title="Why I Build in My Own Time"
      paragraphs={PARAGRAPHS}
    />
  );
}
