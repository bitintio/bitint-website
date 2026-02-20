export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string; // Simplified for demo
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientType: string;
  outcome: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  slug: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
