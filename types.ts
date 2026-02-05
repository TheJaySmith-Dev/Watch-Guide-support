import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  path: string;
}

export interface SectionItem {
  id: string;
  title: string;
  description?: string;
  content?: string | string[]; // Paragraphs or raw content
  steps?: string[]; // For tutorials
  image?: string;
  icon?: LucideIcon;
}

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  items: SectionItem[];
  type: 'grid' | 'list' | 'faq' | 'article';
}

export interface SearchResult {
  title: string;
  path: string;
  category: string;
}
