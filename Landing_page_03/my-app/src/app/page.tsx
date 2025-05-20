import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JoinLeading from "@/components/JoinLeading";
import UnlimitedIdeas from "@/components/MockUp";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <JoinLeading />
    <UnlimitedIdeas />
    <Testimonials />
    <Blogs />
    <Footer />
  </div>
  );
}
