export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          HEEMAB
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium">
          Hire Me
        </button>
      </div>
    </nav>
  );
}