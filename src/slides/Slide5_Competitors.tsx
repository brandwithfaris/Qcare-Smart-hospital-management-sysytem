import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, ShieldCheck, Sparkles, Building, ArrowUpRight } from 'lucide-react';

export const Slide5_Competitors: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-[#FBF9F1]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E7E9E3] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-2 py-0.5 rounded">
              05
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/60">
              Market Landscape & Positioning
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F3E3C] tracking-tight">
            Competitor Analysis
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-[#2F3E3C]">Objective Industry Benchmark</div>
          <div className="text-[11px] text-[#2F3E3C]/60">Verified Public Capabilities</div>
        </div>
      </div>

      {/* Main Content Area: 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-stretch">
        {/* Left Column: Sections A & B (Competitors & Comparison Table) - 7 cols */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          {/* Section A: Competitors Identified */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 rounded-2xl bg-white border border-[#E7E9E3] shadow-xs"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60 mb-2">
              Section A · Key Existing Platforms
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">Qminder</div>
                <div className="text-[10px] text-[#2F3E3C]/75 mt-0.5">Visitor & queue management platform</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">Waitwhile</div>
                <div className="text-[10px] text-[#2F3E3C]/75 mt-0.5">Digital waitlists & virtual queuing</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FBF9F1] border border-[#E7E9E3]">
                <div className="font-bold text-xs text-[#2F3E3C]">Qmatic</div>
                <div className="text-[10px] text-[#2F3E3C]/75 mt-0.5">Enterprise customer flow & hardware</div>
              </div>
            </div>
          </motion.div>

          {/* Section B: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#BDDBD1] shadow-xs flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                  Section B · Feature Matrix
                </span>
                <span className="text-[10px] text-[#2F3E3C]/60 italic">
                  *Based on verified public features
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#E7E9E3] text-[#2F3E3C]">
                      <th className="py-2.5 pr-2 font-bold text-xs">Feature</th>
                      <th className="py-2.5 px-2 font-bold text-xs text-center">Qminder</th>
                      <th className="py-2.5 px-2 font-bold text-xs text-center">Waitwhile</th>
                      <th className="py-2.5 px-2 font-bold text-xs text-center">Qmatic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E9E3] text-[11px] sm:text-xs">
                    <tr>
                      <td className="py-2.5 pr-2 font-semibold text-[#2F3E3C]">Queue Management</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Supported</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Supported</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Supported</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-semibold text-[#2F3E3C]">Digital Waiting Lists</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Supported</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Supported</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Supported</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-semibold text-[#2F3E3C]">Customer Notifications</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">SMS / App</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">SMS / Email</td>
                      <td className="py-2.5 px-2 text-center text-[#2F3E3C] font-medium">Kiosk / SMS</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-semibold text-[#2F3E3C]">Healthcare Workflow Support</td>
                      <td className="py-2.5 px-2 text-center">
                        <span className="px-2 py-0.5 rounded bg-[#E8F0F1] text-[#2F3E3C] font-medium">Varies</span>
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        <span className="px-2 py-0.5 rounded bg-[#E8F0F1] text-[#2F3E3C] font-medium">Varies</span>
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        <span className="px-2 py-0.5 rounded bg-[#BDDBD1]/50 text-[#2F3E3C] font-medium">Enterprise Only</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#E7E9E3] text-[10px] text-[#2F3E3C]/65">
              Note: Enterprise platforms often require specialized hardware kiosks and complex enterprise contracts.
            </div>
          </motion.div>
        </div>

        {/* Right Column: Section C QCare's USP (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5 bg-[#E8F0F1] border-2 border-[#BDDBD1] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
                Section C · QCare Differentiation
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#BDDBD1] mb-4">
              <div className="text-[10px] font-bold uppercase text-[#2F3E3C]/60 mb-0.5">Core USP</div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#2F3E3C] leading-snug">
                “A simpler, patient-focused approach to hospital queue management.”
              </h3>
            </div>

            {/* Supporting Points */}
            <div className="space-y-2.5">
              <div className="p-2.5 bg-white rounded-xl border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Queue position and estimated waiting time in one place:</strong> Real-time clarity without physical kiosk crowds.
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Digital tokens for walk-in patients:</strong> Instant generation at reception with zero mandatory app download.
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Turn-approaching notifications:</strong> Alerts patient directly when their consultation is next.
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Dedicated staff dashboard:</strong> Lightweight web console for nurses and doctors to call patients in one tap.
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-[#E7E9E3] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2F3E3C] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs text-[#2F3E3C]">
                  <strong className="font-bold text-[#2F3E3C]">Emergency prioritisation:</strong> Handled responsibly by authorized medical staff decisions.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#BDDBD1] text-[11px] font-semibold text-[#2F3E3C] flex items-center justify-between">
            <span>Tailored for Indian Outpatient Clinics</span>
            <span className="text-[#2F3E3C]/60 font-mono text-[10px]">Zero Hardware Lock-in</span>
          </div>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
        <div>QCare · Section 05: Competitor Analysis & Positioning</div>
        <div>Faris Mohammed</div>
      </div>
    </div>
  );
};
