import React from "react";
import ContactForm from "../../components/user/ContactForm";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import HighlightText from "../../components/user/HighlightText";

const Contact = () => {
  return (
    <section className=" bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-darkBlack leading-tight">
            Contact <span className="text-blazeOrange">us</span>
          </h2>

          <p className="text-lightBlack text-base sm:text-lg leading-relaxed max-w-md">
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </p>

          {/* Address */}
          <div className="flex gap-3 items-start">
            <FaMapMarkerAlt className="text-blazeOrange mt-1" />
            <p className="text-lightBlack md:text-xl sm:text-base leading-relaxed w-full">
              8, Arjun Elegance, Near AEC Flyover,
              opp. Bhagirath Society, Naranpura,
              Ahmedabad, Gujarat 380013
            </p>
          </div>

          {/* Phone */}
          <div className="flex gap-3 items-center">
            <FaPhone className="text-blazeOrange" />
            <a
              href="tel:+919979916529"
              className="text-4xl font-bold text-darkBlack"
            >
              99799 <HighlightText text="16529" />
            </a>
          </div>

          {/* Email */}
          <div className="flex gap-3 items-center">
            <FaEnvelope className="text-blazeOrange" />
            <a
              href="mailto:rameshwarautoconsult@gmail.com"
              className="text-lightBlack hover:text-blazeOrange md:text-lg sm:text-base break-all transition"
            >
              rameshwarautoconsult@gmail.com
            </a>
          </div>

          {/* Socials */}
          {/* <div className="pt-4">
            <p className="text-lightBlack text-base font-medium mb-2">Follow us</p>
            <div className="flex gap-4 text-blazeOrange text-xl">
              <a href="#" className="hover:text-darkBlack"><FaFacebookF /></a>
              <a href="#" className="hover:text-darkBlack"><FaTwitter /></a>
              <a href="#" className="hover:text-darkBlack"><FaInstagram /></a>
              <a href="#" className="hover:text-darkBlack"><FaYoutube /></a>
            </div>
          </div> */}
        </div>

        {/* RIGHT: Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
