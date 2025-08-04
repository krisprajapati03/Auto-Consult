import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // 🌀 Loading state

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Not a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number (starting with 6-9).";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/messages", formData, {
        withCredentials: true,
      });

      if (res.status === 201 || res.status === 200) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // clear on success
        setErrors({});
      } else {
        toast.error("❌ Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-xl mx-auto bg-lightGray p-5 rounded shadow-md"
      >
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            placeholder="ex: John Doe"
            type="text"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            placeholder="ex: john@example.com"
            type="email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            placeholder="9876543210"
            type="tel"
            maxLength="10"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) {
                setFormData({ ...formData, phone: value });
              }
            }}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            placeholder="Hi, I'm interested to buy a car."
            rows="5"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blazeOrange text-white font-semibold py-3 px-6 rounded shadow transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
