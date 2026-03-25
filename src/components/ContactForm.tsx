"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  city: "Lucknow",
  propertyType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I am ${form.name}.\nEmail: ${form.email}\nPhone: ${form.phone}\nCity: ${form.city}\nInterested in: ${form.propertyType}\nMessage: ${form.message}`;
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-dark mb-1.5"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text-dark mb-1.5"
          >
            Mobile No. *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
            placeholder="+91 XXXXXXXXXX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-dark mb-1.5"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-text-dark mb-1.5"
          >
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
            placeholder="Lucknow"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={form.propertyType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
        >
          <option value="">Select property type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Plot/Land">Plot / Land</option>
          <option value="Farm House">Farm House</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full gradient-gold text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </button>
    </form>
  );
}
