// types/index.ts

// Company Information
export interface CompanyInfo {
  name: string;
  domain: string;
  email: string;
  phone: string;
  phoneRaw: string;
  address: string;
  year: number;
  foundingYear?: string;
}

// Social Media Links
export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  pinterest?: string;
}

// Contact Information
export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  supportHours: string;
  supportEmail?: string;
  salesEmail?: string;
}

// Brand Assets
export interface BrandAssets {
  name: string;
  tagline: string;
  logo: string;
  favicon: string;
  logoAlt?: string;
}

// Meta Information
export interface MetaInfo {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  copyright?: string;
  robots?: string;
  language?: string;
  geoPosition?: string;
  geoPlacename?: string;
  geoRegion?: string;
}

// ===== AIRLINE TYPES =====

export interface AirlineInfo {
  name: string;
  code: string;
  description: string;
  hub: string;
  founded: string;
  fleet: string;
  destinations: string;
  alliance?: string;
  website?: string;
  rating?: number;
  reviews?: number;
  highlights?: string[];
  phoneNumber: string;
  email?: string;
}

export interface FareClass {
  name: string;
  description: string;
  flexibility: string;
  icon?: string;
}

export interface ContentSection {
  paragraphs: string[];
  listItems: string[];
  closing: string;
}

export interface ChangeMethod {
  title: string;
  description: string;
  icon?: string;
}

export interface CabinClass {
  name: string;
  description: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Disclaimer {
  text: string;
  phone: string;
}

export interface AirlineData {
  slug: string;
  airline: AirlineInfo;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaPhone: string;
    disclaimer: string;
  };
  introduction: {
    title: string;
    content: ContentSection;
  };
  canIChange: {
    title: string;
    content: ContentSection;
  };
  changePolicy: {
    title: string;
    subtitle: string;
    fareClasses: FareClass[];
    closing: string;
  };
  howToChange: {
    title: string;
    subtitle: string;
    methods: ChangeMethod[];
  };
  sameDayChange: {
    title: string;
    content: {
      paragraphs: string[];
      requirements: string[];
      closing: string;
    };
  };
  reschedule: {
    title: string;
    content: {
      paragraphs: string[];
      availableFor: string[];
      closing: string;
    };
  };
  dateChange: {
    title: string;
    content: {
      paragraphs: string[];
      process: string[];
      closing: string;
    };
  };
  cancellation: {
    title: string;
    content: {
      paragraphs: string[];
      factors: string[];
      closing: string;
    };
  };
  refund: {
    title: string;
    content: {
      paragraphs: string[];
      factors: string[];
      closing: string;
    };
  };
  bookingModification: {
    title: string;
    content: {
      paragraphs: string[];
      modifications: string[];
      closing: string;
    };
  };
  cabinClasses: {
    title: string;
    classes: CabinClass[];
  };
  whyChoose: {
    title: string;
    content: {
      paragraphs: string[];
      services: string[];
      closing: string;
    };
  };
  contactDirectly: {
    title: string;
    paragraphs: string[];
  };
  faqs: FAQ[];
  disclaimer: Disclaimer;
}

// ===== DESTINATION TYPES =====

export interface DestinationInfo {
  name: string;
  country: string;
  continent: string;
  description: string;
  image: string;
  bestTimeToVisit: string;
  currency: string;
  language: string;
  timezone: string;
  population: string;
  attractions: string[];
  activities: string[];
  transportation: string[];
}

export interface DestinationData {
  slug: string;
  destination: DestinationInfo;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
    ctaLink: string;
  };
  overview: {
    title: string;
    content: string;
  };
  topAttractions: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      image: string;
    }>;
  };
  activities: {
    title: string;
    items: string[];
  };
  travelTips: {
    title: string;
    tips: string[];
  };
  bestTimeToVisit: {
    title: string;
    content: string;
  };
  gettingThere: {
    title: string;
    content: string;
  };
  localCuisine: {
    title: string;
    items: string[];
  };
  whereToStay: {
    title: string;
    items: string[];
  };
  faqs: FAQ[];
}

// ===== DEAL/TOUR TYPES =====

export interface DealInfo {
  name: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  includes: string[];
  excludes: string[];
  highlights: string[];
  rating: number;
  reviews: number;
}

export interface DealData {
  slug: string;
  deal: DealInfo;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
    ctaLink: string;
  };
  overview: {
    title: string;
    content: string;
  };
  itinerary: {
    title: string;
    days: Array<{
      day: number;
      title: string;
      description: string;
    }>;
  };
  includes: {
    title: string;
    items: string[];
  };
  excludes: {
    title: string;
    items: string[];
  };
  pricing: {
    title: string;
    options: Array<{
      name: string;
      price: number;
      description: string;
    }>;
  };
  faqs: FAQ[];
}

// ===== BLOG TYPES =====

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  tags: string[];
  featured: boolean;
}

// ===== AD CAMPAIGN TYPES =====

export interface AdCampaign {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  ctaText: string;
  platform: 'google' | 'facebook' | 'instagram' | 'tiktok' | 'other';
  status: 'active' | 'paused' | 'draft';
  startDate: string;
  endDate?: string;
}

// ===== SEO TYPES =====

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

// ===== NAVIGATION TYPES =====

export interface NavLink {
  name: string;
  href: string;
  icon?: string;
  target?: '_blank' | '_self';
  children?: NavLink[];
}

export interface FooterLink {
  name: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}



export interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  ctaText?: string;
  price?: number;
  rating?: number;
  reviews?: number;
}

// ===== UTILITY TYPES =====

export type SortOrder = 'asc' | 'desc';
export type SortField = 'name' | 'price' | 'rating' | 'date';

export interface FilterOptions {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  sortBy?: SortField;
  sortOrder?: SortOrder;
}