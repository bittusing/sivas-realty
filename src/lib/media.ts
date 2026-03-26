/** Brand assets in /public/images */
export const SITE_LOGO_SRC = "/images/shidhanlogo2.jpeg";

export interface HeroSlide {
  image: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  /** CSS object-position value like "50% 50%" */
  objectPosition?: string;
  /** Use contain for designed banners (no crop), cover for photos */
  fit?: "contain" | "cover";
}

/** Two hero banners — slider switches between these images */
export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/shidhantbanner1.jpeg",
    title: "House Available For Sale",
    titleAccent: "Sale",
    subtitle: "Near Jankipuram Shukla's Chauraha, Lucknow",
    description: "Land Area: 1500 Sq.ft | Covered Area: 2200 Sq.ft | Prime location with wide road connectivity.",
    objectPosition: "75% 50%",
    fit: "cover",
  },
  {
    image: "/images/sidhantbanner.png",
    title: "Your Dream Property Awaits",
    titleAccent: "Dream",
    subtitle: "Sivas Realty Private Limited — Lucknow",
    description:
      "Residential, commercial & plots across Lucknow. Trusted guidance from site visit to registry.",
    // keep subject centered
    objectPosition: "50% 50%",
    fit: "cover",
  },
];
