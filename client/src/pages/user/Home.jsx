import FeaturedListings from "../../components/user/FeaturedListings";
import OurTeam from "../../components/user/OurTeam";
import HighlightText from "../../components/user/HighlightText";
import WhyChooseUs from "../../components/user/WhyChooseUs";
import HeroSection from "../../components/user/HeroSection";

function Home() {
  return (
    <div className="bg-lightGray">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Listings Section */}
      <section className="py-8 px-6 md:px-12">
        <FeaturedListings />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 px-6 md:px-12 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto">
          <WhyChooseUs />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-8 px-6 md:px-12 overflow-hidden relative bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <OurTeam />
        </div>
      </section>
    </div>
  );
}

export default Home;

