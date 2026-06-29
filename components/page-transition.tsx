"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, useRef } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Skip animation on first mount (initial page load)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Only animate on route changes (navigation)
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [pathname, isMounted]);

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            key={`overlay-${pathname}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9998] bg-gradient-to-r from-primary via-primary-hover to-primary origin-left"
          >
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.h2
                  className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Z
                </motion.h2>
                <div className="flex gap-3 justify-center">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full bg-white"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content with Fade Animation */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
