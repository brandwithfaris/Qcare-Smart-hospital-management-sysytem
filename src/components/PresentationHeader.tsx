import React, { useState } from 'react';
import { QCareLogo } from './QCareLogo';
import { SLIDES_DATA } from '../types/presentation';
import { Maximize2, Minimize2, FileDown, Printer, BookOpen, Grid, Keyboard, Check } from 'lucide-react';
import { exportPresentationToPPTX } from '../utils/pptxExport';

interface PresentationHeaderProps {
  currentSlide: number;
  onSelectSlide: (slideIndex: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleNotes: () => void;
  onToggleOverview: () => void;
  onToggleShortcuts: () => void;
  isNotesOpen: boolean;
  isOverviewOpen: boolean;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlide,
  onSelectSlide,
  isFullscreen,
  onToggleFullscreen,
  onToggleNotes,
  onToggleOverview,
  onToggleShortcuts,
  isNotesOpen,
  isOverviewOpen,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const currentMeta = SLIDES_DATA[currentSlide];

  const handleExportPPTX = async () => {
    try {
      setIsExporting(true);
      await exportPresentationToPPTX();
    } catch (err) {
      console.error('PPTX export error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="no-print bg-[#FBF9F1] border-b border-[#E7E9E3] px-4 py-2.5 flex items-center justify-between gap-4 z-30 select-none">
      {/* Zone 1: Brand & Logo */}
      <div className="flex items-center gap-3">
        <QCareLogo size="sm" showTagline={false} />
        <div className="hidden md:flex items-center gap-2 text-xs text-[#2F3E3C]/60 border-l border-[#E7E9E3] pl-3">
          <span className="font-semibold text-[#2F3E3C]">Faris Mohammed</span>
          <span>·</span>
          <span>Pitch Deck</span>
        </div>
      </div>

      {/* Zone 2: Slide Selector & Title */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleOverview}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            isOverviewOpen
              ? 'bg-[#2F3E3C] text-white border-[#2F3E3C]'
              : 'bg-white hover:bg-[#E8F0F1] text-[#2F3E3C] border-[#E7E9E3]'
          }`}
          title="View All Slides Grid (G)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="font-mono">{currentMeta.slideNumber} / 08</span>
          <span className="hidden sm:inline text-[#2F3E3C]/70">· {currentMeta.title}</span>
        </button>
      </div>

      {/* Zone 3: Presentation Tools */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Speaker Notes */}
        <button
          onClick={onToggleNotes}
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 border ${
            isNotesOpen
              ? 'bg-[#2F3E3C] text-white border-[#2F3E3C]'
              : 'bg-white hover:bg-[#E8F0F1] text-[#2F3E3C] border-[#E7E9E3]'
          }`}
          title="Speaker Notes (N)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Notes</span>
        </button>

        {/* PPTX Export Button */}
        <button
          onClick={handleExportPPTX}
          disabled={isExporting}
          className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#E8F0F1] hover:bg-[#BDDBD1] text-[#2F3E3C] text-xs font-semibold border border-[#BDDBD1] transition-all flex items-center gap-1.5 disabled:opacity-60"
          title="Download PowerPoint Presentation (.pptx)"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">
            {isExporting ? 'Generating PPTX...' : 'Export PPTX'}
          </span>
        </button>

        {/* Print / PDF */}
        <button
          onClick={handlePrint}
          className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-white hover:bg-[#E8F0F1] text-[#2F3E3C] text-xs font-semibold border border-[#E7E9E3] transition-colors"
          title="Print / Save PDF (P)"
        >
          <Printer className="w-3.5 h-3.5" />
        </button>

        {/* Shortcuts */}
        <button
          onClick={onToggleShortcuts}
          className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-white hover:bg-[#E8F0F1] text-[#2F3E3C] text-xs font-semibold border border-[#E7E9E3] transition-colors"
          title="Keyboard Shortcuts (?)"
        >
          <Keyboard className="w-3.5 h-3.5" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-[#2F3E3C] hover:bg-[#2F3E3C]/90 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Exit</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Present</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
