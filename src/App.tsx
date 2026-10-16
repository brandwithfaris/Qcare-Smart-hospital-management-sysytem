/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_DATA } from './types/presentation';
import { PresentationHeader } from './components/PresentationHeader';
import { PresentationFooter } from './components/PresentationFooter';
import { SlideDrawer } from './components/SlideDrawer';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

// Slides
import { Slide1_Intro } from './slides/Slide1_Intro';
import { Slide2_Concept } from './slides/Slide2_Concept';
import { Slide3_ProblemSolution } from './slides/Slide3_ProblemSolution';
import { Slide4_Features } from './slides/Slide4_Features';
import { Slide5_Competitors } from './slides/Slide5_Competitors';
import { Slide6_Market } from './slides/Slide6_Market';
import { Slide7_Revenue } from './slides/Slide7_Revenue';
import { Slide8_FuturePlan } from './slides/Slide8_FuturePlan';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'forward' | 'backward'>('forward');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((newIndex: number) => {
    if (newIndex >= 0 && newIndex < SLIDES_DATA.length && newIndex !== currentSlide) {
      setSlideDirection(newIndex > currentSlide ? 'forward' : 'backward');
      setCurrentSlide(newIndex);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setSlideDirection('backward');
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES_DATA.length - 1) {
      setSlideDirection('forward');
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  // Fullscreen Handler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Failed to enter fullscreen:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES_DATA.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setIsShortcutsOpen((prev) => !prev);
          break;
        case 'Escape':
          setIsNotesOpen(false);
          setIsOverviewOpen(false);
          setIsShortcutsOpen(false);
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8': {
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= 8) {
            e.preventDefault();
            goToSlide(num - 1);
          }
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleFullscreen]);

  // Touch swipe support for tablets and mobile
  const touchStartXRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  // Render active slide
  const renderSlide = (slideIndex: number) => {
    switch (slideIndex) {
      case 0:
        return <Slide1_Intro onNext={nextSlide} />;
      case 1:
        return <Slide2_Concept />;
      case 2:
        return <Slide3_ProblemSolution />;
      case 3:
        return <Slide4_Features />;
      case 4:
        return <Slide5_Competitors />;
      case 5:
        return <Slide6_Market />;
      case 6:
        return <Slide7_Revenue />;
      case 7:
        return <Slide8_FuturePlan />;
      default:
        return <Slide1_Intro onNext={nextSlide} />;
    }
  };

  // Motion variants for slide transition
  const slideVariants = {
    initial: (direction: 'forward' | 'backward') => ({
      opacity: 0,
      x: direction === 'forward' ? 24 : -24,
      scale: 0.995,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
    exit: (direction: 'forward' | 'backward') => ({
      opacity: 0,
      x: direction === 'forward' ? -24 : 24,
      scale: 0.995,
      transition: {
        duration: 0.25,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`min-h-screen flex flex-col bg-[#FBF9F1] text-[#2F3E3C] ${
        isFullscreen ? 'h-screen w-screen overflow-hidden' : ''
      }`}
    >
      {/* Top Header Controls (Hidden in print) */}
      <PresentationHeader
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        onToggleShortcuts={() => setIsShortcutsOpen((prev) => !prev)}
        isNotesOpen={isNotesOpen}
        isOverviewOpen={isOverviewOpen}
      />

      {/* Main Presentation Viewport: 16:9 Responsive Canvas */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
        <div
          className={`w-full max-w-7xl mx-auto rounded-2xl md:rounded-3xl border border-[#BDDBD1]/80 bg-[#FBF9F1] shadow-xl overflow-hidden relative flex flex-col ${
            isFullscreen
              ? 'h-[calc(100vh-100px)] aspect-auto'
              : 'aspect-auto sm:aspect-16/10 lg:aspect-16/9 min-h-[580px] sm:min-h-[620px] lg:min-h-[660px]'
          }`}
        >
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={currentSlide}
              custom={slideDirection}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex-1"
            >
              {renderSlide(currentSlide)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Footer Controls (Hidden in print) */}
      <PresentationFooter
        currentSlide={currentSlide}
        totalSlides={SLIDES_DATA.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelectSlide={goToSlide}
      />

      {/* Overview Modal */}
      <SlideDrawer
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      {/* Speaker Notes Modal */}
      <SpeakerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
      />

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Hidden Print Container: All 8 slides rendered sequentially for Window.print() */}
      <div className="hidden print:block">
        <div className="print-slide">{renderSlide(0)}</div>
        <div className="print-slide">{renderSlide(1)}</div>
        <div className="print-slide">{renderSlide(2)}</div>
        <div className="print-slide">{renderSlide(3)}</div>
        <div className="print-slide">{renderSlide(4)}</div>
        <div className="print-slide">{renderSlide(5)}</div>
        <div className="print-slide">{renderSlide(6)}</div>
        <div className="print-slide">{renderSlide(7)}</div>
      </div>
    </div>
  );
}
