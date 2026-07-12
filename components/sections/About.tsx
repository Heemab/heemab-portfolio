import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-900 bg-[#070B14] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              About
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              {about.heading}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              {about.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {about.highlights.map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-gray-800 bg-[#0B1220] px-5 py-4 transition duration-300 hover:border-blue-500 hover:bg-[#111C30]"
                >
                  ✓ {item}
                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-[#0B1220] to-[#121C2D] p-10 shadow-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              Why Clients Choose Me
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              More than a developer.
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              I help businesses turn ideas into production-ready software.
              Every project is designed with performance, automation,
              scalability and long-term business value in mind.
              AI assistants, workflow automation, proposal generation,
                  document processing and intelligent business systems.
            </p>

            <div className="mt-10 space-y-5">

              <div className="rounded-2xl border border-gray-800 bg-[#101826] p-6 transition hover:border-blue-500">
                <h4 className="font-semibold text-lg">
                  🚀 Business-First Development
                </h4>

                <p className="mt-2 text-gray-400 leading-7">
                  Every feature is built to solve a business problem,
                  improve efficiency and increase productivity.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-[#101826] p-6 transition hover:border-blue-500">
                <h4 className="font-semibold text-lg">
                  🌍 Remote Collaboration
                </h4>

                <p className="mt-2 text-gray-400 leading-7">
                  Clear communication, clean documentation and reliable
                  delivery for clients anywhere in the world.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}