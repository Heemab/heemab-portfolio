import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#070B14] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="grid items-end gap-8 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              What I Do
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              End-to-end solutions
              <br />
              that drive growth.
            </h2>

          </div>

          <p className="max-w-xl text-lg leading-8 text-gray-400 lg:justify-self-end">
            From idea to deployment, I build scalable,
            secure and high-performing software that helps
            businesses operate smarter and grow faster.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="group flex h-full flex-col rounded-2xl border border-gray-800 bg-[#0B1220] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
            >

              <div className="text-4xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 flex-1 leading-8 text-gray-400">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-8 inline-flex items-center font-semibold text-blue-500 transition duration-300 group-hover:translate-x-2 group-hover:text-blue-400"
              >
                Learn More →
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}