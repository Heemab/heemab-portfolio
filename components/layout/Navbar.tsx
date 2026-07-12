export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800/70 bg-[#060B14]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="group">
          <h1 className="text-2xl font-extrabold tracking-tight text-white transition group-hover:text-blue-500">
            HEEMAB
          </h1>

          <p className="text-xs uppercase tracking-[0.25em] text-blue-500">
            AI Solutions
          </p>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#services"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#ai"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            AI Solutions
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#tech"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Tech Stack
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Contact
          </a>

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Book a Free Consultation
        </a>

      </div>
    </nav>
  );
}