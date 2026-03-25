import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20.5z' fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
          Find The Perfect Property
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore our extensive collection of premium properties across Lucknow
          and UP. Your dream property awaits — connect with us today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/properties/"
            className="gradient-gold text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Browse Properties
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi, I would like to know about available properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-base"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
