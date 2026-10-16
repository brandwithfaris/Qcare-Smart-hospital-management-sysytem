import React from 'react';
import { Volume2, Bell, User, LogOut, Menu, Stethoscope, Building2, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

interface PatientMobileMockupProps {
  crop?: 'full' | 'token-card' | 'status-focus';
  compact?: boolean;
  className?: string;
}

export const PatientMobileMockup: React.FC<PatientMobileMockupProps> = ({
  crop = 'full',
  compact = false,
  className = '',
}) => {
  // If token-card crop only (e.g. for comparative panels or Slide 3)
  if (crop === 'token-card') {
    return (
      <div className={`bg-white rounded-2xl border border-[#BDDBD1] p-4 shadow-sm text-[#233833] select-none ${className}`}>
        {/* Header line */}
        <div className="flex items-center justify-between text-[11px] text-[#6B7F7A] mb-1">
          <span className="font-semibold uppercase tracking-wider text-[10px]">Actual App Screen</span>
          <span className="text-[10px] font-medium bg-[#BDDBD1]/30 text-[#233833] px-2 py-0.5 rounded-full">
            Live Synchronized
          </span>
        </div>

        {/* Token #1 */}
        <div className="text-center py-2">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B7F7A]">
            TOKEN NUMBER
          </div>
          <div className="text-4xl font-black text-[#233833] my-0.5 tracking-tight font-sans">
            #1
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#233833]">
            <Stethoscope className="w-3.5 h-3.5 text-[#233833]" />
            <span>Dr. P.A. Kabeer · Room 2</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[11px] text-[#6B7F7A] mt-0.5">
            <Building2 className="w-3 h-3 text-[#6B7F7A]" />
            <span>Almas Hospital</span>
          </div>
        </div>

        {/* Real Metrics Table */}
        <div className="space-y-1.5 pt-2 border-t border-[#E7E9E3] text-xs">
          <div className="flex justify-between items-center">
            <span className="text-[#6B7F7A]">Currently Serving</span>
            <span className="font-bold text-[#233833]">#25</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#6B7F7A]">Patients Ahead</span>
            <span className="font-bold text-[#233833]">0 patients ahead</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#6B7F7A]">Estimated Wait</span>
            <span className="font-bold text-[#1F9474]">Under 3 min (Now Serving)</span>
          </div>
        </div>

        {/* Progress Bar & Pulse */}
        <div className="mt-3">
          <div className="w-full h-1.5 bg-[#E2E6DF] rounded-full overflow-hidden">
            <div className="w-[35%] h-full bg-[#243834] rounded-full" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#526B65] mt-2 font-medium">
            <Activity className="w-3 h-3 text-[#1F9474]" />
            <span>Queue is moving normally.</span>
          </div>
        </div>
      </div>
    );
  }

  // Full Screen Mockup (Matches the exact uploaded screenshot)
  return (
    <div
      className={`relative mx-auto bg-[#182623] rounded-[38px] p-2.5 shadow-2xl border-4 border-[#BDDBD1]/40 ${
        compact ? 'max-w-[280px]' : 'max-w-[320px] sm:max-w-[350px]'
      } ${className}`}
    >
      {/* Phone Speaker & Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-[#182623] rounded-full z-20 flex items-center justify-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#BDDBD1]/30" />
        <div className="w-8 h-1 rounded-full bg-[#BDDBD1]/20" />
      </div>

      {/* Screen Frame */}
      <div className="bg-[#FBF9F1] rounded-[30px] overflow-hidden text-[#233833] relative flex flex-col font-sans select-none border border-[#E7E9E3]">
        {/* Top Real Application App Bar (Dark Teal) */}
        <div className="bg-[#243834] text-white pt-6 pb-3 px-3 flex items-center justify-between border-b border-[#1D2E2B]">
          {/* Left: White QCare Brand Capsule */}
          <div className="bg-white text-[#243834] px-2.5 py-1.5 rounded-xl flex items-center gap-2 shadow-xs">
            <div className="w-6 h-6 rounded-lg bg-[#243834] text-white flex items-center justify-center text-[11px] font-black shrink-0">
              Q
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="font-extrabold text-[11px] text-[#243834] tracking-tight">QCare</span>
              <span className="text-[6.5px] font-bold text-[#6B7F7A] uppercase tracking-wider scale-95 origin-left">
                Hospital Queue
              </span>
            </div>
          </div>

          {/* Right Action Icons in Dark Circles */}
          <div className="flex items-center gap-1.5">
            {/* Announcement / Speaker */}
            <div className="w-7 h-7 rounded-full bg-[#314843] flex items-center justify-center text-white/90">
              <Volume2 className="w-3.5 h-3.5" />
            </div>

            {/* Notification Bell with Red Badge "2" */}
            <div className="relative w-7 h-7 rounded-full bg-[#314843] flex items-center justify-center text-white/90">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#E53E3E] text-white text-[8px] font-extrabold rounded-full flex items-center justify-center border border-[#243834]">
                2
              </span>
            </div>

            {/* Profile */}
            <div className="w-7 h-7 rounded-full bg-[#314843] flex items-center justify-center text-white/90">
              <User className="w-3.5 h-3.5" />
            </div>

            {/* Exit / Sign in */}
            <div className="w-7 h-7 rounded-full bg-[#314843] flex items-center justify-center text-white/90">
              <LogOut className="w-3.5 h-3.5" />
            </div>

            {/* Hamburger Menu */}
            <div className="w-7 h-7 rounded-full bg-[#314843] flex items-center justify-center text-white/90">
              <Menu className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Main Screen Body */}
        <div className="p-3.5 flex flex-col gap-3">
          {/* Section Heading: "Your Active Queue" */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#48BB78] shrink-0" />
              <h4 className="text-sm sm:text-base font-extrabold text-[#233833] tracking-tight">
                Your Active Queue
              </h4>
            </div>
            <span className="text-[11px] text-[#6F837E] font-medium">
              Live Synchronized
            </span>
          </div>

          {/* Genuine Token Hero Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E7E9E3] text-center relative overflow-hidden">
            {/* Header label */}
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B7F7A] mb-1">
              TOKEN NUMBER
            </div>

            {/* Token #1 */}
            <div className="text-5xl font-black text-[#233833] tracking-tight my-1 font-sans">
              #1
            </div>

            {/* Doctor & Room */}
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#233833] mt-1">
              <Stethoscope className="w-3.5 h-3.5 text-[#233833]" />
              <span>Dr. P.A. Kabeer · Room 2</span>
            </div>

            {/* Hospital */}
            <div className="flex items-center justify-center gap-1 text-[11px] text-[#6B7F7A] mt-0.5">
              <Building2 className="w-3 h-3 text-[#6B7F7A]" />
              <span>Almas Hospital</span>
            </div>

            {/* Metrics Rows */}
            <div className="mt-4 pt-3 border-t border-[#E7E9E3] space-y-2 text-left text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#6B7F7A] font-medium">Currently Serving</span>
                <span className="font-extrabold text-[#233833]">#25</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7F7A] font-medium">Patients Ahead</span>
                <span className="font-extrabold text-[#233833]">0 patients ahead</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7F7A] font-medium">Estimated Wait</span>
                <span className="font-bold text-[#1F9474]">Under 3 min (Now Serving)</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="w-full h-2 bg-[#E2E6DF] rounded-full overflow-hidden">
                <div className="w-[35%] h-full bg-[#243834] rounded-full" />
              </div>
            </div>

            {/* Heartbeat Status */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#526B65] mt-2.5 font-medium text-left">
              <Activity className="w-3.5 h-3.5 text-[#1F9474] shrink-0" />
              <span>Queue is moving normally.</span>
            </div>

            {/* CTA Button: OPEN LIVE QUEUE -> */}
            <div className="mt-4">
              <div className="w-full py-2.5 px-4 bg-[#C2E7EB] hover:bg-[#B5DFE4] text-[#243834] font-bold text-xs tracking-wider rounded-xl border border-[#A8D7DC]/70 shadow-xs flex items-center justify-center gap-1.5 transition-colors">
                <span>OPEN LIVE QUEUE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-[10px] text-[#778B85] mt-1.5 font-medium">
                Real-time queue tracking
              </div>
            </div>
          </div>

          {/* Bottom Card Peek: PROJECT PURPOSE / Why QCare? */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E7E9E3] shadow-xs text-left">
            <span className="inline-block px-2 py-0.5 rounded bg-[#BDDDD2]/60 text-[#2A544A] text-[9px] font-bold tracking-wider uppercase mb-1.5">
              PROJECT PURPOSE
            </span>
            <div className="text-sm font-extrabold text-[#233833] tracking-tight">
              Why QCare?
            </div>
            <div className="text-[10px] text-[#6B7F7A] line-clamp-1 mt-0.5">
              A smart healthcare queue management system...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
