import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { RESOURCES_DATA } from '../data/expandedResources';
import { NotFound } from './GenericPages';
import { Helmet } from 'react-helmet-async';
import { Icon } from '../components/ui/Icons';

export const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  
  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    
    // Add some main pages
    const mainPages = [
      { type: 'platform', title: 'Platform Overview', desc: 'Everything you need to follow the money.', href: '/platform' },
      { type: 'solution', title: 'AML / KYT Compliance', desc: 'Automate Travel Rule workflows and SAR filing.', href: '/solutions/aml-kyt-compliance' },
      { type: 'solution', title: 'Sanctions Screening', desc: 'Real-time sanctions screening across 150+ chains.', href: '/solutions/sanctions-screening' },
      { type: 'platform', title: 'Investigation Graph', desc: 'Graph-first case workflows.', href: '/platform/investigation-graph' },
      { type: 'platform', title: 'Explainable Risk Scoring', desc: 'Auditable, transparent risk scoring with full attribution provenance.', href: '/platform/explainable-risk-scoring' },
      { type: 'platform', title: 'Cross-chain Tracing', desc: 'Follow funds across 150+ chains through bridges and DEXs.', href: '/platform/cross-chain-tracing' },
      { type: 'platform', title: 'Entity Intelligence', desc: 'Curated, sourced, scored entity attribution.', href: '/platform/entity-intelligence' },
      { type: 'company', title: 'About Us', desc: 'We build intelligence tools that explain themselves.', href: '/company/about' },
      { type: 'industry', title: 'Law Enforcement', desc: 'Trace illicit funds across 150+ chains and build court-ready evidence trails.', href: '/industries/law-enforcement-investigators' }
    ];
    
    const pageResults = mainPages.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    
    const resourceResults = RESOURCES_DATA.filter(r => 
      r.title.toLowerCase().includes(q) || 
      r.desc.toLowerCase().includes(q) || 
      (r.content && r.content.toLowerCase().includes(q))
    ).map(r => ({
      type: r.type,
      title: r.title,
      desc: r.desc,
      href: `/resources/${r.type}/${r.slug || r.id}` 
    }));
    
    return [...pageResults, ...resourceResults];
  }, [query]);

  if (query && results.length === 0) {
    return <NotFound isSearch={true} query={query} />;
  }

  return (
    <div className="container-custom py-24 min-h-[70vh]">
      <Helmet>
        <title>Search Results | Bitint</title>
      </Helmet>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="display-2 font-display font-bold mb-4">
          {query ? `Search results for "${query}"` : 'Search'}
        </h1>
        {query && (
          <p className="text-text-secondary mb-12">
            Found {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
        )}
        
        {!query && (
           <p className="text-text-secondary mb-12">
             Please enter a search term to find what you're looking for.
           </p>
        )}

        <div className="flex flex-col gap-6">
          {results.map((r, i) => (
            <Link key={i} to={r.href} className="card p-6 block transition-all" style={{textDecoration: 'none'}}>
              <div className="eyebrow mb-3" style={{fontSize: 10, padding: '4px 10px'}}>{r.type}</div>
              <h2 className="text-xl font-bold mb-2">{r.title}</h2>
              <p className="text-text-secondary">{r.desc}</p>
              <div className="text-[var(--violet-500)] mt-4 font-semibold text-sm flex items-center gap-2">
                View result <Icon name="arrow-right" size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
