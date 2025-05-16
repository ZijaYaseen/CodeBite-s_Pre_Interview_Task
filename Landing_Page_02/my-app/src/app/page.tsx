import FeaturesGrid from "@/components/FavouriteTools";
import Footer from "@/components/Footer";
import GetBetter from "@/components/GetBetter";
import HeroSection from "@/components/HeroSection";
import OtherUsersStories from "@/components/OtherUsersStories";
import Accordion from "@/components/QA";
import Stories from "@/components/Stories";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <GetBetter />
      <Stories />
      <OtherUsersStories />
      <FeaturesGrid />
      <Accordion />
      <Footer />
    </div>
  );
}
