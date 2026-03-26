import { MapPin, Building2, Maximize2, CalendarDays } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Property } from "@/lib/constants";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in "${property.title}" at ${property.location}. Please share more details.`
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-secondary/30">
      {/* Image placeholder */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-accent via-secondary/10 to-accent/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <Building2 className="w-16 h-16 text-secondary/30" />
        </div>
        {property.rera && (
          <span className="absolute top-3 left-3 bg-primary-dark text-secondary-light text-xs px-3 py-1 rounded-full font-medium border border-secondary/40">
            RERA: {property.rera}
          </span>
        )}
        <span className="absolute top-3 right-3 gradient-gold text-primary-dark text-xs px-3 py-1 rounded-full font-medium shadow-lg">
          {property.possession}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-text-dark font-[family-name:var(--font-heading)] mb-2 group-hover:text-secondary transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center gap-1 text-text-muted text-sm mb-4">
          <MapPin className="w-4 h-4 shrink-0 text-secondary" />
          <span>{property.location}</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="w-4 h-4 text-secondary shrink-0" />
            <span className="text-text-muted">Configuration:</span>
            <span className="font-medium text-text-dark">
              {property.configuration}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Maximize2 className="w-4 h-4 text-secondary shrink-0" />
            <span className="text-text-muted">Area:</span>
            <span className="font-medium text-text-dark">
              {property.superArea}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="w-4 h-4 text-secondary shrink-0" />
            <span className="text-text-muted">Possession:</span>
            <span className="font-medium text-text-dark">
              {property.possession}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-secondary/10">
          <span className="text-secondary font-bold text-base">
            {property.price}
          </span>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-dark px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-secondary/25"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}
