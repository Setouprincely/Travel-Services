import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { ScrollProgress, ScrollToTop } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <ScrollToTop />
    </div>
  );
}


