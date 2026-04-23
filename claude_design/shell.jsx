/* global React */
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ------- LOGO -------
function BitintLogo({ size = 28, mono = false, showWordmark = true }) {
  // stylized hex / stacked cube mark inspired by the provided logo
  const id = React.useId();
  return (
    <div style={{display:'inline-flex', alignItems:'center', gap: 10}}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`lg-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7d6dff"/>
            <stop offset="60%" stopColor="#5b4cff"/>
            <stop offset="100%" stopColor="#3ea6ff"/>
          </linearGradient>
          <linearGradient id={`lg2-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a094ff"/>
            <stop offset="100%" stopColor="#5b4cff"/>
          </linearGradient>
        </defs>
        {/* outer hex */}
        <path d="M24 3 L42 13 L42 35 L24 45 L6 35 L6 13 Z"
              fill={mono ? 'currentColor' : `url(#lg-${id})`}
              opacity={mono ? 0.12 : 0.14}/>
        <path d="M24 3 L42 13 L42 35 L24 45 L6 35 L6 13 Z"
              fill="none" stroke={mono ? 'currentColor' : `url(#lg-${id})`} strokeWidth="1.5"/>
        {/* stacked cubes */}
        <g transform="translate(24,24)">
          <path d="M0,-11 L10,-5 L0,1 L-10,-5 Z" fill={mono ? 'currentColor' : `url(#lg2-${id})`} opacity="0.9"/>
          <path d="M0,-5 L10,1 L0,7 L-10,1 Z" fill={mono ? 'currentColor' : `url(#lg-${id})`} opacity="0.95"/>
          <path d="M0,1 L10,7 L0,13 L-10,7 Z" fill={mono ? 'currentColor' : `url(#lg2-${id})`}/>
        </g>
        {/* connector dots */}
        <circle cx="6" cy="13" r="1.6" fill={mono ? 'currentColor' : '#3ea6ff'}/>
        <circle cx="42" cy="13" r="1.6" fill={mono ? 'currentColor' : '#3ea6ff'}/>
        <circle cx="42" cy="35" r="1.6" fill={mono ? 'currentColor' : '#3ea6ff'}/>
        <circle cx="6"  cy="35" r="1.6" fill={mono ? 'currentColor' : '#3ea6ff'}/>
        <circle cx="24" cy="45" r="1.6" fill={mono ? 'currentColor' : '#3ea6ff'}/>
      </svg>
      {showWordmark && (
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: size * 0.72,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
        }}>
          Bit<span style={{
            background:'var(--gradient-brand)',
            WebkitBackgroundClip:'text',
            backgroundClip:'text',
            color:'transparent',
          }}>int</span>
        </span>
      )}
    </div>
  );
}

// ------- ICONS -------
function Icon({ name, size = 18, stroke = 1.6 }) {
  const common = {
    width: size, height: size, viewBox:'0 0 24 24', fill:'none',
    stroke:'currentColor', strokeWidth: stroke, strokeLinecap:'round', strokeLinejoin:'round'
  };
  switch(name) {
    case 'arrow-right': return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'arrow-up-right': return <svg {...common}><path d="M7 17L17 7M8 7h9v9"/></svg>;
    case 'check': return <svg {...common}><path d="M20 6 9 17l-5-5"/></svg>;
    case 'chevron-down': return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>;
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'shield': return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/></svg>;
    case 'graph': return <svg {...common}><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><path d="m7 6 3 4M17 6l-3 4M7 18l3-4M17 18l-3-4"/></svg>;
    case 'bell': return <svg {...common}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
    case 'eye': return <svg {...common}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'clipboard': return <svg {...common}><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></svg>;
    case 'plug': return <svg {...common}><path d="M9 2v4M15 2v4M6 10h12v4a6 6 0 0 1-12 0Z"/><path d="M12 20v2"/></svg>;
    case 'book': return <svg {...common}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5Z"/><path d="M4 4.5v18"/></svg>;
    case 'users': return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'zap': return <svg {...common}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>;
    case 'lock': return <svg {...common}><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'globe': return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>;
    case 'database': return <svg {...common}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/></svg>;
    case 'activity': return <svg {...common}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
    case 'folder': return <svg {...common}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>;
    case 'filter': return <svg {...common}><path d="M22 3H2l8 9.5V19l4 2v-8.5Z"/></svg>;
    case 'mail': return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>;
    case 'phone': return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4Z"/></svg>;
    case 'pin': return <svg {...common}><path d="M12 22s-8-7.6-8-13a8 8 0 1 1 16 0c0 5.4-8 13-8 13Z"/><circle cx="12" cy="9" r="3"/></svg>;
    case 'github': return <svg {...common}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3M15 21v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.5A4.7 4.7 0 0 0 19 5.3 4.3 4.3 0 0 0 18.9 2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C7 1.7 6 2 6 2a4.3 4.3 0 0 0-.1 3.3 4.7 4.7 0 0 0-1.2 3.4c0 4.9 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V21"/></svg>;
    case 'x': return <svg {...common}><path d="M18 6 6 18M6 6l12 12"/></svg>;
    case 'menu': return <svg {...common}><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
    case 'linkedin': return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg>;
    case 'sun': return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
    case 'moon': return <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>;
    case 'settings': return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="3"/></svg>;
  }
}

// ------- NAV -------
const NAV_STRUCTURE = [
  { key:'platform', label:'Platform', href:'#/platform', mega:[
    { title:'Platform overview', desc:'The complete intelligence stack', href:'#/platform', icon:'graph' },
    { title:'Coverage & data', desc:'Chains, entities, and attribution depth', href:'#/platform', icon:'database' },
    { title:'API & integrations', desc:'REST, streams, SDKs', href:'#/platform', icon:'plug' },
    { title:'Auditability & evidence', desc:'Defensible investigations', href:'#/platform', icon:'clipboard' },
  ]},
  { key:'solutions', label:'Solutions', href:'#/solutions', mega:[
    { title:'Investigations', desc:'Graph-first case work', href:'#/solutions/investigations', icon:'graph' },
    { title:'Wallet screening', desc:'Real-time risk checks', href:'#/solutions', icon:'shield' },
    { title:'Transaction monitoring', desc:'Streaming alerts', href:'#/solutions', icon:'activity' },
    { title:'Entity intelligence', desc:'Curated, sourced attribution', href:'#/solutions', icon:'users' },
  ]},
  { key:'resources', label:'Resources', href:'#/' },
  { key:'pricing', label:'Company', href:'#/' },
];

function Nav({ current, onNav, theme, onThemeToggle }) {
  const [open, setOpen] = useState(null);
  const closeTimer = useRef(null);
  const hover = (k) => {
    clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(()=>setOpen(null), 120);
  };

  return (
    <nav className="nav">
      <div className="container-wide nav-inner" style={{position:'relative'}}>
        <a href="#/" onClick={(e)=>{e.preventDefault(); onNav('/');}}>
          <BitintLogo size={30}/>
        </a>

        <div className="nav-links" onMouseLeave={leave}>
          {NAV_STRUCTURE.map(item => (
            <div key={item.key} onMouseEnter={()=>hover(item.key)} style={{position:'relative'}}>
              <a
                href={item.href}
                className={`nav-link ${current?.startsWith('/'+item.key) ? 'active' : ''}`}
                onClick={(e)=>{e.preventDefault(); onNav(item.href.slice(1));}}
              >
                {item.label}
                {item.mega && <Icon name="chevron-down" size={14} stroke={2}/>}
              </a>
            </div>
          ))}
        </div>

        {open && NAV_STRUCTURE.find(i=>i.key===open)?.mega && (
          <div className="menu-panel" onMouseEnter={()=>hover(open)} onMouseLeave={leave}>
            <div>
              <div style={{
                fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-subtle)',
                letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:14,
              }}>{NAV_STRUCTURE.find(i=>i.key===open).label}</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
                {NAV_STRUCTURE.find(i=>i.key===open).mega.map(m => (
                  <a key={m.title} href={m.href}
                     onClick={(e)=>{e.preventDefault(); onNav(m.href.slice(1)); setOpen(null);}}
                     style={{
                       display:'flex', gap:12, padding:'12px', borderRadius:12,
                       color:'var(--text)', transition:'background .15s ease',
                     }}
                     onMouseEnter={(e)=>e.currentTarget.style.background='var(--surface-2)'}
                     onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
                    <div style={{
                      width:36, height:36, borderRadius:10,
                      background:'var(--gradient-brand-soft)',
                      display:'grid', placeItems:'center', color:'var(--violet-600)',
                      flexShrink:0,
                    }}>
                      <Icon name={m.icon} size={18}/>
                    </div>
                    <div>
                      <div style={{fontWeight:600, fontSize:14}}>{m.title}</div>
                      <div style={{fontSize:12.5, color:'var(--text-muted)', marginTop:2}}>{m.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div style={{
              borderRadius: 16, padding: 20,
              background:'var(--gradient-brand-soft)',
              border:'1px solid rgba(91,76,255,0.18)',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
            }}>
              <div>
                <div className="eyebrow" style={{background:'rgba(255,255,255,0.6)'}}>New</div>
                <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:600, marginTop:12, letterSpacing:'-0.02em', lineHeight:1.15}}>
                  Attribution 3.0: sourced, scored, defensible
                </div>
                <p style={{color:'var(--text-muted)', fontSize:13.5, marginTop:8}}>
                  Every attribution now ships with confidence, evidence trail, and analyst notes.
                </p>
              </div>
              <a href="#/platform" onClick={(e)=>{e.preventDefault(); onNav('/platform'); setOpen(null);}}
                 style={{color:'var(--violet-700)', fontWeight:600, fontSize:13, display:'inline-flex', alignItems:'center', gap:6, marginTop:16}}>
                Read the post <Icon name="arrow-up-right" size={14}/>
              </a>
            </div>
          </div>
        )}

        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <button className="nav-link" onClick={onThemeToggle} aria-label="Toggle theme" title="Toggle theme">
            <Icon name={theme==='dark' ? 'sun' : 'moon'} size={16}/>
          </button>
          <a href="#/login" onClick={(e)=>{e.preventDefault(); onNav('/login');}}
             className="nav-link" style={{color:'var(--text)'}}>Sign in</a>
          <a href="#/contact" onClick={(e)=>{e.preventDefault(); onNav('/contact');}}
             className="btn btn-primary btn-sm">Book a demo <Icon name="arrow-right" size={14} stroke={2}/></a>
        </div>
      </div>
    </nav>
  );
}

// ------- FOOTER -------
function Footer({ onNav }) {
  const cols = [
    { title:'Platform', items:[
      ['Overview','/platform'],['Coverage','/platform'],['API','/platform'],['Auditability','/platform'],
    ]},
    { title:'Solutions', items:[
      ['Investigations','/solutions/investigations'],['Wallet screening','/solutions'],
      ['Monitoring','/solutions'],['Entity intelligence','/solutions'],
    ]},
    { title:'Company', items:[
      ['About','/'],['Careers','/'],['Partners','/'],['Contact','/contact'],
    ]},
    { title:'Resources', items:[
      ['Docs','/'],['Glossary','/'],['Blog','/'],['Security','/'],
    ]},
  ];
  return (
    <footer className="footer">
      <div className="container-wide">
        <div style={{display:'grid', gridTemplateColumns:'1.4fr repeat(4, 1fr)', gap:32}}>
          <div>
            <BitintLogo size={30}/>
            <p style={{color:'var(--text-muted)', fontSize:14, marginTop:16, maxWidth:280}}>
              Blockchain intelligence for investigators, compliance teams, and the agencies that back them.
            </p>
            <div style={{display:'flex', gap:10, marginTop:20, color:'var(--text-muted)'}}>
              <a href="#" className="nav-link" style={{padding:8}}><Icon name="linkedin" size={16}/></a>
              <a href="#" className="nav-link" style={{padding:8}}><Icon name="github" size={16}/></a>
              <a href="#" className="nav-link" style={{padding:8}}><Icon name="mail" size={16}/></a>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--text-subtle)', marginBottom:14}}>
                {c.title}
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:10}}>
                {c.items.map(([label, href]) => (
                  <a key={label} href={'#'+href} onClick={(e)=>{e.preventDefault(); onNav(href);}}
                     style={{fontSize:14, color:'var(--text-muted)'}}
                     onMouseEnter={(e)=>e.currentTarget.style.color='var(--text)'}
                     onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="divider" style={{margin:'48px 0 24px'}}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12.5, color:'var(--text-subtle)', flexWrap:'wrap', gap:12}}>
          <div>© 2026 Bitint — All rights reserved.</div>
          <div style={{display:'flex', gap:20}}>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR</span>
            <span className="mono">v3.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Expose
Object.assign(window, { BitintLogo, Icon, Nav, Footer });
