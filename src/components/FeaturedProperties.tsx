import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { PROPERTIES } from "@/lib/constants";

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            Lucknow &amp; All Over UP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
            Hot Selling Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/properties/"
            className="inline-block gradient-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
