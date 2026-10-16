import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ArrowRight, Clock, Users, ShieldAlert, Sparkles, Eye, HeartPulse } from 'lucide-react';
import { PatientMobileMockup } from '../components/mockups/PatientMobileMockup';

export const Slide3_ProblemSolution: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              03
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              The Value Shift
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Problem & Solution
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#2F3E3C]">Comparative Analysis</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Traditional vs Smart Queue</div>
        </div>
      </div>

      {/* Hero Central Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="my-2 p-3 sm:p-3.5 rounded-xl bg-[#E8F0F1] border border-[#BDDBD1] text-center"
      >
        <div className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
          Core Transformation
        </div>
        <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#2F3E3C]">
          “From Uncertain Waiting to Smart Queue Management”
        </div>
      </motion.div>

      {/* Before & After 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-auto">
        {/* BEFORE: Traditional Token Systems (Problem) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-[#E7E9E3] p-5 shadow-xs flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E9E3]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E7E9E3] flex items-center justify-center text-[#2F3E3C]">
                  <AlertCircle className="w-4 h-4 text-[#2F3E3C]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60">
                    Traditional Setup
                  </div>
                  <div className="text-base font-bold text-[#2F3E3C]">The Problem Statement</div>
                </div>
              </div>
              <span className="text-[10px] font-semibold bg-[#E7E9E3] text-[#2F3E3C] px-2 py-0.5 rounded">
                Uncertainty
              </span>
            </div>

            {/* Official Problem Statement Quote */}
            <blockquote className="p-3.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] text-xs sm:text-sm text-[#2F3E3C]/90 italic font-medium leading-relaxed mb-4">
              “Patients often face long waiting times in hospitals without knowing when their turn will arrive. Traditional token systems provide a token number but offer limited information about live queue progress, causing uncertainty, overcrowding, and frustration.”
            </blockquote>

            {/* Visual Before Representation: Static Paper Token */}
            <div className="bg-[#E7E9E3]/50 border-2 border-dashed border-[#BDDBD1] rounded-xl p-3.5 mb-3 text-center">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#2F3E3C]/60 mb-1">
                Paper Slip Token
              </div>
              <div className="text-2xl font-black text-[#2F3E3C]/70 font-mono">
                TOKEN # 142
              </div>
              <div className="text-[11px] text-[#2F3E3C]/60 mt-1">
                ⚠️ No estimated wait time · No live queue count · Must stay glued to waiting room
              </div>
            </div>

            {/* Problem Bottlenecks */}
            <div className="space-y-1.5 text-xs text-[#2F3E3C]/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3E3C]/40" />
                <span>Overcrowded waiting corridors with high contagion risk.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3E3C]/40" />
                <span>Patients constantly interrupting OPD nurses to ask "When is my turn?".</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AFTER: QCare Smart Solution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#E8F0F1] rounded-2xl border-2 border-[#BDDBD1] p-5 shadow-xs flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#BDDBD1]/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#2F3E3C] flex items-center justify-center text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#C7E7EC]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                    QCare Solution
                  </div>
                  <div className="text-base font-bold text-[#2F3E3C]">Why Is QCare Useful?</div>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-[#C7E7EC] text-[#2F3E3C] px-2 py-0.5 rounded">
                Smart Visibility
              </span>
            </div>

            {/* Visual After Representation: Actual QCare Token Screen Crop */}
            <div className="mb-4">
              <PatientMobileMockup crop="token-card" />
            </div>

            {/* Section B 4 Bullet Points */}
            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-white/70 border border-[#BDDBD1]/50 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Reduces uncertainty</strong> through queue-position visibility so patients always know where they stand.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 border border-[#BDDBD1]/50 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Helps patients plan their time</strong> using estimated waiting information instead of guessing.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 border border-[#BDDBD1]/50 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Improves convenience & reduces stress</strong> for waiting patients and their families.
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 border border-[#BDDBD1]/50 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  4
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Helps hospital staff coordinate patient flow</strong> more efficiently without lobby chaos.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
        <div>QCare · Section 03: Problem & Solution</div>
        <div>Faris Mohammed</div>
      </div>
    </div>
  );
};
