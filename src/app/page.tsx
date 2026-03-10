import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20 md:pb-0">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
