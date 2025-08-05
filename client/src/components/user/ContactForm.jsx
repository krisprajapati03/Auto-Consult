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
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "The field is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Not a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "The field is required.";
    }
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

      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-[#EFF3FA] md:p-12 sm:p-10 rounded-2xl shadow-md space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-xl bg-white focus:outline-none border border-[#E1E1E1] shadow-sm"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email*"
              className={`w-full p-3 rounded-xl bg-white focus:outline-none border ${
                errors.email ? "border-red-500" : "border-[#E1E1E1]"
              } shadow-sm`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && (
              <div className="absolute text-xs text-white bg-darkBlack px-3 py-1 rounded-md left-0 -bottom-7 z-10 before:content-[''] before:absolute before:top-0 before:left-4 before:-translate-y-full before:border-8 before:border-transparent before:border-b-darkBlack">
                {errors.email}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              maxLength="10"
              placeholder="Phone"
              className="w-full p-3 rounded-xl bg-white focus:outline-none border border-[#E1E1E1] shadow-sm"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setFormData({ ...formData, phone: value });
                }
              }}
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            placeholder="Message*"
            rows="5"
            className={`w-full p-3  rounded-xl bg-white focus:outline-none border ${
              errors.message ? "border-red-500" : "border-[#E1E1E1]"
            } shadow-sm resize-none`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && (
            <div className="absolute text-xs text-white bg-darkBlack px-3 py-1 rounded-md left-0 -bottom-7 z-10 before:content-[''] before:absolute before:top-0 before:left-4 before:-translate-y-full before:border-8 before:border-transparent before:border-b-darkBlack">
              {errors.message}
            </div>
          )}
        </div>

        {/* Consent + Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" className="accent-blazeOrange w-4 h-4" />
            <span>
              I accept the{" "}
              <a href="/privacy" className="text-blazeOrange underline font-medium">
                privacy policy
              </a>
            </span>
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-blazeOrange text-white text-base font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
