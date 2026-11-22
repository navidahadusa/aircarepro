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
import steamBoiler from '../assets/photos/jobs/steam-boiler-controls.jpg';
import rooftopCondenserSkyline from '../assets/photos/jobs/rooftop-condenser-chicago-skyline.jpg';
import payneFurnace from '../assets/photos/jobs/payne-furnace-basement.jpg';
import carrierFurnace from '../assets/photos/jobs/carrier-high-efficiency-furnace.jpg';
import newCondenserRoof from '../assets/photos/jobs/new-ac-condenser-rooftop.jpg';
import dirtyCondenserCoil from '../assets/photos/jobs/condenser-coil-before-cleaning.jpg';
import nitrogenTest from '../assets/photos/jobs/nitrogen-pressure-test.jpg';
import horizontalFurnace from '../assets/photos/jobs/horizontal-furnace-tight-space.jpg';
import coilBrushing from '../assets/photos/jobs/technician-brushing-condenser-coil.jpg';
import fanCoilAssembly from '../assets/photos/jobs/technician-fan-coil-assembly.jpg';
import coilCleanerSpray from '../assets/photos/jobs/technician-coil-cleaner-spray.jpg';
import miniSplitInstall from '../assets/photos/jobs/technicians-mini-split-install.jpg';
import zoneHumidifierWiring from '../assets/photos/jobs/furnace-zone-humidifier-wiring.jpg';
import blowerMotor from '../assets/photos/jobs/ecm-blower-motor-replacement.jpg';

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
  steamBoiler: { src: steamBoiler, alt: 'Gas steam boiler with burner control, low-water cutoff and gauge glass in a basement' },
  rooftopCondenserSkyline: { src: rooftopCondenserSkyline, alt: 'Rooftop AC condenser on a flat roof with the Chicago skyline in the distance' },
  payneFurnace: { src: payneFurnace, alt: 'Payne gas furnace with PVC venting in a basement, technician tool bags beside it' },
  carrierFurnace: { src: carrierFurnace, alt: 'Carrier high-efficiency furnace with PVC vent and condensate piping in a utility room' },
  newCondenserRoof: { src: newCondenserRoof, alt: 'New Ameristar air conditioner condenser installed on a pad on a flat roof' },
  dirtyCondenserCoil: { src: dirtyCondenserCoil, alt: 'Outdoor AC condenser opened up, showing the coil, compressor and built-up debris before cleaning' },
  nitrogenTest: { src: nitrogenTest, alt: 'Nitrogen cylinder and regulator connected to an AC service valve for a leak pressure test' },
  horizontalFurnace: { src: horizontalFurnace, alt: 'Horizontal high-efficiency furnace installed in a tight space behind an opened wall' },
  coilBrushing: { src: coilBrushing, alt: 'Technician brushing the coil of an outdoor AC condenser during a tune-up' },
  fanCoilAssembly: { src: fanCoilAssembly, alt: 'Technician assembling a new hydronic fan coil unit inside an apartment' },
  coilCleanerSpray: { src: coilCleanerSpray, alt: 'Technician spraying coil cleaner into an opened AC condenser during maintenance' },
  zoneHumidifierWiring: { src: zoneHumidifierWiring, alt: 'Furnace with the panel open while a zone control board and humidifier controller are wired, a clamp meter on the duct' },
  blowerMotor: { src: blowerMotor, alt: 'New ECM blower motor mounted in a furnace blower housing during a repair' },
  miniSplitInstall: { src: miniSplitInstall, alt: 'Two technicians mounting a ductless mini-split outdoor unit, with a digital refrigerant manifold connected' },
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
  'furnace-installation': photos.carrierFurnace,
  'furnace-tune-up': photos.blowerWheel,
  'carbon-monoxide-safety': photos.corrodedFlue,
  'ac-repair': photos.acGauges,
  'ac-installation': photos.newCondenserRoof,
  'ac-tune-up': photos.coilBrushing,
  'mini-split-installation': photos.miniSplitInstall,
  'mini-split-repair': photos.rooftopMiniSplit,
  'heat-pump-installation': photos.rooftopMiniSplit,
  'heat-pump-repair': photos.rooftopMiniSplit,
  'refrigerant-leak-repair': photos.nitrogenTest,
  'thermostat-installation': photos.zoneHumidifierWiring,
  'uv-air-sanitizers': photos.uvSanitizer,
  'whole-home-humidifiers': photos.humidifier,
};

/** "Recent work" gallery (homepage + About): the owner's own job photos. */
export const recentWork: Photo[] = [
  photos.coilBrushing, photos.miniSplitInstall, photos.newBoiler, photos.steamBoiler,
  photos.coilCleanerSpray, photos.heatExchanger, photos.newCondenserRoof, photos.fanCoilAssembly,
];
