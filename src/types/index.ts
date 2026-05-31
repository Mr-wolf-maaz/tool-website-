export interface Tool {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  uses: string;
  badge?: "hot" | "new" | "free";
  trending?: boolean;
  keywords: string[];
  faqs: FAQ[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: string;
  date: string;
  readTime: string;
  content: string;
  tags: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: { text: string; included: boolean }[];
  featured?: boolean;
  cta: string;
}
