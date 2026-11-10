import Banner from "@/components/Homepage/Banner";
import FeatureSection from "@/components/Homepage/FeatureSection";
import GallerySection from "@/components/Homepage/GallerySection";
import NewsletterSection from "@/components/Homepage/NewsletterSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatureSection />
      <GallerySection />
      <NewsletterSection />
    </div>
  );
}
