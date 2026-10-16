import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { SLIDES_DATA } from '../types/presentation';

interface PresentationFooterProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
}

export const PresentationFooter: React.FC<PresentationFooterProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
}) => {
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <footer className="no-print bg-[#FBF9F1] border-t border-[#E7E9E3] select-none relative z-20">
      {/* Slim progress bar on top edge */}
      <div className="w-full h-1 bg-[#E7E9E3] overflow-hidden">
        <div
          className="h-full bg-[#2F3E3C] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Previous Button & Slide Indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white hover:bg-[#E8F0F1] text-[#2F3E3C] text-xs font-bold border border-[#E7E9E3] transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
            title="Previous Slide (← / Arrow Left)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="p-1.5 sm:px-4 sm:py-1.5 rounded-lg bg-[#2F3E3C] hover:bg-[#2F3E3C]/90 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
            title="Next Slide (→ / Space)"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4 text-[#C7E7EC]" />
          </button>

          <span className="text-xs font-mono font-semibold text-[#2F3E3C]/70 ml-2">
            Slide {currentSlide + 1} of {totalSlides}
          </span>
        </div>

        {/* Center: Slide Jump Pills (1-8) */}
        <div className="hidden md:flex items-center gap-1.5">
          {SLIDES_DATA.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.id}
                onClick={() => onSelectSlide(index)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center border ${
                  isActive
                    ? 'bg-[#2F3E3C] text-white border-[#2F3E3C] shadow-xs scale-105'
                    : 'bg-white hover:bg-[#BDDBD1]/40 text-[#2F3E3C]/80 border-[#E7E9E3]'
                }`}
                title={`Jump to Slide ${slide.slideNumber}: ${slide.title}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        {/* Right: Presenter Signature */}
        <div className="flex items-center gap-2 text-xs text-[#2F3E3C]/70">
          <span className="hidden sm:inline">Presenter:</span>
          <span className="font-bold text-[#2F3E3C]">Faris Mohammed</span>
        </div>
      </div>
    </footer>
  );
};
