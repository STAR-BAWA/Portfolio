// components/CardSection.jsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CardSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-4xl mx-auto -mt-20 relative z-10"
    >
      {children}
    </motion.div>
  );
}
