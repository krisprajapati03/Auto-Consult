import React from "react";
import { Mail } from "lucide-react"; // Optional icon, or use any icon set you prefer

const AdminCard = () => {
  return (
    <div className="w-full md:w-[350px] bg-white shadow-md rounded-2xl overflow-hidden space-y-6">
      {/* Admin Info Box */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-darkBlack mb-2">admin</h2>
        <p className="text-blazeOrange font-medium">administrator</p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200" />

      {/* Email Section */}
      <div className="flex items-center gap-3 p-6 pt-0">
        <Mail className="text-blazeOrange w-5 h-5" />
        <span className="text-darkBlack text-sm font-medium">
          admin@rameshwarautoconsult.com
        </span>
      </div>
    </div>
  );
};

export default AdminCard;
