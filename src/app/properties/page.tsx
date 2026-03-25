import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PropertyCard from "@/components/PropertyCard";
import ContactCTA from "@/components/ContactCTA";
import { PROPERTIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Properties",
  description: `Browse all residential, commercial, and plot properties by ${SITE_CONFIG.name} in Lucknow. Find your perfect property today.`,
};

export default function PropertiesPage() {
  return (
    <>
      <PageBanner
        title="All Properties"
        subtitle="Explore our complete collection of premium properties across Lucknow"
        breadcrumb="Our Properties"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
