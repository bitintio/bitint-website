import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Icon } from '../components/ui/Icons';
import { NotFound } from './GenericPages';

// Mock data for resources
const RESOURCES_DATA = [
  { id: '1', type: 'blog', title: 'The Evolution of Cross-Chain Obfuscation', desc: 'How illicit actors are using bridges to break traceability, and how we track them.', date: 'Oct 12, 2023', tags: ['Investigations', 'Cross-chain'] },
  { id: '2', type: 'fundamentals', title: 'What is White-box Risk Scoring?', desc: 'Understanding the difference between opaque risk numbers and defensible intelligence.', date: 'Sep 28, 2023', tags: ['Compliance', 'Methodology'] },
  { id: '3', type: 'faq', title: 'How does Bitint handle false positives?', desc: 'Our approach to entity resolution and confidence scoring to reduce alert fatigue.', date: 'Sep 15, 2023', tags: ['Product', 'FAQ'] },
  { id: '4', type: 'glossary', title: 'Peel Chain', desc: 'A technique used to launder cryptocurrency where a large amount is broken down through a series of small transactions.', date: '', tags: ['Glossary'] },
  { id: '5', type: 'blog', title: 'Sanctions Evasion Tactics in Q3', desc: 'An analysis of recent OFAC designations and the on-chain behavior of sanctioned entities.', date: 'Aug 04, 2023', tags: ['Sanctions', 'Research'] },
  { id: '6', type: 'fundamentals', title: 'UTXO vs Account-Based Tracing', desc: 'The technical differences between tracing Bitcoin and Ethereum, and why it matters.', date: 'Jul 22, 2023', tags: ['Technical', 'Fundamentals'] },
];

const ResourceCard = ({ item }: { item: any }) => {
  const typeMap: Record<string, {label: string, icon: string}> = {
    blog: { label: 'Blog', icon: 'clipboard' },
    fundamentals: { label: 'Fundamentals', icon: 'folder' },
    faq: { label: 'FAQ', icon: 'bell' },
    glossary: { label: 'Glossary', icon: 'book' },
  };
  const t = typeMap[item.type] || { label: 'Article', icon: 'file' };

  return (
    <Link to={`/resources/${item.type}`} className="card flex flex-col" style={{padding:24, textDecoration:'none', transition:'border-color .15s ease'}}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--violet-500)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16}}>
        <div style={{display:'flex', alignItems:'center', gap:6, fontFamily:'var(--font-mono)', fontSize:11, color:'var(--violet-500)', textTransform:'uppercase', letterSpacing:'0.04em'}}>
          <Icon name={t.icon} size={14} /> {t.label}
        </div>
        {item.date && <div style={{fontSize:12, color:'var(--text-subtle)'}}>{item.date}</div>}
      </div>
      <h3 style={{fontSize:18, fontWeight:600, marginBottom:12, lineHeight:1.35}}>{item.title}</h3>
      <p className="muted" style={{fontSize:14, lineHeight:1.55, flex:1, marginBottom:20}}>{item.desc}</p>
      <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
        {item.tags.map((tag: string) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </Link>
  );
};

const ResourcesOverview = () => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Resources' },
    { id: 'blog', label: 'Blog' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'faq', label: 'FAQ' },
    { id: 'glossary', label: 'Glossary' },
  ];

  const filtered = RESOURCES_DATA.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === 'all' || item.type === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <>
      <Helmet>
        <title>Resources | Bitint</title>
        <meta name="description" content="Read our latest blockchain intelligence research, fundamentals, FAQ, and glossary." />
      </Helmet>
      
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-wide" style={{textAlign:'center'}}>
          <div className="eyebrow" style={{margin:'0 auto'}}>Resources</div>
          <h1 className="display-1" style={{marginTop:20, maxWidth:900, margin:'20px auto 0'}}>
            Intelligence and <span className="text-gradient">insights.</span>
          </h1>
          <p className="muted" style={{fontSize:18, marginTop:20, maxWidth:640, margin:'0 auto', lineHeight:1.55}}>
            Deep dives into blockchain analytics, compliance methodology, and product updates.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          {/* Search and Filter */}
          <div style={{display:'flex', flexWrap:'wrap', gap:20, justifyContent:'space-between', alignItems:'center', marginBottom:40}}>
            <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
              {filters.map(f => (
                <button key={f.id} onClick={() => setActiveFilter(f.id)}
                  className="tag"
                  style={{
                    padding:'8px 16px', fontSize:13, fontWeight:500, cursor:'pointer',
                    background: activeFilter === f.id ? 'var(--violet-600)' : 'var(--surface-2)',
                    color: activeFilter === f.id ? '#fff' : 'var(--text-muted)',
                    borderColor: activeFilter === f.id ? 'var(--violet-600)' : 'var(--border)',
                  }}>
                  {f.label}
                </button>
              ))}
            </div>
            <div style={{position:'relative', width:'100%', maxWidth:320}}>
              <div style={{position:'absolute', top:'50%', left:14, transform:'translateY(-50%)', color:'var(--text-subtle)'}}>
                <Icon name="search" size={16} />
              </div>
              <input type="text" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)}
                style={{
                  width:'100%', padding:'10px 14px 10px 38px', borderRadius:8,
                  border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)',
                  fontSize:14, outline:'none',
                }}
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20}}>
              {filtered.map(item => <ResourceCard key={item.id} item={item} />)}
            </div>
          ) : (
            <div style={{textAlign:'center', padding:'60px 0', color:'var(--text-muted)'}}>
              <Icon name="search" size={32} />
              <div style={{marginTop:16, fontSize:16}}>No resources found for "{search}"</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const ResourceCategoryPage = ({ title, desc, type }: { title: string, desc: string, type: string }) => {
  const filtered = RESOURCES_DATA.filter(i => i.type === type);
  return (
    <>
      <Helmet>
        <title>{title} | Bitint</title>
        <meta name="description" content={desc} />
      </Helmet>
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-wide">
          <Link to="/resources" style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:13, color:'var(--text-muted)', marginBottom:24}}>
            <Icon name="arrow-right" size={14} style={{transform:'rotate(180deg)'}} /> Back to Resources
          </Link>
          <div className="eyebrow">{title}</div>
          <h1 className="display-2" style={{marginTop:20}}>{title}</h1>
          <p className="muted" style={{fontSize:18, marginTop:18, maxWidth:640}}>{desc}</p>
        </div>
      </section>
      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20}}>
            {filtered.map(item => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export const ResourcesRoutes = () => (
  <Routes>
    <Route index element={<ResourcesOverview />} />
    <Route path="blog" element={<ResourceCategoryPage title="Blog" desc="Product updates, industry insights, and research from the Bitint team." type="blog" />} />
    <Route path="fundamentals" element={<ResourceCategoryPage title="Fundamentals" desc="Deep-dive technical articles on blockchain analytics and compliance methodology." type="fundamentals" />} />
    <Route path="faq" element={<ResourceCategoryPage title="FAQ" desc="Common questions about Bitint's platform, data, and integration." type="faq" />} />
    <Route path="glossary" element={<ResourceCategoryPage title="Glossary" desc="Definitions and context for blockchain intelligence terminology." type="glossary" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);