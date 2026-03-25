import type { Metadata } from "next";
import { CheckCircle2, Target, Eye, Award, Users, Shield, Handshake } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ContactCTA from "@/components/ContactCTA";
import Testimonials from "@/components/Testimonials";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_CONFIG.name} — your trusted real estate partner in Lucknow with 10+ years of experience in residential, commercial, and plot properties.`,
};

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in honest and transparent dealings. Every transaction is handled with the highest level of integrity and professionalism.",
  },
  {
    icon: Users,
    title: "Client First",
    description:
      "Our clients are at the heart of everything we do. We provide personalized services tailored to meet your unique property needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project. Our team of experts ensures you get the best properties at the best prices.",
  },
  {
    icon: Handshake,
    title: "Long-term Relationships",
    description:
      "We build lasting relationships with our clients. Many of our customers have been with us for years and keep coming back.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle={`Know more about ${SITE_CONFIG.name} and our journey in real estate`}
        breadcrumb="Who We Are"
      />

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl h-[450px] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-7xl md:text-9xl font-bold font-[family-name:var(--font-heading)] text-secondary mb-4">
                    10+
                  </p>
                  <p className="text-xl md:text-2xl font-light">
                    Years of Trust in Real Estate
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)] mb-6">
                About {SITE_CONFIG.name}
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                {SITE_CONFIG.name} is a premier real estate company based in
                Lucknow that offers a comprehensive range of services to meet
                all your property needs. Whether you want to buy or sell a
                house, invest in property, or need professional property
                management services, our team of experienced agents is here to
                assist you at every step.
              </p>
              <p className="text-text-muted leading-relaxed mb-5">
                We have a deep understanding of the Lucknow real estate market,
                which enables us to guide you through the intricate world of
                real estate confidently. Our commitment to delivering
                personalized services to each client is what sets us apart.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Apart from traditional real estate services, we also specialize
                in helping investors create a profitable investment portfolio. We
                recognize the significance of investing in real estate as a
                means of creating passive income and accumulating wealth.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Happy Clients" },
                  { value: "100+", label: "Properties" },
                  { value: "50+", label: "Projects" },
                  { value: "10+", label: "Years" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-bg-light rounded-xl p-4">
                    <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-dark font-[family-name:var(--font-heading)] mb-4">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To be Lucknow&apos;s most trusted real estate partner by providing
                exceptional service, transparent dealings, and helping every
                client find their dream property. We aim to simplify the
                property buying and selling process while maximizing value for
                our clients.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-dark font-[family-name:var(--font-heading)] mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To become the leading real estate company in Uttar Pradesh,
                known for our integrity, innovation, and unwavering commitment
                to client satisfaction. We envision a future where every
                individual can easily find and invest in the perfect property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                  {v.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              The Sivas Realty Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "RERA registered & verified properties",
              "Extensive network across Lucknow & UP",
              "Expert market analysis & investment advice",
              "End-to-end assistance from search to registry",
              "Post-sale support & property management",
              "Competitive pricing & best deals guaranteed",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-text-dark font-medium text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCTA />
    </>
  );
}
