import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';
import { CTASection } from './Home';

const CoverageVisual = () => {
  const chains = ['BTC','ETH','TRX','SOL','BSC','POL','ARB','OP','AVAX','LTC','BASE','ADA','TON','SUI'];
  return (
    <div className="card" style={{padding:20, background:'var(--bg-soft)'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14}}>
        <div style={{fontWeight:600, fontSize:14}}>Native chain coverage</div>
        <span className="tag mono" style={{fontSize:10}}>updated 3s ago</span>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:6}} className="max-sm:grid-cols-4">
        {chains.map((c, i) => (
          <div key={c} style={{
            padding:'12px 6px', textAlign:'center',
            background:'var(--surface)', border:'1px solid var(--border)',
            borderRadius:10, fontFamily:'var(--font-mono)', fontSize:11, fontWeight:600,
            position:'relative',
          }}>
            {c}
            <div style={{
              width:6, height:6, borderRadius:'50%', background:'#10b981',
              position:'absolute', top:6, right:6,
              boxShadow:'0 0 0 3px rgba(16,185,129,0.15)',
            }}/>
          </div>
        ))}
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginTop:14}}>
        {[
          ['2.8B+','addresses'],
          ['280M+','entities'],
          ['14','native chains'],
        ].map(([k,v]) => (
          <div key={v} style={{padding:12, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10}}>
            <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:700, letterSpacing:'-0.03em'}}>
              <span className="text-gradient">{k}</span>
            </div>
            <div style={{fontSize:11, color:'var(--text-muted)'}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const AttributionVisual = () => {
  const items = [
    {label:'Binance hot wallet #14', score:98, tone:'emerald', src:'Partner feed + direct deposit heuristic'},
    {label:'Lazarus Group laundering', score:94, tone:'red', src:'OFAC + cluster co-spend'},
    {label:'Probable mixer egress', score:62, tone:'amber', src:'ChipMixer fingerprint v2.4'},
    {label:'Unknown — low activity', score:28, tone:'slate', src:'—'},
  ];
  const toneFg: any = {emerald:'#059669', red:'#dc2626', amber:'#d97706', slate:'#64748b'};
  return (
    <div className="card" style={{padding:18, background:'var(--bg-soft)'}}>
      <div style={{fontWeight:600, fontSize:14, marginBottom:10}}>Attribution feed</div>
      {items.map((it,i) => (
        <div key={i} style={{
          display:'grid', gridTemplateColumns:'1fr auto', gap:10,
          padding:'12px 0', borderTop: i>0 ? '1px solid var(--border)' : '0',
        }}>
          <div>
            <div style={{fontSize:13.5, fontWeight:600}}>{it.label}</div>
            <div style={{fontSize:11.5, color:'var(--text-muted)', marginTop:2}}>{it.src}</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div className="mono" style={{fontSize:16, fontWeight:700, color:toneFg[it.tone]}}>{it.score}</div>
            <div style={{fontSize:10, color:'var(--text-subtle)'}}>confidence</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const APIVisual = () => {
  return (
    <div className="card" style={{
      padding:0, overflow:'hidden',
      background:'#07061a', color:'#e5e4ff', border:'1px solid #22204a',
    }}>
      <div style={{padding:'10px 14px', borderBottom:'1px solid #22204a', display:'flex', alignItems:'center', gap:10}}>
        <div style={{display:'flex', gap:5}}>
          <span style={{width:9,height:9,borderRadius:'50%',background:'#ff5f57'}}/>
          <span style={{width:9,height:9,borderRadius:'50%',background:'#febc2e'}}/>
          <span style={{width:9,height:9,borderRadius:'50%',background:'#28c840'}}/>
        </div>
        <span style={{fontFamily:'var(--font-mono)', fontSize:11, color:'#a8a5c5'}}>POST /v1/screen</span>
        <span style={{marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:10, color:'#10b981'}}>200 OK · 281ms</span>
      </div>
      <pre style={{
        margin:0, padding:20, fontFamily:'var(--font-mono)', fontSize:12,
        lineHeight:1.7, overflow:'auto', minHeight:300,
      }}>
{`curl https://api.bitint.io/v1/screen \\
  -H "Authorization: Bearer $BITINT_KEY" \\
  -d '{"address": "1NDyJtNTjmwk5x...igtobu1s"}'`}
        {'\n\n'}
{`{
  "address": "1NDyJtNTjmwk5x...igtobu1s",
  "chain": "BTC",
  "risk_score": `}<span style={{color:'#ef4444'}}>98</span>{`,
  "severity": "`}<span style={{color:'#ef4444'}}>critical</span>{`",
  "attribution": {
    "entity": "`}<span style={{color:'#9dd5ff'}}>Lazarus Group</span>{`",
    "confidence": `}<span style={{color:'#a094ff'}}>0.94</span>{`,
    "sources": ["ofac_sdn_2023_08", "cluster_cospend_v3"]
  },
  "sanctions": ["OFAC_SDN"],
  "latency_ms": `}<span style={{color:'#10b981'}}>281</span>{`
}`}
      </pre>
    </div>
  );
}

export const Platform = () => {
  const navigate = useNavigate();
  const onNav = (path: string) => navigate(path);

  return (
    <>
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-wide" style={{textAlign:'center'}}>
          <div className="eyebrow" style={{margin:'0 auto'}}>Platform</div>
          <h1 className="display-1" style={{marginTop:20, maxWidth:1000, margin:'20px auto 0'}}>
            Everything you need to <span className="text-gradient">follow the money.</span>
          </h1>
          <p className="muted" style={{fontSize:18, marginTop:20, maxWidth:640, margin:'0 auto', lineHeight:1.55}}>
            Four pillars — coverage, attribution, API, and auditability — working as a single system, not four tools bolted together.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16}} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              {icon:'database', title:'Coverage & data', desc:'14 native chains, 2.8B+ addresses, 280M+ entities.', k:'2.8B+'},
              {icon:'users', title:'Attribution & confidence', desc:'Human-reviewed, sourced, and scored.', k:'94.7%'},
              {icon:'plug', title:'API & integrations', desc:'REST, WebSocket streams, SDKs, SIEM plugins.', k:'<300ms'},
              {icon:'clipboard', title:'Auditability & evidence', desc:'Every action signed. Defensible by default.', k:'100%'},
            ].map(p => (
              <div key={p.title} className="card flex flex-col items-start" style={{padding:24}}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                  display:'grid', placeItems:'center', border:'1px solid rgba(91,76,255,0.18)',
                }}><Icon name={p.icon} size={22} stroke={2}/></div>
                <h3 style={{fontSize:18, marginTop:16}}>{p.title}</h3>
                <p className="muted" style={{fontSize:13.5, marginTop:6, flex: 1}}>{p.desc}</p>
                <div style={{marginTop:16, fontFamily:'var(--font-display)', fontSize:26, fontWeight:700, letterSpacing:'-0.03em'}}>
                  <span className="text-gradient">{p.k}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[
        {
          id: 'coverage',
          eye:'Coverage',
          title:'Every chain, no approximations.',
          body:'We run native RPC nodes for every chain we cover. No third-party aggregator in the middle, no EVM-ish shortcuts for UTXO chains. What your analyst sees is what the network actually did.',
          bullets:['14 chains indexed to the block header','UTXO, account, and L2 models handled natively','Token, NFT, and bridge tracing built in'],
          visual: <CoverageVisual/>,
        },
        {
          id: 'attribution',
          eye:'Attribution',
          title:'Sourced. Scored. Signed.',
          body:'Every attribution carries a confidence score, the heuristic(s) behind it, and a link to the human reviewer who last touched it. No unexplained black-box labels.',
          bullets:['Confidence 0–100 with rationale','Source chain for every label','Versioned — you can diff attribution over time'],
          visual: <AttributionVisual/>,
          reverse: true,
        },
        {
          id: 'api',
          eye:'Developers',
          title:'Your stack. Our intelligence.',
          body:'A clean REST API, WebSocket streams for real-time monitoring, and SDKs in Python, TypeScript, and Go. Built-in plugins for Splunk, Elastic, Sentinel, and your favorite case management tool.',
          bullets:['Screening API, 280ms p50','Real-time alert streams','Plug-and-play SIEM integrations'],
          visual: <APIVisual/>,
        },
      ].map((row, i) => (
        <section key={i} id={row.id} className="section-sm">
          <div className="container-wide">
            <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap:60, alignItems:'center'}} className="max-lg:grid-cols-1">
              <div style={{order: row.reverse ? 2 : 1}} className="max-lg:order-1">
                <div className="eyebrow">{row.eye}</div>
                <h2 className="display-3" style={{marginTop:14}}>{row.title}</h2>
                <p className="muted" style={{fontSize:16, marginTop:14, lineHeight:1.55}}>{row.body}</p>
                <div style={{display:'grid', gap:10, marginTop:22}}>
                  {row.bullets.map(b => (
                    <div key={b} style={{display:'flex', gap:10, alignItems:'center'}}>
                      <div style={{width:20, height:20, borderRadius:6, background:'var(--gradient-brand-soft)', color:'var(--violet-600)', display:'grid', placeItems:'center', border:'1px solid rgba(91,76,255,0.2)'}}>
                        <Icon name="check" size={12} stroke={2.5}/>
                      </div>
                      <span style={{fontSize:14.5}}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{order: row.reverse ? 1 : 2}} className="max-lg:order-2">{row.visual}</div>
            </div>
          </div>
        </section>
      ))}

      <CTASection onNav={onNav}/>
    </>
  );
};