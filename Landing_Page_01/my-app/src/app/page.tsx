import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LaunchApp from "@/components/LaunchApp";
import TopPartners from "@/components/TopPartners";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopPartners />
      <HowItWorks />
      <Feature />
      <LaunchApp />
      <Footer />
    </div>
  );
}
