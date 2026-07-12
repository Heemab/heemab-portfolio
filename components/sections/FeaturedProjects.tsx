import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#060B14] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <SectionTitle
          eyebrow="Featured Projects"
          title="Real solutions built for real businesses."
          description="A selection of AI, automation, business platforms and modern web applications delivered for real clients."
        />

        {/* Project Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#0B1220] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-900">

                {project.featured && (
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </div>
                )}

                {project.liveUrl && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Live
                  </div>
                )}

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Role & Year */}
                <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                  <span>{project.role}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-700 bg-gray-900/60 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-5">

                  <span className="font-semibold text-blue-500 transition group-hover:text-blue-400">
                    View Case Study →
                  </span>

                  {project.liveUrl ? (
                    <span className="text-sm text-green-400">
                      Live Website
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">
                      Private Project
                    </span>
                  )}

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}