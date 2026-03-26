import Image from "next/image";
import { BadgeCheck, Briefcase, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export interface Leader {
  name: string;
  title: string;
  imageSrc: string;
  highlights: string[];
}

interface LeadershipCardProps {
  leader: Leader;
}

export default function LeadershipCard({ leader }: LeadershipCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-secondary/15 overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        <div className="md:col-span-2 bg-gradient-to-br from-accent via-bg-light to-accent/70 p-6 flex items-center justify-center">
          <div className="relative w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-secondary/30 shadow-xl">
            <Image
              src={leader.imageSrc}
              alt={leader.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 260px"
              priority={false}
            />
          </div>
        </div>

        <div className="md:col-span-3 p-7">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              {leader.name}
            </h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold border border-secondary/25">
              <BadgeCheck className="w-4 h-4" />
              Verified Leadership
            </span>
          </div>

          <p className="mt-2 text-secondary font-semibold flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {leader.title}
          </p>

          <div className="gold-divider w-16 mt-5 mb-6" />

          <ul className="space-y-3">
            {leader.highlights.map((h) => (
              <li key={h} className="text-text-muted text-sm leading-relaxed">
                - <span className="text-text-dark font-medium">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_CONFIG.phones[0]}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-secondary text-secondary px-4 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 rounded-lg gradient-gold text-primary-dark px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-secondary/25"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

