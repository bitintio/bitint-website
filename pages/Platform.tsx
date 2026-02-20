import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Layers, Database, Lock, Globe, CheckCircle, AlertTriangle, Cpu, Network } from 'lucide-react';
import { NotFound } from './GenericPages';

const PlatformOverview = () => (
  <div className="bg-background min-h-screen">
    <div className="py-24 bg-surface border-b border-border">
      <div className="container-custom text-center">
         <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">One platform. <br/> Multiple missions.</h1>
         <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
           From raw data ingestion to courtroom-ready reporting, Bitint provides the infrastructure for high-stakes blockchain analysis.
         </p>
         <Button href="/request-demo" size="lg">Book a Demo</Button>
      </div>
    </div>

    {/* Platform Map Diagram (Conceptual) */}
    <div className="py-16 bg-background overflow-hidden">
        <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left overflow-x-auto pb-4">
                {['Ingestion Nodes', 'Data Lake', 'Heuristic Engine', 'Graph DB', 'API / UI'].map((step, i) => (
                    <div key={step} className="flex items-center gap-4 flex-shrink-0">
                        <div className="p-4 bg-surface border border-border rounded-lg shadow-sm w-40">
                            <div className="text-xs text-brand font-mono mb-1">Layer 0{i+1}</div>
                            <div className="font-bold text-sm">{step}</div>
                        </div>
                        {i < 4 && <div className="h-0.5 w-8 bg-border"></div>}
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Capabilities Grid */}
    <div className="container-custom py-24">
      <div className="grid md:grid-cols-2 gap-12">
         <div className="p-8 border border-border rounded-xl bg-surface hover:border-brand/30 transition-colors">
            <Database className="text-brand mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Coverage & Data</h3>
            <p className="text-text-secondary mb-4">Indexing 30+ chains, 10M+ smart contracts, and real-time mempool data. We maintain our own nodes to ensure data integrity.</p>
            <Button href="/platform/coverage" variant="secondary" size="sm">Explore Coverage</Button>
         </div>
         
         <div className="p-8 border border-border rounded-xl bg-surface hover:border-brand/30 transition-colors">
            <Layers className="text-brand mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Attribution & Confidence</h3>
            <p className="text-text-secondary mb-4">Our 'Glass Box' approach to entity labeling. See exactly why an address was tagged, the source reliability, and the confidence score.</p>
            <Button href="/platform/attribution" variant="secondary" size="sm">View Methodologies</Button>
         </div>

         <div className="p-8 border border-border rounded-xl bg-surface hover:border-brand/30 transition-colors">
            <Lock className="text-brand mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Auditability</h3>
            <p className="text-text-secondary mb-4">Every click, query, and label is logged. Generate chain-of-custody reports that stand up to scrutiny in legal proceedings.</p>
            <Button href="/platform/auditability" variant="secondary" size="sm">See Evidence Tools</Button>
         </div>

         <div className="p-8 border border-border rounded-xl bg-surface hover:border-brand/30 transition-colors">
            <Globe className="text-brand mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Integrations</h3>
            <p className="text-text-secondary mb-4">Connect Bitint to your existing SIEM, case management, or compliance stack via our high-throughput REST API.</p>
            <Button href="/platform/integrations" variant="secondary" size="sm">API Docs</Button>
         </div>
      </div>
    </div>
  </div>
);

const Coverage = () => (
    <div className="container-custom py-24">
        <div className="mb-12">
            <div className="text-brand font-mono text-sm mb-2">PLATFORM / COVERAGE</div>
            <h1 className="text-4xl font-display font-bold mb-4">Coverage & Data</h1>
            <p className="text-xl text-text-secondary max-w-3xl">Comprehensive indexing of Layer 1s, L2s, and sidechains. We prioritize depth of data over breadth of empty metrics.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-4xl font-bold text-brand mb-2">32</div>
                <div className="text-text-secondary">Chains Indexed</div>
            </div>
            <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-4xl font-bold text-brand mb-2">99.99%</div>
                <div className="text-text-secondary">Uptime SLA</div>
            </div>
            <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-4xl font-bold text-brand mb-2">&lt;200ms</div>
                <div className="text-text-secondary">Block Propagation</div>
            </div>
        </div>

        <div className="border border-border rounded-lg overflow-hidden mb-16">
            <table className="w-full text-left text-sm">
                <thead className="bg-surface-light text-text-secondary font-medium border-b border-border">
                    <tr>
                        <th className="p-4">Chain Family</th>
                        <th className="p-4">Assets</th>
                        <th className="p-4">DeFi Parsing</th>
                        <th className="p-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border bg-surface">
                    <tr>
                        <td className="p-4 font-bold">Bitcoin & Forks</td>
                        <td className="p-4">BTC, BCH, LTC, DOGE</td>
                        <td className="p-4 text-text-secondary">-</td>
                        <td className="p-4 text-green-500 font-mono">LIVE</td>
                    </tr>
                    <tr>
                        <td className="p-4 font-bold">Ethereum (EVM)</td>
                        <td className="p-4">ETH, ERC-20, ERC-721</td>
                        <td className="p-4">DEX, Lending, Bridges</td>
                        <td className="p-4 text-green-500 font-mono">LIVE</td>
                    </tr>
                    <tr>
                        <td className="p-4 font-bold">Layer 2s</td>
                        <td className="p-4">Arbitrum, Optimism, Base</td>
                        <td className="p-4">Cross-chain msgs</td>
                        <td className="p-4 text-green-500 font-mono">LIVE</td>
                    </tr>
                     <tr>
                        <td className="p-4 font-bold">Solana</td>
                        <td className="p-4">SOL, SPL Tokens</td>
                        <td className="p-4">Programs</td>
                        <td className="p-4 text-brand font-mono">BETA</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="bg-surface-light border border-yellow-500/20 p-6 rounded-lg">
            <h3 className="font-bold flex items-center gap-2 mb-2"><AlertTriangle size={18} className="text-yellow-500"/> Limits & Uncertainty</h3>
            <p className="text-sm text-text-secondary">
                We provide raw block data and heuristic interpretations. While we strive for 100% accuracy, off-chain coordination and zero-knowledge proofs may obscure fund flow. 
                Our system flags "Uncertainty Zones" where deterministic tracing is broken.
            </p>
        </div>
    </div>
);

const Attribution = () => (
    <div className="container-custom py-24">
        <div className="mb-12">
            <div className="text-brand font-mono text-sm mb-2">PLATFORM / ATTRIBUTION</div>
            <h1 className="text-4xl font-display font-bold mb-4">Attribution & Confidence</h1>
            <p className="text-xl text-text-secondary max-w-3xl">We don't just tell you "who". We tell you "how sure we are".</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
                <h3 className="text-2xl font-bold mb-6">The Confidence Score</h3>
                <p className="text-text-secondary mb-6">Every label in Bitint comes with a probabilistic score (0-100%). This score is derived from four key vectors:</p>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <div className="w-8 h-8 rounded bg-surface-light flex items-center justify-center font-bold text-brand">1</div>
                        <div>
                            <h4 className="font-bold">Source Reliability</h4>
                            <p className="text-sm text-text-secondary">Is this confirmed by a court order (100%) or scraped from a forum (10%)?</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="w-8 h-8 rounded bg-surface-light flex items-center justify-center font-bold text-brand">2</div>
                        <div>
                            <h4 className="font-bold">Clustering Heuristic</h4>
                            <p className="text-sm text-text-secondary">Is this a deposit address sweep (High confidence) or a co-spend (Medium)?</p>
                        </div>
                    </li>
                     <li className="flex gap-4">
                        <div className="w-8 h-8 rounded bg-surface-light flex items-center justify-center font-bold text-brand">3</div>
                        <div>
                            <h4 className="font-bold">Temporal Relevance</h4>
                            <p className="text-sm text-text-secondary">Was the entity active recently, or is this a legacy tag?</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className="bg-surface border border-border rounded-xl p-8">
                <div className="mb-6 pb-6 border-b border-border">
                    <div className="text-xs font-mono text-text-secondary mb-1">ENTITY</div>
                    <div className="font-bold text-xl">Lazarus Group (Cluster 4a)</div>
                </div>
                
                <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                        <span>Confidence Score</span>
                        <span className="font-bold text-brand">92%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-brand w-[92%]"></div>
                    </div>
                </div>
                
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-background rounded border border-border">
                        <span>Direct OFAC Match</span>
                        <span className="text-green-500 font-mono">+40%</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background rounded border border-border">
                        <span>Behavioral Pattern</span>
                        <span className="text-green-500 font-mono">+35%</span>
                    </div>
                     <div className="flex justify-between p-2 bg-background rounded border border-border">
                        <span>Known Counterparty</span>
                        <span className="text-green-500 font-mono">+17%</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="p-8 bg-surface border border-border rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need the raw data?</h3>
            <p className="text-text-secondary mb-6">We provide transparency packages for court cases. We explain the exact heuristic used to cluster addresses.</p>
            <Button href="/company/contact" variant="secondary">Contact Legal Support</Button>
        </div>
    </div>
);

const Auditability = () => (
     <div className="container-custom py-24">
        <div className="mb-12">
            <div className="text-brand font-mono text-sm mb-2">PLATFORM / AUDITABILITY</div>
            <h1 className="text-4xl font-display font-bold mb-4">Operational Defensibility</h1>
            <p className="text-xl text-text-secondary max-w-3xl">Evidence that stands up in court. Audit trails that satisfy regulators.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <div className="p-6 border-l-4 border-brand bg-surface mb-6">
                    <h3 className="font-bold text-lg mb-2">Immutable Action Logs</h3>
                    <p className="text-sm text-text-secondary">Every search, filter change, and graph expansion is recorded with a timestamp and user ID. Replay investigations step-by-step.</p>
                </div>
                <div className="p-6 border-l-4 border-border bg-surface mb-6">
                     <h3 className="font-bold text-lg mb-2">Chain of Custody</h3>
                    <p className="text-sm text-text-secondary">Export evidence packages that include a cryptographic hash of the data state at the time of export.</p>
                </div>
                <div className="p-6 border-l-4 border-border bg-surface">
                     <h3 className="font-bold text-lg mb-2">Analyst Annotations</h3>
                    <p className="text-sm text-text-secondary">Attach notes and files directly to graph nodes. Collaboration is seamless but strictly permissioned.</p>
                </div>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-6 font-mono text-xs text-text-secondary">
                <div className="mb-2 text-brand"># SYSTEM LOG - CASE 2910</div>
                <div className="space-y-3">
                    <div className="flex gap-4">
                        <span className="text-text-secondary/50">14:02:11</span>
                        <span>User <span className="text-white">agent_04</span> initiated trace on 0x49...a2</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-text-secondary/50">14:02:45</span>
                        <span>User <span className="text-white">agent_04</span> expanded hops (depth: 3)</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-text-secondary/50">14:05:10</span>
                        <span>System alert: <span className="text-red-500">Sanctioned Entity Interaction</span> detected</span>
                    </div>
                     <div className="flex gap-4">
                        <span className="text-text-secondary/50">14:06:00</span>
                        <span>User <span className="text-white">agent_04</span> tagged 0x99...b1 as "Suspect Deposit"</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Integrations = () => (
     <div className="container-custom py-24">
        <div className="mb-12">
            <div className="text-brand font-mono text-sm mb-2">PLATFORM / INTEGRATIONS</div>
            <h1 className="text-4xl font-display font-bold mb-4">API & Integrations</h1>
            <p className="text-xl text-text-secondary max-w-3xl">Built-in webhooks, REST endpoints, and event streaming for high-volume compliance stacks.</p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 mb-12">
            <h3 className="font-bold text-xl mb-6">Quickstart: Check Address Risk</h3>
            <div className="bg-background p-4 rounded-lg border border-border font-mono text-sm text-text-secondary overflow-x-auto">
                <span className="text-purple-400">curl</span> -X POST https://api.bitint.com/v1/risk/score \<br/>
                &nbsp;&nbsp;-H <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \<br/>
                &nbsp;&nbsp;-d <span className="text-yellow-400">'{'{'}"address": "0x123...", "chain": "eth"{'}'}'</span>
            </div>
            <div className="mt-4 flex gap-4">
                 <Button variant="secondary" size="sm" onClick={() => alert("Copied to clipboard (simulated)")}>Copy Snippet</Button>
                 <Button href="/request-demo" size="sm">Get API Key</Button>
            </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-lg bg-surface">
                <Network className="mb-4 text-brand" size={24} />
                <h4 className="font-bold mb-2">Webhooks</h4>
                <p className="text-sm text-text-secondary">Receive real-time POST requests when a monitored wallet moves funds or hits a risk rule.</p>
            </div>
             <div className="p-6 border border-border rounded-lg bg-surface">
                <Cpu className="mb-4 text-brand" size={24} />
                <h4 className="font-bold mb-2">Batch Processing</h4>
                <p className="text-sm text-text-secondary">Screen millions of addresses daily with our high-throughput batch endpoints.</p>
            </div>
             <div className="p-6 border border-border rounded-lg bg-surface">
                <CheckCircle className="mb-4 text-brand" size={24} />
                <h4 className="font-bold mb-2">SIEM Ready</h4>
                <p className="text-sm text-text-secondary">Pre-built connectors for Splunk, Datadog, and major case management tools.</p>
            </div>
        </div>
    </div>
);

export const Platform = () => {
  return (
    <Routes>
      <Route index element={<PlatformOverview />} />
      <Route path="coverage" element={<Coverage />} />
      <Route path="attribution" element={<Attribution />} />
      <Route path="auditability" element={<Auditability />} />
      <Route path="integrations" element={<Integrations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};