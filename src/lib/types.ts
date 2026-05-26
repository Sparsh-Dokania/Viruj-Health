/**
 * Viruj Health - Type Definitions
 * Comprehensive TypeScript types for healthcare platform
 */

// ===== PATIENT/USER TYPES =====
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  bloodType?: string;
  height?: number;
  weight?: number;
  profileImage?: string;
}

export interface HealthProfile {
  patientId: string;
  bmi: number;
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  allergies: string[];
  medications: Medication[];
  conditions: HealthCondition[];
  emergencyContacts: EmergencyContact[];
  lastCheckup: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  endDate?: string;
}

export interface HealthCondition {
  id: string;
  name: string;
  icd10Code?: string;
  diagnosedDate: string;
  status: 'active' | 'resolved';
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

// ===== DOCTOR TYPES =====
export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  license: string;
  specialization: string;
  hospital: string;
  experience: number;
  rating: number;
  reviews: number;
  profileImage: string;
  bio: string;
  availableSlots: string[];
  consultationFee: number;
  languages: string[];
  verificationStatus: 'verified' | 'pending' | 'unverified';
}

// ===== APPOINTMENT TYPES =====
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  dateTime: string;
  duration: number;
  type: 'in-person' | 'telemedicine' | 'video-call';
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  prescription?: string;
  followUpDate?: string;
}

// ===== DIAGNOSTIC TYPES =====
export interface DiagnosticReport {
  id: string;
  patientId: string;
  testName: string;
  testType: 'blood' | 'imaging' | 'scan' | 'other';
  datePerformed: string;
  results: string;
  normalRange: string;
  status: 'pending' | 'completed' | 'reviewed';
  doctorReview?: string;
  aiInsight?: string;
}

// ===== MEDICAL RECORD TYPES =====
export interface MedicalRecord {
  id: string;
  patientId: string;
  documentType: 'report' | 'prescription' | 'note' | 'imaging' | 'other';
  title: string;
  fileUrl: string;
  uploadDate: string;
  doctorId?: string;
  tags: string[];
}

// ===== AI INSIGHT TYPES =====
export interface AIInsight {
  id: string;
  patientId: string;
  type: 'recommendation' | 'alert' | 'preparation' | 'analysis';
  title: string;
  content: string;
  relevantData?: Record<string, any>;
  confidence: number;
  createdAt: string;
  read: boolean;
}

// ===== NOTIFICATION TYPES =====
export interface Notification {
  id: string;
  userId: string;
  type: 'appointment' | 'report' | 'insight' | 'reminder' | 'message';
  title: string;
  message: string;
  actionUrl?: string;
  read: boolean;
  createdAt: string;
}

// ===== PRESCRIPTION TYPES =====
export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    notes?: string;
  }[];
  issuedDate: string;
  expiryDate: string;
  instructions: string;
}

// ===== API RESPONSE TYPES =====
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ===== COMPONENT PROP TYPES =====
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'interactive' | 'elevated';
  hover?: boolean;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'ai';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

// ===== THEME TYPES =====
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  success: string;
  warning: string;
  error: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fontSize: Record<string, string>;
  spacing: Record<string, string>;
  radius: Record<string, string>;
}

// ===== DASHBOARD STATE =====
export interface DashboardState {
  selectedDate: string;
  filters: Record<string, any>;
  sortBy: 'date' | 'name' | 'priority';
  view: 'list' | 'grid' | 'calendar';
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  emailNotifications: boolean;
  smsNotifications: boolean;
  appointmentReminders: 'email' | 'sms' | 'both' | 'none';
}
