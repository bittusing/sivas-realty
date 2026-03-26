import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SITE_LOGO_SRC } from "@/lib/media";

const highlights = [
  "Deep understanding of Lucknow real estate market",
  "Personalized services for every client",
  "Transparent and trustworthy dealings",
  "Expert guidance from start to finish",
  "Profitable investment portfolio planning",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-bg-light to-accent/25 border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="gradient-section-dark rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden border-2 border-secondary/35 ring-gold">
              <div className="text-center text-white p-8">
                <Image
                  src={SITE_LOGO_SRC}
                  alt="Sivas Realty"
                  width={150}
                  height={150}
                  className="mx-auto mb-6 rounded-xl ring-2 ring-secondary/50 object-contain"
                />
                <p className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-secondary mb-4">
                  10+
                </p>
                <p className="text-xl md:text-2xl font-light text-gray-300">
                  Years of Excellence in Real Estate
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 gradient-gold rounded-xl p-6 text-primary-dark shadow-xl hidden md:block ring-2 ring-secondary-light/50">
              <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">
                500+
              </p>
              <p className="text-sm">Happy Families</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
              About {SITE_CONFIG.shortName}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)] mb-2">
              Who We Are
            </h2>
            <div className="gold-divider w-16 mb-6" />
            <p className="text-text-muted leading-relaxed mb-6">
              {SITE_CONFIG.name} is a trusted real estate company that offers a
              wide range of services to meet all your property needs. Whether
              you want to buy or sell a house, invest in property, or need
              professional guidance, our team of experienced agents is here to
              assist you at every step.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              We have a deep understanding of the Lucknow real estate market,
              which enables us to guide you through the intricate world of real
              estate confidently. Our commitment to delivering personalized
              services to each client is what sets us apart.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-text-dark text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact/"
              className="inline-block gradient-gold text-primary-dark px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-secondary/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
