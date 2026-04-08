import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <TechStack />
    </main>
  );
}