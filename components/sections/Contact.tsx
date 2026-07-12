"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      setStatus("error");

    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#070B14] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Contact"
          title="Let's build something amazing together."
          description="Tell me about your project. Whether you need AI automation, a full-stack application, or a business website, I'd love to hear about it."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-3">

          {/* LEFT */}

          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6">

              <h3 className="text-xl font-bold">
                Contact Information
              </h3>

              <div className="mt-6 space-y-5">

                <div>

                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:adewumiibraheem@gmail.com"
                    className="font-medium text-blue-400"
                  >
                    adewumiibraheem@gmail.com
                  </a>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p>Nigeria</p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Availability
                  </p>

                  <p>Available for freelance projects</p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-2 rounded-2xl border border-gray-800 bg-[#0B1220] p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
                            <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company (Optional)"
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
                />

                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
                >
                  <option value="">Project Type</option>
                  <option>AI Solution</option>
                  <option>Business Automation</option>
                  <option>Full-Stack Application</option>
                  <option>Website Development</option>
                  <option>WordPress</option>
                  <option>API Integration</option>
                </select>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
                >
                  <option value="">Budget</option>
                  <option>Under $500</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>

                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
                >
                  <option value="">Timeline</option>
                  <option>ASAP</option>
                  <option>1–2 Weeks</option>
                  <option>1 Month</option>
                  <option>Flexible</option>
                </select>

              </div>

              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-blue-500"
              />

              {status === "success" && (
                <div className="rounded-xl border border-green-600 bg-green-500/10 p-4 text-green-400">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-600 bg-red-500/10 p-4 text-red-400">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Book a Free Consultation"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
            