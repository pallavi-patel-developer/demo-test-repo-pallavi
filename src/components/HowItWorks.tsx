import React from 'react';
import { Network, Workflow, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect Sources',
      description: 'Integrate your GitHub repositories, production databases, or webhook endpoints with a single line of config.',
      icon: <Network className="w-6 h-6 text-indigo-500" />,
    },
    {
      step: '02',
      title: 'Compose Workflows',
      description: 'Define your event triggers, conditional business rules, and transformations using typed TypeScript functions.',
      icon: <Workflow className="w-6 h-6 text-purple-500" />,
    },
    {
      step: '03',
      title: 'Deploy & Scale Globally',
      description: 'Push to your Git branch. PulseFlow automatically compiles and distributes tasks to 34 edge regions worldwide.',
      icon: <Rocket className="w-6 h-6 text-pink-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative bg-slate-100/50 dark:bg-[#0d121e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From setup to automated production in minutes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            No heavy server setups or complex Kubernetes cluster management. Just simple, predictable developer workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-300 dark:text-slate-700 font-mono">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
