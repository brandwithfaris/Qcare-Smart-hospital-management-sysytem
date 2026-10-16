import React from 'react';
import { X, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ or Space', action: 'Advance to next slide' },
    { key: '←', action: 'Return to previous slide' },
    { key: 'Home', action: 'Jump to first slide (Slide 01)' },
    { key: 'End', action: 'Jump to last slide (Slide 08)' },
    { key: '1 – 8', action: 'Jump directly to slide number' },
    { key: 'F', action: 'Toggle Fullscreen presentation mode' },
    { key: 'N', action: 'Open / Close speaker notes' },
    { key: 'G', action: 'Open / Close slide overview grid' },
    { key: 'P', action: 'Print / Export to PDF' },
    { key: 'Esc', action: 'Close active overlays or exit modal' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs no-print">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#FBF9F1] border-2 border-[#BDDBD1] rounded-2xl max-w-md w-full overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-4 bg-white border-b border-[#E7E9E3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2F3E3C] text-[#C7E7EC] flex items-center justify-center">
                <Keyboard className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-extrabold text-[#2F3E3C]">Keyboard Shortcuts</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#E8F0F1] hover:bg-[#BDDBD1] text-[#2F3E3C] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="p-4 sm:p-5 space-y-2 max-h-[60vh] overflow-y-auto">
            {shortcuts.map((sc) => (
              <div
                key={sc.key}
                className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E7E9E3] text-xs"
              >
                <span className="text-[#2F3E3C]/80 font-medium">{sc.action}</span>
                <kbd className="px-2 py-1 rounded bg-[#E8F0F1] border border-[#BDDBD1] text-[#2F3E3C] font-mono text-[11px] font-bold">
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-[#E7E9E3] text-center text-xs text-[#2F3E3C]/60">
            Click anywhere outside or press <kbd className="px-1 bg-[#E8F0F1] rounded font-mono text-[10px] text-[#2F3E3C]">Esc</kbd> to dismiss.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
