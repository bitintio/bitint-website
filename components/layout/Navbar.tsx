import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { BitintLogo, Icon } from '../ui/Icons';

const NAV_STRUCTURE = [
  { key:'platform', label:'Platform', href:'/platform', mega:[
    { title:'Platform overview', desc:'The complete intelligence stack', href:'/platform', icon:'graph' },
    { title:'Coverage & data', desc:'Chains, entities, and attribution depth', href:'/platform#coverage', icon:'database' },
    { title:'API & integrations', desc:'REST, streams, SDKs', href:'/platform#api', icon:'plug' },
    { title:'Auditability & evidence', desc:'Defensible investigations', href:'/platform#auditability', icon:'clipboard' },
  ]},
  { key:'solutions', label:'Solutions', href:'/solutions', mega:[
    { title:'Investigations', desc:'Graph-first case work', href:'/solutions/investigations', icon:'graph' },
    { title:'Wallet screening', desc:'Real-time risk checks', href:'/solutions', icon:'shield' },
    { title:'Transaction monitoring', desc:'Streaming alerts', href:'/solutions', icon:'activity' },
    { title:'Entity intelligence', desc:'Curated, sourced attribution', href:'/solutions', icon:'users' },
  ]},
  { key:'resources', label:'Resources', href:'/resources' },
  { key:'company', label:'Company', href:'/company/about' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<any>(null);

  const hover = (k: string) => {
    clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <nav className="nav">
      <div className="container-wide nav-inner" style={{position:'relative'}}>
        <Link to="/" onClick={() => setOpen(null)}>
          <BitintLogo size={30} showWordmark={true} />
        </Link>

        <div className="nav-links" onMouseLeave={leave}>
          {NAV_STRUCTURE.map(item => (
            <div key={item.key} onMouseEnter={()=>hover(item.key)} style={{position:'relative'}}>
              <Link
                to={item.href}
                className={`nav-link ${location.pathname.startsWith('/'+item.key) ? 'active' : ''}`}
                onClick={() => setOpen(null)}
              >
                {item.label}
                {item.mega && <Icon name="chevron-down" size={14} stroke={2}/>}
              </Link>
            </div>
          ))}
        </div>

        {open && NAV_STRUCTURE.find(i=>i.key===open)?.mega && (
          <div className="menu-panel" onMouseEnter={()=>hover(open)} onMouseLeave={leave}>
            <div>
              <div style={{
                fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-subtle)',
                letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:14,
              }}>{NAV_STRUCTURE.find(i=>i.key===open)?.label}</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
                {NAV_STRUCTURE.find(i=>i.key===open)?.mega?.map(m => (
                  <Link key={m.title} to={m.href}
                     onClick={() => setOpen(null)}
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
                  </Link>
                ))}
              </div>
            </div>
            <div style={{
              borderRadius: 16, padding: 20,
              background:'var(--gradient-brand-soft)',
              border:'1px solid rgba(91,76,255,0.18)',
              display:'flex', flexDirection:'column', justifyItems:'space-between',
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
              <Link to="/platform" onClick={() => setOpen(null)}
                 style={{color:'var(--violet-700)', fontWeight:600, fontSize:13, display:'inline-flex', alignItems:'center', gap:6, marginTop:16}}>
                Read the post <Icon name="arrow-up-right" size={14}/>
              </Link>
            </div>
          </div>
        )}

        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <button className="nav-link" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
            <Icon name={theme==='dark' ? 'sun' : 'moon'} size={16}/>
          </button>
          <Link to="/login" className="nav-link" style={{color:'var(--text)'}}>Sign in</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Book a demo <Icon name="arrow-right" size={14} stroke={2}/></Link>
        </div>
      </div>
    </nav>
  );
};