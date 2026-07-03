'use client';
import { motion } from 'framer-motion';

const SectionHeader = ({ label, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
