import React from 'react';
import { SLIDES_DATA } from '../types/presentation';
import { X, Mic, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const currentMeta = SLIDES_DATA[currentSlide];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs no-print">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#FBF9F1] border-2 border-[#BDDBD1] rounded-2xl max-w-xl w-full overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#E7E9E3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60">
                  Presenter Cue Sheet · Faris Mohammed
                </div>
                <h3 className="text-base font-extrabold text-[#2F3E3C]">
                  Slide {currentMeta.slideNumber}: {currentMeta.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#E8F0F1] hover:bg-[#BDDBD1] text-[#2F3E3C] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Notes Body */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#2F3E3C]/70">
              Key Pitch Points & Talking Guidance
            </div>

            <div className="space-y-3">
              {currentMeta.speakerNotes.map((note, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-white border border-[#BDDBD1] flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8F0F1] text-[#2F3E3C] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#2F3E3C] leading-relaxed font-medium">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#E8F0F1] rounded-xl border border-[#BDDBD1] text-[11px] text-[#2F3E3C]/80 leading-snug">
              💡 <strong>Competition Pitch Tip:</strong> Emphasize the simplicity for outpatient clinics in Malappuram and Kerala that cannot afford complex $10k+ enterprise kiosk hardware.
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-[#E7E9E3] flex items-center justify-between text-xs text-[#2F3E3C]/60">
            <span>Press <kbd className="px-1 bg-[#E8F0F1] rounded font-mono text-[10px] text-[#2F3E3C]">N</kbd> or <kbd className="px-1 bg-[#E8F0F1] rounded font-mono text-[10px] text-[#2F3E3C]">Esc</kbd> to toggle</span>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#2F3E3C] text-white rounded-lg text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
