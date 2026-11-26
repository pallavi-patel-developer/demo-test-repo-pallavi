import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For individual developers and hobby projects experimenting with serverless automation.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      '10,000 workflow executions/month',
      '3 active pipeline orchestrations',
      'Community Discord & Forum support',
      'Standard 24-hour trace retention',
    ],
    ctaText: 'Start Free Forever',
  },
  {
    id: 'pro',
    name: 'Pro Team',
    description: 'For fast-growing startups and product teams scaling automated event pipelines.',
    monthlyPrice: 29,
    annualPrice: 23,
    popular: true,
    features: [
      '500,000 workflow executions/month',
      'Unlimited active pipelines',
      'Priority email & dedicated Slack channel',
      '30-day full execution traces & replays',
      'Custom domains & signed webhooks',
      'Sub-millisecond global edge routing',
    ],
    ctaText: 'Start 14-Day Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For scaling companies requiring custom VPC peering, custom SLAs, and dedicated compliance.',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Unlimited workflow executions',
      'Dedicated edge compute clusters',
      '99.99% Uptime SLA guarantee',
      'SOC 2 Type II & HIPAA compliance reports',
      'Dedicated Technical Account Manager',
      'Custom SSO (SAML/Okta) & RBAC',
    ],
    ctaText: 'Contact Enterprise Sales',
  },
];

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable plans that scale with your team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Start completely free. No surprise execution bills or hidden egress fees.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span
              onClick={() => setIsAnnual(false)}
              className={`text-sm font-semibold cursor-pointer ${
                !isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Monthly Billing
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual or monthly pricing"
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isAnnual ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <span
              onClick={() => setIsAnnual(true)}
              className={`text-sm font-semibold cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid using Tailwind */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  tier.popular
                    ? 'bg-white dark:bg-[#151f33] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2'
                    : 'bg-white dark:bg-[#121a2b] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-indigo-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">$</span>
                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 ml-1">
                      {tier.monthlyPrice === 0 ? 'forever' : isAnnual ? '/month, billed annually' : '/month'}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Included with plan:
                    </div>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#cta"
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
