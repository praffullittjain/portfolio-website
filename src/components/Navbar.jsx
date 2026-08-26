import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-sage tracking-tight">
          Engineer | Product Owner
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:praffullitt.jain@gmail.com"
            aria-label="Email Praffullitt Jain"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-sage/30 text-sage hover:bg-sage hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4.5 h-4.5"
            >
              <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>
          <a
            href="/Praffullitt-Jain-Resume.pdf"
            download="Praffullitt-Jain-Resume.pdf"
            className="rounded-lg bg-sage px-4 py-2 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-sage transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-sage transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-sage transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium text-gray-700 bg-white border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={handleLinkClick}
                className="block py-2.5 hover:text-sage transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:praffullitt.jain@gmail.com"
              onClick={handleLinkClick}
              className="block py-2.5 hover:text-sage transition-colors"
            >
              Email me
            </a>
          </li>
          <li>
            <a
              href="/Praffullitt-Jain-Resume.pdf"
              download="Praffullitt-Jain-Resume.pdf"
              onClick={handleLinkClick}
              className="block py-2.5 font-semibold text-sage-dark"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
