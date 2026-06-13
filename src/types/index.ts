export interface Doctor {
  id: string;
  slug: string;
  name: string;
  prefix: 'Dr.';
  specialty: string;
  qualifications: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  hospital: string;
  services: string[];
  availability: 'today' | 'tomorrow' | 'this-week';
  consultType: ('in-person' | 'video')[];
  photoUrl: string;
  verified: boolean;
}

export interface Specialty {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  icon: string;
  colour: 'teal' | 'violet' | 'red' | 'amber' | 'pink' | 'gray';
  doctorCount: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  confidence?: 'high' | 'medium' | 'low';
  actions?: { label: string; href: string; }[];
  disclaimer?: boolean;
}
