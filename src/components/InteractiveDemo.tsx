import React, { useState } from 'react';
import { Check, Copy, CheckCheck, Terminal, Play, RotateCw } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bash' | 'ts' | 'yaml'>('bash');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [runLogs, setRunLogs] = useState<string[]>([
    '✔ Connected to cluster pulseflow-edge-us-east',
    '✔ Loaded trigger schema (v3.0.0)',
    '✔ Pipeline standing by for incoming webhooks',
  ]);

  const snippets = {
    bash: `# 1. Install CLI & authenticate
curl -fsSL https://get.pulseflow.dev | sh
pulseflow login --token=$PULSEFLOW_API_KEY

# 2. Deploy your workflow pipeline to global edge
pulseflow deploy --env=production --region=global
✔ Pipeline active across 34 edge PoPs in 1.2s`,

    ts: `import { WorkflowClient, defineTrigger } from '@pulseflow/sdk';

const client = new WorkflowClient({ apiKey: process.env.PULSEFLOW_KEY });

export const webhookPipeline = defineTrigger({
  event: 'payment.succeeded',
  handler: async (event, ctx) => {
    ctx.log.info('Processing payment event:', event.id);
    const invoice = await client.generateInvoice(event.payload);
    await client.dispatchWebhook('https://api.crm.internal/sync', invoice);
    return { status: 'success', latency: ctx.executionTimeMs };
  },
});`,

    yaml: `name: telemetry-stream
version: 3.0.0
trigger:
  type: webhook
  path: /v1/events/ingest
  rateLimit: 50000/min
actions:
  - id: validate-schema
    runtime: nodejs20
    timeout: 500ms
  - id: fanout-kafka
    concurrency: 100
    retry:
      maxAttempts: 3
      backoff: exponential`,
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setRunLogs((prev) => [...prev, `⚡ [${new Date().toLocaleTimeString()}] Triggering test payload dispatch...`]);
    setTimeout(() => {
      setRunLogs((prev) => [
        ...prev,
        `✔ [${new Date().toLocaleTimeString()}] Payload verified & transformed (0.8ms)`,
        `✔ [${new Date().toLocaleTimeString()}] Dispatched to 3 endpoints with 0 retries`,
      ]);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section id="demo" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Description Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
              Developer First
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Code, configure, or orchestrate with typed certainty
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Write workflows in pure TypeScript, configure with declarative YAML, or trigger tasks directly from the command line.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                'Full TypeScript auto-completion & runtime schema validation',
                'Ephemeral test environments created automatically per Git branch',
                'Sub-millisecond cold start times on distributed edge micro-VMs',
                'Instant trace timeline replay for debugging any past execution',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl shadow-md shadow-indigo-500/20 disabled:opacity-50 transition-all duration-200"
              >
                {isRunning ? (
                  <RotateCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-white" />
                )}
                <span>{isRunning ? 'Executing Test Pipeline...' : 'Test Run Pipeline'}</span>
              </button>
            </div>
          </div>

          {/* Right Terminal & Code Column */}
          <div className="rounded-2xl overflow-hidden bg-[#0d121e] border border-slate-800 shadow-2xl">
            {/* Terminal Tab Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131b2e] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">pipeline.config</span>
              </div>

              {/* Language Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#0a0d14] p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('bash')}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors ${
                    activeTab === 'bash' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CLI (Bash)
                </button>
                <button
                  onClick={() => setActiveTab('ts')}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors ${
                    activeTab === 'ts' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  TypeScript
                </button>
                <button
                  onClick={() => setActiveTab('yaml')}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors ${
                    activeTab === 'yaml' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  YAML
                </button>
              </div>

              <button
                onClick={handleCopy}
                aria-label="Copy code"
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                title="Copy code"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Code Body */}
            <pre className="p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[300px]">
              <code>{snippets[activeTab]}</code>
            </pre>

            {/* Simulated Live Console Logs Output */}
            <div className="p-4 bg-[#080b12] border-t border-slate-800 font-mono text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-400 font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Live Event Stream Log</span>
              </div>
              <div className="max-h-24 overflow-y-auto space-y-1">
                {runLogs.map((log, i) => (
                  <div key={i} className="text-slate-300">
                    {log}
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
