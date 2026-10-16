import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Ticket, Activity, Clock, Bell, LayoutDashboard, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const Slide4_Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(1);

  const features = [
    {
      id: 1,
      num: '01',
      title: 'Digital Token Generation',
      desc: 'Generate tokens for patients quickly and conveniently.',
      details: 'Active in Current App: Walk-in digital token #1 generated for Dr. P.A. Kabeer at Almas Hospital.',
      icon: Ticket,
      tag: 'Live in Current App',
    },
    {
      id: 2,
      num: '02',
      title: 'Live Queue Tracking',
      desc: 'View current queue position and track queue progress.',
      details: 'Active in Current App: Real-time counter showing currently serving #25, 0 patients ahead, live synchronized.',
      icon: Activity,
      tag: 'Live in Current App',
    },
    {
      id: 3,
      num: '03',
      title: 'Estimated Waiting Time',
      desc: 'Display an estimated time for when the patient’s turn may arrive.',
      details: 'Active in Current App: Live estimated wait display: "Under 3 min (Now Serving)" and movement status.',
      icon: Clock,
      tag: 'Live in Current App',
    },
    {
      id: 4,
      num: '04',
      title: 'Turn Notifications',
      desc: 'Provide alerts when a patient’s turn is approaching.',
      details: 'Planned Roadmap: Automated push/SMS alerts as patient turn approaches (notification center indicator live).',
      icon: Bell,
      tag: 'Planned Roadmap',
    },
    {
      id: 5,
      num: '05',
      title: 'Staff Management Dashboard',
      desc: 'Allow hospital staff to generate tokens, manage queues, and monitor patient flow.',
      details: 'Planned Roadmap: Dedicated web dashboard for hospital nurses and OPD administrators.',
      icon: LayoutDashboard,
      tag: 'Planned Roadmap',
    },
    {
      id: 6,
      num: '06',
      title: 'Emergency Queue Management',
      desc: 'Support priority handling for emergency cases according to authorized hospital staff decisions.',
      details: 'Planned Roadmap: Priority queue bypass for emergency triage authorized by medical staff.',
      icon: ShieldAlert,
      tag: 'Planned Roadmap',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              04
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              System Capabilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Key Features
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#2F3E3C]">Proposed Product Capabilities</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Designed for Hospital Workflows</div>
        </div>
      </div>

      {/* Main 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-auto py-2">
        {features.map((feat, index) => {
          const Icon = feat.icon;
          const isSelected = selectedFeature === feat.id;

          return (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedFeature(feat.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#2F3E3C] shadow-md ring-2 ring-[#BDDBD1]'
                  : 'bg-[#E8F0F1] hover:bg-white border-[#BDDBD1]/70 hover:border-[#2F3E3C]/40 shadow-xs'
              }`}
            >
              {/* Top Row: Icon & Number */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#2F3E3C] text-[#C7E7EC]' : 'bg-[#BDDBD1]/60 text-[#2F3E3C]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#BDDBD1]/30 text-[#2F3E3C]">
                      {feat.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#2F3E3C]/40">
                      {feat.num}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-[#2F3E3C] mb-1.5 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2F3E3C]/80 leading-relaxed font-medium">
                  {feat.desc}
                </p>
              </div>

              {/* Detail drawer when selected */}
              <div className="mt-3 pt-3 border-t border-[#E7E9E3] text-[11px] text-[#2F3E3C]/75 flex items-center justify-between">
                <span>{feat.details}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#2F3E3C] shrink-0" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Context Pill & Note */}
      <div className="bg-[#E8F0F1] border border-[#BDDBD1] rounded-xl px-4 py-2 flex flex-wrap items-center justify-between text-xs text-[#2F3E3C]/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2F3E3C]" />
          <span className="font-semibold text-[#2F3E3C]">Status:</span>
          <span>Features 01–03 are verified live in the current Patient Token Screen. Features 04–06 are planned roadmap capabilities.</span>
        </div>
        <div className="text-[11px] text-[#2F3E3C]/60 font-medium">
          Click any card above to focus feature details
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
        <div>QCare · Section 04: Key Features</div>
        <div>Faris Mohammed</div>
      </div>
    </div>
  );
};
