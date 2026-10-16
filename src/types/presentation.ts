export interface SlideMetadata {
  id: number;
  slideNumber: string; // '01', '02', etc.
  title: string;
  subtitle: string;
  sectionTitle?: string;
  speakerNotes: string[];
}

export const SLIDES_DATA: SlideMetadata[] = [
  {
    id: 1,
    slideNumber: '01',
    title: 'QCare',
    subtitle: 'Smart Hospital Queue Management System',
    sectionTitle: 'Project Introduction',
    speakerNotes: [
      'Welcome judges and audience. I am Faris Mohammed, and today I present QCare.',
      'In crowded hospitals, patients wait in dark uncertainty without knowing when their turn is.',
      'QCare is designed with one clear promise: Wait less. Know your turn.',
    ],
  },
  {
    id: 2,
    slideNumber: '02',
    title: 'Project Concept',
    subtitle: 'A smarter, transparent hospital queue ecosystem',
    sectionTitle: 'System Overview & Beneficiaries',
    speakerNotes: [
      'Explain the tripartite architecture: Walk-in digital token generation, live patient tracking, and staff management.',
      'Show how both patients and hospital clinical staff benefit from real-time transparency.',
      'Highlight the simplicity for walk-in patients without demanding app downloads.',
    ],
  },
  {
    id: 3,
    slideNumber: '03',
    title: 'Problem & Solution',
    subtitle: 'From Uncertain Waiting to Smart Queue Management',
    sectionTitle: 'Core Value Shift',
    speakerNotes: [
      'Contrast the traditional paper token slip with the QCare connected experience.',
      'Explain how eliminating waiting room overcrowding prevents cross-infections and stress.',
      'Highlight that patients can safely step outside to the pharmacy or cafeteria while keeping their place.',
    ],
  },
  {
    id: 4,
    slideNumber: '04',
    title: 'Key Features',
    subtitle: 'Six core capabilities engineered for hospital efficiency',
    sectionTitle: 'Proposed Product Capabilities',
    speakerNotes: [
      'Walk through the 6 key capabilities: Digital Tokens, Live Tracking, Waiting Time, Alerts, Staff Desk, Emergency Prioritisation.',
      'Clarify that Emergency Queue Management is strictly authorized by medical staff for safety.',
      'Demonstrate the cohesion of the patient view and staff operational dashboard.',
    ],
  },
  {
    id: 5,
    slideNumber: '05',
    title: 'Competitor Analysis',
    subtitle: 'A simpler, patient-focused approach to hospital queue management',
    sectionTitle: 'Market Comparison & QCare USP',
    speakerNotes: [
      'Objectively examine enterprise solutions like Qminder, Waitwhile, and Qmatic.',
      'Show that many generic solutions are complex, expensive, and not optimized for regional clinic workflows.',
      'Position QCare: Patient-focused, zero-barrier, walk-in friendly, and cost-effective.',
    ],
  },
  {
    id: 6,
    slideNumber: '06',
    title: 'Target Audience & Market',
    subtitle: 'Start Local. Scale Nationwide.',
    sectionTitle: 'Geographic Focus & Stakeholders',
    speakerNotes: [
      'Explain the initial launch strategy focused on Kerala, specifically Malappuram district clinics and taluk hospitals.',
      'Kerala has one of the highest healthcare utilization rates in India, making queue bottlenecks severe.',
      'Outline the expansion roadmap from local private clinics to district networks nationwide.',
    ],
  },
  {
    id: 7,
    slideNumber: '07',
    title: 'Revenue Model',
    subtitle: 'Affordable for small clinics. Scalable for large hospitals.',
    sectionTitle: 'B2B SaaS Business Model',
    speakerNotes: [
      'QCare operates on a sustainable B2B SaaS model with recurring subscription tiers.',
      'Low barriers to entry for single-doctor clinics, plus enterprise tiers for multi-department hospitals.',
      'Value-add setup, training, and custom integrations generate upfront service revenue.',
    ],
  },
  {
    id: 8,
    slideNumber: '08',
    title: 'Development & Future Plan',
    subtitle: 'Roadmap towards smarter hospital visits',
    sectionTitle: 'Working Prototype & Next Milestones',
    speakerNotes: [
      'Present the working demo hosted on Google AI Studio.',
      'Highlight the future roadmap: Real-time web sockets, automated SMS/WhatsApp alerts, Malayalam language support.',
      'Reiterate closing statement: QCare — Wait less. Know your turn. Presented by Faris Mohammed.',
    ],
  },
];
