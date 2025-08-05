import FeaturedListings from "../../components/user/FeaturedListings";
import OurTeam from "../../components/user/OurTeam";
import HighlightText from "../../components/user/HighlightText";
import WhyChooseUs from "../../components/user/WhyChooseUs";

function Home() {
  return (
    <div className="bg-lightGray">
      {/* Hero Section */}
      <section className="py-8 px-6 md:px-12 bg-gradient-to-br from-lightGray to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlack mb-6">
            Welcome to <HighlightText text="AutoHub" />
          </h1>
          <p className="text-lightBlack text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Your one-stop solution for all things automotive. Find your dream
            car with confidence and drive into the future.
          </p>
        </div>
      </section>

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

