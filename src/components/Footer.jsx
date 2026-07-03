'use client';
import { Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/subhan716?tab=repositories', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/subhan-shahid-835254276/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:subhanshahid839@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>© {year} Muhammad Subhan. All rights reserved.</p>
          </div>

          {/* Right: social */}
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all"
              >
                <s.icon size={18} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
