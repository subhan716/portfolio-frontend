'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description:
      'A modern productivity app with AI-powered task suggestions, real-time collaboration, and smart notifications. Built with React and Node.js.',
    image:
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjU1NzQyMzh8MA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Fitness Tracking Mobile App',
    description:
      'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with beautiful data visualizations and social features.',
    image:
      'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NTkyMzUxfDA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Business Analytics Dashboard',
    description:
      'Comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features for enterprise clients.',
    image:
      'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTY0MTM5M3ww&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['Next.js', 'PostgreSQL', 'Recharts', 'Prisma'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with product management, cart functionality, secure checkout, and admin dashboard. Integrated with Stripe for payments.',
    image:
      'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTYyMzA2OXww&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'AWS S3'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
];

function ProjectCard({ title, description, image, tags, liveUrl, sourceUrl, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
        {!imgError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <span className="text-4xl">🖼️</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 rounded-full transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="View source code"
          >
            <GithubIcon size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
          >
            <GithubIcon size={16} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects I've built, ranging from web apps to mobile solutions"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
