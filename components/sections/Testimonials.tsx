import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          eyebrow="Testimonials"
          title="What clients say."
          description="Feedback from founders, business owners and organizations I've worked with."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6"
            >

              <div className="text-blue-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-400 leading-7">
                "{item.quote}"
              </p>

              <div className="mt-6">

                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}