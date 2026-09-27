export interface Plan {
  id: string;
  name: string;
  badge: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  popular?: boolean;
  highlightText?: string;
  features: {
    included: boolean;
    text: string;
    pro?: boolean;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  isDark?: boolean;
  fullDetail?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AuditFormState {
  businessName: string;
  city: string;
  sector: string;
  website: string;
}

export interface AuditResult {
  overallScore: number;
  mapsScore: number;
  geoScore: number;
  speedScore: number;
  recommendations: string[];
  competitorInsight: string;
}
