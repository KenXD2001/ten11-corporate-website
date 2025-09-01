"use client";

import { useState } from "react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", form);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Section - Title */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">
            Drop Us a Line
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-muted">
            Want to learn more? Send us a message and we&apos;ll be in touch.
          </p>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 sm:py-3 placeholder-gray-500 transition-colors text-base sm:text-lg md:text-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 sm:py-3 placeholder-gray-500 transition-colors text-base sm:text-lg md:text-xl"
            required
          />

          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 sm:py-3 placeholder-gray-500 bg-transparent text-base sm:text-lg md:text-xl"
            required
          >
            <option value="" disabled>
              Select Your Country / Region
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 sm:py-3 placeholder-gray-500 bg-transparent text-base sm:text-lg md:text-xl"
            required
          >
            <option value="" disabled>
              Select Your Interest
            </option>
            <option value="Media Inquiry">Media Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="General Question">General Question</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 sm:py-3 placeholder-gray-500 transition-colors resize-none text-base sm:text-lg md:text-xl"
            required
          />

          <Button
            className="group inline-flex items-center justify-center !bg-black !text-white !border-black w-full sm:w-auto px-6 py-3 sm:py-4"
            type="submit"
          >
            <span>Submit</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </section>
  );
}
