export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
        <p className="text-gray-600">
          Always happy to chat. Please feel free to{" "}
          <a
            href="mailto:praffullitt.jain@gmail.com"
            className="text-terracotta-dark font-medium hover:underline"
          >
            get in touch
          </a>
          .
        </p>
        <p className="text-sm text-gray-500">Praffullitt Jain &copy; {year}</p>
      </div>
    </footer>
  );
}
