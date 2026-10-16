import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, Users, Compass, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Slide6_Market: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              06
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              Customer & Geographic Strategy
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Target Audience & Market
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#2F3E3C]">Strategic Market Roadmap</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Kerala to Pan-India</div>
        </div>
      </div>

      {/* Hero Motto Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="my-1.5 p-3 rounded-xl bg-[#E8F0F1] border border-[#BDDBD1] text-center"
      >
        <div className="text-sm sm:text-base font-extrabold text-[#2F3E3C] tracking-wide">
          “Start Local. Scale Nationwide.”
        </div>
      </motion.div>

      {/* 3 Connected Columns: Customers, Geographic Focus, Market Opportunity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-1">
        {/* Section A: Target Customers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-5 rounded-2xl bg-white border border-[#E7E9E3] shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E7E9E3]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60">
                  Section A
                </span>
                <h3 className="text-base font-bold text-[#2F3E3C]">Target Customers</h3>
              </div>
              <Users className="w-5 h-5 text-[#2F3E3C]" />
            </div>

            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">1. Hospitals and Clinics</div>
                <div className="text-[11px] text-[#2F3E3C]/75 mt-0.5">
                  Private multi-specialty centers, taluk hospitals, and busy outpatient clinics.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">2. Patients</div>
                <div className="text-[11px] text-[#2F3E3C]/75 mt-0.5">
                  Walk-in visitors and scheduled consults seeking queue status clarity.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">3. Hospital Staff</div>
                <div className="text-[11px] text-[#2F3E3C]/75 mt-0.5">
                  OPD nurses, desk receptionists, and doctors managing consultation flow.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">4. Hospital Administrators</div>
                <div className="text-[11px] text-[#2F3E3C]/75 mt-0.5">
                  Executives aiming to reduce waiting times, overcrowding, and complaints.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#E7E9E3] text-[10px] text-[#2F3E3C]/60">
            Covers the complete care-journey stakeholder ecosystem.
          </div>
        </motion.div>

        {/* Section B: Target Location or Market (Geographic diagram) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-5 rounded-2xl bg-[#E8F0F1] border-2 border-[#BDDBD1] shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#BDDBD1]/60">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                  Section B
                </span>
                <h3 className="text-base font-bold text-[#2F3E3C]">Target Location</h3>
              </div>
              <MapPin className="w-5 h-5 text-[#2F3E3C]" />
            </div>

            {/* Structured Geographic Roadmap Diagram */}
            <div className="space-y-3">
              {/* Step 1: Initial Focus */}
              <div className="p-3 bg-white rounded-xl border border-[#BDDBD1] shadow-xs">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[#2F3E3C]/60 mb-0.5">
                  <span>Phase 1 · Initial Focus</span>
                  <span className="bg-[#C7E7EC] text-[#2F3E3C] px-1.5 py-0.2 rounded font-bold">Launchpad</span>
                </div>
                <div className="font-bold text-sm text-[#2F3E3C]">Malappuram District</div>
                <div className="text-[11px] text-[#2F3E3C]/80 mt-0.5 leading-snug font-medium">
                  Local private clinics, polyclinics, and cooperative hospitals with high daily walk-in volumes.
                </div>
              </div>

              {/* Step 2: Primary Market */}
              <div className="p-3 bg-white rounded-xl border border-[#BDDBD1] shadow-xs">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[#2F3E3C]/60 mb-0.5">
                  <span>Phase 2 · Primary Market</span>
                  <span className="bg-[#BDDBD1]/40 text-[#2F3E3C] px-1.5 py-0.2 rounded font-bold">Statewide</span>
                </div>
                <div className="font-bold text-sm text-[#2F3E3C]">Kerala, India</div>
                <div className="text-[11px] text-[#2F3E3C]/80 mt-0.5 leading-snug font-medium">
                  State-wide expansion across Northern and Central Kerala healthcare hubs.
                </div>
              </div>

              {/* Step 3: Future Expansion */}
              <div className="p-3 bg-white rounded-xl border border-[#BDDBD1] shadow-xs">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[#2F3E3C]/60 mb-0.5">
                  <span>Phase 3 · Future Expansion</span>
                  <span className="bg-[#E7E9E3] text-[#2F3E3C] px-1.5 py-0.2 rounded font-bold">National</span>
                </div>
                <div className="font-bold text-sm text-[#2F3E3C]">Pan-India Expansion</div>
                <div className="text-[11px] text-[#2F3E3C]/80 mt-0.5 leading-snug font-medium">
                  Hospitals and healthcare centres across India seeking zero-hardware queue management.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#BDDBD1]/60 text-[10px] text-[#2F3E3C]/70 font-semibold">
            High healthcare literacy & rapid digital smartphone adoption.
          </div>
        </motion.div>

        {/* Section C: Market Need and Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-5 rounded-2xl bg-white border border-[#E7E9E3] shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E7E9E3]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60">
                  Section C
                </span>
                <h3 className="text-base font-bold text-[#2F3E3C]">Market Opportunity</h3>
              </div>
              <Compass className="w-5 h-5 text-[#2F3E3C]" />
            </div>

            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3E3C] mt-1.5 shrink-0" />
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold">Patients need clearer information:</strong> Unpredictable waiting times cause severe dissatisfaction and walkouts.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3E3C] mt-1.5 shrink-0" />
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold">Digital service coordination:</strong> Clean web software coordinates receptionists, nurses, and consulting doctors without paper piles.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3E3C] mt-1.5 shrink-0" />
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold">Queue visibility boosts convenience:</strong> Patients can wait safely in cafeteria or pharmacy without losing turn.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3E3C] mt-1.5 shrink-0" />
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold">Adaptable architecture:</strong> Easily configured for small single-doctor clinics or multi-department institutions.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#E7E9E3] text-[10px] text-[#2F3E3C]/60">
            Qualitative market indicators based on outpatient clinical workflows.
          </div>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
        <div>QCare · Section 06: Target Audience & Market</div>
        <div>Faris Mohammed</div>
      </div>
    </div>
  );
};
