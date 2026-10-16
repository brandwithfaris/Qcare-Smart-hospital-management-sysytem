import pptxgen from 'pptxgenjs';

export const exportPresentationToPPTX = async () => {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Faris Mohammed';
  pres.company = 'QCare';
  pres.title = 'QCare — Smart Hospital Queue Management System';

  // Palette definitions in hex without hash
  const DEEP_TEAL = '2F3E3C';
  const SAGE_MINT = 'BDDBD1';
  const SOFT_GREY = 'E7E9E3';
  const WARM_IVORY = 'FBF9F1';
  const PALE_BLUE = 'E8F0F1';
  const ICE_BLUE = 'C7E7EC';

  // Helper for consistent slide styling
  const addSlideFrame = (slide: pptxgen.Slide, slideNum: string, title: string, subtitle?: string) => {
    slide.background = { color: WARM_IVORY };

    // Header bar
    slide.addText('QCare', {
      x: 0.8,
      y: 0.5,
      w: 2.0,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: DEEP_TEAL,
      fontFace: 'Arial',
    });

    slide.addText(`SLIDE ${slideNum} / 08`, {
      x: 10.5,
      y: 0.5,
      w: 2.0,
      h: 0.4,
      fontSize: 11,
      color: DEEP_TEAL,
      align: 'right',
      fontFace: 'Arial',
    });

    // Slide Title
    slide.addText(title, {
      x: 0.8,
      y: 1.0,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      bold: true,
      color: DEEP_TEAL,
      fontFace: 'Arial',
    });

    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.8,
        y: 1.6,
        w: 11.5,
        h: 0.35,
        fontSize: 14,
        color: '556664',
        fontFace: 'Arial',
      });
    }

    // Footer divider and presenter mark
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 6.8,
      w: 11.7,
      h: 0.02,
      fill: { color: SAGE_MINT },
    });

    slide.addText('QCare · Smart Hospital Queue Management System · Faris Mohammed', {
      x: 0.8,
      y: 6.9,
      w: 11.7,
      h: 0.3,
      fontSize: 9,
      color: '667775',
      fontFace: 'Arial',
    });
  };

  // ==========================================
  // SLIDE 1: Cover
  // ==========================================
  const slide1 = pres.addSlide();
  slide1.background = { color: WARM_IVORY };
  
  // Left content block
  slide1.addText('QCare', {
    x: 1.0,
    y: 1.8,
    w: 6.5,
    h: 1.0,
    fontSize: 54,
    bold: true,
    color: DEEP_TEAL,
    fontFace: 'Arial',
  });

  slide1.addText('Smart Hospital Queue Management System', {
    x: 1.0,
    y: 2.9,
    w: 6.5,
    h: 0.6,
    fontSize: 20,
    bold: true,
    color: '3D4E4C',
    fontFace: 'Arial',
  });

  slide1.addText('“Wait less. Know your turn.”', {
    x: 1.0,
    y: 3.7,
    w: 6.5,
    h: 0.5,
    fontSize: 18,
    italic: true,
    color: DEEP_TEAL,
    fontFace: 'Arial',
  });

  slide1.addShape(pres.ShapeType.rect, {
    x: 1.0,
    y: 4.8,
    w: 5.5,
    h: 1.1,
    fill: { color: PALE_BLUE },
    line: { color: SAGE_MINT, width: 1 },
  });

  slide1.addText('PRESENTED BY\nFaris Mohammed', {
    x: 1.2,
    y: 4.95,
    w: 5.1,
    h: 0.8,
    fontSize: 13,
    bold: true,
    color: DEEP_TEAL,
    fontFace: 'Arial',
  });

  // Right card mockup
  slide1.addShape(pres.ShapeType.rect, {
    x: 8.0,
    y: 1.4,
    w: 4.2,
    h: 5.0,
    fill: { color: 'FFFFFF' },
    line: { color: SAGE_MINT, width: 2 },
  });

  slide1.addText('Patient Token Screen\nTOKEN #1\nDr. P.A. Kabeer · Room 2\nAlmas Hospital\n\nCurrently Serving: #25\nPatients Ahead: 0 patients ahead\nEst. Wait: Under 3 min (Now Serving)\nQueue Status: Moving normally', {
    x: 8.4,
    y: 1.8,
    w: 3.4,
    h: 4.2,
    fontSize: 13,
    color: DEEP_TEAL,
    fontFace: 'Arial',
    align: 'center',
  });

  // ==========================================
  // SLIDE 2: Project Concept
  // ==========================================
  const slide2 = pres.addSlide();
  addSlideFrame(slide2, '02', 'Project Concept', 'A smart hospital queue management system designed to make hospital visits easier');

  // Box A
  slide2.addShape(pres.ShapeType.rect, { x: 0.8, y: 2.2, w: 3.6, h: 4.2, fill: { color: PALE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide2.addText('What Is the Project?\n\nQCare is a smart hospital queue management system designed to make hospital visits easier by reducing uncertainty and unnecessary waiting.', {
    x: 1.0, y: 2.4, w: 3.2, h: 3.8, fontSize: 13, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // Box B
  slide2.addShape(pres.ShapeType.rect, { x: 4.8, y: 2.2, w: 3.8, h: 4.2, fill: { color: 'FFFFFF' }, line: { color: SAGE_MINT, width: 1 } });
  slide2.addText('What Does the App Do?\n\n• Generates digital tokens for walk-in patients.\n• Displays live queue position & estimated waiting time.\n• Notifies patients when their turn is approaching.\n• Enables hospital staff to manage queues via dedicated dashboard.', {
    x: 5.0, y: 2.4, w: 3.4, h: 3.8, fontSize: 13, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // Box C
  slide2.addShape(pres.ShapeType.rect, { x: 8.9, y: 2.2, w: 3.6, h: 4.2, fill: { color: PALE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide2.addText('Who Are the Target Users?\n\n• Patients:\n  Track queue status and waiting time.\n\n• Hospital Staff:\n  Manage tokens and monitor live queues.\n\n• Administrators:\n  Improve queue coordination & patient flow.', {
    x: 9.1, y: 2.4, w: 3.2, h: 3.8, fontSize: 13, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // ==========================================
  // SLIDE 3: Problem & Solution
  // ==========================================
  const slide3 = pres.addSlide();
  addSlideFrame(slide3, '03', 'Problem & Solution', '“From Uncertain Waiting to Smart Queue Management”');

  slide3.addShape(pres.ShapeType.rect, { x: 0.8, y: 2.2, w: 5.5, h: 4.2, fill: { color: 'FFFFFF' }, line: { color: SOFT_GREY, width: 1 } });
  slide3.addText('Problem Statement\n\n“Patients often face long waiting times in hospitals without knowing when their turn will arrive. Traditional token systems provide a token number but offer limited information about live queue progress, causing uncertainty, overcrowding, and frustration.”\n\n• Blind waiting in crowded waiting halls\n• Fear of missing consultation call\n• Inability to step away for medicines/food', {
    x: 1.0, y: 2.4, w: 5.1, h: 3.8, fontSize: 12.5, color: DEEP_TEAL, fontFace: 'Arial'
  });

  slide3.addShape(pres.ShapeType.rect, { x: 7.0, y: 2.2, w: 5.5, h: 4.2, fill: { color: PALE_BLUE }, line: { color: ICE_BLUE, width: 2 } });
  slide3.addText('Why Is QCare Useful?\n\n• Reduces uncertainty through real-time queue-position visibility.\n• Helps patients plan their time using estimated waiting information.\n• Improves convenience and reduces waiting-related stress.\n• Helps hospital staff coordinate patient flow more efficiently.\n\nResult: Calm, orderly hospital environment.', {
    x: 7.2, y: 2.4, w: 5.1, h: 3.8, fontSize: 12.5, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // ==========================================
  // SLIDE 4: Key Features
  // ==========================================
  const slide4 = pres.addSlide();
  addSlideFrame(slide4, '04', 'Key Features', 'Six core proposed product capabilities');

  const features = [
    { title: '1. Digital Token Generation', desc: 'Generate tokens for patients quickly and conveniently at reception or mobile.' },
    { title: '2. Live Queue Tracking', desc: 'View current queue position and track progress in real time.' },
    { title: '3. Estimated Waiting Time', desc: 'Display an estimated time for when the patient’s turn may arrive.' },
    { title: '4. Turn Notifications', desc: 'Provide alerts when a patient’s turn is approaching.' },
    { title: '5. Staff Management Dashboard', desc: 'Allow hospital staff to generate tokens, manage queues, and monitor patient flow.' },
    { title: '6. Emergency Queue Management', desc: 'Support priority handling for emergency cases according to authorized staff decisions.' },
  ];

  features.forEach((feat, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = 0.8 + col * 3.9;
    const y = 2.2 + row * 2.1;

    slide4.addShape(pres.ShapeType.rect, {
      x, y, w: 3.7, h: 1.9,
      fill: { color: col === 1 ? 'FFFFFF' : PALE_BLUE },
      line: { color: SAGE_MINT, width: 1 },
    });

    slide4.addText(`${feat.title}\n\n${feat.desc}`, {
      x: x + 0.2, y: y + 0.15, w: 3.3, h: 1.6,
      fontSize: 11.5,
      color: DEEP_TEAL,
      fontFace: 'Arial',
    });
  });

  // ==========================================
  // SLIDE 5: Competitor Analysis
  // ==========================================
  const slide5 = pres.addSlide();
  addSlideFrame(slide5, '05', 'Competitor Analysis', 'A simpler, patient-focused approach to hospital queue management');

  // Competitor Table
  slide5.addTable([
    [
      { text: 'Feature', options: { bold: true, fill: { color: DEEP_TEAL }, color: 'FFFFFF' } },
      { text: 'Qminder', options: { bold: true, fill: { color: DEEP_TEAL }, color: 'FFFFFF' } },
      { text: 'Waitwhile', options: { bold: true, fill: { color: DEEP_TEAL }, color: 'FFFFFF' } },
      { text: 'Qmatic', options: { bold: true, fill: { color: DEEP_TEAL }, color: 'FFFFFF' } },
    ],
    [{ text: 'Queue Management' }, { text: 'Yes' }, { text: 'Yes' }, { text: 'Yes' }],
    [{ text: 'Digital Waiting Lists' }, { text: 'Yes' }, { text: 'Yes' }, { text: 'Yes' }],
    [{ text: 'Customer Notifications' }, { text: 'Yes' }, { text: 'Yes' }, { text: 'Yes' }],
    [{ text: 'Healthcare Workflow Support' }, { text: 'Varies' }, { text: 'Varies' }, { text: 'Yes (Enterprise)' }],
  ], {
    x: 0.8,
    y: 2.2,
    w: 6.2,
    h: 3.5,
    fontSize: 11,
    color: DEEP_TEAL,
    border: { pt: 1, color: SAGE_MINT },
  });

  // QCare USP
  slide5.addShape(pres.ShapeType.rect, {
    x: 7.4,
    y: 2.2,
    w: 5.1,
    h: 4.2,
    fill: { color: PALE_BLUE },
    line: { color: ICE_BLUE, width: 2 },
  });

  slide5.addText('QCare USP\n\n“A simpler, patient-focused approach to hospital queue management.”\n\n• Queue position & estimated waiting time in one place\n• Digital tokens for walk-in patients (no mandatory app download)\n• Turn-approaching notifications\n• Dedicated staff dashboard\n• Emergency prioritisation managed by authorized staff', {
    x: 7.7,
    y: 2.4,
    w: 4.5,
    h: 3.8,
    fontSize: 12,
    color: DEEP_TEAL,
    fontFace: 'Arial',
  });

  // ==========================================
  // SLIDE 6: Target Audience & Market
  // ==========================================
  const slide6 = pres.addSlide();
  addSlideFrame(slide6, '06', 'Target Audience & Market', '“Start Local. Scale Nationwide.”');

  // Three sections: Target Customers, Target Location, Market Opportunity
  slide6.addShape(pres.ShapeType.rect, { x: 0.8, y: 2.2, w: 3.7, h: 4.2, fill: { color: PALE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide6.addText('Target Customers\n\n• Hospitals and Clinics\n• Patients\n• Hospital Staff\n• Hospital Administrators\n\nFocus on OPD consultations, diagnostic centers, and outpatient clinics.', {
    x: 1.0, y: 2.4, w: 3.3, h: 3.8, fontSize: 12.5, color: DEEP_TEAL, fontFace: 'Arial'
  });

  slide6.addShape(pres.ShapeType.rect, { x: 4.8, y: 2.2, w: 3.7, h: 4.2, fill: { color: 'FFFFFF' }, line: { color: SAGE_MINT, width: 1 } });
  slide6.addText('Target Location\n\n• Primary Market:\n  Kerala, India\n\n• Initial Focus:\n  Local hospitals and clinics in Malappuram district\n\n• Future Expansion:\n  Hospitals and healthcare centres across India', {
    x: 5.0, y: 2.4, w: 3.3, h: 3.8, fontSize: 12.5, color: DEEP_TEAL, fontFace: 'Arial'
  });

  slide6.addShape(pres.ShapeType.rect, { x: 8.8, y: 2.2, w: 3.7, h: 4.2, fill: { color: PALE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide6.addText('Market Opportunity\n\n• Patients need clearer information about waiting times\n• Digital solutions can improve service coordination\n• Queue visibility improves patient convenience\n• System adapts to different hospital sizes and workflows', {
    x: 9.0, y: 2.4, w: 3.3, h: 3.8, fontSize: 12.5, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // ==========================================
  // SLIDE 7: Revenue Model
  // ==========================================
  const slide7 = pres.addSlide();
  addSlideFrame(slide7, '07', 'Revenue Model', '“Affordable for small clinics. Scalable for large hospitals.”');

  slide7.addShape(pres.ShapeType.rect, { x: 0.8, y: 2.1, w: 11.7, h: 1.0, fill: { color: PALE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide7.addText('B2B SaaS Business Model\n“QCare will follow a B2B SaaS business model, offering hospitals and clinics a digital platform to manage patient queues through flexible subscription plans.”', {
    x: 1.0, y: 2.2, w: 11.3, h: 0.8, fontSize: 12, color: DEEP_TEAL, fontFace: 'Arial'
  });

  const revenueStreams = [
    { title: '1. Monthly / Annual Subscriptions', desc: 'Recurring fees for access to the core queue management platform.' },
    { title: '2. Premium Hospital Plans', desc: 'Advanced dashboards, multi-department management, analytics, and admin features.' },
    { title: '3. Custom Setup & Integration', desc: 'One-time fees for hospital-specific configuration, staff training, and integration.' },
    { title: '4. Enterprise Solutions', desc: 'Customised packages for large hospitals and multi-branch healthcare networks.' },
  ];

  revenueStreams.forEach((item, idx) => {
    const x = 0.8 + idx * 2.95;
    slide7.addShape(pres.ShapeType.rect, { x, y: 3.4, w: 2.8, h: 2.8, fill: { color: 'FFFFFF' }, line: { color: SAGE_MINT, width: 1 } });
    slide7.addText(`${item.title}\n\n${item.desc}`, {
      x: x + 0.15, y: 3.6, w: 2.5, h: 2.4, fontSize: 11.5, color: DEEP_TEAL, fontFace: 'Arial'
    });
  });

  slide7.addText('Hospitals   →   QCare Platform   →   Subscription Revenue', {
    x: 0.8, y: 6.35, w: 11.7, h: 0.35, fontSize: 12, bold: true, align: 'center', color: DEEP_TEAL, fontFace: 'Arial'
  });

  // ==========================================
  // SLIDE 8: Development & Future Plan
  // ==========================================
  const slide8 = pres.addSlide();
  addSlideFrame(slide8, '08', 'Development & Future Plan', 'Working Demo, Next Milestones & Conclusion');

  // Demo box
  slide8.addShape(pres.ShapeType.rect, { x: 0.8, y: 2.1, w: 5.6, h: 2.0, fill: { color: PALE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide8.addText('Working Demo\nProject: QCare — Smart Hospital Queue Management System\nDemo Platform: Google AI Studio\nExplore patient queue interface and staff dashboard live.', {
    x: 1.0, y: 2.2, w: 5.2, h: 1.7, fontSize: 11.5, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // Future Improvements
  slide8.addShape(pres.ShapeType.rect, { x: 6.8, y: 2.1, w: 5.7, h: 4.4, fill: { color: 'FFFFFF' }, line: { color: SAGE_MINT, width: 1 } });
  slide8.addText('Future Improvements\n\n• Real-Time Synchronization: Instant patient & staff sync\n• Smart Notifications: Automated alerts as turn approaches\n• Hospital Integration: Connect with hospital management systems (HMS/EHR)\n• Multilingual Support: Malayalam, English, and regional languages\n• Advanced Analytics: Waiting time trends & patient flow optimization\n• Mobile App: Dedicated Android and iOS applications', {
    x: 7.0, y: 2.3, w: 5.3, h: 4.0, fontSize: 12, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // Conclusion box
  slide8.addShape(pres.ShapeType.rect, { x: 0.8, y: 4.3, w: 5.6, h: 2.2, fill: { color: ICE_BLUE }, line: { color: SAGE_MINT, width: 1 } });
  slide8.addText('Conclusion\n\n“QCare aims to transform traditional hospital queue management into a smarter, more transparent, and patient-friendly experience.”\n\n“QCare — Wait less. Know your turn.”\nPresented by Faris Mohammed', {
    x: 1.0, y: 4.4, w: 5.2, h: 2.0, fontSize: 11.5, bold: false, color: DEEP_TEAL, fontFace: 'Arial'
  });

  // Generate file and download
  await pres.writeFile({ fileName: 'QCare_Smart_Hospital_Queue_Presentation.pptx' });
};
