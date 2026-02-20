import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Landmark, Scale, Coins, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { NotFound } from './GenericPages';

const industryData = [
    { id: 'law-enforcement', title: 'Law Enforcement', icon: Scale, subtitle: 'For agencies tracing illicit proceeds.', color: 'text-blue-500', bg: 'bg-blue-500' },
    { id: 'financial-institutions', title: 'Financial Institutions', icon: Landmark, subtitle: 'For banks managing crypto exposure.', color: 'text-emerald-500', bg: 'bg-emerald-500' },
    { id: 'centralized-exchanges', title: 'Centralized Exchanges', icon: Coins, subtitle: 'For VASPs ensuring compliance.', color: 'text-purple-500', bg: 'bg-purple-500' },
    { id: 'tax-agencies', title: 'Tax Agencies', icon: FileSpreadsheet, subtitle: 'For auditors closing the tax gap.', color: 'text-orange-500', bg: 'bg-orange-500' },
];

const IndustriesOverview = () => (
   <div className="bg-background min-h-screen">
     <div className="py-24 bg-surface border-b border-border">
      <div className="container-custom text-center">
         <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Built for teams facing <br/> real-world consequences.</h1>
         <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
           Technology tailored to the specific regulatory and operational mandates of your sector.
         </p>
      </div>
    </div>
    
    <div className="container-custom py-24">
        <div className="grid md:grid-cols-2 gap-8">
            {industryData.map(ind => (
                <Link key={ind.id} to={`/industries/${ind.id}`} className="group relative overflow-hidden bg-surface border border-border rounded-xl p-8 hover:border-brand transition-all">
                     <div className={`absolute top-0 left-0 w-2 h-full ${ind.bg}`}></div>
                     <div className="pl-4">
                        <ind.icon className={`mb-4 ${ind.color}`} size={32} />
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors">{ind.title}</h3>
                        <p className="text-text-secondary mb-6">{ind.subtitle}</p>
                        <span className="text-sm font-bold flex items-center">View Industry <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/></span>
                     </div>
                </Link>
            ))}
        </div>
    </div>
   </div>
);

const IndustryDetail = ({ type }: { type: string }) => {
    const data = industryData.find(i => i.id === type);
    if (!data) return <NotFound />;

    return (
        <div className="bg-background min-h-screen">
             <div className="py-24 bg-surface border-b border-border relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-1/2 h-full ${data.bg} opacity-5 blur-[100px]`}></div>
                <div className="container-custom relative z-10">
                     <Link to="/industries" className="text-sm text-text-secondary hover:text-brand mb-6 inline-block">&larr; Back to Industries</Link>
                     <h1 className="text-5xl font-display font-bold mb-6">{data.title}</h1>
                     <p className="text-xl text-text-secondary max-w-2xl">{data.subtitle} Operational readiness for high-stakes environments.</p>
                </div>
            </div>
            
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-24">
                    <div className="md:col-span-2 space-y-12">
                         <section>
                            <h2 className="text-3xl font-display font-bold mb-6">Primary Outcomes</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['Outcome One', 'Outcome Two', 'Outcome Three', 'Outcome Four'].map((o, i) => (
                                    <div key={i} className="p-4 bg-surface border border-border rounded">
                                        <h4 className="font-bold mb-1">{o}</h4>
                                        <p className="text-sm text-text-secondary">Specific benefit for {data.title}.</p>
                                    </div>
                                ))}
                            </div>
                         </section>

                         <section>
                            <h2 className="text-3xl font-display font-bold mb-6">Key Workflows</h2>
                             <div className="space-y-6">
                                <div className="flex gap-4 p-6 bg-surface border border-border rounded-xl">
                                    <div className="font-mono text-brand font-bold text-xl">01</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Signal Ingestion</h4>
                                        <p className="text-text-secondary">How we handle data input for {data.title}.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-6 bg-surface border border-border rounded-xl">
                                    <div className="font-mono text-brand font-bold text-xl">02</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Analysis & Enrichment</h4>
                                        <p className="text-text-secondary">Applying specific heuristics for {data.title}.</p>
                                    </div>
                                </div>
                                 <div className="flex gap-4 p-6 bg-surface border border-border rounded-xl">
                                    <div className="font-mono text-brand font-bold text-xl">03</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Reporting</h4>
                                        <p className="text-text-secondary">Outputting evidence ready for {data.title} stakeholders.</p>
                                    </div>
                                </div>
                             </div>
                         </section>
                    </div>
                    
                    <div>
                        <div className="bg-surface border border-border rounded-xl p-6">
                             <h3 className="font-bold text-xl mb-4">Case Study</h3>
                             <div className="aspect-video bg-surface-light mb-4 rounded flex items-center justify-center text-text-secondary">
                                 [Chart Visual]
                             </div>
                             <h4 className="font-bold mb-2">Recovery of $45M</h4>
                             <p className="text-sm text-text-secondary mb-4">How a tier-1 organization used Bitint to freeze assets.</p>
                             <Button href="/resources/case-studies/exchange-hack-recovery" variant="outline" className="w-full">Read Case Study</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Industries = () => {
  return (
    <Routes>
      <Route index element={<IndustriesOverview />} />
      <Route path="law-enforcement" element={<IndustryDetail type="law-enforcement" />} />
      <Route path="financial-institutions" element={<IndustryDetail type="financial-institutions" />} />
      <Route path="centralized-exchanges" element={<IndustryDetail type="centralized-exchanges" />} />
      <Route path="tax-agencies" element={<IndustryDetail type="tax-agencies" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};