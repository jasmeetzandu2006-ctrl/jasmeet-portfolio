"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1 (0% to 20% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2 (25% to 50% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3 (55% to 80% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Section 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center p-8 z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
          Jasmeet Kaur
        </h1>
        <p className="text-xl md:text-3xl font-light text-white/80 tracking-wide drop-shadow-md">
          Aspiring Business Analyst
        </p>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center p-12 md:p-24 z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-2xl drop-shadow-lg">
          Translating data into actionable insights.
        </h2>
        <div className="w-24 h-1 bg-white/50 mt-8 rounded-full" />
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-end justify-center text-right p-12 md:p-24 z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-2xl drop-shadow-lg">
          Bridging business and intelligence.
        </h2>
        <div className="w-24 h-1 bg-white/50 mt-8 rounded-full ml-auto" />
      </motion.div>
    </div>
  );
}
