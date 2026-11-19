/**
 * Real job photos from the owner's live site (aircareprohvac.com). Selected by
 * Maya Lin + Chloe Vance. Alt text describes only what is visible: no invented
 * locations, names or claims. Confirmed by the owner (2026-11-19) as the company's own job photos.
 */
import type { ImageMetadata } from 'astro';
import rooftopMiniSplit from '../assets/photos/technician-rooftop-mini-split.webp';
import gangwayCondenser from '../assets/photos/technician-condenser-chicago-gangway.webp';
import gasPressureTest from '../assets/photos/furnace-gas-pressure-test.jpg';
import furnaceDiagnostics from '../assets/photos/furnace-repair-diagnostics.jpg';
import rooftopSkyline from '../assets/photos/rooftop-ac-chicago-skyline.jpg';
import boilerCirculator from '../assets/photos/boiler-circulator-pump.jpg';

export interface Photo { src: ImageMetadata; alt: string }

export const photos = {
  rooftopMiniSplit: { src: rooftopMiniSplit, alt: 'Technician servicing a rooftop heat pump on a Chicago building, with neighborhood rooftops behind' },
  gangwayCondenser: { src: gangwayCondenser, alt: 'Technician working on an air conditioner condenser beside a brick building in Chicago' },
  gasPressureTest: { src: gasPressureTest, alt: 'Digital manometer measuring gas pressure on an open furnace during a diagnostic test' },
  furnaceDiagnostics: { src: furnaceDiagnostics, alt: 'High-efficiency furnace with the front panel removed for repair diagnostics' },
  rooftopSkyline: { src: rooftopSkyline, alt: 'Rooftop air conditioning unit with the Chicago skyline in the distance' },
  boilerCirculator: { src: boilerCirculator, alt: 'Boiler circulator pump and piping during a replacement in a basement' },
} satisfies Record<string, Photo>;

/** Best photo per service category / service slug. */
export const categoryPhoto: Record<string, Photo> = {
  heating: photos.furnaceDiagnostics,
  cooling: photos.rooftopSkyline,
  'air-quality': photos.rooftopMiniSplit,
};
export const servicePhoto: Record<string, Photo> = {
  'boiler-repair': photos.boilerCirculator,
  'boiler-installation': photos.boilerCirculator,
  'furnace-repair': photos.furnaceDiagnostics,
  'furnace-installation': photos.furnaceDiagnostics,
  'furnace-tune-up': photos.gasPressureTest,
  'carbon-monoxide-safety': photos.gasPressureTest,
  'ac-repair': photos.gangwayCondenser,
  'ac-installation': photos.rooftopSkyline,
  'ac-tune-up': photos.gangwayCondenser,
  'mini-split-installation': photos.rooftopMiniSplit,
  'mini-split-repair': photos.rooftopMiniSplit,
  'heat-pump-installation': photos.rooftopMiniSplit,
  'heat-pump-repair': photos.rooftopMiniSplit,
  'refrigerant-leak-repair': photos.gangwayCondenser,
};
