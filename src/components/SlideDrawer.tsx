import React from 'react';
import { SLIDES_DATA } from '../types/presentation';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs no-print">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#FBF9F1] border-2 border-[#BDDBD1] rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#E7E9E3] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#2F3E3C]/60">
                Navigation Matrix
              </div>
              <h3 className="text-lg font-extrabold text-[#2F3E3C]">All 8 Slides Overview</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#E8F0F1] hover:bg-[#BDDBD1] text-[#2F3E3C] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Grid of slides */}
          <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {SLIDES_DATA.map((slide, index) => {
              const isActive = currentSlide === index;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(index);
                    onClose();
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group relative ${
                    isActive
                      ? 'bg-white border-[#2F3E3C] shadow-md ring-2 ring-[#C7E7EC]'
                      : 'bg-[#E8F0F1] hover:bg-white border-[#BDDBD1]/70 hover:border-[#2F3E3C]/50 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold bg-[#2F3E3C] text-white px-1.5 py-0.5 rounded">
                        {slide.slideNumber}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-bold text-[#2F3E3C] bg-[#C7E7EC] px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> Current
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs text-[#2F3E3C] leading-snug group-hover:text-[#2F3E3C]">
                      {slide.title}
                    </div>
                    <div className="text-[10px] text-[#2F3E3C]/75 mt-1 line-clamp-2 leading-tight">
                      {slide.subtitle}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#E7E9E3] text-[9px] font-semibold text-[#2F3E3C]/60 flex items-center justify-between">
                    <span>{slide.sectionTitle || 'Section'}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-[#E7E9E3] text-center text-xs text-[#2F3E3C]/60">
            Click any slide to jump directly or press <kbd className="px-1 bg-[#E8F0F1] rounded font-mono text-[10px] text-[#2F3E3C]">Esc</kbd> to close.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
