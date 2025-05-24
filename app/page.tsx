// import AboutUs from '@/components/AboutUs';
import HeroSection from '@/components/HeroSection';
import HostsPage from '@/components/HostPage';
import ProductsSection from "@/components/ProductsSection";
import TrainingSection from "@/components/TrainingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <HeroSection />
      <ProductsSection />
      <HostsPage />
      {/* <TrainingSection /> */}
      {/* <AboutUs /> */}
    </main>
  );
}