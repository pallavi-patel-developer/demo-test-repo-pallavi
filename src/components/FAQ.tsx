import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How is this mini website built?',
    answer: 'This website is built with React 18, TypeScript, and Tailwind CSS. It leverages modular React component architecture, strict type safety, responsive layout techniques, and dynamic state interactions.',
  },
  {
    id: 'faq-2',
    question: 'How does PulseFlow compare to traditional cron workers?',
    answer: 'Unlike fragile server-bound cron daemons or heavy Redis/Celery worker clusters, PulseFlow executes functions serverlessly on global edge clusters with zero infrastructure maintenance, automatic scaling, and built-in retries.',
  },
  {
    id: 'faq-3',
    question: 'Can we run PulseFlow inside our private VPC?',
    answer: 'Yes! Enterprise tiers include private VPC peering, custom AWS/GCP data plane agents, and on-premises deployment options so your data never leaves your secure perimeter.',
  },
  {
    id: 'faq-4',
    question: 'Is a credit card required for the 14-day trial?',
    answer: 'No credit card is required. You get 14 days of complete access to all Pro features immediately upon signup, and you can switch to the free starter tier anytime.',
  },
  {
    id: 'faq-5',
    question: 'Which programming runtimes are natively supported?',
    answer: 'We provide first-class support for TypeScript/Node.js, Python, Go, Rust, and containerized Docker images. You can also trigger any standard HTTP REST API or gRPC endpoint directly.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Everything you need to know about the platform, technology stack, and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-slate-900 dark:text-white font-semibold text-base sm:text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
