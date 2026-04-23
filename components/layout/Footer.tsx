import React from 'react';
import { Link } from 'react-router-dom';
import { BitintLogo, Icon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const cols = [
    { title:'Platform', items:[
      ['Overview','/platform'],['Coverage','/platform'],['API','/platform'],['Auditability','/platform'],
    ]},
    { title:'Solutions', items:[
      ['Investigations','/solutions/investigations'],['Wallet screening','/solutions'],
      ['Monitoring','/solutions'],['Entity intelligence','/solutions'],
    ]},
    { title:'Company', items:[
      ['About','/company/about'],['Careers','/company/careers'],['Partners','/company/partners'],['Contact','/contact'],
    ]},
    { title:'Resources', items:[
      ['Docs','/resources'],['Glossary','/resources/glossary'],['Fundamentals','/resources/fundamentals'],['Security','/company/security'],
    ]},
  ];
  return (
    <footer className="footer">
      <div className="container-wide">
        <div style={{display:'grid', gridTemplateColumns:'1.4fr repeat(4, 1fr)', gap:32}}>
          <div>
            <BitintLogo size={30} showWordmark={true} />
            <p style={{color:'var(--text-muted)', fontSize:14, marginTop:16, maxWidth:280}}>
              Blockchain intelligence for investigators, compliance teams, and the agencies that back them.
            </p>
            <div style={{display:'flex', gap:10, marginTop:20, color:'var(--text-muted)'}}>
              <Link to="#" className="nav-link" style={{padding:8}}><Icon name="linkedin" size={16}/></Link>
              <Link to="#" className="nav-link" style={{padding:8}}><Icon name="github" size={16}/></Link>
              <Link to="#" className="nav-link" style={{padding:8}}><Icon name="mail" size={16}/></Link>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--text-subtle)', marginBottom:14}}>
                {c.title}
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:10}}>
                {c.items.map(([label, href]) => (
                  <Link key={label} to={href}
                     style={{fontSize:14, color:'var(--text-muted)'}}
                     onMouseEnter={(e)=>e.currentTarget.style.color='var(--text)'}
                     onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="divider" style={{margin:'48px 0 24px'}}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12.5, color:'var(--text-subtle)', flexWrap:'wrap', gap:12}}>
          <div className="flex gap-4">
            <span>© {new Date().getFullYear()} Bitint — All rights reserved.</span>
            <Link to="/legal/privacy" className="hover:text-text">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-text">Terms & Conditions</Link>
          </div>
          <div style={{display:'flex', gap:20}}>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR</span>
            <span className="mono text-brand">v3.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};