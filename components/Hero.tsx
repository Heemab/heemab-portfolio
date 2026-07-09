export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-blue-400 font-semibold uppercase tracking-widest">
        Full-Stack Developer • AI Engineer & Automation Specialist
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
        Hi, I'm <span className="text-blue-500">Adewumi Ibraheem</span>
      </h1>

      <p className="text-gray-400 text-xl mt-8 max-w-3xl leading-9">
        I build AI-powered web applications, intelligent automation systems,
        modern websites, and business tools that help companies save time and
        grow faster.
      </p>

      <div className="mt-12 flex gap-5">
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
          View Portfolio
        </button>

        <button className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl">
          Hire Me
        </button>
      </div>
    </section>
  );
}