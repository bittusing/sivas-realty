import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="py-20 gradient-section-dark relative overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] gradient-gold-horizontal" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] gradient-gold-horizontal" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20.5z' fill='%23c5a044' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
          Find The Perfect{" "}
          <span className="text-gradient">Property</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore our extensive collection of premium properties across Lucknow
          and UP. Your dream property awaits — connect with us today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/properties/"
            className="gradient-gold text-primary-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base shadow-lg shadow-secondary/35"
          >
            Browse Properties
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi, I would like to know about available properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all text-base"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
