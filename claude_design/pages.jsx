/* global React, Icon, AppChrome, InvestigationGraph, DashboardMini, MonitoringMini, WalletScreeningMini, CaseManagerMini */
const { useState: useSP, useRef: useRP } = React;

// =============== PLATFORM OVERVIEW ===============
function PlatformPage({ onNav }) {
  return (
    <>
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-wide" style={{textAlign:'center'}}>
          <div className="eyebrow" style={{margin:'0 auto'}}>Platform</div>
          <h1 className="display-1" style={{marginTop:20, maxWidth:1000, margin:'20px auto 0'}}>
            Everything you need to <span className="text-gradient">follow the money.</span>
          </h1>
          <p className="muted" style={{fontSize:18, marginTop:20, maxWidth:640, margin:'20px auto 0', lineHeight:1.55}}>
            Four pillars — coverage, attribution, API, and auditability — working as a single system, not four tools bolted together.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16}}>
            {[
              {icon:'database', title:'Coverage & data', desc:'14 native chains, 2.8B+ addresses, 280M+ entities.', k:'2.8B+'},
              {icon:'users', title:'Attribution & confidence', desc:'Human-reviewed, sourced, and scored.', k:'94.7%'},
              {icon:'plug', title:'API & integrations', desc:'REST, WebSocket streams, SDKs, SIEM plugins.', k:'<300ms'},
              {icon:'clipboard', title:'Auditability & evidence', desc:'Every action signed. Defensible by default.', k:'100%'},
            ].map(p => (
              <div key={p.title} className="card" style={{padding:24}}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                  display:'grid', placeItems:'center', border:'1px solid rgba(91,76,255,0.18)',
                }}><Icon name={p.icon} size={22} stroke={2}/></div>
                <h3 style={{fontSize:18, marginTop:16}}>{p.title}</h3>
                <p className="muted" style={{fontSize:13.5, marginTop:6}}>{p.desc}</p>
                <div style={{marginTop:16, fontFamily:'var(--font-display)', fontSize:26, fontWeight:700, letterSpacing:'-0.03em'}}>
                  <span className="text-gradient">{p.k}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating feature rows */}
      {[
        {
          eye:'Coverage',
          title:'Every chain, no approximations.',
          body:'We run native RPC nodes for every chain we cover. No third-party aggregator in the middle, no EVM-ish shortcuts for UTXO chains. What your analyst sees is what the network actually did.',
          bullets:['14 chains indexed to the block header','UTXO, account, and L2 models handled natively','Token, NFT, and bridge tracing built in'],
          visual: <CoverageVisual/>,
        },
        {
          eye:'Attribution',
          title:'Sourced. Scored. Signed.',
          body:'Every attribution carries a confidence score, the heuristic(s) behind it, and a link to the human reviewer who last touched it. No unexplained black-box labels.',
          bullets:['Confidence 0–100 with rationale','Source chain for every label','Versioned — you can diff attribution over time'],
          visual: <AttributionVisual/>,
          reverse: true,
        },
        {
          eye:'Developers',
          title:'Your stack. Our intelligence.',
          body:'A clean REST API, WebSocket streams for real-time monitoring, and SDKs in Python, TypeScript, and Go. Built-in plugins for Splunk, Elastic, Sentinel, and your favorite case management tool.',
          bullets:['Screening API, 280ms p50','Real-time alert streams','Plug-and-play SIEM integrations'],
          visual: <APIVisual/>,
        },
      ].map((row, i) => (
        <section key={i} className="section-sm">
          <div className="container-wide">
            <div style={{display:'grid', gridTemplateColumns: row.reverse ? '1fr 1fr' : '1fr 1fr', gap:60, alignItems:'center'}}>
              <div style={{order: row.reverse ? 2 : 1}}>
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
              <div style={{order: row.reverse ? 1 : 2}}>{row.visual}</div>
            </div>
          </div>
        </section>
      ))}

      <CTASection onNav={onNav}/>
    </>
  );
}

function CoverageVisual() {
  const chains = ['BTC','ETH','TRX','SOL','BSC','POL','ARB','OP','AVAX','LTC','BASE','ADA','TON','SUI'];
  return (
    <div className="card" style={{padding:20, background:'var(--bg-soft)'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14}}>
        <div style={{fontWeight:600, fontSize:14}}>Native chain coverage</div>
        <span className="tag mono" style={{fontSize:10}}>updated 3s ago</span>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:6}}>
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

function AttributionVisual() {
  const items = [
    {label:'Binance hot wallet #14', score:98, tone:'emerald', src:'Partner feed + direct deposit heuristic'},
    {label:'Lazarus Group laundering', score:94, tone:'red', src:'OFAC + cluster co-spend'},
    {label:'Probable mixer egress', score:62, tone:'amber', src:'ChipMixer fingerprint v2.4'},
    {label:'Unknown — low activity', score:28, tone:'slate', src:'—'},
  ];
  const toneFg = {emerald:'#059669', red:'#dc2626', amber:'#d97706', slate:'#64748b'};
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

function APIVisual() {
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

// =============== SOLUTIONS HUB ===============
function SolutionsPage({ onNav }) {
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
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
            {solutions.map(s => (
              <div key={s.key} className="card" style={{padding:24, cursor:'pointer', position:'relative', overflow:'hidden'}}
                   onClick={()=>onNav(s.key==='investigations' ? '/solutions/investigations' : '/solutions')}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                  border:'1px solid rgba(91,76,255,0.18)',
                  display:'grid', placeItems:'center',
                }}><Icon name={s.icon} size={22} stroke={2}/></div>
                <h3 style={{fontSize:20, marginTop:18}}>{s.title}</h3>
                <p className="muted" style={{fontSize:14, marginTop:8, lineHeight:1.55}}>{s.desc}</p>
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
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16}}>
            {industries.map(i => (
              <div key={i.t} className="card" style={{padding:22}}>
                <div style={{
                  width:40, height:40, borderRadius:10, background:'var(--surface-2)',
                  color:'var(--violet-600)', display:'grid', placeItems:'center', border:'1px solid var(--border)',
                }}><Icon name={i.icon} size={20} stroke={2}/></div>
                <div style={{fontWeight:600, fontSize:15, marginTop:14}}>{i.t}</div>
                <div style={{fontSize:13, color:'var(--text-muted)', marginTop:6}}>{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNav={onNav}/>
    </>
  );
}

// =============== INVESTIGATIONS DETAIL ===============
function InvestigationsDetailPage({ onNav }) {
  const steps = [
    {k:'01', t:'Start from anything', d:'Address, tx hash, entity name, or tip. Drop it in the search bar and Bitint finds the graph.'},
    {k:'02', t:'Expand the graph', d:'Cluster co-spend, apply heuristics, follow tokens across bridges — all without leaving the canvas.'},
    {k:'03', t:'Pin the evidence', d:'Mark nodes, screenshot frames, drop analyst notes. Everything is timestamped and signed.'},
    {k:'04', t:'Export the report', d:'One click for a court-ready PDF, SAR packet, or JSON handoff. Your agency template, pre-filled.'},
  ];
  return (
    <>
      <section className="hero-bg" style={{padding:'72px 0 40px'}}>
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:50, alignItems:'center'}}>
            <div>
              <div style={{display:'flex', alignItems:'center', gap:10, fontSize:13, color:'var(--text-muted)'}}>
                <a href="#/solutions" onClick={(e)=>{e.preventDefault(); onNav('/solutions');}}>Solutions</a>
                <span>/</span>
                <span style={{color:'var(--text)'}}>Investigations</span>
              </div>
              <div className="eyebrow" style={{marginTop:18}}>Solution · Investigations</div>
              <h1 className="display-1" style={{marginTop:18}}>The graph <span className="text-gradient">is the case.</span></h1>
              <p className="muted" style={{fontSize:18, marginTop:18, lineHeight:1.55}}>
                Stop stitching screenshots in Miro. Investigate on a surface built for blockchain data, where every step is logged and every export is defensible.
              </p>
              <div style={{display:'flex', gap:12, marginTop:28}}>
                <button className="btn btn-primary btn-lg" onClick={()=>onNav('/contact')}>Book a demo <Icon name="arrow-right" size={15} stroke={2}/></button>
                <button className="btn btn-ghost btn-lg" onClick={()=>onNav('/login')}>Sign in</button>
              </div>
            </div>
            <AppChrome title="app.bitint.io/investigation" height={480}>
              <InvestigationGraph/>
            </AppChrome>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{maxWidth:680, marginBottom:40}}>
            <div className="eyebrow">How it works</div>
            <h2 className="display-2" style={{marginTop:14}}>From lead to report, in four steps.</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16}}>
            {steps.map(s => (
              <div key={s.k} className="card" style={{padding:24, position:'relative'}}>
                <div className="mono" style={{
                  fontSize:12, color:'var(--violet-600)',
                  fontWeight:700, letterSpacing:'0.08em',
                }}>{s.k}</div>
                <h3 style={{fontSize:18, marginTop:12}}>{s.t}</h3>
                <p className="muted" style={{fontSize:13.5, marginTop:8, lineHeight:1.55}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:50, alignItems:'center'}}>
            <MonitoringMini/>
            <div>
              <div className="eyebrow">Ops in the same pane</div>
              <h2 className="display-3" style={{marginTop:14}}>Pin targets to your watchlist as you go.</h2>
              <p className="muted" style={{fontSize:16, marginTop:14, lineHeight:1.55}}>
                When you spot something that deserves monitoring, one click adds it to your team's watchlist — with the rule primitive and alert channel already selected.
              </p>
              <ul style={{listStyle:'none', padding:0, margin:'20px 0 0'}}>
                {['Rules, velocity, threshold, and composite logic', 'Alert via email, Slack, webhook, SIEM', 'Team-scoped watchlists with RBAC'].map(t => (
                  <li key={t} style={{display:'flex', gap:10, alignItems:'center', padding:'8px 0'}}>
                    <Icon name="check" size={14} stroke={2.5}/> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNav={onNav}/>
    </>
  );
}

// =============== CONTACT ===============
function ContactPage({ onNav }) {
  const [form, setForm] = useSP({ name:'', email:'', org:'', role:'Investigator', team:'1–10', msg:'' });
  const [sent, setSent] = useSP(false);
  return (
    <section className="hero-bg" style={{padding:'72px 0'}}>
      <div className="container-wide">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:60}}>
          <div>
            <div className="eyebrow">Talk to us</div>
            <h1 className="display-1" style={{marginTop:18}}>Let's build your <span className="text-gradient">next case</span> together.</h1>
            <p className="muted" style={{fontSize:17, marginTop:18, lineHeight:1.55, maxWidth:480}}>
              Book a 30-minute demo with a Bitint analyst. Bring real addresses — we'll show you live traces, scoring, and exports.
            </p>

            <div style={{display:'grid', gap:16, marginTop:40}}>
              {[
                {i:'mail',  t:'hello@bitint.io',   s:'General inquiries'},
                {i:'phone', t:'+1 (415) 555-0113', s:'Mon–Fri, 9–5 PT'},
                {i:'pin',   t:'San Francisco · London · Singapore', s:'Offices'},
              ].map(row => (
                <div key={row.t} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <div style={{
                    width:40, height:40, borderRadius:10,
                    background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                    display:'grid', placeItems:'center', border:'1px solid rgba(91,76,255,0.18)',
                  }}><Icon name={row.i} size={18} stroke={2}/></div>
                  <div>
                    <div style={{fontWeight:600, fontSize:15}}>{row.t}</div>
                    <div style={{fontSize:13, color:'var(--text-muted)', marginTop:2}}>{row.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{marginTop:40, padding:20, background:'var(--bg-soft)'}}>
              <div style={{display:'flex', gap:10, alignItems:'center', marginBottom:8}}>
                <Icon name="lock" size={16} stroke={2}/>
                <div style={{fontWeight:600, fontSize:13}}>Sensitive inquiry?</div>
              </div>
              <p style={{fontSize:13, color:'var(--text-muted)', lineHeight:1.55}}>
                We support PGP-encrypted email for law-enforcement requests. <a href="#" style={{color:'var(--violet-600)', fontWeight:600}}>Download our public key →</a>
              </p>
            </div>
          </div>

          <div className="card" style={{padding:32, boxShadow:'var(--shadow-lg)'}}>
            {sent ? (
              <div style={{textAlign:'center', padding:'40px 20px'}}>
                <div style={{
                  width:56, height:56, borderRadius:'50%',
                  background:'var(--gradient-brand)', color:'#fff',
                  display:'grid', placeItems:'center', margin:'0 auto',
                }}><Icon name="check" size={28} stroke={2.5}/></div>
                <h3 style={{fontSize:22, marginTop:18}}>Message received.</h3>
                <p className="muted" style={{marginTop:10, fontSize:14.5}}>
                  A Bitint analyst will reach out within one business day — usually sooner.
                </p>
                <button className="btn btn-ghost" style={{marginTop:24}} onClick={()=>{ setSent(false); setForm({name:'',email:'',org:'',role:'Investigator',team:'1–10',msg:''}); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={(e)=>{ e.preventDefault(); setSent(true); }}>
                <h3 style={{fontSize:22, marginBottom:6}}>Book a demo</h3>
                <p className="muted" style={{fontSize:14}}>Takes 30 seconds. We respond within one business day.</p>
                <div style={{display:'grid', gap:14, marginTop:22}}>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                    <div className="field">
                      <label>Name</label>
                      <input className="input" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                    </div>
                    <div className="field">
                      <label>Work email</label>
                      <input className="input" type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
                    </div>
                  </div>
                  <div className="field">
                    <label>Organization</label>
                    <input className="input" required value={form.org} onChange={(e)=>setForm({...form, org:e.target.value})}/>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                    <div className="field">
                      <label>Role</label>
                      <select className="select" value={form.role} onChange={(e)=>setForm({...form, role:e.target.value})}>
                        <option>Investigator</option>
                        <option>Compliance</option>
                        <option>Engineering</option>
                        <option>Procurement</option>
                        <option>Executive</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Team size</label>
                      <select className="select" value={form.team} onChange={(e)=>setForm({...form, team:e.target.value})}>
                        <option>1–10</option><option>11–50</option><option>51–200</option><option>200+</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>Tell us about your use case (optional)</label>
                    <textarea className="textarea" rows="4" value={form.msg} onChange={(e)=>setForm({...form, msg:e.target.value})}
                              placeholder="Chains you care about, rough address volume, integrations you use today..."/>
                  </div>
                  <button className="btn btn-primary btn-lg" type="submit" style={{marginTop:6, justifyContent:'center'}}>
                    Request demo <Icon name="arrow-right" size={16} stroke={2}/>
                  </button>
                  <p style={{fontSize:11.5, color:'var(--text-subtle)', textAlign:'center'}}>
                    By submitting, you agree to our privacy policy. We never share your data with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============== LOGIN ===============
function LoginPage({ onNav }) {
  const [email, setEmail] = useSP('');
  const [pw, setPw] = useSP('');
  const [loading, setLoading] = useSP(false);
  return (
    <div style={{
      minHeight:'calc(100vh - var(--nav-h))',
      display:'grid', gridTemplateColumns:'1fr 1.1fr',
    }}>
      <div style={{
        padding:'60px 56px',
        display:'flex', flexDirection:'column', justifyContent:'center',
        background:'var(--bg)',
      }}>
        <div style={{maxWidth:420, width:'100%', margin:'0 auto'}}>
          <BitintLogo size={34}/>
          <h1 className="display-3" style={{marginTop:28, fontSize:34}}>Welcome back.</h1>
          <p className="muted" style={{marginTop:10, fontSize:15}}>Sign in to your Bitint workspace.</p>

          <div style={{display:'flex', gap:10, marginTop:28}}>
            <button className="btn btn-ghost" style={{flex:1, justifyContent:'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="btn btn-ghost" style={{flex:1, justifyContent:'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="1" width="10" height="10"/><rect x="13" y="1" width="10" height="10"/><rect x="1" y="13" width="10" height="10"/><rect x="13" y="13" width="10" height="10"/></svg>
              Microsoft
            </button>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:12, margin:'22px 0'}}>
            <div style={{flex:1, height:1, background:'var(--border)'}}/>
            <span style={{fontSize:11, color:'var(--text-subtle)', fontFamily:'var(--font-mono)', letterSpacing:'0.06em'}}>OR</span>
            <div style={{flex:1, height:1, background:'var(--border)'}}/>
          </div>

          <form onSubmit={(e)=>{ e.preventDefault(); setLoading(true); setTimeout(()=>{ setLoading(false); onNav('/platform'); }, 900); }}>
            <div className="field">
              <label>Work email</label>
              <input className="input" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="analyst@agency.gov"/>
            </div>
            <div className="field" style={{marginTop:14}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <label>Password</label>
                <a href="#" style={{fontSize:12, color:'var(--violet-600)', fontWeight:500}}>Forgot?</a>
              </div>
              <input className="input" type="password" required value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="••••••••"/>
            </div>
            <label style={{display:'flex', gap:8, alignItems:'center', marginTop:14, fontSize:13, color:'var(--text-muted)'}}>
              <input type="checkbox" defaultChecked/> Keep me signed in on this device
            </label>
            <button type="submit" className="btn btn-primary btn-lg" style={{marginTop:20, width:'100%', justifyContent:'center'}} disabled={loading}>
              {loading ? 'Signing in...' : <>Sign in <Icon name="arrow-right" size={15} stroke={2}/></>}
            </button>
          </form>
          <p style={{fontSize:13, color:'var(--text-muted)', marginTop:22, textAlign:'center'}}>
            Need access? <a href="#/contact" onClick={(e)=>{e.preventDefault(); onNav('/contact');}} style={{color:'var(--violet-600)', fontWeight:600}}>Contact your admin</a>
          </p>
          <p style={{fontSize:11, color:'var(--text-subtle)', marginTop:30, textAlign:'center', lineHeight:1.6}}>
            Protected by SSO, FIDO2, and device trust. <br/>SOC 2 Type II · ISO 27001 · SAML/OIDC ready.
          </p>
        </div>
      </div>

      <div style={{
        background: 'radial-gradient(1000px 600px at 30% 20%, rgba(91,76,255,0.45), transparent 55%),'
                  + 'radial-gradient(700px 500px at 80% 80%, rgba(62,166,255,0.35), transparent 55%),'
                  + 'linear-gradient(135deg, #1a1466 0%, #07061a 100%)',
        position:'relative', overflow:'hidden', color:'#f5f4ff',
      }}>
        <div aria-hidden style={{
          position:'absolute', inset:0,
          backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize:'22px 22px',
        }}/>
        <div style={{
          position:'absolute', inset:0, display:'flex', flexDirection:'column',
          justifyContent:'center', padding:'60px 56px',
        }}>
          <div style={{maxWidth:520}}>
            <div className="eyebrow" style={{background:'rgba(255,255,255,0.08)', color:'#c5bcff', borderColor:'rgba(197,188,255,0.25)'}}>
              Live graph
            </div>
            <h2 className="display-2" style={{color:'#fff', marginTop:18, fontSize:44}}>
              Your cases,<br/>
              <span style={{
                background:'linear-gradient(135deg, #c5bcff, #9dd5ff)',
                WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
              }}>already in progress.</span>
            </h2>
            <p style={{color:'rgba(245,244,255,0.7)', marginTop:14, fontSize:15, lineHeight:1.55}}>
              Pick up where you left off. 22 new alerts, 3 active investigations, and today's watchlist sync are waiting.
            </p>

            <div style={{
              marginTop:40,
              borderRadius:16, overflow:'hidden',
              border:'1px solid rgba(255,255,255,0.1)',
              background:'rgba(7,6,26,0.6)',
              height:280,
            }}>
              <InvestigationGraph/>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14, marginTop:24}}>
              {[
                {v:'22', l:'new alerts'},
                {v:'3', l:'investigations'},
                {v:'31', l:'watchlist'},
              ].map(s => (
                <div key={s.l} style={{
                  padding:14, borderRadius:12,
                  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, color:'#fff'}}>{s.v}</div>
                  <div style={{fontSize:11.5, color:'rgba(245,244,255,0.6)', marginTop:2}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PlatformPage, SolutionsPage, InvestigationsDetailPage, ContactPage, LoginPage });
