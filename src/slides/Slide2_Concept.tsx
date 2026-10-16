import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, LayoutDashboard, Ticket, Bell, Clock, Building2, UserCheck, Stethoscope } from 'lucide-react';

export const Slide2_Concept: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'patients' | 'staff' | 'admin'>('all');

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              02
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              Architecture & Overview
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Project Concept
          </h2>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs font-bold text-[#2F3E3C]">QCare Ecosystem</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Connected Healthcare Workflow</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left Column: Sections A & B (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Section A: What Is the Project? */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl bg-[#E8F0F1] border border-[#BDDBD1] shadow-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                Section A · Core Definition
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#2F3E3C] mb-2">What Is the Project?</h3>
            <p className="text-sm sm:text-base text-[#2F3E3C]/90 font-medium leading-relaxed">
              “QCare is a smart hospital queue management system designed to make hospital visits easier by reducing uncertainty and unnecessary waiting.”
            </p>
          </motion.div>

          {/* Section B: What Does the App Do? */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-5 rounded-2xl bg-white border border-[#E7E9E3] shadow-xs flex-1"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                  Section B · Functional Scope
                </span>
                <h3 className="text-base font-bold text-[#2F3E3C]">What Does the App Do?</h3>
              </div>
              <span className="text-[10px] bg-[#C7E7EC] text-[#2F3E3C] px-2 py-0.5 rounded font-semibold">
                4 Core Actions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#2F3E3C] text-white shrink-0 mt-0.5">
                  <Ticket className="w-4 h-4 text-[#C7E7EC]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C]">Digital Tokens</div>
                  <div className="text-[11px] text-[#2F3E3C]/75 leading-tight mt-0.5">
                    Generates digital tokens for patients quickly at reception or mobile.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#2F3E3C] text-white shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#C7E7EC]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C]">Live Tracking & ETA</div>
                  <div className="text-[11px] text-[#2F3E3C]/75 leading-tight mt-0.5">
                    Displays live queue position and estimated waiting time.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#2F3E3C] text-white shrink-0 mt-0.5">
                  <Bell className="w-4 h-4 text-[#C7E7EC]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C]">Smart Notifications</div>
                  <div className="text-[11px] text-[#2F3E3C]/75 leading-tight mt-0.5">
                    Notifies patients when their turn is approaching so they can get ready.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#2F3E3C] text-white shrink-0 mt-0.5">
                  <LayoutDashboard className="w-4 h-4 text-[#C7E7EC]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C]">Staff Console</div>
                  <div className="text-[11px] text-[#2F3E3C]/75 leading-tight mt-0.5">
                    Enables hospital staff to manage queues through a dedicated dashboard.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Section C Target Users & Previews (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Section C: Target Users */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-5 rounded-2xl bg-white border border-[#BDDBD1] shadow-xs flex-1 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                  Section C · Stakeholders
                </span>
                <h3 className="text-base font-bold text-[#2F3E3C]">Who Are the Target Users?</h3>
              </div>
              <Users className="w-4 h-4 text-[#2F3E3C]" />
            </div>

            <div className="space-y-2.5 flex-1 flex flex-col justify-between">
              {/* Target 1: Patients */}
              <div className="p-3 rounded-xl bg-[#E8F0F1] border border-[#BDDBD1]/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center shrink-0 font-bold text-xs">
                  01
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C] flex items-center gap-1.5">
                    <span>Patients</span>
                    <span className="text-[10px] font-normal text-[#2F3E3C]/60">· Walk-ins & Outpatients</span>
                  </div>
                  <p className="text-xs text-[#2F3E3C]/80 mt-0.5 leading-relaxed font-medium">
                    Track queue status, position count, and estimated waiting time from anywhere in the hospital.
                  </p>
                </div>
              </div>

              {/* Target 2: Hospital Staff */}
              <div className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center shrink-0 font-bold text-xs">
                  02
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C] flex items-center gap-1.5">
                    <span>Hospital Staff</span>
                    <span className="text-[10px] font-normal text-[#2F3E3C]/60">· Nurses & OPD Reception</span>
                  </div>
                  <p className="text-xs text-[#2F3E3C]/80 mt-0.5 leading-relaxed font-medium">
                    Manage tokens, call next patient in one click, and monitor live room queues with zero confusion.
                  </p>
                </div>
              </div>

              {/* Target 3: Hospital Administrators */}
              <div className="p-3 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center shrink-0 font-bold text-xs">
                  03
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2F3E3C] flex items-center gap-1.5">
                    <span>Hospital Administrators</span>
                    <span className="text-[10px] font-normal text-[#2F3E3C]/60">· Clinic Managers</span>
                  </div>
                  <p className="text-xs text-[#2F3E3C]/80 mt-0.5 leading-relaxed font-medium">
                    Improve queue coordination, reduce peak-hour congestion, and optimize patient flow across departments.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="mt-3 pt-3 border-t border-[#E7E9E3] text-[11px] text-[#2F3E3C]/70 flex items-center justify-between">
              <span>Zero hardware overhead required</span>
              <span className="font-semibold text-[#2F3E3C]">Web-first architecture</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
        <div>QCare · Section 02: Concept Overview</div>
        <div>Faris Mohammed</div>
      </div>
    </div>
  );
};
