export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-sm text-gray-500">
        <p>Praffullitt Jain &copy; {year}</p>
      </div>
    </footer>
  );
}
