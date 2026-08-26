import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-offwhite py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-600">
          Open to Engineering, Product Owner and Technical PM roles in
          London.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:praffullitt.jain@gmail.com"
            className="text-sage-dark font-medium hover:underline"
          >
            praffullitt.jain@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/praffullitt-jain/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sage px-5 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Send message
          </button>

          {submitted && (
            <p className="text-sm text-sage-dark text-center">
              Thanks for reaching out. I will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
