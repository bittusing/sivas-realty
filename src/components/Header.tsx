"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { SITE_LOGO_SRC } from "@/lib/media";

const propertySubLinks = [
  { href: "/properties/residential/", label: "Residential" },
  { href: "/properties/commercial/", label: "Commercial" },
  { href: "/properties/plots/", label: "Plots / Land / Farm House" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);

  const mainLinks = NAV_LINKS.filter(
    (l) =>
      !["Residential", "Commercial", "Plots/Land"].includes(l.label)
  );

  return (
    <>
      {/* Top Bar */}
      <div className="gradient-gold-topbar text-primary-dark text-sm py-2.5 border-b border-secondary-dark/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${SITE_CONFIG.phones[0]}`}
              className="flex items-center gap-1 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.phones[0]}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phones[1]}`}
              className="flex items-center gap-1 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.phones[1]}
            </a>
          </div>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1 font-medium hover:text-white transition-colors break-all max-w-full sm:max-w-none"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-bg-light shadow-md sticky top-0 z-50 border-b-2 border-secondary/25">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src={SITE_LOGO_SRC}
                alt="Sivas Realty Private Limited"
                width={60}
                height={60}
                className="h-14 w-14 object-contain rounded-lg ring-2 ring-secondary/40"
                priority
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-primary leading-tight font-[family-name:var(--font-heading)]">
                  <span className="text-secondary">Sivas</span> Realty
                </h1>
                <p className="text-[10px] text-secondary uppercase tracking-[0.2em]">
                  Private Limited
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainLinks.map((link) =>
                link.label === "Properties" ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setPropertyDropdownOpen(true)}
                    onMouseLeave={() => setPropertyDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-sm font-medium text-text-dark hover:text-secondary transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {propertyDropdownOpen && (
                      <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-secondary/20">
                        {propertySubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-text-dark hover:bg-accent hover:text-secondary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-text-dark hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 gradient-gold text-primary-dark px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-secondary/25"
              >
                Get in Touch
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-secondary/20 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {mainLinks.map((link) =>
                link.label === "Properties" ? (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-accent rounded-lg"
                    >
                      All Properties
                    </Link>
                    {propertySubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-8 py-2.5 text-sm text-text-muted hover:bg-accent hover:text-secondary rounded-lg"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-accent rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center gradient-gold text-primary-dark px-5 py-3 rounded-lg text-sm font-semibold mt-4"
              >
                Get in Touch on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
