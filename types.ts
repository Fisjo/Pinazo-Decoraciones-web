import { LucideIcon } from 'lucide-react';

export type PageView = 'home' | 'about' | 'services' | 'products' | 'contact' | 'location' | 'legal' | 'privacy' | 'cookies';

export interface NavItem {
  label: string;
  id: PageView;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
}