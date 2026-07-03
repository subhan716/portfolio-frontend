'use client';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/subhan716?tab=repositories', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/subhan-shahid-835254276/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:subhanshahid839@gmail.com', label: 'Email' },
];

const Hero = () => {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-grid-pattern"
        />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm">Hi, I&apos;m Muhammad Subhan</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Full-Stack Developer
              <span className="block text-cyan-400 mt-2">&amp; Product Builder</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              I craft exceptional digital experiences through elegant code and thoughtful design.
              Specializing in Laravel, Mern Stack and modern web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => scrollTo(e, '#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
                aria-label={s.label}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all"
              >
                <s.icon size={20} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Animated Orbital Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-80 h-80 lg:w-96 lg:h-96"
          >
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
            <div className="absolute inset-4 rounded-full border border-cyan-500/10" />
            <div className="absolute inset-8 rounded-full border border-cyan-500/5" />

            {/* Center glow */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 opacity-50" />
            </div>

            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full blur-sm" />
              <div className="absolute bottom-0 right-1/2 w-3 h-3 translate-x-1/2 translate-y-1/2 bg-purple-400 rounded-full blur-sm" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
