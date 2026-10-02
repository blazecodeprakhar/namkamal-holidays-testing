import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

const HERO_IMAGES = [
  { id: 1, src: '/hero images/IMG_1035.webp', title: 'Namkamal Holidays Showcase 1' },
  { id: 2, src: '/hero images/IMG_1037.webp', title: 'Namkamal Holidays Showcase 2' },
  { id: 3, src: '/hero images/IMG_1038.webp', title: 'Namkamal Holidays Showcase 3' },
  { id: 4, src: '/hero images/IMG_1040.webp', title: 'Namkamal Holidays Showcase 4' },
  { id: 5, src: '/hero images/IMG_1041.webp', title: 'Namkamal Holidays Showcase 5' },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.45 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.45 },
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface PcHeroSliderProps {
  onOpenEnquiry: (prefillDestination?: string) => void;
}

export const PcHeroSlider: React.FC<PcHeroSliderProps> = ({ onOpenEnquiry }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const [activeHoverDot, setActiveHoverDot] = useState<number | null>(null);

  const imageIndex = Math.abs(page % HERO_IMAGES.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === imageIndex) return;
    const dir = targetIndex > imageIndex ? 1 : -1;
    setPage([targetIndex, dir]);
  };

  // Auto-play timer for infinite looping
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);

    return () => clearInterval(timer);
  }, [page, isHovered]);

  return (
    <section 
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-white overflow-hidden bg-gray-950 py-10 px-4 sm:px-6 lg:px-8 select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Background Image (Original Hero Pattern) */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
        alt="Namkamal Holidays Travel World"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="absolute inset-0 w-full h-full object-cover opacity-35 transform-gpu pointer-events-none select-none"
      />

      {/* Ambient Gradient Overlays & Light Glows */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-black/40 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#F7941D]/25 to-[#E91E63]/25 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Header Content (Text + Buttons) */}
      <div className="relative max-w-4xl mx-auto text-center z-10 mb-8 animate-fade-in-up">
        {/* Floating Savings Badge */}
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F7941D] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 shadow-2xl animate-float">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Save More on Your Holidays
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-4">
          <span>Your Journey, </span>
          <span className="text-brand-gradient">Our Commitment</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium mb-6">
          Discover thoughtfully planned holidays, customized travel experiences, and seamless domestic & international travel assistance with Namkamal Holidays.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-orange-500/25"
          >
            Plan Your Trip Now
          </button>

          <a
            href="#featured-packages"
            className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs border border-white/30 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            Explore Packages <ArrowRight className="w-4 h-4 text-[#F7941D]" />
          </a>
        </div>
      </div>

      {/* Slides Window Wrapper (with Left/Right Arrows, Touch/Click-Hold Drag, and Dots) */}
      <div 
        className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveHoverDot(null);
        }}
      >
        {/* Main Window Box + Side Arrows */}
        <div className="relative w-full flex items-center justify-center gap-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
            className="flex-shrink-0 w-12 h-12 rounded-full bg-black/40 hover:bg-gradient-to-r hover:from-[#F7941D] hover:to-[#E91E63] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl z-30"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Interactive Slides Window Box with White Background */}
          <div 
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border-2 border-white/40 bg-white shadow-[0_0_50px_rgba(255,255,255,0.2)] touch-pan-y"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Invisible placeholder image enforcing 100% natural aspect ratio fit */}
            <img
              src={HERO_IMAGES[0].src}
              alt="Hero Aspect Ratio Sizer"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-auto opacity-0 pointer-events-none block select-none bg-white"
              aria-hidden="true"
            />

            {/* Draggable Slide Container */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold || offset.x < -40) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold || offset.x > 40) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full bg-white cursor-grab active:cursor-grabbing"
              >
                <img
                  src={HERO_IMAGES[imageIndex].src}
                  alt={HERO_IMAGES[imageIndex].title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover block select-none pointer-events-none"
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next Slide"
            className="flex-shrink-0 w-12 h-12 rounded-full bg-black/40 hover:bg-gradient-to-r hover:from-[#F7941D] hover:to-[#E91E63] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl z-30"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>

        {/* Slides Controls in Dots (Placed Below the Slides Window Box) */}
        <div className="mt-5 flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl">
          {HERO_IMAGES.map((img, idx) => {
            const isActive = idx === imageIndex;

            return (
              <div
                key={img.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => {
                  setActiveHoverDot(idx);
                  goToSlide(idx);
                }}
                onMouseLeave={() => setActiveHoverDot(null)}
              >
                {/* Thumbnail preview popup on hover */}
                {activeHoverDot === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full mb-3 w-36 h-20 rounded-xl overflow-hidden border-2 border-[#F7941D] shadow-2xl bg-white pointer-events-none z-40"
                  >
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      className="w-full h-full object-cover select-none pointer-events-none" 
                    />
                  </motion.div>
                )}

                {/* Dot indicator */}
                <button
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`relative transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-10 h-3 bg-gradient-to-r from-[#F7941D] to-[#E91E63] shadow-lg shadow-orange-500/40 border border-white/40'
                      : 'w-3 h-3 bg-white/40 hover:bg-white hover:scale-125'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
