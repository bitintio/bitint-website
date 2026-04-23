import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';
import { CTASection } from './Home';

export const Solutions = () => {
  const navigate = useNavigate();
  const onNav = (path: string) => navigate(path);

  const solutions = [
    {key:'investigations', icon:'graph', title:'Investigations', desc:'Graph-first case work with automatic clustering and evidence trails.', stat:'10x faster unwinds'},
    {key:'screening',     icon:'shield', title:'Wallet screening', desc:'Sub-300ms API calls for sanctions and risk.', stat:'280ms p50'},
    {key:'monitoring',    icon:'activity', title:'Transaction monitoring', desc:'Streaming alerts with tunable rules.', stat:'24/7 stream'},
    {key:'entity',        icon:'users', title:'Entity intelligence', desc:'Human-curated attribution you can defend.', stat:'280M+ entities'},
    {key:'alerts',        icon:'bell', title:'Configurable alerts', desc:'Alerting shaped to your SOPs, not ours.', stat:'40+ rule primitives'},
    {key:'compliance',    icon:'clipboard', title:'Compliance workflows', desc:'SAR packets, audit trails, and signed exports.', stat:'SOC 2 · ISO 27001'},
  ];
  const industries = [
    {icon:'shield', t:'Government & LE', d:'Investigate sanctions evasion, ransomware, trafficking.'},
    {icon:'lock', t:'Financial institutions', d:'AML, KYT, and counterparty risk — integrated into your core.'},
    {icon:'globe', t:'VASPs & exchanges', d:'Onboarding screening and live monitoring at platform scale.'},
    {icon:'users', t:'Private investigators', d:'Defensible reports, redaction-ready exports, courtroom fit.'},
  ];

  return (
    <>
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-wide">
          <div style={{maxWidth:820}}>
            <div className="eyebrow">Solutions</div>
            <h1 className="display-1" style={{marginTop:20}}>Built for the work you already do.</h1>
            <p className="muted" style={{fontSize:18, marginTop:18, lineHeight:1.55, maxWidth:640}}>
              Whether you're closing a case, screening a counterparty, or tuning an alert rule — Bitint meets your team where they are.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {solutions.map(s => (
              <div key={s.key} className="card flex flex-col" style={{padding:24, cursor:'pointer', position:'relative', overflow:'hidden'}}
                   onClick={()=>onNav(s.key==='investigations' ? '/solutions/investigations' : '/solutions')}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                  border:'1px solid rgba(91,76,255,0.18)',
                  display:'grid', placeItems:'center',
                }}><Icon name={s.icon} size={22} stroke={2}/></div>
                <h3 style={{fontSize:20, marginTop:18}}>{s.title}</h3>
                <p className="muted" style={{fontSize:14, marginTop:8, lineHeight:1.55, flex:1}}>{s.desc}</p>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:22}}>
                  <span className="tag mono" style={{fontSize:10}}>{s.stat}</span>
                  <Icon name="arrow-up-right" size={16} stroke={2}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{maxWidth:680, marginBottom:32}}>
            <div className="eyebrow">Industries</div>
            <h2 className="display-3" style={{marginTop:14}}>Used by the teams that <span className="text-gradient">don't get to be wrong.</span></h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16}} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(i => (
              <div key={i.t} className="card flex flex-col items-start" style={{padding:22}}>
                <div style={{
                  width:40, height:40, borderRadius:10, background:'var(--surface-2)',
                  color:'var(--violet-600)', display:'grid', placeItems:'center', border:'1px solid var(--border)',
                }}><Icon name={i.icon} size={20} stroke={2}/></div>
                <div style={{fontWeight:600, fontSize:15, marginTop:14}}>{i.t}</div>
                <div style={{fontSize:13, color:'var(--text-muted)', marginTop:6, flex:1}}>{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNav={onNav}/>
    </>
  );
};