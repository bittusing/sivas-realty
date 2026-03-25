import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PropertyCard from "@/components/PropertyCard";
import ContactCTA from "@/components/ContactCTA";
import { PROPERTIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plots / Land / Farm House",
  description: `Invest in premium plots, land parcels, and farm house properties in Lucknow with ${SITE_CONFIG.name}. Great appreciation potential with clear titles.`,
};

export default function PlotsPage() {
  const plots = PROPERTIES.filter((p) => p.type === "plot");

  return (
    <>
      <PageBanner
        title="Plots / Land / Farm House"
        subtitle="Invest in premium plots, land parcels, and farm house properties with excellent appreciation potential"
        breadcrumb="Plots & Land"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {plots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plots.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                New plot and land listings coming soon. Contact us for the
                latest availability.
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
