import React from "react";
import ContactForm from "../../components/user/ContactForm";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import HighlightText from "../../components/user/HighlightText";

const Contact = () => {
  return (
    <section className="min-h-screen bg-lightGray py-8 px-3 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left section: Contact info */}
          <div className="space-y-8 sm:space-y-10">
            {/* Header */}
            <div className="space-y-2 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-darkBlack leading-tight">
                Get In <span className="text-blazeOrange">Touch</span>
              </h2>
              <p className="text-lightBlack text-base sm:text-lg leading-relaxed">
                Award-winning, family owned dealership of new and pre-owned vehicles
                with several locations across the city. Lowest prices and the best
                customer service guaranteed.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              {/* Address */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a
                  href="https://www.google.com/maps/place/8,+Arjun+Elegance,+Near+AEC+Flyover,+opp.+Bhagirath+Society,+Naranpura,+Ahmedabad,+Gujarat+380013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blazeOrange/20 rounded-full flex items-center justify-center hover:bg-blazeOrange/30 transition"
                >
                  <FaMapMarkerAlt className="text-blazeOrange text-lg sm:text-xl" />
                </a>
                <div>
                  <h3 className="font-semibold text-darkBlack text-base sm:text-lg mb-1 sm:mb-2">Our Location</h3>
                  <p className="text-lightBlack leading-relaxed text-sm sm:text-base">
                    8, Arjun Elegance, Near AEC Flyover,<br />
                    opp. Bhagirath Society, Naranpura,<br />
                    Ahmedabad, Gujarat 380013
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a
                  href="tel:+919979916529"
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blazeOrange/20 rounded-full flex items-center justify-center hover:bg-blazeOrange/30 transition"
                >
                  <FaPhone className="text-blazeOrange text-lg sm:text-xl" />
                </a>
                <div>
                  <h3 className="font-semibold text-darkBlack text-base sm:text-lg mb-1 sm:mb-2">Call Us</h3>
                  <a
                    href="tel:+919979916529"
                    className="text-xl sm:text-2xl font-bold text-darkBlack"
                  >
                    99799 <HighlightText text="16529" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a
                  href="mailto:rameshwarautoconsult@gmail.com"
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blazeOrange/20 rounded-full flex items-center justify-center hover:bg-blazeOrange/30 transition"
                >
                  <FaEnvelope className="text-blazeOrange text-lg sm:text-xl" />
                </a>
                <div>
                  <h3 className="font-semibold text-darkBlack text-base sm:text-lg mb-1 sm:mb-2">Email Us</h3>
                  <a 
                    href="mailto:rameshwarautoconsult@gmail.com"
                    className="text-lightBlack hover:text-blazeOrange transition-colors duration-300 break-all text-sm sm:text-base"
                  >
                    rameshwarautoconsult@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right section: Contact form */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 lg:p-10 mt-8 lg:mt-0">
            <div className="mb-4 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-darkBlack mb-1 sm:mb-2">Send us a Message</h3>
              <p className="text-lightBlack text-sm sm:text-base">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
