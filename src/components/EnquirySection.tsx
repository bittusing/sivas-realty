import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import ContactForm from "./ContactForm";

export default function EnquirySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
            Contact Us
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Ready to find your dream property? Our expert team is here to assist
            you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-bg-light rounded-2xl p-6">
              <h3 className="font-bold text-lg text-text-dark font-[family-name:var(--font-heading)] mb-6">
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark text-sm">
                      Visit Us
                    </p>
                    <p className="text-text-muted text-sm mt-0.5">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark text-sm">
                      Call Us
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phones[0]}`}
                      className="text-text-muted text-sm mt-0.5 block hover:text-primary"
                    >
                      {SITE_CONFIG.phones[0]}
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.phones[1]}`}
                      className="text-text-muted text-sm block hover:text-primary"
                    >
                      {SITE_CONFIG.phones[1]}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark text-sm">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-text-muted text-sm mt-0.5 break-all hover:text-primary"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark text-sm">
                      Working Hours
                    </p>
                    <p className="text-text-muted text-sm mt-0.5">
                      {SITE_CONFIG.workingHours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-lg text-text-dark font-[family-name:var(--font-heading)] mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
