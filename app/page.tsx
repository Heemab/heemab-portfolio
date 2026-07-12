import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import AIProjects from "@/components/sections/AIProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <Hero />

      <TrustBar />

      <About />

      <Services />

      <AIProjects />

      <FeaturedProjects />

      <TechStack />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
}