import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Lucknow &amp; All Over UP
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-heading)] animate-fade-in-up animation-delay-200 leading-tight">
            Discover Your Dream{" "}
            <span className="text-gradient">Properties</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl animate-fade-in-up animation-delay-400 leading-relaxed">
            {SITE_CONFIG.name} offers a wide range of residential, commercial,
            and plot properties to meet all your real estate needs. Your dream
            property is just a call away.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <Link
              href="/properties/"
              className="gradient-gold text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Explore Properties
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi, I am interested in your properties. Please share details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "100+", label: "Properties" },
            { value: "500+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl py-6 px-4"
            >
              <p className="text-3xl md:text-4xl font-bold text-secondary font-[family-name:var(--font-heading)]">
                {stat.value}
              </p>
              <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
