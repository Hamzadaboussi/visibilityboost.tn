
export interface Education {
  degree: string;
  university: string;
  graduationYear: string;
  specialization: string;
}

export interface Experience {
  yearsTotal?: string;
  years?: string;
  projectsLed?: string;
  projectsCompleted?: string;
  specialtyFocus?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  title: string;
  photo: string;
  education: Education;
  experience: Experience;
  expertise: string[];
  personalAchievements: string[];
  bio: string;
  linkedin: string;
  contactDirect?: {
    phone: string;
    email: string;
    whatsapp?: string;
  };
}

export interface SuccessStory {
  id: number;
  businessType: string;
  location: string;
  challenge: string;
  before: Record<string, string>;
  after: Record<string, string>;
  timeframe: string;
  keyActions: string[];
  clientQuote: string;
  impactHighlight: string;
}

export interface PackageCategory {
  category: string;
  items: string[];
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string | null;
  popular: boolean;
  featured?: boolean;
  bestFor: string[];
  deliveryTime: string;
  paymentOptions: string[];
  included: PackageCategory[];
  notIncluded: string[];
  bonusIncluded?: string[];
  guarantees?: string[];
  cta: string;
  ctaLink: string;
}

export interface Extension {
  id: string;
  name: string;
  description: string;
  price: string;
  included: string[];
  compatibleWith: string[];
}

export interface Problem {
  id: number;
  painPoint: string;
  emotion: string;
  realCase: {
    before: string;
    after: string;
    metric: string;
  };
  symptoms: string[];
  solution: {
    what: string;
    how: string[];
    guarantee: string;
    price: string;
  };
  cta: string;
}

export interface Config {
  brand: {
    name: string;
    tagline: string;
    // Added missing properties to fix errors in Footer.tsx where these are accessed
    legalName: string;
    headquartersCity: string;
    country: string;
  };
  trustFace: TeamMember;
  team: TeamMember[];
  teamAchievements: {
    headline: string;
    subheadline: string;
    successStories: SuccessStory[];
    overallStats: Record<string, string>;
  };
  portfolio: any[];
  services: {
    headline: string;
    subheadline: string;
    packages: Package[];
    extensions: {
      items: Extension[];
    };
  };
  problemsSolutions: {
    headline: string;
    subheadline: string;
    problems: Problem[];
  };
  faq: { question: string; answer: string }[];
  articles: any[];
  ctas: any;
}
