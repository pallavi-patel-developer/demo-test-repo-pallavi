import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 't1',
    quote: 'PulseFlow cut our webhook deployment cycle from 2 weeks to literally 30 minutes. The sub-millisecond execution ensures zero backpressure during flash sales.',
    author: 'Sarah Chen',
    role: 'Principal Architect',
    company: 'TechNova Global',
    avatarText: 'SC',
    rating: 5,
  },
  {
    id: 't2',
    quote: 'Being able to write workflows in full TypeScript with React and Tailwind documentation makes onboarding junior engineers effortless. Super clean architecture.',
    author: 'Marcus Rodriguez',
    role: 'Staff Infrastructure Lead',
    company: 'HyperScale Systems',
    avatarText: 'MR',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'The automated self-healing retries alone saved our team over 150 hours of on-call alarms last quarter. It just works, seamlessly and reliably.',
    author: 'Elena Rostova',
    role: 'VP Engineering',
    company: 'CloudVeloce',
    avatarText: 'ER',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative bg-slate-100/50 dark:bg-[#0d121e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
            Customer Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by engineers worldwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            See how top technology companies power their core event infrastructure with PulseFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-indigo-500/25">
                  {rev.avatarText}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {rev.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.role} • {rev.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
