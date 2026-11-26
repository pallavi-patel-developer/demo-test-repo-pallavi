import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="cta" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 sm:p-14 lg:p-20 shadow-2xl shadow-indigo-500/25">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started in 2 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Ready to automate your engineering pipelines?
            </h2>

            <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
              Join over 50,000 developers building faster, reliable event streams with React 18, TypeScript, and modern edge tooling.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center gap-3 animate-fade-in max-w-lg mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">
                  Awesome! Access invite &amp; starter credentials sent to <strong>{email}</strong>
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email address"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-lg shadow-black/10 transition-all duration-200 flex-shrink-0"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="text-xs text-indigo-100/80 pt-2">
              ✓ 14-day free trial &bull; No credit card required &bull; Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
