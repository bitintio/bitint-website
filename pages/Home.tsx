import React from 'react';
import { Button } from '../components/ui/Button';
import { DashboardMock } from '../components/DashboardMock';
import { Shield, Search, Zap, ArrowRight, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/content';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-background overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text-secondary mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              New: Solana Spl-Token tracing support live
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-6 leading-tight">
              Blockchain intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">you can act on.</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Trace funds, detect high-risk entities, and produce defensible evidence packages. Built for teams that cannot afford false positives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/request-demo" size="lg">Request a Demo</Button>
              <Button href="/platform" variant="secondary" size="lg">Explore Platform</Button>
            </div>
          </div>

          <div className="animate-slide-up">
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 border-y border-border bg-surface">
        <div className="container-custom flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['SOC2 Type II', 'ISO 27001', 'GDPR Compliant', 'Chain Agnostic'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 font-mono text-sm font-bold text-text-primary">
              <Shield size={16} /> {badge}
            </div>
          ))}
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Search, title: "Investigate", desc: "Follow the money across chains, bridges, and mixers with heuristic-driven clustering." },
              { icon: Activity, title: "Monitor", desc: "Real-time alerts on wallet exposure to sanctions, scams, and darknet markets." },
              { icon: FileText, title: "Explain", desc: "Turn complex graph data into court-ready PDFs and simplified audit trails." }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-xl border border-border bg-surface hover:border-brand/50 transition-colors">
                <div className="w-12 h-12 bg-surface-light rounded-lg flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="mb-16">
             <h2 className="text-4xl font-display font-bold mb-4">From signal to evidence.</h2>
             <p className="text-text-secondary text-lg">A unified workflow for the entire intelligence lifecycle.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
             {['Ingest', 'Cluster', 'Risk Score', 'Visualize', 'Annotate', 'Report'].map((step, i) => (
               <div key={step} className="relative">
                 <div className="h-2 w-full bg-border mb-4 overflow-hidden rounded-full">
                   <div className="h-full bg-brand" style={{width: '100%'}}></div>
                 </div>
                 <span className="text-xs font-mono text-text-secondary">0{i+1}</span>
                 <h4 className="text-lg font-bold">{step}</h4>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-display font-bold">Built for your mission</h2>
            <Link to="/industries" className="text-brand hover:text-white flex items-center gap-1">View all industries <ArrowRight size={16}/></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Law Enforcement", link: "/industries/law-enforcement", color: "bg-blue-500" },
              { title: "Financial Institutions", link: "/industries/financial-institutions", color: "bg-emerald-500" },
              { title: "Crypto Exchanges", link: "/industries/centralized-exchanges", color: "bg-purple-500" },
              { title: "Tax Agencies", link: "/industries/tax-agencies", color: "bg-orange-500" },
            ].map((industry) => (
              <Link key={industry.title} to={industry.link} className="block group relative overflow-hidden rounded-xl aspect-[4/5] bg-surface border border-border hover:border-brand transition-all">
                <div className={`absolute top-0 left-0 w-full h-1 ${industry.color}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{industry.title}</h3>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary">Learn more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold mb-12">Latest Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link to={`/resources/blog/${post.slug}`} key={post.slug} className="group">
                <div className="mb-4 aspect-video bg-surface-light rounded-lg border border-border group-hover:border-brand/50 transition-colors flex items-center justify-center">
                   <FileText className="text-text-secondary group-hover:text-brand" size={40} />
                </div>
                <div className="text-xs font-mono text-brand mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{post.title}</h3>
                <p className="text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="bg-brand rounded-2xl p-12 md:p-24 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Ready to see it in action?</h2>
               <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto font-medium">Get a guided walkthrough tailored to your organization's specific risk profile.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/request-demo" className="inline-flex items-center justify-center rounded-sm bg-black px-8 py-4 text-base font-semibold text-white hover:bg-neutral-800 transition-all">
                   Book a Demo
                 </Link>
                 <Link to="/company/contact" className="inline-flex items-center justify-center rounded-sm border-2 border-black px-8 py-4 text-base font-semibold text-black hover:bg-black/10 transition-all">
                   Contact Sales
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};