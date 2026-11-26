import React, { useState } from 'react';
import { Zap, Shield, Cpu, Cloud, GitBranch, Terminal, ArrowRight } from 'lucide-react';

interface FeatureItem {
  id: string;
  category: 'automation' | 'security' | 'infra';
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const features: FeatureItem[] = [
  {
    id: 'f1',
    category: 'automation',
    title: 'Instant Event Automation',
    description: 'Trigger workflows directly from HTTP webhooks, database changes, or message queues with sub-millisecond execution.',
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    tag: '< 1ms execution',
  },
  {
    id: 'f2',
    category: 'infra',
    title: 'Global Edge Distribution',
    description: 'Workflows run concurrently across 34 edge points of presence, executing directly alongside your distributed end-users.',
    icon: <Cloud className="w-6 h-6 text-purple-500" />,
    tag: '34 PoPs active',
  },
  {
    id: 'f3',
    category: 'security',
    title: 'Zero-Trust Architecture',
    description: 'End-to-end payload encryption with automatic secret rotation, granular RBAC, and SOC 2 Type II compliance.',
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    tag: 'SOC 2 & HIPAA',
  },
  {
    id: 'f4',
    category: 'automation',
    title: 'Autonomous Self-Healing',
    description: 'Machine learning heuristics predict network timeouts, trigger smart exponential backoff, and recover dead letters.',
    icon: <Cpu className="w-6 h-6 text-pink-500" />,
    tag: 'Self-repairing',
  },
  {
    id: 'f5',
    category: 'infra',
    title: 'Git-Native Branching',
    description: 'Preview environments spun up automatically for every pull request with isolated database branch replication.',
    icon: <GitBranch className="w-6 h-6 text-cyan-500" />,
    tag: 'Zero-config PRs',
  },
  {
    id: 'f6',
    category: 'automation',
    title: 'CLI & Type-Safe SDKs',
    description: 'First-class TypeScript, Python, and Go developer SDKs alongside a blazing fast local CLI emulator.',
    icon: <Terminal className="w-6 h-6 text-amber-500" />,
    tag: 'Typed APIs',
  },
];

export const Features: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'automation' | 'security' | 'infra'>('all');

  const filteredFeatures = selectedCategory === 'all'
    ? features
    : features.filter((f) => f.category === selectedCategory);

  return (
    <section id="features" className="py-20 md:py-32 relative bg-slate-100/50 dark:bg-[#0d121e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
            Engineered For Speed
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything your team needs to automate with confidence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Eliminate fragile cron setups and chaotic webhook spaghetti. PulseFlow unifies modern cloud execution into a single resilient platform.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'automation', label: 'Automation & Logic' },
              { id: 'security', label: 'Enterprise Security' },
              { id: 'infra', label: 'Edge Infrastructure' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid using Tailwind CSS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>{feature.tag}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
