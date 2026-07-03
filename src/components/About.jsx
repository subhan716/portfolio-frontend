'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Code2, Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';

const stats = [
  { icon: Calendar, label: 'Experience', value: '2+ Years' },
  { icon: MapPin, label: 'Location', value: 'Sialkot, Pakistan' },
  { icon: Code2, label: 'Main Stack', value: 'Laravel' },
  { icon: Briefcase, label: 'Current Role', value: 'Web Developer' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Building Digital Products"
          subtitle="Passionate about creating seamless user experiences and scalable systems"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              "I am a Full Stack Developer with a passion for building modern, scalable, and user-focused web applications. My expertise spans both Laravel and the MERN Stack, allowing me to develop robust backend systems, responsive user interfaces, and complete end-to-end solutions.",
              "I believe great software is built with clean code, thoughtful architecture, and a focus on performance, security, and maintainability. Whether developing RESTFUL APIs, designing databases, or creating interactive frontend experiences, I strive to deliver applications that are reliable, efficient, and intuitive.",
              "I am committed to continuous learning and staying current with emerging technologies and industry best practices. I enjoy solving complex problems, exploring new tools, and building impactful solutions that create value for users and businesses alike.",
            ].map((text, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-cyan-500/30">
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <stat.icon className="text-cyan-400 mb-3" size={24} />
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-white font-medium">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
