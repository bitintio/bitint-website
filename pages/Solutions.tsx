import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Search, Activity, ShieldAlert, Users, FileText, Settings, ArrowRight, Check } from 'lucide-react';
import { NotFound } from './GenericPages';

const solutionsData = [
  { id: 'investigations', title: 'Investigations', icon: Search, desc: 'Trace funds across chains and mixers.' },
  { id: 'monitoring', title: 'Transaction Monitoring', icon: Activity, desc: 'Real-time AML risk detection.' },
  { id: 'screening', title: 'Wallet Screening', icon: ShieldAlert, desc: 'Instant KYT checks before deposit/withdrawal.' },
  { id: 'entity-intel', title: 'Entity Intelligence', icon: Users, desc: 'Know who owns the wallet.' },
  { id: 'case-management', title: 'Case Management', icon: FileText, desc: 'Collaborate on investigations.' },
  { id: 'alerts', title: 'Configurable Alerts', icon: Settings, desc: 'Custom rules for your risk profile.' },
];

const SolutionsOverview = () => (
  <div className="bg-background min-h-screen">
    <div className="py-24 bg-surface border-b border-border">
      <div className="container-custom text-center">
         <div className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium text-brand border border-brand/20 rounded-full bg-brand/5">
             OPERATIONAL SUITE
         </div>
         <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Risk detection and investigations <br/> built into one.</h1>
         <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
           Don't switch tools. Bitint connects the dots between screening, monitoring, and deep-dive forensics.
         </p>
         <Button href="/request-demo" size="lg">Get a Demo</Button>
      </div>
    </div>

    <div className="container-custom py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map(s => (
                <Link key={s.id} to={`/solutions/${s.id}`} className="group p-8 border border-border bg-surface rounded-xl hover:border-brand/50 transition-all">
                    <s.icon className="text-brand mb-6" size={32} />
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors">{s.title}</h3>
                    <p className="text-text-secondary mb-4">{s.desc}</p>
                    <div className="flex items-center text-sm font-bold text-text-primary group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={16} className="ml-2" />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  </div>
);

const SolutionDetail = ({ type }: { type: string }) => {
    const data = solutionsData.find(s => s.id === type);
    if (!data) return <NotFound />;

    return (
        <div className="bg-background min-h-screen">
             <div className="py-24 bg-surface border-b border-border">
                <div className="container-custom">
                     <Link to="/solutions" className="text-sm text-text-secondary hover:text-brand mb-6 inline-block">&larr; Back to Solutions</Link>
                     <h1 className="text-5xl font-display font-bold mb-6">{data.title}</h1>
                     <p className="text-xl text-text-secondary max-w-2xl">{data.desc} Built for scale and precision.</p>
                </div>
            </div>
            
            <div className="container-custom py-16 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-display font-bold mb-8">Core Capabilities</h2>
                    <ul className="space-y-4">
                        {[1,2,3,4,5].map(i => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} strokeWidth={4} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Capability Feature {i}</h4>
                                    <p className="text-text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-16">
                        <h2 className="text-3xl font-display font-bold mb-8">Common Pitfalls We Prevent</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 border border-border rounded-lg bg-surface-light">
                                <h4 className="font-bold text-red-400 mb-2">False Positives</h4>
                                <p className="text-sm text-text-secondary">Avoid freezing legitimate user funds due to dust attacks or loose heuristics.</p>
                            </div>
                            <div className="p-6 border border-border rounded-lg bg-surface-light">
                                <h4 className="font-bold text-red-400 mb-2">Chain Hopping</h4>
                                <p className="text-sm text-text-secondary">Don't lose the trail when funds move to a bridge or mixer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                     <div className="bg-surface border border-border rounded-xl p-6 sticky top-24">
                         <h3 className="font-bold text-xl mb-4">Ready to deploy?</h3>
                         <p className="text-text-secondary mb-6 text-sm">Integrate {data.title} into your workflow today.</p>
                         <Button href="/request-demo" className="w-full mb-4">Request Demo</Button>
                         <Button href="/company/contact" variant="secondary" className="w-full">Contact Sales</Button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export const Solutions = () => {
  return (
    <Routes>
      <Route index element={<SolutionsOverview />} />
      <Route path="investigations" element={<SolutionDetail type="investigations" />} />
      <Route path="monitoring" element={<SolutionDetail type="monitoring" />} />
      <Route path="screening" element={<SolutionDetail type="screening" />} />
      <Route path="entity-intel" element={<SolutionDetail type="entity-intel" />} />
      <Route path="case-management" element={<SolutionDetail type="case-management" />} />
      <Route path="alerts" element={<SolutionDetail type="alerts" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};