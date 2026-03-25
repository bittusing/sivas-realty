"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

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
      <div className="gradient-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${SITE_CONFIG.phones[0]}`}
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.phones[0]}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phones[1]}`}
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.phones[1]}
            </a>
          </div>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl font-[family-name:var(--font-heading)]">
                  S
                </span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary leading-tight font-[family-name:var(--font-heading)]">
                  Sivas Realty
                </h1>
                <p className="text-xs text-text-muted">Private Limited</p>
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
                      className="px-4 py-2 text-sm font-medium text-text-dark hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {propertyDropdownOpen && (
                      <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-gray-100">
                        {propertySubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-text-dark hover:bg-bg-light hover:text-primary transition-colors"
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
                    className="px-4 py-2 text-sm font-medium text-text-dark hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 gradient-gold text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
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
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {mainLinks.map((link) =>
                link.label === "Properties" ? (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-bg-light rounded-lg"
                    >
                      All Properties
                    </Link>
                    {propertySubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-8 py-2.5 text-sm text-text-muted hover:bg-bg-light rounded-lg"
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
                    className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-bg-light rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center gradient-gold text-white px-5 py-3 rounded-lg text-sm font-semibold mt-4"
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
