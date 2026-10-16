import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Layers, Wrench, Building, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Slide7_Revenue: React.FC = () => {
  const streams = [
    {
      num: '01',
      title: 'Monthly / Annual Subscriptions',
      desc: 'Recurring fees for access to the queue management platform.',
      detail: 'Core token generation, patient mobile tracking, and live staff queue screen for clinics.',
      icon: CreditCard,
      badge: 'Core Recurring',
    },
    {
      num: '02',
      title: 'Premium Hospital Plans',
      desc: 'Advanced dashboards, multi-department management, analytics, and additional administrative features.',
      detail: 'Multi-OPD routing, doctor performance insights, waiting-time analytics, and automated SMS.',
      icon: Layers,
      badge: 'Advanced Tier',
    },
    {
      num: '03',
      title: 'Custom Setup & Integration',
      desc: 'One-time fees for hospital-specific configuration, staff training, and integration.',
      detail: 'Onboarding clinical nurses, connecting with existing HMS/EHR, and specialized reception workflows.',
      icon: Wrench,
      badge: 'Service & Setup',
    },
    {
      num: '04',
      title: 'Enterprise Solutions',
      desc: 'Customised packages for large hospitals and multi-branch healthcare networks.',
      detail: 'Centralized administrative controls, multi-facility reporting, dedicated SLA, and priority support.',
      icon: Building,
      badge: 'Multi-Branch',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              07
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              Commercial Model & Monetization
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Revenue Model
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#2F3E3C]">Proposed B2B SaaS Structure</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Sustainable Recurring Economics</div>
        </div>
      </div>

      {/* Section A: How Will the Project Make Money? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-4 rounded-2xl bg-[#E8F0F1] border border-[#BDDBD1] shadow-xs my-1"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/70">
            Section A · Monetization Strategy
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#2F3E3C]/90 font-medium leading-relaxed">
          “QCare will follow a <strong className="font-bold text-[#2F3E3C]">B2B SaaS (Software as a Service)</strong> business model, offering hospitals and clinics a digital platform to manage patient queues through flexible subscription plans.”
        </p>
      </motion.div>

      {/* Section B: 4 Revenue Streams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-auto py-1">
        {streams.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-2xl bg-white border border-[#E7E9E3] hover:border-[#BDDBD1] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#E8F0F1] text-[#2F3E3C]">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold text-[#2F3E3C]/40 mb-0.5">
                  Stream {item.num}
                </div>
                <h3 className="text-sm font-bold text-[#2F3E3C] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2F3E3C]/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#E7E9E3] text-[10px] text-[#2F3E3C]/70 font-medium">
                {item.detail}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Business Model Flow Diagram & Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="p-3.5 rounded-2xl bg-[#E8F0F1] border border-[#BDDBD1] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs"
      >
        {/* Subtle Flow Diagram */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#2F3E3C]">
          <span className="px-3 py-1 bg-white rounded-lg border border-[#BDDBD1] shadow-2xs">
            Hospitals & Clinics
          </span>
          <ArrowRight className="w-4 h-4 text-[#2F3E3C]" />
          <span className="px-3 py-1 bg-[#2F3E3C] text-white rounded-lg shadow-2xs">
            QCare Platform
          </span>
          <ArrowRight className="w-4 h-4 text-[#2F3E3C]" />
          <span className="px-3 py-1 bg-[#C7E7EC] text-[#2F3E3C] rounded-lg border border-[#BDDBD1] shadow-2xs">
            Subscription Revenue
          </span>
        </div>

        {/* Closing Statement */}
        <div className="text-xs sm:text-sm font-extrabold text-[#2F3E3C] italic text-center sm:text-right">
          “Affordable for small clinics. Scalable for large hospitals.”
        </div>
      </motion.div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
        <div>QCare · Section 07: Revenue Model</div>
        <div>Faris Mohammed</div>
      </div>
    </div>
  );
};
