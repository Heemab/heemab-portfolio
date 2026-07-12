export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#060B14] py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="text-2xl font-bold">
            HEEMAB
          </h2>

          <p className="text-gray-400 mt-2">
            Full-Stack Developer • AI Engineer
          </p>

        </div>

        <div className="text-gray-500 text-sm">
          © 2026 HEEMAB. All rights reserved.
        </div>

      </div>

    </footer>
  );
}