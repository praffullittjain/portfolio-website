export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <p>Praffullitt Jain &copy; {year}</p>
        <p>Built with Claude Code and Cursor.</p>
      </div>
    </footer>
  );
}
