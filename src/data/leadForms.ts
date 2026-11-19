/**
 * Lead-capture funnel definitions. Forms are rendered by <LeadForm funnel="..."/>.
 * Strategy and rationale live in marketing/lead-gen/. Keep this file and
 * marketing/lead-gen/qualification-fields.md in sync.
 */

export type FieldType = 'text' | 'tel' | 'email' | 'select' | 'textarea' | 'radio' | 'checkbox' | 'hidden';

export interface LeadField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autocomplete?: string;
  /** Used for lead scoring in the CRM; mirrors qualification-fields.md. */
  qualifies?: 'urgency' | 'intent' | 'value' | 'fit';
}

export type FunnelId = 'emergency' | 'quote' | 'maintenance';

export interface Funnel {
  id: FunnelId;
  title: string;
  subtitle: string;
  submitLabel: string;
  /** Conversion event name pushed to dataLayer on submit. */
  conversionEvent: string;
  /** Relative value used for ads value-based bidding (edit in CLAUDE.md goals). */
  conversionValue: number;
  fields: LeadField[];
}

const contactFields: LeadField[] = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name' },
  { name: 'phone', label: 'Mobile phone', type: 'tel', required: true, autocomplete: 'tel', placeholder: '(773) 555-0100' },
  { name: 'zip', label: 'ZIP code', type: 'text', required: true, autocomplete: 'postal-code', qualifies: 'fit' },
];

export const funnels: Record<FunnelId, Funnel> = {
  emergency: {
    id: 'emergency',
    title: 'Request Emergency Service',
    subtitle: 'No heat, no cooling or a boiler problem, day or night? Tell us what’s happening and a technician will call you back.',
    submitLabel: 'Dispatch a Technician',
    conversionEvent: 'lead_emergency',
    conversionValue: 300,
    fields: [
      ...contactFields,
      {
        name: 'issue',
        label: 'What’s going on?',
        type: 'select',
        required: true,
        qualifies: 'urgency',
        options: ['No heat (furnace)', 'No heat (boiler / radiators)', 'No cooling', 'Water leak', 'Strange smell / burning odor', 'Unit won’t turn on', 'Other'],
      },
      { name: 'equipment_brand', label: 'Equipment brand & any error code (if known)', type: 'text', placeholder: 'e.g. Carrier, blinking 3 times' },
      { name: 'details', label: 'Anything else we should know?', type: 'textarea' },
      {
        name: 'sms_consent',
        label: 'Text me dispatch updates (msg & data rates may apply; reply STOP to opt out)',
        type: 'checkbox',
      },
    ],
  },
  quote: {
    id: 'quote',
    title: 'Get a Free Estimate',
    subtitle: 'Replacement or new install? Answer a few questions for an accurate, no-pressure quote.',
    submitLabel: 'Get My Free Estimate',
    conversionEvent: 'lead_quote',
    conversionValue: 500,
    fields: [
      ...contactFields,
      { name: 'email', label: 'Email', type: 'email', autocomplete: 'email' },
      {
        name: 'project',
        label: 'What do you need?',
        type: 'select',
        required: true,
        qualifies: 'intent',
        options: ['Furnace replacement', 'Boiler replacement (hot-water or steam)', 'Central AC replacement', 'Heat pump / dual fuel', 'Ductless mini-split', 'Full system (heating + cooling)', 'Not sure yet'],
      },
      {
        name: 'system_age',
        label: 'Age of current system',
        type: 'select',
        qualifies: 'value',
        options: ['0–5 years', '6–10 years', '11–15 years', '15+ years', 'Don’t know'],
      },
      {
        name: 'property',
        label: 'Property type',
        type: 'radio',
        qualifies: 'fit',
        options: ['Own – single-family', 'Own – two-flat / multi-unit', 'Own – condo', 'Rent'],
      },
      {
        name: 'timeline',
        label: 'Timeline',
        type: 'select',
        qualifies: 'urgency',
        options: ['ASAP', 'Within 2 weeks', 'Within 1–3 months', 'Just researching'],
      },
      { name: 'financing', label: 'I’m interested in financing (subject to credit approval)', type: 'checkbox', qualifies: 'value' },
      { name: 'rebates', label: 'Help me check utility rebates (ComEd, Peoples Gas, Nicor Gas)', type: 'checkbox', qualifies: 'value' },
    ],
  },
  maintenance: {
    id: 'maintenance',
    title: 'Join the Comfort Club',
    subtitle: 'Spring AC tune-up, fall furnace or boiler safety check, priority appointments and member repair discounts.',
    submitLabel: 'Join & Schedule My Tune-Up',
    conversionEvent: 'lead_maintenance',
    conversionValue: 150,
    fields: [
      ...contactFields,
      { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
      {
        name: 'season',
        label: 'Preferred tune-up',
        type: 'radio',
        required: true,
        options: ['Comfort Club membership (both tune-ups)', 'Spring AC tune-up only', 'Fall furnace / boiler tune-up only'],
      },
      { name: 'heating_type', label: 'Heating system', type: 'select', qualifies: 'fit', options: ['Gas furnace', 'Hot-water boiler', 'Steam boiler', 'Heat pump', 'Not sure'] },
      { name: 'systems', label: 'Number of systems', type: 'select', qualifies: 'value', options: ['1', '2', '3+'] },
      { name: 'email_consent', label: 'Send me seasonal reminders and member offers', type: 'checkbox' },
    ],
  },
};
