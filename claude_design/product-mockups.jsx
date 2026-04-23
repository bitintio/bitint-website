/* global React, Icon */
const { useState: useS2, useEffect: useE2, useRef: useR2, useMemo: useM2 } = React;

// A reusable "app window" chrome
function AppChrome({ title='app.bitint.io', children, style, height = 560 }) {
  return (
    <div style={{
      borderRadius: 16,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-lg)',
      overflow:'hidden',
      ...style,
    }}>
      <div style={{
        display:'flex', alignItems:'center', gap:10,
        padding:'10px 14px',
        borderBottom:'1px solid var(--border)',
        background: 'var(--bg-soft)',
      }}>
        <div style={{display:'flex', gap:6}}>
          <span style={{width:10, height:10, borderRadius:'50%', background:'#ff5f57'}}/>
          <span style={{width:10, height:10, borderRadius:'50%', background:'#febc2e'}}/>
          <span style={{width:10, height:10, borderRadius:'50%', background:'#28c840'}}/>
        </div>
        <div style={{
          flex:1, margin:'0 12px', fontSize:12,
          fontFamily:'var(--font-mono)', color:'var(--text-subtle)',
          background:'var(--surface)', padding:'4px 12px',
          borderRadius:6, border:'1px solid var(--border)',
        }}>{title}</div>
      </div>
      <div style={{height, overflow:'hidden', position:'relative', background:'var(--bg)'}}>{children}</div>
    </div>
  );
}

// Small app sidebar shared across product mockups
function ProductSidebar({ active }) {
  const items = [
    { k:'dashboard', label:'Dashboard', icon:'activity'},
    { k:'investigation', label:'Investigation', icon:'graph' },
    { k:'screening', label:'Wallet screening', icon:'shield' },
    { k:'monitoring', label:'Monitoring', icon:'bell' },
    { k:'cases', label:'Case manager', icon:'folder' },
    { k:'settings', label:'Settings', icon:'settings' },
  ];
  return (
    <div style={{
      width: 208, flexShrink:0,
      borderRight:'1px solid var(--border)',
      background:'var(--bg-soft)',
      padding:'14px 12px',
      display:'flex', flexDirection:'column', gap:2,
    }}>
      <div style={{padding:'4px 8px 12px', display:'flex', alignItems:'center', gap:8}}>
        <BitintLogo size={22}/>
      </div>
      {items.map(it => (
        <div key={it.k} style={{
          display:'flex', alignItems:'center', gap:10,
          padding:'9px 10px', borderRadius:10,
          fontSize:13, fontWeight: active===it.k ? 600 : 500,
          color: active===it.k ? 'var(--violet-700)' : 'var(--text-muted)',
          background: active===it.k ? 'var(--gradient-brand-soft)' : 'transparent',
          border: active===it.k ? '1px solid rgba(91,76,255,0.2)' : '1px solid transparent',
        }}>
          <Icon name={it.icon} size={15} stroke={2}/>
          {it.label}
        </div>
      ))}
      <div style={{flex:1}}/>
      <div style={{
        display:'flex', alignItems:'center', gap:10, padding:8, borderTop:'1px solid var(--border)',
      }}>
        <div style={{
          width:28, height:28, borderRadius:'50%',
          background:'var(--gradient-brand)', color:'#fff',
          display:'grid', placeItems:'center', fontWeight:700, fontSize:12,
        }}>I</div>
        <div style={{fontSize:12}}>
          <div style={{fontWeight:600}}>Investigator</div>
          <div style={{color:'var(--text-subtle)', fontSize:11}}>analyst@agency.gov</div>
        </div>
      </div>
    </div>
  );
}

function ProductTopbar({ searchValue='1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:12,
      padding:'12px 18px', borderBottom:'1px solid var(--border)',
      background:'var(--surface)',
    }}>
      <div style={{
        flex:1, display:'flex', alignItems:'center', gap:10,
        background:'var(--surface-2)', padding:'8px 12px', borderRadius:10,
        border:'1px solid var(--border)',
      }}>
        <Icon name="search" size={14} stroke={2}/>
        <span className="mono" style={{fontSize:12, color:'var(--text-muted)'}}>{searchValue}</span>
        <span style={{marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-subtle)',
                      padding:'2px 6px', borderRadius:4, background:'var(--surface)', border:'1px solid var(--border)'}}>BTC</span>
      </div>
      <span style={{
        padding:'4px 10px', borderRadius:999, fontSize:11, fontWeight:600,
        background:'rgba(220, 38, 38, 0.08)', color:'#dc2626',
      }}>CRITICAL 98/100</span>
      <Icon name="bell" size={16} stroke={2}/>
    </div>
  );
}

// ------ INVESTIGATION GRAPH ------
function InvestigationGraph({ animated = true }) {
  const nodes = useM2(() => ([
    { id:'c', x:50, y:50, label:'Target wallet', type:'target', size:22 },
    { id:'n1', x:22, y:28, label:'Binance', type:'exchange', size:16 },
    { id:'n2', x:78, y:25, label:'Coinbase', type:'exchange', size:16 },
    { id:'n3', x:15, y:62, label:'Tornado Cash', type:'mixer', size:16 },
    { id:'n4', x:82, y:68, label:'Lazarus Group', type:'sanctioned', size:18 },
    { id:'n5', x:35, y:80, label:'Hydra Market', type:'darknet', size:14 },
    { id:'n6', x:65, y:82, label:'OFAC listed', type:'sanctioned', size:14 },
    { id:'n7', x:30, y:18, label:'Kraken', type:'exchange', size:14 },
    { id:'n8', x:70, y:15, label:'Unknown', type:'unknown', size:12 },
    { id:'n9', x:8, y:45, label:'ChipMixer', type:'mixer', size:12 },
    { id:'n10', x:92, y:45, label:'Hot wallet', type:'wallet', size:12 },
  ]), []);
  const edges = useM2(() => ([
    ['c','n1'], ['c','n2'], ['c','n3'], ['c','n4'], ['c','n5'], ['c','n6'],
    ['n1','n7'], ['n2','n8'], ['n3','n9'], ['n4','n10'], ['n4','n5'], ['n3','n5'],
  ]), []);
  const typeColor = {
    target: 'var(--violet-500)',
    exchange: '#10b981',
    mixer: '#f59e0b',
    sanctioned: '#ef4444',
    darknet: '#ef4444',
    wallet: '#6b7280',
    unknown: '#9ca3af',
  };
  const byId = Object.fromEntries(nodes.map(n=>[n.id,n]));

  return (
    <div style={{
      position:'relative', width:'100%', height:'100%',
      background:
        'radial-gradient(circle at 50% 50%, rgba(91,76,255,0.04), transparent 70%),'+
        'linear-gradient(var(--surface), var(--surface))',
    }} className="dotgrid">
      <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none"
           style={{position:'absolute', inset:0}}>
        {edges.map(([a,b], i) => {
          const na = byId[a], nb = byId[b];
          return (
            <g key={i}>
              <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                    stroke="rgba(91,76,255,0.35)" strokeWidth="0.2"
                    strokeDasharray={animated ? "0.6 0.4" : undefined}>
                {animated && <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="18s" repeatCount="indefinite"/>}
              </line>
            </g>
          );
        })}
      </svg>
      {nodes.map(n => (
        <div key={n.id} style={{
          position:'absolute', left:`${n.x}%`, top:`${n.y}%`,
          transform:'translate(-50%, -50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:4,
          animation: animated ? `float-slow ${6 + (n.size % 4)}s ease-in-out infinite ${(n.size % 5) * 0.2}s` : 'none',
        }}>
          <div style={{
            width: n.size, height: n.size, borderRadius:'50%',
            background: typeColor[n.type],
            boxShadow: n.type==='target' ? '0 0 0 6px rgba(91,76,255,0.18), 0 0 30px rgba(91,76,255,0.6)' : '0 4px 12px rgba(0,0,0,0.1)',
            border:'2px solid var(--surface)',
            position:'relative',
          }}>
            {n.type==='target' && animated && (
              <span style={{
                position:'absolute', inset:-6, borderRadius:'50%',
                border:'1.5px solid var(--violet-500)', animation:'pulse-glow 2.4s ease-in-out infinite',
              }}/>
            )}
          </div>
          <div style={{
            fontSize:9, fontFamily:'var(--font-mono)',
            padding:'2px 6px', borderRadius:4,
            background:'var(--surface)', border:'1px solid var(--border)',
            color:'var(--text-muted)', whiteSpace:'nowrap',
          }}>{n.label}</div>
        </div>
      ))}
      {/* Corner toolbar */}
      <div style={{
        position:'absolute', top:12, left:12,
        display:'flex', gap:6,
      }}>
        <div style={{
          background:'var(--surface)', border:'1px solid var(--border)',
          borderRadius:8, padding:'4px 8px', fontSize:11, fontFamily:'var(--font-mono)',
          color:'var(--text-muted)', display:'flex', alignItems:'center', gap:6,
        }}>
          <span style={{width:6, height:6, borderRadius:'50%', background:'#10b981'}}/>
          Live graph · 11 nodes · 12 edges
        </div>
      </div>
      <div style={{
        position:'absolute', top:12, right:12, display:'flex', gap:6,
      }}>
        {['Clustering on', 'Filters', 'Export'].map(t => (
          <div key={t} style={{
            background: t==='Clustering on' ? 'var(--gradient-brand)' : 'var(--surface)',
            color: t==='Clustering on' ? '#fff' : 'var(--text-muted)',
            border:'1px solid ' + (t==='Clustering on' ? 'transparent' : 'var(--border)'),
            padding:'4px 10px', fontSize:11, borderRadius:8, fontWeight:500,
          }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

// ------ DASHBOARD MINI ------
function DashboardMini() {
  const stats = [
    { label:'New Alerts',    value:22, of:40, tone:'violet'},
    { label:'Critical',      value:5,          tone:'red'},
    { label:'High priority', value:10,         tone:'amber'},
    { label:'Investigating', value:3,          tone:'blue'},
    { label:'Watchlist',     value:31, of:32,  tone:'emerald'},
    { label:'Active rules',  value:15, of:16,  tone:'violet'},
  ];
  const toneBg = {
    violet: 'rgba(91,76,255,0.08)',
    red: 'rgba(239,68,68,0.08)',
    amber: 'rgba(245,158,11,0.1)',
    blue: 'rgba(62,166,255,0.1)',
    emerald: 'rgba(16,185,129,0.1)',
  };
  const toneFg = {
    violet: 'var(--violet-600)',
    red: '#ef4444',
    amber: '#d97706',
    blue: 'var(--cyan-600)',
    emerald: '#059669',
  };

  return (
    <div style={{display:'flex', height:'100%'}}>
      <ProductSidebar active="dashboard"/>
      <div style={{flex:1, display:'flex', flexDirection:'column', minWidth:0}}>
        <ProductTopbar/>
        <div style={{padding:18, overflow:'hidden'}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:14}}>
            <div>
              <h3 style={{fontSize:20, margin:0}}>Operations overview</h3>
              <div style={{fontSize:12.5, color:'var(--text-muted)', marginTop:2}}>Last 24 hours · BTC, ETH, TRX, BSC</div>
            </div>
            <div style={{display:'flex', gap:6}}>
              <div className="tag">Overview</div>
              <div className="tag" style={{background:'var(--gradient-brand)', color:'#fff', borderColor:'transparent'}}>Analytics</div>
              <div className="tag">Alerts</div>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:10, marginBottom:16}}>
            {stats.map(s => (
              <div key={s.label} style={{
                padding:12, borderRadius:12,
                background: toneBg[s.tone], border:'1px solid var(--border)',
              }}>
                <div style={{fontSize:11, color:'var(--text-muted)'}}>{s.label}</div>
                <div style={{
                  marginTop:6, fontFamily:'var(--font-display)',
                  fontSize:24, fontWeight:700, color: toneFg[s.tone],
                  letterSpacing:'-0.03em',
                }}>
                  {s.value}{s.of && <span style={{fontSize:12, color:'var(--text-subtle)', fontWeight:500}}>/{s.of}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:14}}>
            <div className="card" style={{padding:14}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:600, fontSize:13}}>Risk distribution</div>
                  <div style={{fontSize:11, color:'var(--text-muted)'}}>Current threat landscape</div>
                </div>
                <div className="tag mono">Live</div>
              </div>
              <DonutChart/>
            </div>
            <div className="card" style={{padding:14}}>
              <div style={{fontWeight:600, fontSize:13, marginBottom:8}}>Recent alerts</div>
              {[
                {sev:'C', color:'#ef4444', title:'Lazarus Group inflow', amt:'0.84 BTC'},
                {sev:'H', color:'#f59e0b', title:'Sanctions list match', amt:'12.4 ETH'},
                {sev:'M', color:'#5b4cff', title:'Mixer exposure 38%', amt:'2.1 BTC'},
                {sev:'L', color:'#10b981', title:'Velocity anomaly', amt:'240 TRX'},
              ].map((a,i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap:10,
                  padding:'8px 0', borderTop: i>0 ? '1px solid var(--border)' : '0',
                }}>
                  <div style={{
                    width:22, height:22, borderRadius:6, background: a.color + '22',
                    color: a.color, fontSize:10, fontWeight:700,
                    display:'grid', placeItems:'center',
                  }}>{a.sev}</div>
                  <div style={{flex:1, fontSize:12}}>
                    <div style={{fontWeight:500}}>{a.title}</div>
                    <div style={{color:'var(--text-subtle)', fontFamily:'var(--font-mono)', fontSize:10.5}}>{a.amt}</div>
                  </div>
                  <Icon name="arrow-right" size={13} stroke={2}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutChart() {
  const segs = [
    { v:12, c:'#ef4444', l:'Critical'},
    { v:28, c:'#f59e0b', l:'High'},
    { v:35, c:'#5b4cff', l:'Medium'},
    { v:18, c:'#10b981', l:'Low'},
    { v:7,  c:'#94a3b8', l:'Clean'},
  ];
  const total = segs.reduce((a,s)=>a+s.v,0);
  const R=42, C=2*Math.PI*R;
  let offset=0;
  return (
    <div style={{display:'flex', alignItems:'center', gap:20, marginTop:10}}>
      <svg width="150" height="150" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={R} fill="none" stroke="var(--border)" strokeWidth="14"/>
        {segs.map((s,i) => {
          const dash = (s.v/total)*C;
          const el = (
            <circle key={i} cx="60" cy="60" r={R}
              fill="none" stroke={s.c} strokeWidth="14" strokeLinecap="butt"
              strokeDasharray={`${dash} ${C-dash}`} strokeDashoffset={-offset}
              transform="rotate(-90 60 60)"/>
          );
          offset += dash;
          return el;
        })}
        <text x="60" y="56" textAnchor="middle" fontFamily="var(--font-display)" fontSize="18" fontWeight="700" fill="var(--text)">7.8</text>
        <text x="60" y="72" textAnchor="middle" fontSize="9" fill="var(--text-muted)">avg risk</text>
      </svg>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6px 16px', fontSize:11}}>
        {segs.map(s => (
          <div key={s.l} style={{display:'flex', alignItems:'center', gap:6}}>
            <span style={{width:8, height:8, borderRadius:'50%', background:s.c}}/>
            <span style={{color:'var(--text-muted)'}}>{s.l}</span>
            <span className="mono" style={{marginLeft:'auto', fontWeight:600}}>{s.v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------ MONITORING WATCHLIST MINI ------
function MonitoringMini() {
  const rows = [
    {label:'Lazarus Group Primary', sub:'Primary collection wallet', addr:'1NDyJtNTjmwk5x...igtobu1s', type:'Wallet', chain:'BTC', risk:98, alerts:15, status:'Active'},
    {label:'Conti Ransomware',      sub:'Payment collection',       addr:'1ContiRansom...456789AB', type:'Wallet', chain:'BTC', risk:96, alerts:12, status:'Active'},
    {label:'Hydra Market',          sub:'Seized address monitor',   addr:'1FimbHfnpez...N455paPH', type:'Entity', chain:'BTC', risk:96, alerts:4,  status:'Active'},
    {label:'Phishing Scammer',      sub:'Tracking victim funds',    addr:'bc1qsuspicio...23456789', type:'Wallet', chain:'BTC', risk:82, alerts:9,  status:'Active'},
    {label:'Lazarus Secondary',     sub:'Secondary wallet',         addr:'JShk24tcLLWe...D6qQPsP',  type:'Wallet', chain:'BTC', risk:98, alerts:11, status:'Active'},
  ];
  const riskColor = r => r >= 90 ? '#ef4444' : r >= 70 ? '#f59e0b' : '#10b981';
  return (
    <div style={{display:'flex', height:'100%'}}>
      <ProductSidebar active="monitoring"/>
      <div style={{flex:1, display:'flex', flexDirection:'column', minWidth:0}}>
        <ProductTopbar/>
        <div style={{padding:18, overflow:'hidden'}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:14}}>
            <div>
              <h3 style={{fontSize:20, margin:0}}>Monitoring</h3>
              <div style={{fontSize:12.5, color:'var(--text-muted)', marginTop:2}}>Watchlist · 31 active targets</div>
            </div>
            <button className="btn btn-primary btn-sm">+ Add to watchlist</button>
          </div>
          <div style={{display:'flex', gap:6, marginBottom:10}}>
            {['Alert stream','Watchlist','Rules','Activity log'].map((t,i) => (
              <div key={t} className="tag" style={{
                background: i===1 ? 'var(--gradient-brand-soft)' : 'transparent',
                color: i===1 ? 'var(--violet-700)' : 'var(--text-muted)',
                border: i===1 ? '1px solid rgba(91,76,255,0.2)' : '1px solid var(--border)',
                fontWeight: i===1 ? 600 : 500,
              }}>{t}</div>
            ))}
          </div>
          <div className="card" style={{overflow:'hidden'}}>
            <div style={{
              display:'grid',
              gridTemplateColumns:'2fr 1.6fr 0.7fr 0.6fr 1fr 0.8fr 1fr',
              padding:'10px 14px', gap:10,
              fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.06em',
              color:'var(--text-subtle)', textTransform:'uppercase',
              borderBottom:'1px solid var(--border)', background:'var(--bg-soft)',
            }}>
              <span>Label</span><span>Address</span><span>Type</span><span>Chain</span><span>Risk score</span><span>Alerts</span><span>Status</span>
            </div>
            {rows.map((r,i) => (
              <div key={i} style={{
                display:'grid', gap:10,
                gridTemplateColumns:'2fr 1.6fr 0.7fr 0.6fr 1fr 0.8fr 1fr',
                padding:'11px 14px', fontSize:12.5,
                borderBottom: i<rows.length-1 ? '1px solid var(--border)' : '0',
                alignItems:'center',
              }}>
                <div>
                  <div style={{fontWeight:600}}>{r.label}</div>
                  <div style={{fontSize:11, color:'var(--text-subtle)'}}>{r.sub}</div>
                </div>
                <div className="mono" style={{fontSize:11, color:'var(--text-muted)'}}>{r.addr}</div>
                <div>{r.type}</div>
                <div><span className="tag" style={{fontSize:10, padding:'2px 6px'}}>{r.chain}</span></div>
                <div style={{display:'flex', alignItems:'center', gap:8}}>
                  <span className="mono" style={{color: riskColor(r.risk), fontWeight:700}}>{r.risk}/100</span>
                  <div style={{width:40, height:4, background:'var(--surface-2)', borderRadius:2, overflow:'hidden'}}>
                    <div style={{width:r.risk+'%', height:'100%', background: riskColor(r.risk)}}/>
                  </div>
                </div>
                <div>{r.alerts}</div>
                <div>
                  <span style={{
                    padding:'2px 8px', borderRadius:999, fontSize:10.5,
                    background:'rgba(16,185,129,0.12)', color:'#059669', fontWeight:600,
                  }}>● {r.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ------ WALLET SCREENING MINI ------
function WalletScreeningMini() {
  return (
    <div style={{display:'flex', height:'100%'}}>
      <ProductSidebar active="screening"/>
      <div style={{flex:1, display:'flex', flexDirection:'column', minWidth:0}}>
        <ProductTopbar/>
        <div style={{padding:18, overflow:'hidden'}}>
          <h3 style={{fontSize:20, margin:0}}>Wallet screening</h3>
          <div style={{fontSize:12.5, color:'var(--text-muted)', marginTop:2, marginBottom:14}}>
            Check addresses against sanctions, criminal databases, and risk heuristics.
          </div>
          <div className="card" style={{padding:14, marginBottom:14}}>
            <div style={{
              fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)', marginBottom:8,
            }}>3 addresses · BTC, ETH</div>
            <div className="mono" style={{fontSize:11.5, lineHeight:1.8, color:'var(--text)'}}>
              1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa<br/>
              1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s<br/>
              0x742d35Cc6634C0532925a3b844Bc9e7595f4e...
            </div>
            <div style={{display:'flex', gap:8, marginTop:12}}>
              <button className="btn btn-primary btn-sm"><Icon name="search" size={13} stroke={2}/> Screen 3 addresses</button>
              <button className="btn btn-ghost btn-sm">Import CSV</button>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12}}>
            {[
              {addr:'1A1zP1eP5QGe...DivfNa', risk:22, label:'Binance hot wallet', tag:'Exchange', tone:'emerald'},
              {addr:'1NDyJtNTjmwk...igtobu1s', risk:98, label:'Lazarus Group', tag:'OFAC Sanctioned', tone:'red'},
              {addr:'0x742d35Cc...f4e', risk:64, label:'Unknown · DEX activity', tag:'Medium risk', tone:'amber'},
            ].map((r,i) => {
              const toneBg = {emerald:'rgba(16,185,129,0.06)', red:'rgba(239,68,68,0.06)', amber:'rgba(245,158,11,0.08)'};
              const toneFg = {emerald:'#059669', red:'#dc2626', amber:'#d97706'};
              return (
                <div key={i} className="card" style={{padding:14, background: toneBg[r.tone], borderColor: toneBg[r.tone].replace('0.06','0.18').replace('0.08','0.22')}}>
                  <div className="mono" style={{fontSize:10.5, color:'var(--text-muted)'}}>{r.addr}</div>
                  <div style={{
                    marginTop:10, fontFamily:'var(--font-display)',
                    fontSize:34, fontWeight:700, color: toneFg[r.tone], letterSpacing:'-0.03em',
                  }}>{r.risk}<span style={{fontSize:14, color:'var(--text-subtle)', fontWeight:500}}>/100</span></div>
                  <div style={{fontSize:12.5, marginTop:2, fontWeight:500}}>{r.label}</div>
                  <span className="tag" style={{marginTop:10, background:'transparent', color:toneFg[r.tone], borderColor:toneFg[r.tone]+'55'}}>{r.tag}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ------ CASE MANAGER MINI ------
function CaseManagerMini() {
  const cases = [
    {code:'CASE-2026-004', title:'Conti Ransomware Campaign', tags:['ransomware','cybercrime','multi-agency'], date:'04/25/2026', owner:'R. Martinez', p:'P1'},
    {code:'CASE-2026-006', title:'Terrorism Financing Investigation', tags:['terrorism','sanctions','urgent','+1 more'], date:'04/28/2026', owner:'J. Doe', p:'P1'},
    {code:'CASE-2026-001', title:'Lazarus Heist Investigation', tags:['apt','sanctions','high-value'], date:'04/22/2026', owner:'J. Doe', p:'P1'},
    {code:'CASE-2026-007', title:'Phishing Scam Network', tags:['scam','fraud','phishing'], date:'04/15/2026', owner:'A. Smith', p:'P2'},
    {code:'CASE-2026-002', title:'Darknet Market Operations', tags:['darknet','ongoing'], date:'04/01/2026', owner:'A. Smith', p:'P2'},
    {code:'CASE-2026-005', title:'ChipMixer Laundering Network', tags:['mixer','mixed','forensics'], date:'03/25/2026', owner:'K. Johnson', p:'P2'},
  ];
  return (
    <div style={{display:'flex', height:'100%'}}>
      <ProductSidebar active="cases"/>
      <div style={{flex:1, display:'flex', flexDirection:'column', minWidth:0}}>
        <ProductTopbar/>
        <div style={{padding:18, overflow:'auto'}} className="nice-scroll">
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:14}}>
            <div>
              <h3 style={{fontSize:20, margin:0}}>Case management</h3>
              <div style={{fontSize:12.5, color:'var(--text-muted)', marginTop:2}}>Manage investigations, evidence, and reports</div>
            </div>
            <button className="btn btn-primary btn-sm"><Icon name="folder" size={13} stroke={2}/> New case</button>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12}}>
            {cases.map(c => (
              <div key={c.code} className="card" style={{padding:14}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <span style={{
                    fontSize:9.5, fontWeight:700, letterSpacing:'0.1em',
                    padding:'3px 7px', borderRadius:4,
                    background:'rgba(91,76,255,0.1)', color:'var(--violet-700)',
                  }}>ACTIVE</span>
                  <span className="mono" style={{fontSize:10, color:'var(--text-subtle)'}}>{c.code}</span>
                </div>
                <div style={{fontWeight:600, fontSize:13.5, marginTop:10, letterSpacing:'-0.01em'}}>{c.title}</div>
                <div style={{display:'flex', flexWrap:'wrap', gap:4, marginTop:8}}>
                  {c.tags.map(t => (
                    <span key={t} className="tag" style={{fontSize:10, padding:'2px 6px'}}>{t}</span>
                  ))}
                </div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12, fontSize:11, color:'var(--text-subtle)'}}>
                  <span>📅 {c.date}</span>
                  <span>{c.owner}</span>
                  <span style={{color:'#dc2626', fontWeight:700}}>{c.p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  AppChrome, ProductSidebar, ProductTopbar,
  InvestigationGraph, DashboardMini, MonitoringMini, WalletScreeningMini, CaseManagerMini,
  DonutChart,
});
