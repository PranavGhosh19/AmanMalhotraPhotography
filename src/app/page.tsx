
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { AICaptionTool } from "@/components/AICaptionTool";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <AICaptionTool />
      <Footer />
    </main>
  );
}
