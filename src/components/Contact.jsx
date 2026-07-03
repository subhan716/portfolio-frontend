'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import SectionHeader from './SectionHeader';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'subhanshahid839@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Sialkot, Pakistan' },
  { icon: Clock, label: 'Availability', value: 'Available for freelance projects' },
];

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/subhan716?tab=repositories', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/subhan-shahid-835254276/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:subhanshahid839@gmail.com', label: 'Email' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://subhanshahid-portfolio-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's create something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact info items */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex-shrink-0">
                    <item.icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                    <div className="text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun Fact */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-cyan-400 font-medium mb-2">Fun Fact</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me grinding in gaming!
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-gray-400 mb-4 text-sm">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all"
                    aria-label={s.label}
                  >
                    <s.icon size={20} className="text-gray-400 hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 resize-none transition-all text-sm"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'success' || status === 'loading'}
                className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {status === 'loading' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent! ✓</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center text-sm"
                >
                  Could not send message right now. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
