import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#060B14] text-white">

      {/* Hero */}
      <section className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <Link
            href="/#projects"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ← Back to Projects
          </Link>

          <p className="mt-8 uppercase tracking-[0.25em] text-sm font-semibold text-blue-500">
            {project.category}
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            {project.description}
          </p>

        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="overflow-hidden rounded-3xl border border-gray-800">

          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="w-full object-cover"
          />

        </div>

      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">

        {/* Left */}
        <div className="space-y-16 lg:col-span-2">

          {/* Overview */}
          <div>

            <h2 className="text-3xl font-bold">
              Project Overview
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {project.description}
            </p>

          </div>

          {/* Challenge */}
          <div>

            <h2 className="text-3xl font-bold">
              The Challenge
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {project.challenge}
            </p>

          </div>

          {/* Solution */}
          <div>

            <h2 className="text-3xl font-bold">
              The Solution
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {project.solution}
            </p>

          </div>

          {/* Results */}
          <div>

            <h2 className="text-3xl font-bold">
              Results
            </h2>

            <div className="mt-8 grid gap-4">

              {project.results.map((result) => (

                <div
                  key={result}
                  className="rounded-xl border border-gray-800 bg-[#0B1220] p-5"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  {result}
                </div>

              ))}

            </div>

          </div>

          {/* Technology */}
          <div>

            <h2 className="text-3xl font-bold">
              Technologies Used
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-gray-700 px-4 py-2 text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (

            <div>

              <h2 className="text-3xl font-bold">
                Project Gallery
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {project.gallery.map((image) => (

                  <div
                    key={image}
                    className="overflow-hidden rounded-2xl border border-gray-800"
                  >

                    <Image
                      src={image}
                      alt={project.title}
                      width={900}
                      height={600}
                      className="w-full object-cover hover:scale-105 transition duration-500"
                    />

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-gray-800 bg-[#0B1220] p-8 sticky top-28">

          <h3 className="text-2xl font-bold">
            Project Details
          </h3>

          <div className="mt-8 space-y-8">

            <div>

              <p className="text-gray-500 text-sm">
                Client
              </p>

              <p className="mt-1 font-semibold">
                {project.client}
              </p>

            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Role
              </p>

              <p className="mt-1 font-semibold">
                {project.role}
              </p>

            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Year
              </p>

              <p className="mt-1 font-semibold">
                {project.year}
              </p>

            </div>

          </div>

          {project.liveUrl && (

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-700 transition"
            >
              Visit Live Website
            </a>

          )}

        </aside>

      </section>

      {/* Related Projects */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="text-4xl font-bold">
          More Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {relatedProjects.map((item) => (

            <Link
              key={item.id}
              href={`/projects/${item.slug}`}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6 transition hover:border-blue-500 hover:-translate-y-1"
            >

              <p className="uppercase tracking-widest text-xs text-blue-500">
                {item.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.shortDescription}
              </p>

              <span className="mt-6 inline-block font-semibold text-blue-500">
                View Project →
              </span>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}