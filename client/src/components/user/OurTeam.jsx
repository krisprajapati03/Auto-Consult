import TeamCard from "./TeamCard";
import React from "react";
import HighlightText from "../user/HighlightText";

const advisors = [
  {
    image: "https://dummyimage.com/500x500",
    name: "Harshal Bhavsar",
    email: "harshal26bhavsar@gmail.com",
    phone: "7383835300",
  },
  {
    image: "https://dummyimage.com/500x500",
    name: "Rikin Bhavsar",
    email: "rikindharika@gmail.com",
    phone: "9978916529",
  },
  {
    image: "https://dummyimage.com/500x500",
    name: "Krunal Bhavsar",
    email: "krunal10bhavsar@gmail.com",
    phone: "9909916529",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-darkBlack text-white py-16 px-8 sm:px-20 rounded-3xl shadow-2xl relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-2/5 pl-8 md:pl-12 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our <HighlightText text="Team" />
          </h2>
          <p className="text-darkGray text-base mb-6 leading-relaxed">
            Meet our dedicated team of automotive experts who are passionate
            about helping you find the perfect vehicle.
          </p>
          <ul className="list-decimal text-darkGray text-sm space-y-3 ml-5 mb-8">
            <li>Praesent nibh luctus viverra</li>
            <li>Adipiscing elit</li>
            <li>Tempor incididunt ut labore</li>
            <li>Quis ipsum suspendisseviverra</li>
            <li>Maecenas ac</li>
          </ul>
          <button className="bg-blazeOrange text-white font-semibold px-8 py-3 rounded-xl shadow-lg text-lg">
            Learn more
          </button>
        </div>
        <div className="md:w-3/5 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="flex">
                <TeamCard {...advisor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
