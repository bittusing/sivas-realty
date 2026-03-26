export const SITE_CONFIG = {
  name: "Sivas Realty Private Limited",
  shortName: "Sivas Realty",
  tagline: "Dream Meets Realty",
  description:
    "Sivas Realty Private Limited offers premium residential, commercial, and plot properties across Lucknow. Find your dream property with trusted real estate experts.",
  email: "Sivasrealtyprivatelimited@gmail.com",
  phones: ["+91 7234939999", "+91 8874984444"],
  address:
    "Shop No. 12, In Front of Janta Vidyalaya Sports College, Kurshi Road, Lucknow 226026",
  city: "Lucknow",
  state: "Uttar Pradesh",
  pincode: "226026",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  whatsappNumber: "917234939999",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },
} as const;

export interface Property {
  id: string;
  title: string;
  location: string;
  type: "residential" | "commercial" | "plot";
  configuration: string;
  superArea: string;
  price: string;
  possession: string;
  rera?: string;
  image: string;
  featured?: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Omaxe Grand Residency",
    location: "Gomti Nagar Extension, Lucknow",
    type: "residential",
    configuration: "2BHK, 3BHK & 4BHK",
    superArea: "1050 - 2200 Sq.ft",
    price: "Price On Request",
    possession: "Dec 2027",
    rera: "UPRERAPRJ00001",
    image: "/images/property-1.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Eldeco Acclaim",
    location: "Sushant Golf City, Lucknow",
    type: "residential",
    configuration: "3BHK & 4BHK",
    superArea: "1400 - 2800 Sq.ft",
    price: "Price On Request",
    possession: "March 2028",
    rera: "UPRERAPRJ00002",
    image: "/images/property-2.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Lucknow Business Hub",
    location: "Shaheed Path, Lucknow",
    type: "commercial",
    configuration: "Office Space, Retail Shop, Food Court",
    superArea: "500 - 5000 Sq.ft",
    price: "Price On Request",
    possession: "Ready to Move",
    rera: "UPRERAPRJ00003",
    image: "/images/property-3.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "Awadh Business Park",
    location: "Kurshi Road, Lucknow",
    type: "commercial",
    configuration: "Retail Shop, Office Space",
    superArea: "400 - 3000 Sq.ft",
    price: "Price On Request",
    possession: "June 2027",
    rera: "UPRERAPRJ00004",
    image: "/images/property-4.jpg",
    featured: true,
  },
  {
    id: "5",
    title: "Green Valley Villas",
    location: "Sultanpur Road, Lucknow",
    type: "residential",
    configuration: "3BHK & 4BHK Villas",
    superArea: "1800 - 3500 Sq.ft",
    price: "Price On Request",
    possession: "Sept 2027",
    rera: "UPRERAPRJ00005",
    image: "/images/property-5.jpg",
    featured: true,
  },
  {
    id: "6",
    title: "Royal Farm Houses",
    location: "Mohan Road, Lucknow",
    type: "plot",
    configuration: "Farm House Plots",
    superArea: "1000 - 5000 Sq.yards",
    price: "Price On Request",
    possession: "Ready for Registry",
    image: "/images/property-6.jpg",
    featured: true,
  },
  {
    id: "7",
    title: "Lucknow Heights",
    location: "Gomti Nagar, Lucknow",
    type: "residential",
    configuration: "2BHK & 3BHK",
    superArea: "950 - 1650 Sq.ft",
    price: "Price On Request",
    possession: "Dec 2026",
    rera: "UPRERAPRJ00007",
    image: "/images/property-7.jpg",
  },
  {
    id: "8",
    title: "Prime Plaza",
    location: "Hazratganj, Lucknow",
    type: "commercial",
    configuration: "Studio Apartment, Retail, Office Space",
    superArea: "350 - 4000 Sq.ft",
    price: "Price On Request",
    possession: "Ready to Move",
    rera: "UPRERAPRJ00008",
    image: "/images/property-8.jpg",
  },
  {
    id: "9",
    title: "Nawab Residency Plots",
    location: "Raebareli Road, Lucknow",
    type: "plot",
    configuration: "Residential Plots",
    superArea: "800 - 2400 Sq.yards",
    price: "Price On Request",
    possession: "Ready for Registry",
    image: "/images/property-9.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Mishra",
    role: "Property Investor",
    text: "Sivas Realty helped me find the perfect commercial space in Lucknow. Their team's expertise and dedication made the entire process seamless. Highly recommended!",
  },
  {
    name: "Sneha Gupta",
    role: "First-time Buyer",
    text: "As a first-time homebuyer, I was nervous about the process. The team at Sivas Realty guided me every step of the way and found me my dream apartment in Gomti Nagar.",
  },
  {
    name: "Vikram Singh",
    role: "Business Owner",
    text: "Excellent service and professional approach. They understood my requirements perfectly and delivered beyond expectations. The best real estate partner in Lucknow!",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/leadership/", label: "Leadership" },
  { href: "/properties/", label: "Properties" },
  { href: "/properties/residential/", label: "Residential" },
  { href: "/properties/commercial/", label: "Commercial" },
  { href: "/properties/plots/", label: "Plots/Land" },
  { href: "/contact/", label: "Contact" },
] as const;
