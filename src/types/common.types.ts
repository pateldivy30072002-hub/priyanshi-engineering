export interface ServiceItems {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // lucide icon name
  capabilities: string[];
  voltageRange: string;
  capacityLimit: string;
  equipmentUsed: string[];
  completedCount: number;
}

export interface ProjectItems {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  coordinates: { x: number; y: number }; // Percentage coordinates for Indian/Global interactive blueprint map
  scope: string;
  voltage: string;
  status: 'completed' | 'active' | 'testing';
  year: string;
  stats: { label: string; value: string }[];
  image: string;
}

export interface ProcessStep {
  phase: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  telemetryMetric: string;
  telemetryValue: string;
}

export interface TelemetryChannel {
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'nominal' | 'peak' | 'critical';
  frequencyHz?: number;
}
