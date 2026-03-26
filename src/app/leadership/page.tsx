import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactCTA from "@/components/ContactCTA";
import LeadershipCard, { type Leader } from "@/components/LeadershipCard";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leadership",
  description: `Meet the leadership team at ${SITE_CONFIG.name} — trusted real estate experts in Lucknow.`,
};

const LEADERS: Leader[] = [
  {
    name: "Somesh Kumar",
    title: "Director",
    imageSrc: "/images/someshkumar-director.jpeg",
    highlights: [
      "Client-first leadership focused on long-term trust and transparency",
      "Strong market understanding of residential and commercial segments in Lucknow",
      "Guides clients through property selection, site visits, and documentation",
      "Committed to delivering the best value deals for buyers and investors",
    ],
  },
  {
    name: "Siddhant Singh",
    title: "Director & Managing Director (MD)",
    imageSrc: "/images/sidhantsingh-director-and-md.jpeg",
    highlights: [
      "Leads company strategy, partnerships, and end-to-end customer experience",
      "Specializes in investment planning for plots/land and high-growth corridors",
      "Ensures verified listings, clear titles, and smooth registry support",
      "Drives service excellence with a focus on premium, on-time assistance",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        title="Leadership"
        subtitle="Meet the directors behind Sivas Realty Private Limited"
        breadcrumb="Our Team"
      />

      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
              Sivas Realty Private Limited
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Directors & Management
            </h2>
            <div className="gold-divider w-20 mx-auto mt-4" />
            <p className="text-text-muted mt-4 max-w-3xl mx-auto">
              Our leadership team is committed to transparent dealings, verified
              properties, and end-to-end support from first call to final
              registry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {LEADERS.map((leader) => (
              <LeadershipCard key={leader.name} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

