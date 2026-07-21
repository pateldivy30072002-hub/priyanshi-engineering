export interface ProductItem {
  title: string;
  featured?: boolean;
  brand?: string;
}

export interface ProductRange {
  id: string;
  rn: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  n: string;
  title: string;
  desc: string;
  tag: string;
}

export interface ProjectItem {
  title: string;
  client: string;
}

export interface ClientItem {
  name: string;
  role: string;
  desc: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export interface PillarItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
}

export interface CommitmentItem {
  title: string;
  desc: string;
}

export interface FlagshipProjectItem {
  title: string;
  client: string;
  site: string;
  location: string;
  scope: string;
}

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

export interface ProcessStepItem {
  phase: string;
  title: string;
  desc: string;
}