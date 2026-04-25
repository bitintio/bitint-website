import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { Icon } from '../components/ui/Icons';
import { NotFound } from './GenericPages';

import { RESOURCES_DATA } from '../data/expandedResources';

const ResourceCard = ({ item }: { item: any }) => {
  const typeMap: Record<string, {label: string, icon: string}> = {
    blog: { label: 'Blog', icon: 'clipboard' },
    fundamentals: { label: 'Fundamentals', icon: 'folder' },
    faq: { label: 'FAQ', icon: 'bell' },
    glossary: { label: 'Glossary', icon: 'book' },
  };
  const t = typeMap[item.type] || { label: 'Article', icon: 'file' };

  return (
    <Link to={item.slug ? `/resources/${item.type}/${item.slug}` : `/resources/${item.type}/${item.id}`} className="card flex flex-col" style={{padding:24, textDecoration:'none', transition:'border-color .15s ease'}}
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

export const ArticlePage = () => {
  const { slug } = useParams();
  const item = RESOURCES_DATA.find(i => i.slug === slug || i.id === slug);

  if (!item) return <NotFound />;

  return (
    <article style={{paddingBottom: 80}}>
      <Helmet>
        <title>{item.title} | Bitint Resources</title>
        <meta name="description" content={item.desc} />
      </Helmet>
      
      {/* Article Header */}
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-custom max-w-3xl">
          <Link to={`/resources/${item.type}`} style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:13, color:'var(--text-muted)', marginBottom:24}}>
            <Icon name="arrow-right" size={14} style={{transform:'rotate(180deg)'}} /> Back to {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </Link>
          <div style={{display:'flex', gap:8, marginBottom: 16}}>
            {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <h1 className="display-2 font-bold font-display leading-tight" style={{marginBottom: 20}}>{item.title}</h1>
          <p className="text-xl text-text-secondary leading-relaxed">{item.desc}</p>
        </div>
      </section>

      {/* Article Body */}
      <section className="container-custom max-w-3xl py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-[var(--violet-500)] prose-a:no-underline hover:prose-a:underline
          prose-li:text-text-secondary prose-li:my-1
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-strong:text-text-primary marker:text-text-secondary">
          {(item as any).content ? (
            <ReactMarkdown>{(item as any).content}</ReactMarkdown>
          ) : (
            <p>{item.desc}</p>
          )}
        </div>
      </section>

      {/* Separated Value-Aligned Educational CTA */}
      <section className="container-custom max-w-3xl mt-12">
        <div style={{
          padding: 40, 
          borderRadius: 16, 
          background: 'var(--surface-2)', 
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, marginBottom: 20,
            background: 'var(--surface)', color: 'var(--violet-500)',
            display: 'grid', placeItems: 'center', boxShadow: 'var(--shadow-sm)'
          }}>
            <Icon name="search" size={24} />
          </div>
          <h3 className="text-2xl font-bold font-display mb-3">Put theory into practice</h3>
          <p className="text-text-secondary max-w-lg mb-8 leading-relaxed">
            Reading about tracing typologies is one thing; seeing them unroll across a live graph is another. Explore how Bitint applies these concepts to deliver audit-ready intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/platform/investigation-graph" className="btn" style={{background: 'var(--surface)', border: '1px solid var(--border)'}}>Explore the Platform</Link>
            <Link to="/contact" className="btn btn-primary">See a Live Case Study</Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export const ResourcesRoutes = () => (
  <Routes>
    <Route index element={<ResourcesOverview />} />
    <Route path=":type" element={<ResourceCategoryWrapper />} />
    <Route path=":type/:slug" element={<ArticlePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

// Wrapper to handle dynamic category pages
const ResourceCategoryWrapper = () => {
  const { type } = useParams();
  const categoryMeta: Record<string, {title: string, desc: string}> = {
    blog: { title: "Blog", desc: "Product updates, industry insights, and research from the Bitint team." },
    fundamentals: { title: "Fundamentals", desc: "Deep-dive technical articles on blockchain analytics and compliance methodology." },
    faq: { title: "FAQ", desc: "Common questions about Bitint's platform, data, and integration." },
    glossary: { title: "Glossary", desc: "Definitions and context for blockchain intelligence terminology." }
  };
  
  const meta = categoryMeta[type || ''] || { title: "Resources", desc: "Explore Bitint resources." };
  return <ResourceCategoryPage title={meta.title} desc={meta.desc} type={type || ''} />;
};