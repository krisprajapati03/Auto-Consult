import { FaPhone, FaEnvelope, FaUser, FaLinkedin } from "react-icons/fa";

const TeamCard = ({ image, name, email, phone }) => {
  return (
    <div className="group relative bg-lightGray rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-darkGray hover:border-blazeOrange/50 w-full h-full flex flex-col">
      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blazeOrange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Profile Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkBlack/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 flex-grow flex flex-col">
        <div className="flex-grow">
          {/* Action Buttons */}
          <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <a
              href={`tel:${phone}`}
              className="bg-blazeOrange/20 backdrop-blur-sm p-2 rounded-xl text-blazeOrange hover:bg-blazeOrange hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaPhone size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="bg-blazeOrange/20 backdrop-blur-sm p-2 rounded-xl text-blazeOrange hover:bg-blazeOrange hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={18} />
            </a>
            <button className="bg-blazeOrange/20 backdrop-blur-sm p-2 rounded-xl text-blazeOrange hover:bg-blazeOrange hover:text-white transition-all duration-300 transform hover:scale-110">
              <FaLinkedin size={18} />
            </button>
          </div>

          {/* Name and Title */}
          <h3 className="text-xl font-bold text-darkBlack mb-1 group-hover:text-blazeOrange transition-colors duration-300">
            {name}
          </h3>
          <p className="text-lightBlack text-sm font-medium mb-3 group-hover:text-darkBlack transition-colors duration-300">
            Customer Advisor
          </p>

          {/* Divider */}
          <hr className="my-3 border-darkGray group-hover:border-blazeOrange/50 transition-colors duration-300" />

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <FaEnvelope size={14} className="mr-2 text-blazeOrange" />
              <a 
                href={`mailto:${email}`}
                className="text-lightBlack group-hover:text-blazeOrange transition-colors duration-300 truncate hover:underline"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center text-sm">
              <FaPhone size={14} className="mr-2 text-blazeOrange" />
              <a 
                href={`tel:${phone}`}
                className="text-lightBlack group-hover:text-darkBlack transition-colors duration-300 hover:text-blazeOrange"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <button className="mt-4 w-full bg-transparent border-2 border-blazeOrange/50 text-blazeOrange py-2 px-4 rounded-xl hover:bg-blazeOrange hover:text-lightGray hover:border-blazeOrange transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
