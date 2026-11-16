import Banner from "@/components/Homepage/Banner";
import FeatureSection from "@/components/Homepage/FeatureSection";
import GallerySection from "@/components/Homepage/GallerySection";
import NewsletterSection from "@/components/Homepage/NewsletterSection";
import RecentUpcomingEvents from "@/components/Homepage/RecentUpcomingEvents";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatureSection />
      <RecentUpcomingEvents />
      <GallerySection />
      <NewsletterSection />
    </div>
  );
}
