'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]"
        >
          {/* Cyan glow background */}
          <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Spinning icon box */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <Code2 className="w-12 h-12 text-cyan-400" />
            </motion.div>
            
            {/* Loading text with animated dots */}
            <div className="flex items-center gap-1 text-cyan-400 font-semibold tracking-[0.3em] text-sm uppercase">
              <span>Loading</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0.2 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0.4 }}
              >
                .
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
