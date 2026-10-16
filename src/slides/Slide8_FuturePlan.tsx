import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QCareLogo } from '../components/QCareLogo';
import { ExternalLink, Copy, Check, Sparkles, Smartphone, Globe, Layers, Bell, Activity, RefreshCw } from 'lucide-react';

export const Slide8_FuturePlan: React.FC = () => {
  const [copied, setCopied] = useState(false);
  // Current app preview or designated placeholder
  const demoUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ais-dev-egr6k3f4dvj3dzr54wrixh-594343707312.asia-east1.run.app';

  const copyUrl = () => {
    navigator.clipboard.writeText(demoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const futureImprovements = [
    { title: 'Real-Time Synchronization', desc: 'Keep patient and staff queue information updated instantly across all devices.', icon: RefreshCw },
    { title: 'Smart Notifications', desc: 'Send automated alerts via SMS & WhatsApp when a patient’s turn approaches.', icon: Bell },
    { title: 'Hospital Integration', desc: 'Connect seamlessly with hospital management systems (HMS/EHR/HIS).', icon: Layers },
    { title: 'Multilingual Support', desc: 'Add Malayalam, English, and other regional languages for local patient accessibility.', icon: Globe },
    { title: 'Advanced Analytics', desc: 'Help hospitals understand waiting times, bottlenecks, and improve patient flow.', icon: Activity },
    { title: 'Mobile App', desc: 'Develop dedicated native Android and iOS applications for patients and clinics.', icon: Smartphone },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BDDBD1]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#C7E7EC]/30 rounded-full blur-3xl pointer-events-none -mb-20" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-3 z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              08
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              Prototype & Future Vision
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Development & Future Plan
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#2F3E3C]">Closing Presentation</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Summary & Milestones</div>
        </div>
      </div>

      {/* Main Grid: Section A & C (Left 6 cols) and Section B (Right 6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 z-10 items-stretch">
        {/* Left Column: Demo & Conclusion (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
          {/* Section A: Working Demo / Live Website */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#BDDBD1] shadow-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                Section A · Working Prototype
              </span>
              <span className="text-[10px] font-bold bg-[#C7E7EC] text-[#2F3E3C] px-2 py-0.5 rounded">
                Google AI Studio
              </span>
            </div>

            <div className="text-sm font-bold text-[#2F3E3C]">
              Project: QCare — Smart Hospital Queue Management System
            </div>
            <div className="text-xs text-[#2F3E3C]/75 mt-0.5 mb-3 leading-relaxed">
              Explore the live Patient Home and Token Screen interface (Token #1, Dr. P.A. Kabeer · Room 2, Almas Hospital).
            </div>

            {/* Live Demo URL Box */}
            <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-center justify-between gap-2">
              <div className="overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#2F3E3C]/60">Live Demo URL</div>
                <div className="text-xs font-mono text-[#2F3E3C] truncate font-semibold">
                  {demoUrl}
                </div>
              </div>
              <button
                onClick={copyUrl}
                className="px-2.5 py-1.5 rounded-lg bg-[#2F3E3C] text-white text-[11px] font-semibold flex items-center gap-1 shrink-0 hover:bg-[#2F3E3C]/90 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#C7E7EC]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Section C: Conclusion & Branding */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-[#E8F0F1] border-2 border-[#BDDBD1] shadow-xs flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/70 mb-2">
                Section C · Conclusion
              </div>
              
              <blockquote className="text-xs sm:text-sm text-[#2F3E3C] font-semibold leading-relaxed mb-3">
                “QCare aims to transform traditional hospital queue management into a smarter, more transparent, and patient-friendly experience.”
              </blockquote>

              <p className="text-xs text-[#2F3E3C]/80 leading-relaxed font-medium">
                “By helping patients understand their queue status and enabling staff to manage queues efficiently, QCare can make hospital visits more convenient.”
              </p>
            </div>

            {/* Prominent QCare Closing Lockup */}
            <div className="mt-4 pt-3 border-t border-[#BDDBD1] flex items-center justify-between">
              <div>
                <QCareLogo size="md" showTagline={false} />
                <div className="text-xs font-bold italic text-[#2F3E3C] mt-1">
                  “Wait less. Know your turn.”
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-bold uppercase text-[#2F3E3C]/60">Presented By</div>
                <div className="text-sm font-extrabold text-[#2F3E3C]">Faris Mohammed</div>
                <div className="text-[10px] text-[#2F3E3C]/70">Project Competition 2026</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Section B Future Improvements (6 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 bg-white rounded-2xl border border-[#BDDBD1] p-5 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E7E9E3]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60">
                  Section B · Technology Roadmap
                </span>
                <h3 className="text-base font-bold text-[#2F3E3C]">Future Improvements</h3>
              </div>
              <Sparkles className="w-4 h-4 text-[#2F3E3C]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {futureImprovements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2F3E3C] leading-snug">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#2F3E3C]/75 mt-0.5 leading-snug font-medium">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing commitment banner */}
          <div className="mt-4 p-3 rounded-xl bg-[#E8F0F1] border border-[#BDDBD1] flex items-center justify-between text-xs text-[#2F3E3C]">
            <span className="font-semibold">Ready for pilot trials in Malappuram clinics</span>
            <span className="text-[11px] font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              v1.0 Proposed
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60 z-10">
        <div>QCare · Section 08: Development & Future Plan</div>
        <div>Thank You · Faris Mohammed</div>
      </div>
    </div>
  );
};
