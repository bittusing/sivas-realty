import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PropertyCard from "@/components/PropertyCard";
import ContactCTA from "@/components/ContactCTA";
import { PROPERTIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Properties",
  description: `Discover premium residential properties, apartments, villas, and flats in Lucknow by ${SITE_CONFIG.name}. Find your dream home today.`,
};

export default function ResidentialPage() {
  const residential = PROPERTIES.filter((p) => p.type === "residential");

  return (
    <>
      <PageBanner
        title="Residential Properties"
        subtitle="Find your dream home from our handpicked collection of apartments, villas, and residential projects"
        breadcrumb="Residential"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {residential.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residential.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                New residential properties coming soon. Contact us for the
                latest listings.
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
