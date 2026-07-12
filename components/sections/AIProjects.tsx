import SectionTitle from "@/components/ui/SectionTitle";
import { aiProjects } from "@/data/aiProjects";

export default function AIProjects() {
  return (
    <section id="ai" className="bg-[#070B14] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="AI Solutions"
          title="Building intelligent software that works for your business."
          description="From AI assistants to workflow automation, I develop practical AI solutions that reduce manual work, improve productivity and help businesses scale."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aiProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6 transition hover:border-blue-500 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
                🤖
              </div>

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
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