import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function HighlightText({ text }) {
  return <span className="text-blazeOrange font-bold">{text}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-darkBlack text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Links */}
          <div className="grid grid-cols-2 gap-6 text-base text-lightGray">
            {[
              { name: "Listings", to: "/listings" },
              { name: "FAQ", to: "/faq" },
              { name: "About", to: "/about" },
              { name: "Blog", to: "/blog" },
              { name: "Our team", to: "/team" },
              { name: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center space-x-3 hover:text-orange-500 transition-colors"
              >
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Column 2: Description */}
          <div className="text-base text-lightGray leading-relaxed ">
            Award-winning, family-owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </div>

          {/* Column 3: Contact Info (Right-aligned) */}
          <div className="flex justify-end items-end">
            <div className="text-base text-lightGray leading-relaxed space-y-2 text-right">
              <div>
                <a
                  href="tel:+919979916529"
                  className="font-bold text-lightGray text-2xl hover:text-blazeOrange transition-colors"
                >
                  99799 <HighlightText text="16529" />
                </a>
              </div>
              <div>
                <a
                  href="mailto:rameshwarautoconsult@gmail.com"
                  className="hover:text-blazeOrange transition-colors"
                >
                  rameshwarautoconsult@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8,+Arjun+Elegance,+Near+AEC+Flyover,+opp.+Bhagirath+Society,+Naranpura,+Ahmedabad,+Gujarat+380013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blazeOrange transition-colors"
                >
                  8, Arjun Elegance, Near AEC Flyover,
                  opp. Bhagirath Society, Naranpura,
                  Ahmedabad, Gujarat 380013
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="mt-10 pt-6 border-t border-lightGray flex flex-col md:flex-row justify-between items-center gap-4 text-base text-lightGray">
          <p>© 2023 Rameshwar Auto Consult. All rights reserved.</p>
          <div className="flex space-x-4">
            {[
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/rameshwarautoconsult",
              },
              {
                Icon: FaTwitter,
                href: "https://twitter.com/rameshwarautoconsult",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/rameshwarautoconsult",
              },
              {
                Icon: FaYoutube,
                href: "https://www.youtube.com/@rameshwarautoconsult",
              },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:text-blazeOrange transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
