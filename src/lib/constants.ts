export const SITE_CONFIG = {
  name: "Patrick Travel Services",
  description: "Professional visa assistance, study abroad programs, flight booking, housing, and job placement services in Cameroon.",
  url: "https://patricktravel.cm",
  ogImage: "https://patricktravel.cm/og.jpg",
  links: {
    twitter: "https://twitter.com/patricktravel",
    facebook: "https://facebook.com/patricktravel",
    instagram: "https://instagram.com/patricktravel",
    linkedin: "https://linkedin.com/company/patricktravel",
    youtube: "https://youtube.com/patricktravel",
  },
  contact: {
    phone: "+237 123 456 789",
    whatsapp: "+237 987 654 321",
    email: "info@patricktravel.cm",
    address: "123 Business District, Douala, Cameroon",
  },
};

export const SERVICES = [
  {
    id: "visa-assistance",
    name: "Visa Assistance",
    description: "Professional visa application support for all destinations",
    icon: "FileText",
    slug: "visa-assistance",
  },
  {
    id: "study-abroad",
    name: "Study Abroad",
    description: "Complete education consulting and university placement",
    icon: "GraduationCap",
    slug: "study-abroad",
  },
  {
    id: "flight-booking",
    name: "Flight Booking",
    description: "Best deals on international and domestic flights",
    icon: "Plane",
    slug: "flight-booking",
  },
  {
    id: "housing",
    name: "Housing Solutions",
    description: "Secure accommodation for students and professionals",
    icon: "Home",
    slug: "housing",
  },
  {
    id: "jobs",
    name: "Jobs & Internships",
    description: "Career opportunities and professional placements",
    icon: "Briefcase",
    slug: "jobs",
  },
  {
    id: "parcel-shipping",
    name: "Parcel Shipping",
    description: "Reliable international shipping and logistics",
    icon: "Package",
    slug: "parcel-shipping",
  },
];

export const DESTINATIONS = [
  {
    name: "Canada",
    flag: "🇨🇦",
    popular: true,
    services: ["study", "work", "immigration"],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    popular: true,
    services: ["study", "work", "visit"],
  },
  {
    name: "France",
    flag: "🇫🇷",
    popular: true,
    services: ["study", "work", "visit"],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    popular: true,
    services: ["study", "work"],
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    popular: true,
    services: ["work", "business", "visit"],
  },
  {
    name: "United States",
    flag: "🇺🇸",
    popular: false,
    services: ["study", "work", "visit"],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    popular: false,
    services: ["study", "work", "immigration"],
  },
];

export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const BUSINESS_HOURS = {
  monday: "8:00 AM - 6:00 PM",
  tuesday: "8:00 AM - 6:00 PM",
  wednesday: "8:00 AM - 6:00 PM",
  thursday: "8:00 AM - 6:00 PM",
  friday: "8:00 AM - 6:00 PM",
  saturday: "9:00 AM - 4:00 PM",
  sunday: "Closed",
};

export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];
