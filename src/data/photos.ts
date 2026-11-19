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
// Owner's job photos sent 2026-11-19 (resized, location metadata stripped)
import newBoiler from '../assets/photos/jobs/new-boiler-installation.jpg';
import boilerControl from '../assets/photos/jobs/boiler-control-circulator-pump.jpg';
import airVentNew from '../assets/photos/jobs/boiler-air-vent-new.jpg';
import airVentCorroded from '../assets/photos/jobs/boiler-air-vent-corroded.jpg';
import heatExchanger from '../assets/photos/jobs/furnace-heat-exchanger-removed.jpg';
import corrodedFlue from '../assets/photos/jobs/corroded-flue-vent-pipe.jpg';
import burnersCleaning from '../assets/photos/jobs/boiler-burners-removed-cleaning.jpg';
import blowerWheel from '../assets/photos/jobs/furnace-blower-wheel-cleaned.jpg';
import zoneValves from '../assets/photos/jobs/hydronic-zone-valves.jpg';
import uvSanitizer from '../assets/photos/jobs/uv-air-sanitizer-installed.jpg';
import humidifier from '../assets/photos/jobs/whole-home-humidifier-installed.jpg';
import acGauges from '../assets/photos/jobs/ac-condenser-gauges.jpg';
import boilerBurnerService from '../assets/photos/jobs/boiler-burner-service.jpg';

export interface Photo { src: ImageMetadata; alt: string }

export const photos = {
  rooftopMiniSplit: { src: rooftopMiniSplit, alt: 'Technician servicing a rooftop heat pump on a Chicago building, with neighborhood rooftops behind' },
  gangwayCondenser: { src: gangwayCondenser, alt: 'Technician working on an air conditioner condenser beside a brick building in Chicago' },
  gasPressureTest: { src: gasPressureTest, alt: 'Digital manometer measuring gas pressure on an open furnace during a diagnostic test' },
  furnaceDiagnostics: { src: furnaceDiagnostics, alt: 'High-efficiency furnace with the front panel removed for repair diagnostics' },
  rooftopSkyline: { src: rooftopSkyline, alt: 'Rooftop air conditioning unit with the Chicago skyline in the distance' },
  boilerCirculator: { src: boilerCirculator, alt: 'Boiler circulator pump and piping during a replacement in a basement' },
  newBoiler: { src: newBoiler, alt: 'Newly installed gas boiler with new piping, expansion tank and venting in a basement' },
  boilerControl: { src: boilerControl, alt: 'Boiler control box mounted above a red circulator pump on hot-water heating pipes' },
  airVentNew: { src: airVentNew, alt: 'New brass automatic air vent installed on a boiler supply pipe' },
  airVentCorroded: { src: airVentCorroded, alt: 'Corroded, leaking automatic air vent on a boiler before replacement' },
  heatExchanger: { src: heatExchanger, alt: 'Furnace heat exchanger removed from the cabinet during a repair' },
  corrodedFlue: { src: corrodedFlue, alt: 'Section of rusted, corroded flue vent pipe removed from a heating system' },
  burnersCleaning: { src: burnersCleaning, alt: 'Boiler burner tubes removed and laid out for cleaning during a tune-up' },
  blowerWheel: { src: blowerWheel, alt: 'Furnace blower assembly removed and cleaned during maintenance' },
  zoneValves: { src: zoneValves, alt: 'Row of hydronic zone valves on boiler piping in a basement mechanical room' },
  uvSanitizer: { src: uvSanitizer, alt: 'Fresh-Aire UV APCO-X air sanitizer installed on a furnace duct' },
  humidifier: { src: humidifier, alt: 'Whole-home humidifier mounted on furnace ductwork' },
  acGauges: { src: acGauges, alt: 'Outdoor AC condenser with refrigerant gauge hoses connected for diagnostics' },
  boilerBurnerService: { src: boilerBurnerService, alt: 'Gas boiler with the burner access panel open during service' },
} satisfies Record<string, Photo>;

/** Best photo per service category / service slug. */
export const categoryPhoto: Record<string, Photo> = {
  heating: photos.furnaceDiagnostics,
  cooling: photos.rooftopSkyline,
  'air-quality': photos.rooftopMiniSplit,
};
export const servicePhoto: Record<string, Photo> = {
  'boiler-repair': photos.boilerControl,
  'boiler-installation': photos.newBoiler,
  'furnace-repair': photos.heatExchanger,
  'furnace-installation': photos.furnaceDiagnostics,
  'furnace-tune-up': photos.blowerWheel,
  'carbon-monoxide-safety': photos.corrodedFlue,
  'ac-repair': photos.acGauges,
  'ac-installation': photos.rooftopSkyline,
  'ac-tune-up': photos.gangwayCondenser,
  'mini-split-installation': photos.rooftopMiniSplit,
  'mini-split-repair': photos.rooftopMiniSplit,
  'heat-pump-installation': photos.rooftopMiniSplit,
  'heat-pump-repair': photos.rooftopMiniSplit,
  'refrigerant-leak-repair': photos.acGauges,
  'thermostat-installation': photos.zoneValves,
  'uv-air-sanitizers': photos.uvSanitizer,
  'whole-home-humidifiers': photos.humidifier,
};

/** "Recent work" gallery (homepage + About): the owner's own job photos. */
export const recentWork: Photo[] = [
  photos.newBoiler, photos.heatExchanger, photos.humidifier, photos.acGauges,
  photos.zoneValves, photos.uvSanitizer, photos.burnersCleaning, photos.airVentCorroded,
];
