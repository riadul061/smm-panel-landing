import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromotionServices from "@/components/PromotionServices";
import WhoWeAre from "@/components/WhoWeAre";
import PowerfulServices from "@/components/PowerfulServices";
import EasySteps from "@/components/EasySteps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-cream">
      <Header />
      <Hero />
      <PromotionServices />
      <WhoWeAre />
      <PowerfulServices />
      <EasySteps />
      <Footer />
    </main>
  );
}
