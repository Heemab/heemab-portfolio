import { technologies } from "@/data/technologies";

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-20 border-t border-gray-900 bg-[#070B14]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mb-14">

          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold">
            Tech Stack
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Technologies I use to build
            <br />
            scalable software.
          </h2>

          <p className="mt-5 text-gray-400 text-lg leading-8">
            I build modern web applications, AI systems and business
            automation using proven technologies that are scalable,
            secure and production ready.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {technologies.map((group) => (

            <div
              key={group.category}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-7 hover:border-blue-500 transition duration-300"
            >

              <h3 className="text-xl font-bold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}