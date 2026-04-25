import React from 'react';
import { Link } from 'react-router-dom';
import { BitintLogo, Icon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const cols = [
    { title:'Platform', items:[
      ['Overview','/platform'],['Wallet Screening','/platform/wallet-screening'],
      ['Transaction Monitoring','/platform/transaction-monitoring'],['Investigation Graph','/platform/investigation-graph'],
      ['Cross-chain Tracing','/platform/cross-chain-tracing'],['White-box Risk Scoring','/platform/white-box-risk-scoring'],
      ['API & Data Layer','/platform/api'],
    ]},
    { title:'Solutions', items:[
      ['AML / KYT Compliance','/solutions/aml-kyt-compliance'],['Sanctions Screening','/solutions/sanctions-screening'],
      ['Crypto Investigations','/solutions/crypto-investigations'],['Stablecoin Risk','/solutions/stablecoin-risk-management'],
      ['Case Reporting','/solutions/case-reporting-audit-trails'],['Cross-chain Exposure','/solutions/cross-chain-exposure-analysis'],
    ]},
    { title:'Industries', items:[
      ['VASPs & Exchanges','/industries/vasps-exchanges'],['Stablecoin Issuers','/industries/stablecoin-issuers'],
      ['Financial Institutions','/industries/financial-institutions-fintechs'],['Law Enforcement','/industries/law-enforcement-investigators'],
      ['Regulators','/industries/regulators-supervisors'],['Crypto Payments','/industries/crypto-payments-psps'],
    ]},
    { title:'Resources', items:[
      ['Glossary','/resources/glossary'],['FAQ','/resources/faq'],
      ['Fundamentals','/resources/fundamentals'],['Blog','/resources/blog'],
    ]},
    { title:'Company', items:[
      ['About Us','/company/about'],['Careers','/company/careers'],
      ['Partners','/company/partners'],['Contact Us','/company/contact'],
      ['Privacy Policy','/privacy-policy'],['Terms & Conditions','/terms-and-conditions'],
    ]},
  ];

  return (
    <footer className="footer">
      <div className="container-wide">
        <div style={{display:'grid', gridTemplateColumns:'1.4fr repeat(5, 1fr)', gap:32}} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <Link to="/" style={{display: 'inline-block', marginBottom: 20}}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{display: 'block', height: 48, width: 'auto', objectFit: 'contain'}}
              >
                <source src="/Bitint_Transparent.mov" type="video/quicktime" />
                <source src="/Bitint_Transparent.mp4" type="video/mp4" />
              </video>
            </Link>
            <p style={{color:'var(--text-muted)', fontSize:14, marginTop:10, maxWidth:280, lineHeight:1.55}}>
              Blockchain intelligence for investigators, compliance teams, and the agencies that back them.
            </p>
            <div style={{display:'flex', gap:8, marginTop:20, color:'var(--text-muted)'}}>
              <a href="https://linkedin.com/company/bitint" target="_blank" rel="noopener noreferrer" className="nav-link" style={{padding:8}} aria-label="LinkedIn"><Icon name="linkedin" size={16}/></a>
              <a href="https://x.com/bitintio" target="_blank" rel="noopener noreferrer" className="nav-link" style={{padding:8}} aria-label="X (Twitter)"><Icon name="x-twitter" size={16}/></a>
              <a href="https://youtube.com/@bitint" target="_blank" rel="noopener noreferrer" className="nav-link" style={{padding:8}} aria-label="YouTube"><Icon name="youtube" size={16}/></a>
              <a href="mailto:contact@bitint.io" className="nav-link" style={{padding:8}} aria-label="Email"><Icon name="mail" size={16}/></a>
              <a href="https://wa.me/16504229155" target="_blank" rel="noopener noreferrer" className="nav-link" style={{padding:8}} aria-label="WhatsApp"><Icon name="whatsapp" size={16}/></a>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--text-subtle)', marginBottom:14}}>
                {c.title}
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                {c.items.map(([label, href]) => (
                  <Link key={label} to={href}
                     style={{fontSize:13, color:'var(--text-muted)', transition:'color .15s ease'}}
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
          <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
            <span>© {new Date().getFullYear()} Bitint — All rights reserved.</span>
            <Link to="/privacy-policy" style={{transition:'color .15s ease'}} onMouseEnter={(e)=>e.currentTarget.style.color='var(--text)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-subtle)'}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" style={{transition:'color .15s ease'}} onMouseEnter={(e)=>e.currentTarget.style.color='var(--text)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-subtle)'}>Terms & Conditions</Link>
          </div>
          <div style={{display:'flex', gap:20}}>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};