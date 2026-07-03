'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Technosofts',
    location: 'Sialkot, Pakistan',
    period: '2026 - Present',
    achievements: [
      'Developed and maintained robust web applications utilizing Laravel and the MERN stack.',
      'Designed and optimized databases using MySQL and MongoDB for scalable solutions.',
      'Collaborated with cross-functional teams to deliver high-quality software on time and within scope.',
    ],
    technologies: ['Laravel', 'React', 'Node.js', 'Express', 'MySQL', 'MongoDB'],
  },
];

function ExperienceCard({ title, company, location, period, achievements, technologies, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 group-last:bg-gradient-to-b group-last:from-white/10 group-last:to-transparent" />

      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-0 top-2 w-4 h-4 -ml-[7px] rounded-full bg-cyan-500 border-4 border-[#0a0a0f] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20" />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:shadow-lg transition-all"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
              <span className="text-cyan-400">{company}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
            <Briefcase size={14} />
            {period}
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {achievements.map((a, i) => (
            <li key={i} className="flex gap-3 text-gray-300 text-sm">
              <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Career Journey"
          title="Professional Experience"
          subtitle="A timeline of my professional growth and key contributions"
        />

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
