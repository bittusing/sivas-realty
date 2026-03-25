import Link from "next/link";
import { Home, Building2, TreePine } from "lucide-react";

const types = [
  {
    icon: Home,
    title: "Residential Property",
    description:
      "Discover your dream home from our handpicked collection of apartments, villas, and residential projects in prime locations across Lucknow.",
    href: "/properties/residential/",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Building2,
    title: "Commercial Property",
    description:
      "Find the perfect office space, retail shop, or commercial complex to grow your business in Lucknow's most sought-after areas.",
    href: "/properties/commercial/",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: TreePine,
    title: "Plots / Land / Farm House",
    description:
      "Invest in premium plots, land parcels, and farm house properties with excellent appreciation potential and clear titles.",
    href: "/properties/plots/",
    color: "from-amber-500 to-amber-700",
  },
];

export default function PropertyTypes() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            Lucknow &amp; All Over UP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
            Property Type
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type) => (
            <Link
              key={type.title}
              href={type.href}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                {type.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {type.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
