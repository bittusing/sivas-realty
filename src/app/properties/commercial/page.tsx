import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PropertyCard from "@/components/PropertyCard";
import ContactCTA from "@/components/ContactCTA";
import { PROPERTIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Properties",
  description: `Find the perfect commercial property, office space, retail shop, or business complex in Lucknow with ${SITE_CONFIG.name}.`,
};

export default function CommercialPage() {
  const commercial = PROPERTIES.filter((p) => p.type === "commercial");

  return (
    <>
      <PageBanner
        title="Commercial Properties"
        subtitle="Discover premium office spaces, retail shops, and commercial complexes in Lucknow's best locations"
        breadcrumb="Commercial"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {commercial.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercial.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                New commercial properties coming soon. Contact us for the
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
