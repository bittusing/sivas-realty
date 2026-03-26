import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 bg-accent/40 border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
            Testimonials
          </h2>
          <div className="gold-divider w-20 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-shadow border border-transparent hover:border-secondary/20"
            >
              <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" />
              <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-text-dark text-sm">{t.name}</p>
                  <p className="text-secondary text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
