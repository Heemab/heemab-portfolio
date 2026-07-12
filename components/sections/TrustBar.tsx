export default function TrustBar() {
  const stats = [
    {
      value: "50+",
      label: "Client Projects",
    },
    {
      value: "7+",
      label: "Years of Problem Solving",
    },
    {
      value: "15+",
      label: "Technologies",
    },
    {
      value: "Global",
      label: "Remote Collaboration",
    },
  ];

  return (
    <section className="border-y border-gray-800 bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}