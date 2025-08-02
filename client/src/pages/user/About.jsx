import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import StatItem from "../../components/user/StatItem";
import { Link } from "react-router-dom";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  // Mock stats from backend
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Simulate backend data
    const mockData = [
      { id: 1, end: 33, label: "Years in Business" },
      { id: 2, end: 2, label: "Specialists" },
      { id: 3, end: 1000, label: "Cars Sold" },
      { id: 4, end: 1, label: "Localizations" },
    ];

    setStats(mockData);
  }, []);

  return (
    <div className="px-6 md:px-16 py-12 bg-lightGray text-darkBlack">
      {/* Section heading */}
      <h2 className="text-4xl font-bold mb-4">About</h2>

      {/* Description paragraph with max width */}
      <p className="leading-relaxed text-lightBlack max-w-3xl">
        At Rameshwar Auto Consult, we’re your trusted destination for high-quality pre-owned vehicles.
        With a mission to make the car-buying experience as hassle-free as possible, we offer a wide selection
        of meticulously inspected and certified used cars, ensuring you drive home with confidence.
        Our team of knowledgeable professionals is here to guide you through every step of the process,
        from finding the perfect vehicle to securing the best financing options.
        We take pride in our commitment to transparency, integrity, and customer satisfaction.
        Discover a world of affordable, reliable, and stylish cars at Rameshwar Auto Consult.
        Your dream car is just a visit away.
      </p>

      {/* Tagline block */}
      <div className="border-l-4 border-blazeOrange mt-6 pl-4 text-sm font-medium text-lightBlack max-w-3xl">
        WE TRY TO SERVE YOUR DREAMS IN BUDGET
      </div>

      {/* Call to Action button */}
      <div className="mt-6">
        <Link
          to="/contact"
          className="bg-blazeOrange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded shadow-md transition inline-block"
        >
          Let’s Book Your Ride!
        </Link>
      </div>

      {/* Statistics section with animation */}
      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-16">
        {stats.map((item) => (
          <StatItem key={item.id} end={item.end} label={item.label} duration={3} />
        ))}
      </div>
    </div>
  );
};

export default About;
