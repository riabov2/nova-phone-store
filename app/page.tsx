import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ExplodedPhoneSection from "@/components/ExplodedPhoneSection";
import { BatterySection, BuySection, CameraSection, ColorsSection, FeaturesSection, PerformanceSection, StorageSection } from "@/components/FeatureSections";

export default function Home() {
  return <><Hero/><ProductShowcase/><ExplodedPhoneSection/><FeaturesSection/><CameraSection/><PerformanceSection/><BatterySection/><ColorsSection/><StorageSection/><BuySection/></>;
}
