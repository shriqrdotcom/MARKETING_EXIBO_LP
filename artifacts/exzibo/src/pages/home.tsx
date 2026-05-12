import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustedLogos from "@/components/trusted-logos";
import Features from "@/components/features";
import Templates from "@/components/templates";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedLogos />
        <Features />
        <Templates />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
