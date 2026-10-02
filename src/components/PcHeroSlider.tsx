import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  { id: 1, src: "/hero images/new/Couple's sunset getaway by airplane.webp", title: "Couple's Sunset Getaway" },
  { id: 2, src: "/hero images/new/Discover Incredible India_ A Colorful Journey.webp", title: "Discover Incredible India" },
  { id: 3, src: "/hero images/new/Everything You Need, One Travel Partner.webp", title: "Everything You Need, One Travel Partner" },
  { id: 4, src: "/hero images/new/Memories That Last, Journeys That Matter.webp", title: "Memories That Last, Journeys That Matter" },
  { id: 5, src: "/hero images/new/Your World, Your Holiday.webp", title: "Your World, Your Holiday" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.35 },
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface PcHeroSliderProps {
  onOpenEnquiry?: (prefillDestination?: string) => void;
}

export const PcHeroSlider: React.FC<PcHeroSliderProps> = () => {
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

  // Instant background preloading of all 5 slide images on component mount
  useEffect(() => {
    HERO_IMAGES.forEach((img) => {
      const imageObj = new Image();
      imageObj.src = img.src;
    });
  }, []);

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
      className="relative w-full bg-white flex flex-col items-center justify-center select-none overflow-hidden py-0"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Invisible preloader element to cache all images */}
      <div className="hidden" aria-hidden="true">
        {HERO_IMAGES.map((img) => (
          <img key={img.id} src={img.src} alt="" />
        ))}
      </div>

      {/* Pure Seamless 1200 x 587 px Hero Slide with White Background */}
      <div 
        className="relative w-full aspect-[1200/587] max-w-[1200px] mx-auto overflow-hidden touch-pan-y group bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveHoverDot(null);
        }}
      >
        {/* Animated Draggable Slide Image */}
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
                paginate(1); // Swiped left -> Next slide
              } else if (swipe > swipeConfidenceThreshold || offset.x > 40) {
                paginate(-1); // Swiped right -> Previous slide
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

        {/* Navigation Dots Bar (Floating seamlessly at the bottom inside the slide) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3.5 px-6 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-2xl">
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
                    className="absolute bottom-full mb-3 w-36 aspect-[1200/587] rounded-lg overflow-hidden border-2 border-[#F7941D] shadow-2xl bg-white pointer-events-none z-40"
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
