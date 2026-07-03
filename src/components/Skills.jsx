'use client';
import { motion } from 'framer-motion';
import {
  Code2,
  PanelsTopLeft,
  Palette,
  Smartphone,
  Server,
  Database,
  Zap,
  GitBranch,
  Box,
  Cloud,
  Wrench,
  Terminal,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: Code2, level: 'Intermediate' },
      { name: 'JavaScript', icon: Code2, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: Palette, level: 'Advanced' },
      { name: 'Bootstrap', icon: PanelsTopLeft, level: 'Advanced' },
      { name: 'HTML / CSS', icon: PanelsTopLeft, level: 'Advanced' },
      { name: 'Blade', icon: Code2, level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Laravel', icon: Server, level: 'Advanced' },
      { name: 'PHP', icon: Server, level: 'Advanced' },
      { name: 'Node.js', icon: Server, level: 'Intermediate' },
      { name: 'Express', icon: Server, level: 'Intermediate' },
      { name: 'MySQL', icon: Database, level: 'Advanced' },
      { name: 'MongoDB', icon: Database, level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: GitBranch, level: 'Advanced' },
      { name: 'Postman', icon: Zap, level: 'Advanced' },
      { name: 'Composer', icon: Box, level: 'Advanced' },
      { name: 'npm', icon: Box, level: 'Intermediate' },
      { name: 'VS Code', icon: Terminal, level: 'Advanced' },
      { name: 'XAMPP', icon: Server, level: 'Advanced' },
    ],
  },
];

const levelColors = {
  Beginner: 'text-yellow-400',
  Intermediate: 'text-cyan-400',
  Advanced: 'text-green-400',
};

function SkillCard({ name, icon: Icon, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 hover:border-cyan-500/30 hover:shadow-lg transition-all"
    >
      <Icon size={20} className="text-cyan-400 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm truncate">{name}</div>
        {level && (
          <div className={`text-xs ${levelColors[level]}`}>{level}</div>
        )}
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with to bring ideas to life"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <div key={cat.category} className="space-y-4">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                <h3 className="text-xl font-semibold text-cyan-400">{cat.category}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    index={ci * 6 + si}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
