"use client";

import React, { useState } from "react";
import { MapPin, Phone, Instagram, MoveRight } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="bg-[#F5EDED] py-8 md:py-12 lg:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl md:text-3xl font-bold mb-6 lg:text-4xl text-[#A54A69]">
          CONTACT US
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-12 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm  font-medium mb-1 text-[#A54A69]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#A54A69] rounded-full text-[#A54A69]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-[#A54A69]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#A54A69] rounded-full text-[#A54A69]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 text-[#A54A69]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-[#A54A69] rounded-2xl text-[#A54A69] "
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center px-4 py-2 text-base font-medium rounded-md text-white bg-[#A54A69] hover:bg-[#8E3A57]"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <MoveRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Your message has been sent successfully!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            An error occurred. Please try again later.
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-8 w-full max-w-3xl p-6 border border-[#A54A69]  rounded-lg  ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-[#A54A69]" />
              <span className="text-base text-gray-700">
                V.V Complex , Round road, Dindigul
              </span>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-[#A54A69]" />
              <span className="text-base text-gray-700 xl:pl-2 md:pl-2">
                9791528365
              </span>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cakedilim_dgl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A54A69] hover:text-pink-500"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
