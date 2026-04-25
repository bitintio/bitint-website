import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { BitintLogo, Icon } from '../ui/Icons';

const PLATFORM_ITEMS = [
  { title:'Platform Overview', desc:'The complete intelligence stack', href:'/platform', icon:'graph' },
  { title:'Wallet Screening', desc:'Real-time risk checks on any address', href:'/platform/wallet-screening', icon:'shield' },
  { title:'Transaction Monitoring', desc:'Streaming alerts for compliance', href:'/platform/transaction-monitoring', icon:'activity' },
  { title:'Investigation Graph', desc:'Graph-first case workflows', href:'/platform/investigation-graph', icon:'eye' },
  { title:'Cross-chain Tracing', desc:'Follow funds across 150+ chains', href:'/platform/cross-chain-tracing', icon:'globe' },
  { title:'Entity Intelligence', desc:'Sourced, scored attribution data', href:'/platform/entity-intelligence', icon:'users' },
  { title:'White-box Risk Scoring', desc:'Explainable, auditable risk models', href:'/platform/white-box-risk-scoring', icon:'clipboard' },
  { title:'API & Data Layer', desc:'REST, streams, SDKs', href:'/platform/api', icon:'plug' },
];

const SOLUTIONS_ITEMS = [
  { title:'AML / KYT Compliance', desc:'Automate Travel Rule and SAR workflows', href:'/solutions/aml-kyt-compliance', icon:'shield' },
  { title:'Sanctions Screening', desc:'OFAC, EU, UN sanctions checks', href:'/solutions/sanctions-screening', icon:'filter' },
  { title:'Crypto Investigations', desc:'Trace, cluster, and build cases', href:'/solutions/crypto-investigations', icon:'graph' },
  { title:'Stablecoin Risk Management', desc:'Monitor issuer and redemption risk', href:'/solutions/stablecoin-risk-management', icon:'database' },
  { title:'VASP & Counterparty Due Diligence', desc:'Assess exchange and counterparty exposure', href:'/solutions/vasp-counterparty-due-diligence', icon:'users' },
  { title:'Case Reporting & Audit Trails', desc:'Export defensible evidence packages', href:'/solutions/case-reporting-audit-trails', icon:'clipboard' },
  { title:'Cross-chain Exposure Analysis', desc:'Map multi-chain risk surfaces', href:'/solutions/cross-chain-exposure-analysis', icon:'globe' },
];

const INDUSTRIES_ITEMS = [
  { title:'VASPs & Exchanges', desc:'Compliance at exchange scale', href:'/industries/vasps-exchanges', icon:'zap' },
  { title:'Stablecoin Issuers', desc:'Redemption risk and reserves', href:'/industries/stablecoin-issuers', icon:'database' },
  { title:'Financial Institutions', desc:'Banks and fintechs with crypto exposure', href:'/industries/financial-institutions-fintechs', icon:'lock' },
  { title:'Law Enforcement', desc:'Investigations and asset seizure', href:'/industries/law-enforcement-investigators', icon:'shield' },
  { title:'Regulators & Supervisors', desc:'Supervisory intelligence', href:'/industries/regulators-supervisors', icon:'eye' },
  { title:'Crypto Payments & PSPs', desc:'Payment flow screening', href:'/industries/crypto-payments-psps', icon:'activity' },
  { title:'Web3 / DeFi Risk Teams', desc:'Protocol-level risk management', href:'/industries/web3-defi-risk-teams', icon:'globe' },
];

const RESOURCES_ITEMS = [
  { title:'Resources Overview', desc:'Guides, docs, and knowledge base', href:'/resources', icon:'book' },
  { title:'Glossary', desc:'Blockchain intelligence terminology', href:'/resources/glossary', icon:'search' },
  { title:'FAQ', desc:'Common questions answered', href:'/resources/faq', icon:'bell' },
  { title:'Fundamentals', desc:'Deep-dive technical articles', href:'/resources/fundamentals', icon:'folder' },
  { title:'Blog', desc:'Product updates and industry insights', href:'/resources/blog', icon:'clipboard' },
];

const COMPANY_ITEMS = [
  { title:'About Us', desc:'Our mission and principles', href:'/company/about', icon:'users' },
  { title:'Careers', desc:'Join the intelligence team', href:'/company/careers', icon:'zap' },
  { title:'Partners', desc:'Technology and investigative network', href:'/company/partners', icon:'plug' },
  { title:'Contact Us', desc:'Get in touch with our experts', href:'/contact', icon:'mail' },
];

type MegaKey = 'platform' | 'solutions' | 'industries' | 'resources' | 'company' | null;

const NAV_TOP = [
  { key: 'platform' as MegaKey, label: 'Platform', href: '/platform' },
  { key: 'solutions' as MegaKey, label: 'Solutions', href: '/solutions/aml-kyt-compliance' },
  { key: 'industries' as MegaKey, label: 'Industries', href: '/industries/vasps-exchanges' },
  { key: 'resources' as MegaKey, label: 'Resources', href: '/resources' },
  { key: 'company' as MegaKey, label: 'Company', href: '/company/about' },
];

const MEGA_DATA: Record<string, typeof PLATFORM_ITEMS> = {
  platform: PLATFORM_ITEMS,
  solutions: SOLUTIONS_ITEMS,
  industries: INDUSTRIES_ITEMS,
  resources: RESOURCES_ITEMS,
  company: COMPANY_ITEMS,
};

function MegaMenuItem({ item, onClose }: { item: typeof PLATFORM_ITEMS[0], onClose: () => void }) {
  return (
    <Link
      to={item.href}
      onClick={onClose}
      style={{
        display:'flex', gap:12, padding:'10px 12px', borderRadius:10,
        color:'var(--text)', transition:'background .15s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-2)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{
        width:34, height:34, borderRadius:8,
        background:'var(--gradient-brand-soft)',
        display:'grid', placeItems:'center', color:'var(--violet-600)',
        flexShrink:0, fontSize:14,
      }}>
        <Icon name={item.icon} size={16}/>
      </div>
      <div>
        <div style={{fontWeight:600, fontSize:13.5, lineHeight:1.3}}>{item.title}</div>
        <div style={{fontSize:12, color:'var(--text-muted)', marginTop:1, lineHeight:1.35}}>{item.desc}</div>
      </div>
    </Link>
  );
}

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState<MegaKey>(null);
  const closeTimer = useRef<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const hover = (k: MegaKey) => {
    clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };
  const close = () => setOpen(null);

  const megaItems = open ? MEGA_DATA[open] : null;

  return (
    <nav className="nav">
      <div className="container-wide nav-inner" style={{position:'relative'}}>
        <Link to="/" onClick={close}>
          <BitintLogo size={36} showWordmark={true} />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links max-lg:hidden" onMouseLeave={leave}>
          {NAV_TOP.map(item => (
            <div key={item.label} onMouseEnter={() => hover(item.key)} style={{position:'relative'}}>
              <Link
                to={item.href}
                className={`nav-link ${location.pathname.startsWith('/' + (item.key || 'about')) ? 'active' : ''}`}
                onClick={close}
              >
                {item.label}
                {item.key && <Icon name="chevron-down" size={14} stroke={2}/>}
              </Link>
            </div>
          ))}
        </div>

        {/* Mega menu panel */}
        {open && megaItems && (
          <div
            className="menu-panel"
            onMouseEnter={() => hover(open)}
            onMouseLeave={leave}
            style={{maxHeight:'80vh', overflowY:'auto'}}
          >
            <div>
              <div style={{
                fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-subtle)',
                letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:12,
              }}>{open}</div>
              <div style={{
                display:'grid',
                gridTemplateColumns: megaItems.length > 5 ? '1fr 1fr' : '1fr',
                gap:4,
              }}>
                {megaItems.map(m => (
                  <MegaMenuItem key={m.title} item={m} onClose={close} />
                ))}
              </div>
            </div>
            <div style={{
              borderRadius: 16, padding: 20,
              background:'var(--gradient-brand-soft)',
              border:'1px solid rgba(160,43,230,0.18)',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
            }}>
              <div>
                <div className="eyebrow" style={{background:'rgba(255,255,255,0.6)'}}>New</div>
                <div style={{fontFamily:'var(--font-display)', fontSize:20, fontWeight:600, marginTop:12, letterSpacing:'-0.02em', lineHeight:1.15}}>
                  White-box Risk Scoring: explainable, auditable, defensible
                </div>
                <p style={{color:'var(--text-muted)', fontSize:13, marginTop:8, lineHeight:1.5}}>
                  Every risk score ships with full attribution provenance, evidence trail, and analyst-readable rationale.
                </p>
              </div>
              <Link to="/platform/white-box-risk-scoring" onClick={close}
                 style={{color:'var(--violet-700)', fontWeight:600, fontSize:13, display:'inline-flex', alignItems:'center', gap:6, marginTop:16}}>
                See White-box Risk Scoring <Icon name="arrow-up-right" size={14}/>
              </Link>
            </div>
          </div>
        )}

        {/* Right side */}
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <button className="nav-link" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
            <Icon name={theme==='dark' ? 'sun' : 'moon'} size={16}/>
          </button>
          <Link to="/login" className="nav-link max-sm:hidden" style={{color:'var(--text)'}}>Sign in</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Request Demo <Icon name="arrow-right" size={14} stroke={2}/></Link>

          {/* Mobile menu toggle */}
          <button className="nav-link lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <Icon name={mobileOpen ? 'x' : 'menu'} size={20}/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background:'var(--bg)', borderTop:'1px solid var(--border)',
          padding:'16px 20px', position:'absolute', top:'100%', left:0, right:0, zIndex:100,
          boxShadow:'var(--shadow-lg)',
        }} className="lg:hidden">
          {NAV_TOP.map(item => (
            <Link key={item.label} to={item.href}
              className="nav-link" style={{display:'block', padding:'12px 0'}}
              onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <hr className="divider" style={{margin:'12px 0'}}/>
          <Link to="/login" className="nav-link" style={{display:'block', padding:'12px 0'}} onClick={() => setMobileOpen(false)}>Sign in</Link>
          <Link to="/contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:8}} onClick={() => setMobileOpen(false)}>
            Request Demo <Icon name="arrow-right" size={14} stroke={2}/>
          </Link>
        </div>
      )}
    </nav>
  );
};