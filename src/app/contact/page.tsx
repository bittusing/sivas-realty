import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EnquirySection from "@/components/EnquirySection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_CONFIG.name}. Visit us at ${SITE_CONFIG.address} or call ${SITE_CONFIG.phones[0]}. We are here to help you find your dream property in Lucknow.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Ready to find your dream property? We are here to help."
        breadcrumb="Get In Touch"
      />

      <EnquirySection />

      {/* Map Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-bg-light">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${SITE_CONFIG.name} Location`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
