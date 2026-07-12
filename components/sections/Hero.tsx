import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060B14]">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            {profile.role} • {profile.subtitle}
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.08] md:text-6xl xl:text-[5.2rem]">

            Building{" "}

            <span className="text-blue-500">
              AI-Powered Software
            </span>{" "}

            That Solves

            <br />

            Real Business Problems.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            {profile.tagline}
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Book a Free Consultation
            </a>

            <a
              href="/resume/Adewumi_Ibraheem_Resume.pdf"
              target="_blank"
              className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-blue-500"
            >
              Download Resume
            </a>

          </div>

          

        </div>

        {/* RIGHT */}

        <div className="-mt-2 rounded-3xl border border-gray-800 bg-gradient-to-br from-[#0B1220] to-[#121C2D] p-8 shadow-2xl">

          <div className="flex items-center justify-between border-b border-gray-800 pb-5">

            <div>

              <h2 className="text-2xl font-bold">
                {profile.brand}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                AI • Full-Stack • Automation
              </p>

            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
              ● Available
            </span>

          </div>

          <div className="mt-8 space-y-4">

            {[
              {
                title: "AI Client Acquisition Engine",
                text: "Automates lead discovery, qualification, proposals and follow-up.",
              },
              {
                title: "AI Proposal Generator",
                text: "Creates personalized proposals for freelance opportunities in seconds.",
              },
              {
                title: "Workflow Automation",
                text: "Connects business systems and removes repetitive manual work.",
              },
              {
                title: "Modern Web Applications",
                text: "Responsive, scalable software using Next.js, React and TypeScript.",
              },
              {
                title: "API Integrations",
                text: "OpenAI, Stripe, WhatsApp, CRMs and third-party services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-800 bg-[#101826] p-5 transition hover:border-blue-500"
              >
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}