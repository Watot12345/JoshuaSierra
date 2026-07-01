// ============================================================================
// Portfolio Type Definitions
// Strongly-typed interfaces for all portfolio data structures.
// ============================================================================

import type { IconType } from "react-icons";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconType;
  username: string;
}

export interface Profile {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  longBio: string[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  avatar: string;
  resumeUrl: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  happyClients: number;
  awardsWon: number;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: SkillCategory;
  icon: IconType;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Design"
  | "Mobile";

export interface TechStackItem {
  id: string;
  name: string;
  icon: IconType;
  color: string;
  category: SkillCategory;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  description: string;
  gpa: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: number;
  role: string;
  duration: string;
  challenges: string;
  results: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  date: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: number;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
  level: number;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
