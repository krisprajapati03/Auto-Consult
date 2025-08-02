import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Not a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number (starting with 6-9).";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    if (!validate()) return;

    // Backend API integration goes here
    // const res = await axios.post("/api/contact", formData);

    setSuccessMsg("Your message has been sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto bg-lightGray p-5 rounded shadow-md"
    >
      {successMsg && (
        <p className="text-green-600 font-semibold text-center">{successMsg}</p>
      )}

      {/* Name Field */}
      <div>
        <label className="block font-medium text-darkBlack mb-1">Name</label>
        <input
          placeholder="ex: John Doe"
          type="text"
          className="w-full p-3 border border-darkGray rounded bg-white text-darkBlack focus:outline-none focus:ring-2 focus:ring-blazeOrange"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && (
          <p className="text-errorRed text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block font-medium text-darkBlack mb-1">Email</label>
        <input
          placeholder="ex: john@example.com"
          type="email"
          className="w-full p-3 border border-darkGray rounded bg-white text-darkBlack focus:outline-none focus:ring-2 focus:ring-blazeOrange"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && (
          <p className="text-errorRed text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block font-medium text-darkBlack mb-1">Phone</label>
        <input
          placeholder="ex: 9876543210"
          type="tel"
          maxLength="10"
          className="w-full p-3 border border-darkGray rounded bg-white text-darkBlack focus:outline-none focus:ring-2 focus:ring-blazeOrange"
          value={formData.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
            if (value.length <= 10) {
              setFormData({ ...formData, phone: value });
            }
          }}
          onKeyPress={(e) => {
            // Allow only numbers
            if (
              !/[0-9]/.test(e.key) &&
              e.key !== "Backspace" &&
              e.key !== "Delete"
            ) {
              e.preventDefault();
            }
          }}
        />
        {errors.phone && (
          <p className="text-errorRed text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label className="block font-medium text-darkBlack mb-1">Message</label>
        <textarea
          placeholder="ex: Hi, I'm interested to buy a car."
          rows="5"
          className="w-full p-3 border border-darkGray rounded bg-white text-darkBlack focus:outline-none focus:ring-2 focus:ring-blazeOrange"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        {errors.message && (
          <p className="text-errorRed text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blazeOrange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded shadow transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;