"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StackedSection({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`bg-white shadow-2xl rounded-2xl p-10 my-10 w-full max-w-4xl mx-auto ${className}`}
    >
      {children}
    </motion.div>
  );
}
