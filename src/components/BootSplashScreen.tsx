import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoIcon from '../assets/logo_icon.PNG';
import logoText from '../assets/logo_text.PNG';

const HERO_IMAGES = [
  "/hero images/new/Couple's sunset getaway by airplane.webp",
  "/hero images/new/Discover Incredible India_ A Colorful Journey.webp",
  "/hero images/new/Everything You Need, One Travel Partner.webp",
  "/hero images/new/Memories That Last, Journeys That Matter.webp",
  "/hero images/new/Your World, Your Holiday.webp",
];

interface BootSplashScreenProps {
  onComplete?: () => void;
}

export const BootSplashScreen: React.FC<BootSplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Silently preload all 5 new hero images in the background while splash plays
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="boot-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-gray-950 flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Ambient Background Light Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F7941D]/20 via-[#E91E63]/20 to-transparent rounded-full blur-3xl opacity-70 animate-pulse-glow pointer-events-none" />

          {/* Center Logo Box with Smooth Zoom-Up Animation */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            
            {/* Logo Icon Zoom Animation */}
            <motion.div
              initial={{ scale: 0.65, opacity: 0, y: 15 }}
              animate={{ scale: [0.65, 1.08, 1], opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-4 flex items-center justify-center"
            >
              {/* Radial glow behind logo */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-[#F7941D]/30 to-[#E91E63]/30 blur-2xl pointer-events-none" />
              
              <img
                src={logoIcon}
                alt="Namkamal Holidays Lotus Logo"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-[0_0_25px_rgba(247,148,29,0.5)]"
              />
            </motion.div>

            {/* Logo Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <img
                src={logoText}
                alt="Namkamal Holidays"
                className="h-9 sm:h-12 object-contain brightness-0 invert filter mb-2"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-brand-gradient uppercase">
                Your Journey, Our Commitment
              </span>
            </motion.div>

            {/* Smooth Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '180px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden relative"
            >
              <div
                className="h-full bg-gradient-to-r from-[#F7941D] to-[#E91E63] transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_#F7941D]"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
