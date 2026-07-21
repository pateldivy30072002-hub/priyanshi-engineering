import { engineeringData } from '../json';
import { ClientItem, CommitmentItem, FlagshipProjectItem, NavLinkItem, PillarItem, ProcessStepItem, ProductItem, ProductRange, ProjectItem, ServiceItem, StatItem } from '../types';

export const PRODUCT_RANGES: ProductRange[] = engineeringData.productRanges;
export const PRODUCTS_BY_RANGE: Record<string, ProductItem[]> = engineeringData.productsByRange;
export const SERVICES: ServiceItem[] = engineeringData.services;
export const FLAGSHIP_PROJECT: FlagshipProjectItem = engineeringData.flagshipProject;
export const PROJECTS: ProjectItem[] = engineeringData.projects;
export const CLIENTS: ClientItem[] = engineeringData.clients;
export const PROCESS_STEPS: ProcessStepItem[] = engineeringData.processSteps;
export const STATS: StatItem[] = engineeringData.stats;
export const NAV_LINKS: NavLinkItem[] = engineeringData.navLinks;
export const PILLARS: PillarItem[] = engineeringData.pillars;
export const SAFETY_COMMITMENTS: CommitmentItem[] = engineeringData.safetyCommitments;
export const QUALITY_COMMITMENTS: CommitmentItem[] = engineeringData.qualityCommitments;
export const ALSO_OFFERED: string[] = engineeringData.alsoOffered;
