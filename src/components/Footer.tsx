import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SITE_LOGO_SRC } from "@/lib/media";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/leadership/", label: "Leadership" },
  { href: "/contact/", label: "Contact" },
];

const propertyLinks = [
  { href: "/properties/residential/", label: "Residential Property" },
  { href: "/properties/commercial/", label: "Commercial Property" },
  { href: "/properties/plots/", label: "Plots / Land / Farm House" },
];

export default function Footer() {
  return (
    <footer className="gradient-section-dark text-white border-t-2 border-secondary/30">
      <div className="gold-divider" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={SITE_LOGO_SRC}
                alt="Sivas Realty Private Limited"
                width={50}
                height={50}
                className="h-12 w-12 object-contain rounded-lg ring-2 ring-secondary/50"
              />
              <div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-heading)]">
                  <span className="text-secondary">Sivas</span> Realty
                </h3>
                <p className="text-[10px] text-secondary uppercase tracking-[0.2em]">
                  Private Limited
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE_CONFIG.shortName} — Your trusted partner in real estate.
              Whether you want to buy, sell, or invest in property, we are here
              to help. Dream Meets Realty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-heading)] text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-heading)] text-secondary">
              Property Types
            </h4>
            <ul className="space-y-3">
              {propertyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-heading)] text-secondary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <div className="text-sm text-gray-400">
                  <a href={`tel:${SITE_CONFIG.phones[0]}`} className="hover:text-secondary transition-colors block">
                    {SITE_CONFIG.phones[0]}
                  </a>
                  <a href={`tel:${SITE_CONFIG.phones[1]}`} className="hover:text-secondary transition-colors block">
                    {SITE_CONFIG.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-gray-400 hover:text-secondary transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-sm text-gray-400">
                  {SITE_CONFIG.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact/"
              className="text-sm text-gray-500 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact/"
              className="text-sm text-gray-500 hover:text-secondary transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
