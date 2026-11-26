import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Star, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const [taskCount, setTaskCount] = useState<number>(142820);
  const [latency] = useState<number>(1.2);

  // Simulated live event counter
  useEffect(() => {
    const timer = setInterval(() => {
      setTaskCount((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/70 dark:bg-indigo-950/40 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300 shadow-sm hover:border-indigo-400 transition-colors">
            <span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider">
              New
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              PulseFlow 3.0 • Built with React 18, TypeScript &amp; Tailwind
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Build, automate &amp; scale{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              cloud workflows
            </span>{' '}
            in seconds
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empower your engineering teams with unified event streams, sub-millisecond task orchestration, and intelligent self-healing pipelines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current text-indigo-500" />
              <span>Interactive Demo</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span><strong>4.9/5</strong> rating (1,200+ teams)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span><strong>99.99%</strong> Enterprise Uptime</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
              <span><strong>SOC 2 Type II</strong> Certified</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Mockup */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden border border-slate-200/80 dark:border-white/10">
            {/* Window controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="px-4 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>app.pulseflow.dev/cluster/telemetry</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="hidden sm:inline">LIVE STREAM</span>
              </div>
            </div>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Tasks Executed Today
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-baseline gap-2">
                  <span>{taskCount.toLocaleString()}</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">↑ 24%</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Average Edge Latency
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-baseline gap-2">
                  <span>{latency} ms</span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">⚡ Global</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Active Edge PoPs
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-baseline gap-2">
                  <span>34 / 34</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% UP</span>
                </div>
              </div>
            </div>

            {/* Dynamic Activity Visualizer */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3">
                <span>Real-Time Workflow Throughput (events/sec)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">Dynamic Auto-scale Active</span>
              </div>
              <div className="flex items-end gap-1.5 sm:gap-2 h-20 sm:h-24 pt-2">
                {[45, 65, 30, 85, 95, 70, 80, 100, 60, 90, 75, 92, 68, 88, 98, 84].map((height, i) => (
                  <div key={i} className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-t h-full flex items-end overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
