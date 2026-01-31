import Navbar from "@/components/shared/Navbar";
import Hero from "@/features/portfolio/Hero"; // Using the Hero we built earlier
import Experience from "@/features/portfolio/Experience";
import About from "@/features/portfolio/About";
import TechStack from "@/features/portfolio/TechStack";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        {/* We will add the Stack and Project sections next */}
      </main>
    </>
  );
}