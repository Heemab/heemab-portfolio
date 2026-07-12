import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Software Development Services | HEEMAB AI Solutions",
  description:
    "AI Engineering, Full-Stack Development, Business Automation, API Integration, Dashboards and WordPress solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060B14] text-white">

      {/* Hero */}

      <section className="border-b border-gray-800">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Services
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Software solutions built
            <br />
            for modern businesses.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            I help startups, businesses and organizations build
            AI-powered software, automation systems and modern web
            applications that improve productivity and accelerate growth.
          </p>

        </div>

      </section>

      {/* Services */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-gray-800 bg-[#0B1220] p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                {service.description}
              </p>

              <span className="mt-8 inline-block font-semibold text-blue-500 transition group-hover:translate-x-2">
                Learn More →
              </span>

            </Link>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-gray-800 bg-[#0B1220]">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Ready to build your next software project?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Whether you need AI automation, a business platform,
            API integrations or a modern website, let's discuss
            how I can help.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Book Free Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}