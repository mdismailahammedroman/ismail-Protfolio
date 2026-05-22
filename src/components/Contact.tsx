import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, AlertTriangle, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulate sending network request
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      
      // Launch 3D Confetti burst!
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.85 },
          colors: ['#8b5cf6', '#06b6d4', '#d946ef'],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.85 },
          colors: ['#8b5cf6', '#06b6d4', '#d946ef'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

      // Reset status back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.005]">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] rounded-full radial-glow-cyan blur-3xl opacity-15 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Get In <span className="gradient-text-accent">Touch</span>
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-heading">
                Let's build something epic together.
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Whether you need a scalable backend API, an interactive dashboard, or are looking to hire a full-stack developer for remote or hybrid positions, I am open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-5">
              
              {/* Email Address */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xs text-gray-400 uppercase font-bold tracking-wider">Email Address</div>
                  <a href="mailto:ismailahmmedroman@gmail.com" className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                    ismailahmmedroman@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xs text-gray-400 uppercase font-bold tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-white">Dhaka, Bangladesh | On-site · Hybrid · Remote</div>
                </div>
              </div>

            </div>

            {/* Social profiles */}
            <div className="space-y-3 pt-2">
              <div className="text-3xs uppercase tracking-wider text-gray-500 font-bold">Connect on Social Networks:</div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/mdismailahammedroman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-purple-950/20 border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-purple-400" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/mdismailahammedroman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-cyan-950/20 border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-white transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  GitHub
                </a>
              </div>
            </div>

          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass border border-white/5"
          >
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 shadow-lg shadow-green-500/5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-heading">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-400 max-w-sm">
                  Thank you for reaching out, Ismail. The confetti has settled, and I will read your message and reply as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div>
                  <label className="block text-2xs uppercase tracking-wider font-bold text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full text-sm px-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-2xs text-red-400 mt-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-2xs uppercase tracking-wider font-bold text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. johndoe@example.com"
                    className={`w-full text-sm px-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-2xs text-red-400 mt-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-2xs uppercase tracking-wider font-bold text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or open roles..."
                    className={`w-full text-sm px-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-2xs text-red-400 mt-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer"
                >
                  {status === 'loading' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
