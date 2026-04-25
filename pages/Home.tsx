import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';
import {
  AppChrome,
  InvestigationGraph,
  DashboardMini,
  MonitoringMini,
  WalletScreeningMini,
  CaseManagerMini,
} from '../components/ProductMockups';

export const CTASection: React.FC<{ onNav: (path: string) => void }> = ({ onNav }) => (
  <section className="section">
    <div className="container">
      <div style={{
        position:'relative', overflow:'hidden',
        borderRadius:24, padding:'64px 48px',
        background:'linear-gradient(135deg, #2B3990 0%, #A02BE6 45%, #2BFFFF 100%)',
        color:'#fff',
        textAlign:'center',
      }}>
        <div aria-hidden style={{
          position:'absolute', inset:0,
          backgroundImage:'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize:'22px 22px', opacity:0.6,
        }}/>
        <div style={{position:'relative'}}>
          <h2 className="display-2" style={{color:'#fff', maxWidth:720, margin:'0 auto'}}>
            Ready to see the graph for yourself?
          </h2>
          <p style={{fontSize:17, marginTop:18, color:'rgba(255,255,255,0.82)', maxWidth:560, margin:'18px auto 0'}}>
            Guided demo with a Bitint analyst using your own addresses, no commitment. 30 minutes.
          </p>
          <div style={{display:'inline-flex', gap:12, marginTop:28, flexWrap:'wrap', justifyContent:'center'}}>
            <button className="btn btn-lg" style={{background:'#fff', color:'var(--violet-ink)'}} onClick={()=>onNav('/contact')}>
              Book a demo <Icon name="arrow-right" size={15} stroke={2}/>
            </button>
            <button className="btn btn-lg btn-ghost" style={{borderColor:'rgba(255,255,255,0.3)', color:'#fff'}} onClick={()=>onNav('/platform')}>
              Explore the platform
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DarkGraphSection: React.FC<{ onNav: (path: string) => void }> = ({ onNav }) => (
  <section style={{
    background:'var(--violet-ink)',
    color:'#f5f4ff',
    padding:'112px 0',
    position:'relative', overflow:'hidden',
  }}>
    <div aria-hidden style={{
      position:'absolute', inset:0,
      backgroundImage:'radial-gradient(1000px 500px at 20% 10%, rgba(160,43,230,0.35), transparent 60%), radial-gradient(800px 500px at 90% 80%, rgba(43,255,255,0.25), transparent 60%)',
    }}/>
    <div aria-hidden style={{
      position:'absolute', inset:0,
      backgroundImage:'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
      backgroundSize:'24px 24px',
      maskImage:'radial-gradient(circle at center, #000 0%, transparent 70%)',
    }}/>
    <div className="container-wide" style={{position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:60, alignItems:'center'}}>
        <div>
          <div className="eyebrow" style={{background:'rgba(255,255,255,0.08)', color:'#c5bcff', borderColor:'rgba(197,188,255,0.25)'}}>
            Investigation
          </div>
          <h2 className="display-2" style={{marginTop:16, color:'#fff'}}>
            From <span style={{color:'#9dd5ff'}}>lead</span><br/>
            to <span className="text-gradient">court-ready report.</span>
          </h2>
          <p style={{marginTop:18, fontSize:17, color:'rgba(245,244,255,0.7)', maxWidth:520, lineHeight:1.55}}>
            Start from an address, a hash, or a tip. Bitint pulls in every hop, every counterparty, every relevant attribution — and keeps a signed trail of what you saw, when, and why.
          </p>
          <div style={{display:'grid', gap:14, marginTop:28}}>
            {[
              ['Graph-first', 'Clustering, heuristic grouping, path-finding — visual by default.'],
              ['Evidence ledger', 'Pin observations. Attach screenshots, notes, and derivations.'],
              ['One-click report', 'Export PDF, SAR packets, or machine-readable JSON.'],
            ].map(([t,d]) => (
              <div key={t} style={{display:'flex', gap:14}}>
                <div style={{
                  width:28, height:28, borderRadius:8,
                  background:'rgba(160,43,230,0.25)', color:'#c5bcff',
                  display:'grid', placeItems:'center', flexShrink:0,
                }}><Icon name="check" size={15} stroke={2.4}/></div>
                <div>
                  <div style={{fontWeight:600, fontSize:15}}>{t}</div>
                  <div style={{color:'rgba(245,244,255,0.6)', fontSize:13.5, marginTop:2}}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-lg" style={{marginTop:30}} onClick={()=>onNav('/solutions/investigations')}>
            Tour investigations <Icon name="arrow-right" size={15} stroke={2}/>
          </button>
        </div>
        <div style={{
          borderRadius:20,
          border:'1px solid rgba(255,255,255,0.08)',
          overflow:'hidden',
          boxShadow:'0 40px 120px -20px rgba(0,0,0,0.6)',
          background:'#07061a',
        }}>
          <div style={{height:520}}>
            <InvestigationGraph/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TabbedProductPreview: React.FC<{ onNav: (path: string) => void }> = ({ onNav }) => {
  const tabs = [
    { key:'graph',   label:'Investigation', icon:'graph',    render:()=><InvestigationGraph animated={true} /> },
    { key:'monitor', label:'Monitoring',    icon:'activity', render:()=><MonitoringMini/> },
    { key:'screen',  label:'Screening',     icon:'shield',   render:()=><WalletScreeningMini/> },
    { key:'dash',    label:'Dashboard',     icon:'eye',      render:()=><DashboardMini/> },
    { key:'cases',   label:'Cases',         icon:'folder',   render:()=><CaseManagerMini/> },
  ];
  const [t, setT] = useState('monitor');
  return (
    <section className="section">
      <div className="container-wide">
        <div style={{textAlign:'center', maxWidth:680, margin:'0 auto 40px'}}>
          <div className="eyebrow" style={{margin:'0 auto'}}>Product tour</div>
          <h2 className="display-2" style={{marginTop:16}}>Explore the product, <span className="text-gradient">module by module.</span></h2>
        </div>
        <div style={{display:'flex', justifyContent:'center', gap:6, marginBottom:24, flexWrap:'wrap'}}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={()=>setT(tab.key)}
              className="btn"
              style={{
                padding:'10px 16px', fontSize:13.5,
                background: t===tab.key ? 'var(--gradient-brand)' : 'var(--surface)',
                color: t===tab.key ? '#fff' : 'var(--text-muted)',
                border:'1px solid ' + (t===tab.key ? 'transparent' : 'var(--border)'),
                boxShadow: t===tab.key ? '0 6px 24px -8px rgba(160,43,230,0.55)' : 'none',
              }}>
              <Icon name={tab.icon} size={15} stroke={2}/> {tab.label}
            </button>
          ))}
        </div>
        <AppChrome title={`app.bitint.io/${t}`} height={600}>
          {tabs.find(x=>x.key===t)?.render()}
        </AppChrome>
      </div>
    </section>
  );
}

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const onNav = (path: string) => navigate(path);

  return (
    <>
      <section className="hero-bg" style={{paddingTop:72, paddingBottom:60, position:'relative', overflow:'hidden'}}>
        <div aria-hidden style={{
          position:'absolute', top:-120, right:-120, width:520, height:520, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(160,43,230,0.25), transparent 60%)',
          filter:'blur(30px)', pointerEvents:'none',
        }}/>
        <div aria-hidden style={{
          position:'absolute', bottom:-140, left:-140, width:480, height:480, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(62,166,255,0.2), transparent 60%)',
          filter:'blur(30px)', pointerEvents:'none',
        }}/>

        <div className="container-wide" style={{position:'relative'}}>
          <div style={{display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:60, alignItems:'center'}} className="max-lg:grid-cols-1">
            <div className="fadeup">
              <div className="eyebrow"><span style={{width:6, height:6, borderRadius:'50%', background:'var(--violet-500)'}}/> v3.2 · Attribution 3.0 shipped</div>
              <h1 className="display-1" style={{marginTop:20}}>
                Blockchain intelligence,<br/>
                <span className="text-gradient">built for investigators.</span>
              </h1>
              <p className="muted" style={{fontSize:19, lineHeight:1.5, marginTop:22, maxWidth:560}}>
                Screen wallets in 280ms. Untangle a mixer in one graph. Close the case with evidence a court will accept. Bitint is the intelligence layer for agencies, VASPs, and the teams that protect them.
              </p>
              <div style={{display:'flex', gap:12, marginTop:30, flexWrap:'wrap'}}>
                <button className="btn btn-primary btn-lg" onClick={()=>onNav('/contact')}>
                  Book a demo <Icon name="arrow-right" size={16} stroke={2}/>
                </button>
                <button className="btn btn-ghost btn-lg" onClick={()=>onNav('/platform')}>
                  See the platform
                </button>
              </div>
              <div style={{
                display:'flex', alignItems:'center', gap:30, marginTop:40,
                paddingTop:26, borderTop:'1px solid var(--border)',
                fontSize:12.5, color:'var(--text-muted)', flexWrap:'wrap',
              }}>
                <span>Trusted by</span>
                {['INTERPOL*', 'FINCEN*', 'Binance*', 'Chainlink', 'Kraken*'].map(l => (
                  <span key={l} style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, letterSpacing:'-0.02em', opacity:0.7}}>{l}</span>
                ))}
              </div>
            </div>
            <div style={{position:'relative'}}>
              <AppChrome title="app.bitint.io/investigation" height={520}>
                <InvestigationGraph/>
              </AppChrome>
              <div style={{
                position:'absolute', bottom:-24, left:-28,
                background:'var(--surface)', border:'1px solid var(--border)',
                borderRadius:14, padding:'12px 14px', display:'flex', gap:12,
                boxShadow:'var(--shadow-lg)', alignItems:'center', zIndex: 10
              }}>
                <div style={{
                  width:36, height:36, borderRadius:10,
                  background:'rgba(239,68,68,0.1)', color:'#dc2626',
                  display:'grid', placeItems:'center',
                }}><Icon name="shield" size={18} stroke={2.2}/></div>
                <div>
                  <div style={{fontSize:12.5, fontWeight:600}}>Sanctioned: Lazarus Group</div>
                  <div style={{fontSize:11, color:'var(--text-muted)'}} className="mono">4 hops · 0.84 BTC exposure</div>
                </div>
              </div>
              <div style={{
                position:'absolute', top:-20, right:-20,
                background:'var(--surface)', border:'1px solid var(--border)',
                borderRadius:14, padding:'10px 14px', display:'flex', gap:10,
                boxShadow:'var(--shadow-md)', alignItems:'center', fontSize:12, zIndex: 10
              }}>
                <div style={{width:8, height:8, borderRadius:'50%', background:'#10b981', boxShadow:'0 0 0 4px rgba(16,185,129,0.2)'}}/>
                <span className="mono" style={{color:'var(--text-muted)'}}>screened in 281ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'40px 0', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', background:'var(--bg-soft)'}}>
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:40}} className="max-md:grid-cols-2">
            {[
              {k:'2.8B+',  v:'addresses under coverage'},
              {k:'14',     v:'chains indexed natively'},
              {k:'280ms',  v:'median screening latency'},
              {k:'94.7%',  v:'attribution precision'},
            ].map(m => (
              <div key={m.k}>
                <div style={{fontFamily:'var(--font-display)', fontSize:40, fontWeight:700, letterSpacing:'-0.03em'}}>
                  <span className="text-gradient">{m.k}</span>
                </div>
                <div style={{color:'var(--text-muted)', fontSize:13.5, marginTop:4}}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TabbedProductPreview onNav={onNav}/>

      <section className="section">
        <div className="container-wide">
          <div style={{maxWidth:720, marginBottom:56}}>
            <div className="eyebrow">The stack</div>
            <h2 className="display-2" style={{marginTop:16}}>
              One intelligence layer. <span className="text-gradient">Every workflow.</span>
            </h2>
            <p className="muted" style={{fontSize:17, marginTop:14, lineHeight:1.5}}>
              From first lead to final report — Bitint fits into how your analysts already work, and earns its keep in every step.
            </p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              {icon:'graph', title:'Investigations', body:'Graph-first case work with automatic clustering, evidence pins, and side-by-side compare.', tag:'Solution'},
              {icon:'shield', title:'Wallet screening', body:'Sub-300ms API calls check addresses against sanctions, criminal DBs, and 40+ heuristics.', tag:'API'},
              {icon:'activity', title:'Transaction monitoring', body:'Streaming alerts with tunable rules, velocity, and threshold logic. SIEM-ready.', tag:'Stream'},
              {icon:'users', title:'Entity intelligence', body:'Human-curated attribution with confidence scores and full source trails.', tag:'Dataset'},
              {icon:'bell', title:'Configurable alerts', body:'Build the alerting that matches your SOPs — not the other way around.', tag:'Workflow'},
              {icon:'clipboard', title:'Auditability', body:'Every decision, view, and export is logged. Defensible in court, boring for auditors.', tag:'Compliance'},
            ].map((f,i) => (
              <div key={f.title} className="card flex flex-col items-start" style={{padding:24}}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)',
                  border:'1px solid rgba(160,43,230,0.18)',
                  color:'var(--violet-600)',
                  display:'grid', placeItems:'center',
                }}>
                  <Icon name={f.icon} size={22} stroke={2}/>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:8, marginTop:18}}>
                  <h3 style={{fontSize:19}}>{f.title}</h3>
                  <span className="tag" style={{fontSize:10, padding:'2px 6px'}}>{f.tag}</span>
                </div>
                <p className="muted" style={{marginTop:8, fontSize:14, lineHeight:1.55, flex: 1}}>{f.body}</p>
                <button onClick={() => onNav('/solutions')}
                   style={{display:'inline-flex', alignItems:'center', gap:6, marginTop:18, fontSize:13, fontWeight:600, color:'var(--violet-600)'}}>
                  Learn more <Icon name="arrow-right" size={14} stroke={2}/>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkGraphSection onNav={onNav}/>

      <section className="section-sm">
        <div className="container" style={{maxWidth:960}}>
          <div className="card" style={{padding:40, background:'var(--gradient-brand-soft)', borderColor:'rgba(160,43,230,0.18)'}}>
            <div style={{fontFamily:'var(--font-display)', fontSize:26, lineHeight:1.3, letterSpacing:'-0.02em'}}>
              "The graph is the case. Bitint collapsed a three-week Tornado unwind into an afternoon — and the evidence trail held up at the prosecutor's desk without a single follow-up question."
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14, marginTop:24}}>
              <div style={{
                width:44, height:44, borderRadius:'50%', background:'var(--gradient-brand)',
                color:'#fff', display:'grid', placeItems:'center', fontWeight:700,
              }}>MR</div>
              <div>
                <div style={{fontWeight:600, fontSize:14}}>M. Reyes</div>
                <div style={{fontSize:12.5, color:'var(--text-muted)'}}>Lead Investigator, National Financial Crimes Unit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:60, alignItems:'center'}} className="max-lg:grid-cols-1">
            <div>
              <div className="eyebrow">Coverage</div>
              <h2 className="display-3" style={{marginTop:14}}>14 chains. <span className="text-gradient">Native depth.</span></h2>
              <p className="muted" style={{marginTop:14, fontSize:16}}>
                No single-chain blind spots. No "EVM-ish" approximations. We index every chain from the RPC up, so your investigator sees the same state a node operator does.
              </p>
              <button className="btn btn-ghost" style={{marginTop:18}} onClick={()=>onNav('/platform')}>Coverage details <Icon name="arrow-right" size={14} stroke={2}/></button>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:10}} className="max-sm:grid-cols-3">
              {['Bitcoin','Ethereum','Tron','BSC','Polygon','Arbitrum','Optimism','Solana','Avalanche','Litecoin','Base','Cardano','TON','Sui'].map(c => (
                <div key={c} className="card" style={{padding:'14px 12px', textAlign:'center', fontSize:13, fontWeight:500}}>
                  <div style={{width:28, height:28, borderRadius:8, background:'var(--gradient-brand-soft)', margin:'0 auto 8px', border:'1px solid rgba(160,43,230,0.2)'}}/>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection onNav={onNav}/>
    </>
  );
};