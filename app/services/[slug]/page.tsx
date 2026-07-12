import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/service-details";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060B14] text-white">

      {/* Hero */}
      <section className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <Link
            href="/#services"
            className="text-blue-400 hover:text-blue-300"
          >
            ← Back to Services
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Service
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            {service.subtitle}
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <h2 className="text-3xl font-bold">
              Overview
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {service.overview}
            </p>

          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#0B1220] p-8">

            <h3 className="text-2xl font-bold">
              Featured Project
            </h3>

            <p className="mt-4 text-gray-400">
              {service.featuredProject}
            </p>

            <Link
              href="/#projects"
              className="mt-8 inline-block font-semibold text-blue-500 hover:text-blue-400"
            >
              View Related Projects →
            </Link>

          </div>

        </div>

      </section>

      {/* Problems & Solutions */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-2">

        <div>

          <h2 className="text-3xl font-bold">
            Problems I Solve
          </h2>

          <div className="mt-8 space-y-4">

            {service.problems.map((problem) => (
              <div
                key={problem}
                className="rounded-xl border border-gray-800 bg-[#0B1220] p-5"
              >
                {problem}
              </div>
            ))}

          </div>

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Solutions
          </h2>

          <div className="mt-8 space-y-4">

            {service.solutions.map((solution) => (
              <div
                key={solution}
                className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-5"
              >
                ✓ {solution}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-bold">
          Technologies
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">

          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-700 px-5 py-2"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-bold">
          Development Process
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {service.process.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6"
            >
              <p className="text-sm text-blue-500">
                Step {index + 1}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">

          {service.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 bg-[#0B1220]">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            {service.ctaTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {service.ctaDescription}
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Book a Free Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}