import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { StatisticsSection } from "./components/statistics-section";
import { FeaturesSection } from "./components/features-section";
import { HowItWorks } from "./components/how-it-works";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div id="statistics">
          <StatisticsSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
