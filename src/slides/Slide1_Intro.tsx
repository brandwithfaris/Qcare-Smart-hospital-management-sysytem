import React from 'react';
import { motion } from 'motion/react';
import { QCareLogo } from '../components/QCareLogo';
import { PatientMobileMockup } from '../components/mockups/PatientMobileMockup';
import { Sparkles, Shield, User, ArrowRight } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
}

export const Slide1_Intro: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 relative overflow-hidden bg-[#FBF9F1]">
      {/* Background Subtle Geometric Accents (Using soft brand palette) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BDDBD1]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#C7E7EC]/30 rounded-full blur-3xl pointer-events-none -mb-20" />

      {/* Top Section / Header Tag */}
      <div className="flex items-center justify-between z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
            Project Competition Pitch
          </span>
          <span className="text-xs text-[#BDDBD1]" aria-hidden="true">·</span>
          <span className="text-xs font-semibold text-[#2F3E3C]/80">Healthcare Technology</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-mono font-semibold text-[#2F3E3C]/60 tracking-wider"
        >
          01 / 08
        </motion.div>
      </div>

      {/* Main Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto z-10">
        {/* Left Column: Editorial Branding & Title (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <QCareLogo size="lg" showTagline={true} />
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2F3E3C] tracking-tight leading-[1.08] text-balance">
              Smart Hospital Queue Management System
            </h1>
            <p className="text-lg sm:text-xl text-[#2F3E3C]/80 max-w-xl font-normal leading-relaxed">
              Transforming outpatient congestion into a calm, transparent digital queue.
            </p>
          </motion.div>

          {/* Tagline Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 sm:p-5 rounded-2xl bg-[#E8F0F1] border border-[#BDDBD1] max-w-lg shadow-xs"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60 mb-1">
              Project Tagline
            </div>
            <div className="text-xl sm:text-2xl font-bold italic text-[#2F3E3C]">
              “Wait less. Know your turn.”
            </div>
          </motion.div>

          {/* Presenter & Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E7E9E3] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center font-bold text-xs">
                FM
              </div>
              <div className="text-left">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#2F3E3C]/60">Presented By</div>
                <div className="text-sm font-bold text-[#2F3E3C]">Faris Mohammed</div>
              </div>
            </div>

            {onNext && (
              <button
                onClick={onNext}
                className="px-5 py-2.5 rounded-xl bg-[#2F3E3C] hover:bg-[#2F3E3C]/90 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-xs active:scale-95"
              >
                <span>Explore Concept</span>
                <ArrowRight className="w-4 h-4 text-[#C7E7EC]" />
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Column: Realistic Mobile App Mockup (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <div className="relative w-full flex flex-col items-center">
            {/* Real Application Badge */}
            <div className="mb-2 text-center">
              <span className="text-[11px] font-semibold bg-[#E8F0F1] border border-[#BDDBD1] text-[#2F3E3C] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#2F3E3C]" />
                Actual Patient Home / Token Screen
              </span>
            </div>

            <PatientMobileMockup crop="full" />
          </div>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60 z-10">
        <div>Individual Project Presentation · Faris Mohammed</div>
        <div>Press <kbd className="px-1.5 py-0.5 bg-[#E8F0F1] rounded font-mono text-[10px] text-[#2F3E3C]">Space</kbd> or <kbd className="px-1.5 py-0.5 bg-[#E8F0F1] rounded font-mono text-[10px] text-[#2F3E3C]">➔</kbd> for next slide</div>
      </div>
    </div>
  );
};
