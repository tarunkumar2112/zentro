"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsComplete(true);
      return;
    }

    // Simulate loading progress
    const duration = 4000; // 4 seconds
    const steps = 100;
    const interval = duration / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem("hasVisited", "true");
        }, 800);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Don't render anything until mounted (prevents SSR issues)
  if (!isMounted || isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      >
        {/* ZENTRO Text Animation - Carter One Font */}
        <div className="relative mb-16 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, rotateX: -30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
            }}
            transition={{ 
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1],
              opacity: { duration: 0.8 }
            }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent relative"
            style={{
              textShadow: "0 0 40px rgba(124, 58, 237, 0.5)",
            }}
          >
            ZENTRO
            
            {/* Glow Effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent blur-xl opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ZENTRO
            </motion.span>
          </motion.h1>
          
          {/* Underline Animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
          />
        </div>

        {/* Progress Bar Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="w-80 md:w-96 lg:w-[500px] px-4"
        >
          {/* Progress Bar */}
          <div className="relative h-3 bg-card border-2 border-border rounded-full overflow-hidden mb-6 shadow-2xl">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-hover to-primary rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "linear" }}
            >
              {/* Animated Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <motion.p
            className="text-center font-heading text-2xl md:text-3xl text-primary mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {progress}%
          </motion.p>

          {/* Loading Text */}
          <motion.p
            className="text-center blinker-regular text-base text-muted-foreground tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Loading your experience...
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
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
      </motion.div>
    </AnimatePresence>
  );
}
