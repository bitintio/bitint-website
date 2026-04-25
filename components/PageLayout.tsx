import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Icon } from '../components/ui/Icons';

/* ─── Shared layout for product/solution/industry sub-pages ─── */

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const PageHero: React.FC<HeroProps> = ({ eyebrow, title, subtitle, ctaLabel = 'Request Demo', ctaHref = '/contact' }) => {
  const navigate = useNavigate();
  return (
    <section className="hero-bg" style={{padding:'80px 0 60px'}}>
      <div className="container-wide">
        <div style={{maxWidth:820}}>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display-1" style={{marginTop:20}}>{title}</h1>
          <p className="muted" style={{fontSize:18, marginTop:18, lineHeight:1.55, maxWidth:640}}>{subtitle}</p>
          <div style={{display:'flex', gap:12, marginTop:28, flexWrap:'wrap'}}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate(ctaHref)}>
              {ctaLabel} <Icon name="arrow-right" size={15} stroke={2}/>
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => navigate('/platform')}>
              Explore Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export const ContentSection: React.FC<SectionProps> = ({ title, children, id }) => (
  <section className="section-sm" id={id}>
    <div className="container-wide">
      <h2 className="display-3" style={{marginBottom:24}}>{title}</h2>
      {children}
    </div>
  </section>
);

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export const WorkflowSteps: React.FC<{steps: WorkflowStep[]}> = ({ steps }) => (
  <div style={{display:'grid', gap:16}}>
    {steps.map((s, i) => (
      <div key={i} className="card" style={{padding:24, display:'flex', gap:20, alignItems:'flex-start'}}>
        <div style={{
          width:44, height:44, borderRadius:12, flexShrink:0,
          background:'var(--gradient-brand)', color:'#fff',
          display:'grid', placeItems:'center',
          fontFamily:'var(--font-mono)', fontWeight:700, fontSize:16,
        }}>{s.step}</div>
        <div>
          <h4 style={{fontWeight:600, fontSize:16}}>{s.title}</h4>
          <p className="muted" style={{fontSize:14, marginTop:4, lineHeight:1.55}}>{s.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

interface RelatedLink {
  label: string;
  href: string;
}

export const RelatedLinks: React.FC<{title: string; links: RelatedLink[]}> = ({ title, links }) => (
  <div style={{marginTop:16}}>
    <div style={{fontFamily:'var(--font-mono)', fontSize:11, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--text-subtle)', marginBottom:10}}>
      {title}
    </div>
    <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
      {links.map(l => (
        <Link key={l.href} to={l.href} className="tag" style={{transition:'border-color .15s ease'}}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--violet-500)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
          {l.label} →
        </Link>
      ))}
    </div>
  </div>
);

export const PageCTA: React.FC<{title?: string; desc?: string}> = ({
  title = 'Ready to see the platform?',
  desc = "Book a 30-minute demo with a Bitint analyst. Bring real addresses — we'll show you live traces, scoring, and exports.",
}) => {
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="container">
        <div style={{
          position:'relative', overflow:'hidden',
          borderRadius:24, padding:'64px 48px',
          background:'linear-gradient(135deg, #2B3990 0%, #A02BE6 45%, #2BFFFF 100%)',
          color:'#fff', textAlign:'center',
        }}>
          <div aria-hidden style={{
            position:'absolute', inset:0,
            backgroundImage:'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize:'22px 22px', opacity:0.6,
          }}/>
          <div style={{position:'relative'}}>
            <h2 className="display-2" style={{color:'#fff', maxWidth:720, margin:'0 auto'}}>{title}</h2>
            <p style={{fontSize:17, marginTop:18, color:'rgba(255,255,255,0.82)', maxWidth:560, margin:'18px auto 0'}}>{desc}</p>
            <div style={{display:'inline-flex', gap:12, marginTop:28, flexWrap:'wrap', justifyContent:'center'}}>
              <button className="btn btn-lg" style={{background:'#fff', color:'#2B3990'}} onClick={() => navigate('/contact')}>
                Request Demo <Icon name="arrow-right" size={15} stroke={2}/>
              </button>
              <button className="btn btn-lg btn-ghost" style={{borderColor:'rgba(255,255,255,0.3)', color:'#fff'}} onClick={() => navigate('/platform')}>
                Explore Platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Generic sub-page builder ─── */

interface SubPageProps {
  seo: { title: string; desc: string };
  hero: HeroProps;
  sections: { title: string; content: React.ReactNode; id?: string }[];
  relatedSolutions?: RelatedLink[];
  relatedIndustries?: RelatedLink[];
  relatedResources?: RelatedLink[];
}

export const SubPage: React.FC<SubPageProps> = ({ seo, hero, sections, relatedSolutions, relatedIndustries, relatedResources }) => (
  <>
    <Helmet>
      <title>{seo.title} | Bitint</title>
      <meta name="description" content={seo.desc} />
    </Helmet>
    <PageHero {...hero} />
    {sections.map((s, i) => (
      <ContentSection key={i} title={s.title} id={s.id}>{s.content}</ContentSection>
    ))}
    {(relatedSolutions || relatedIndustries || relatedResources) && (
      <section className="section-sm" style={{borderTop:'1px solid var(--border)'}}>
        <div className="container-wide">
          <h3 style={{fontSize:18, fontWeight:600, marginBottom:20}}>Related</h3>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:24}}>
            {relatedSolutions && <RelatedLinks title="Solutions" links={relatedSolutions} />}
            {relatedIndustries && <RelatedLinks title="Industries" links={relatedIndustries} />}
            {relatedResources && <RelatedLinks title="Resources" links={relatedResources} />}
          </div>
        </div>
      </section>
    )}
    <PageCTA />
  </>
);
