import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Icon } from '../components/ui/Icons';
import { SubPage, WorkflowSteps, PageCTA } from '../components/PageLayout';
import { NotFound } from './GenericPages';

/* ─── Industries Overview ─── */

const IndustriesOverview = () => {
  const industries = [
    {id:'vasps-exchanges', icon:'zap', title:'VASPs & Exchanges', subtitle:'Compliance at exchange scale — screening, monitoring, and Travel Rule automation.', color:'#A02BE6'},
    {id:'stablecoin-issuers', icon:'database', title:'Stablecoin Issuers', subtitle:'Redemption risk monitoring, reserve analysis, and counterparty exposure tracking.', color:'#2BFFFF'},
    {id:'financial-institutions-fintechs', icon:'lock', title:'Financial Institutions & Fintechs', subtitle:'AML, KYT, and counterparty risk for banks and fintechs with crypto exposure.', color:'#834BDA'},
    {id:'law-enforcement-investigators', icon:'shield', title:'Law Enforcement & Investigators', subtitle:'Trace illicit proceeds, seize assets, and build court-ready cases.', color:'#2B3990'},
    {id:'regulators-supervisors', icon:'eye', title:'Regulators & Supervisors', subtitle:'Supervisory intelligence and market-level risk monitoring.', color:'#A02BE6'},
    {id:'crypto-payments-psps', icon:'activity', title:'Crypto Payments & PSPs', subtitle:'Payment flow screening and merchant risk management.', color:'#2BFFFF'},
    {id:'web3-defi-risk-teams', icon:'globe', title:'Web3 / DeFi Risk Teams', subtitle:'Protocol-level risk, governance exposure, and smart contract analytics.', color:'#834BDA'},
  ];

  return (
    <>
      <Helmet>
        <title>Industries | Bitint</title>
        <meta name="description" content="Blockchain intelligence tailored to the regulatory and operational mandates of your sector." />
      </Helmet>
      <section className="hero-bg" style={{padding:'80px 0 60px'}}>
        <div className="container-wide" style={{textAlign:'center'}}>
          <div className="eyebrow" style={{margin:'0 auto'}}>Industries</div>
          <h1 className="display-1" style={{marginTop:20, maxWidth:900, margin:'20px auto 0'}}>
            Built for teams facing <span className="text-gradient">real-world consequences.</span>
          </h1>
          <p className="muted" style={{fontSize:18, marginTop:20, maxWidth:640, margin:'0 auto', lineHeight:1.55}}>
            Blockchain intelligence tailored to the specific regulatory and operational mandates of your sector.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wide">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(ind => (
              <Link key={ind.id} to={`/industries/${ind.id}`}
                className="card flex flex-col" style={{padding:24, textDecoration:'none', position:'relative', overflow:'hidden'}}>
                <div style={{position:'absolute', top:0, left:0, width:3, height:'100%', background:ind.color, borderRadius:'3px 0 0 3px'}}/>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                  border:'1px solid rgba(160,43,230,0.18)',
                  display:'grid', placeItems:'center',
                }}><Icon name={ind.icon} size={22} stroke={2}/></div>
                <h3 style={{fontSize:20, marginTop:18}}>{ind.title}</h3>
                <p className="muted" style={{fontSize:14, marginTop:8, lineHeight:1.55, flex:1}}>{ind.subtitle}</p>
                <div style={{display:'flex', alignItems:'center', gap:6, marginTop:20, color:'var(--violet-600)', fontWeight:600, fontSize:13}}>
                  View Industry <Icon name="arrow-up-right" size={14} stroke={2}/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageCTA title="See how Bitint serves your industry" desc="Book a 30-minute demo focused on your industry's specific compliance and investigation workflows." />
    </>
  );
};

/* ─── Industry Sub-pages ─── */

const VASPsExchanges = () => (
  <SubPage
    seo={{title:'VASPs & Exchanges', desc:'Blockchain intelligence for VASPs and exchanges — wallet screening, Travel Rule, and transaction monitoring at scale.'}}
    hero={{eyebrow:'VASPs & Exchanges', title:'Compliance at exchange scale.', subtitle:'Screen wallets at onboarding, monitor transactions in real time, automate Travel Rule workflows, and generate audit-ready reports — all from one platform.'}}
    sections={[
      {title:'Key pain points', content: <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}} className="max-sm:grid-cols-1">
        {['Pre-deposit screening at high throughput','Travel Rule compliance across jurisdictions','False positive management and alert fatigue','Regulator examination readiness'].map(p => (
          <div key={p} className="card" style={{padding:18, display:'flex', gap:10, alignItems:'center'}}>
            <div style={{width:20, height:20, borderRadius:6, background:'var(--gradient-brand-soft)', color:'var(--violet-600)', display:'grid', placeItems:'center'}}><Icon name="check" size={12} stroke={2.5}/></div>
            <span style={{fontSize:14}}>{p}</span>
          </div>
        ))}
      </div>},
      {title:'Workflows', content: <WorkflowSteps steps={[
        {step:'1', title:'Pre-deposit screening', desc:'Block incoming funds from sanctioned entities automatically before they reach your hot wallet.'},
        {step:'2', title:'Continuous monitoring', desc:'Real-time transaction monitoring with configurable alert rules tuned to your risk appetite.'},
        {step:'3', title:'Travel Rule automation', desc:'Automated beneficiary/originator data exchange with compliant counterparties.'},
        {step:'4', title:'Regulatory reporting', desc:'One-click SAR filing, examination-ready audit exports, and compliance dashboard.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Sanctions Screening', href:'/solutions/sanctions-screening'}]}
  />
);

const StablecoinIssuers = () => (
  <SubPage
    seo={{title:'Stablecoin Issuers', desc:'Redemption risk monitoring, reserve analysis, and counterparty exposure for stablecoin issuers.'}}
    hero={{eyebrow:'Stablecoin Issuers', title:'Monitor redemption risk before it materializes.', subtitle:'Track holder concentration, redemption patterns, reserve composition, and counterparty exposure across your stablecoin network in real time.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Stablecoin issuers face unique compliance challenges — from redemption freezes for sanctioned holders to reserve transparency requirements. Bitint provides protocol-level monitoring that gives compliance teams and treasury operations the data they need to manage risk proactively.</p>},
    ]}
    relatedSolutions={[{label:'Stablecoin Risk Management', href:'/solutions/stablecoin-risk-management'},{label:'Sanctions Screening', href:'/solutions/sanctions-screening'}]}
  />
);

const FinancialInstitutions = () => (
  <SubPage
    seo={{title:'Financial Institutions & Fintechs', desc:'AML, KYT, and counterparty risk for banks and fintechs with crypto exposure.'}}
    hero={{eyebrow:'Financial Institutions & Fintechs', title:'Crypto exposure shouldn\'t mean compliance gaps.', subtitle:'Banks, neobanks, and fintechs with crypto-adjacent products need blockchain intelligence that integrates with existing compliance infrastructure — not a separate tool.'}}
    sections={[
      {title:'Workflows', content: <WorkflowSteps steps={[
        {step:'1', title:'Customer onboarding screening', desc:'Screen historical wallet exposure to high-risk entities during customer due diligence.'},
        {step:'2', title:'Ongoing monitoring', desc:'Alert on sudden changes in customer risk profiles — new sanctions exposure, unusual volume, or high-risk counterparties.'},
        {step:'3', title:'Regulatory reporting', desc:'Generate audit-ready reports for examiners, including full attribution provenance and scoring rationale.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'VASP Due Diligence', href:'/solutions/vasp-counterparty-due-diligence'}]}
  />
);

const LawEnforcement = () => (
  <SubPage
    seo={{title:'Law Enforcement & Investigators', desc:'Trace illicit proceeds, seize assets, and build court-ready cases with blockchain investigation tools.'}}
    hero={{eyebrow:'Law Enforcement & Investigators', title:'Follow the money. Build the case. Seize the assets.', subtitle:'Investigation tools designed for agencies that need court-ready evidence, cross-border collaboration, and defensible outputs — not compliance dashboards repurposed for investigations.', ctaLabel:'Request Agency Demo'}}
    sections={[
      {title:'Investigation workflows', content: <WorkflowSteps steps={[
        {step:'1', title:'Subpoena and exchange data ingestion', desc:'Import exchange records, bank statements, and seized device data directly into the investigation graph.'},
        {step:'2', title:'Cluster expansion', desc:'Identify the full scope of a criminal enterprise through automatic address clustering and entity attribution.'},
        {step:'3', title:'Cross-chain and mixer tracing', desc:'Follow funds through bridges, mixers, and DeFi protocols without losing the evidence trail.'},
        {step:'4', title:'Warrant and asset seizure support', desc:'Export evidence packages that meet evidentiary standards for warrants, asset freezes, and forfeiture proceedings.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'Crypto Investigations', href:'/solutions/crypto-investigations'},{label:'Case Reporting', href:'/solutions/case-reporting-audit-trails'}]}
  />
);

const Regulators = () => (
  <SubPage
    seo={{title:'Regulators & Supervisors', desc:'Supervisory intelligence and market-level risk monitoring for regulatory agencies.'}}
    hero={{eyebrow:'Regulators & Supervisors', title:'Supervisory intelligence for the blockchain economy.', subtitle:'Market-level risk monitoring, entity compliance assessments, and industry-wide exposure analysis — tools designed for regulatory oversight, not just individual compliance.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Regulators need to see the forest, not just the trees. Bitint provides market-level analytics, entity compliance rankings, and cross-jurisdictional exposure mapping that enables informed supervisory decisions and proportionate regulatory action.</p>},
    ]}
    relatedSolutions={[{label:'Sanctions Screening', href:'/solutions/sanctions-screening'},{label:'Cross-chain Exposure', href:'/solutions/cross-chain-exposure-analysis'}]}
  />
);

const CryptoPayments = () => (
  <SubPage
    seo={{title:'Crypto Payments & PSPs', desc:'Payment flow screening and merchant risk management for crypto payment processors.'}}
    hero={{eyebrow:'Crypto Payments & PSPs', title:'Screen every payment. Protect every merchant.', subtitle:'Real-time payment flow screening, merchant risk scoring, and chargeback-related investigation tools for crypto payment processors and payment service providers.'}}
    sections={[
      {title:'Workflows', content: <WorkflowSteps steps={[
        {step:'1', title:'Pre-payment screening', desc:'Screen sender wallets before processing payments — sub-300ms for real-time checkout flows.'},
        {step:'2', title:'Merchant risk monitoring', desc:'Ongoing monitoring of merchant wallet activity for policy violations and high-risk behavior.'},
        {step:'3', title:'Dispute investigation', desc:'Trace funds for chargeback and dispute resolution workflows.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Sanctions Screening', href:'/solutions/sanctions-screening'}]}
  />
);

const Web3DeFi = () => (
  <SubPage
    seo={{title:'Web3 / DeFi Risk Teams', desc:'Protocol-level risk management, governance exposure, and smart contract analytics.'}}
    hero={{eyebrow:'Web3 / DeFi Risk Teams', title:'Protocol-level risk intelligence.', subtitle:'Smart contract exposure analysis, governance risk monitoring, and DeFi counterparty assessment for protocols, DAOs, and Web3 native risk teams.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>DeFi protocols face unique risk surfaces — from governance attacks and oracle manipulation to sanctioned address interaction. Bitint provides protocol-level monitoring that helps risk teams identify and mitigate threats before they materialize on-chain.</p>},
    ]}
    relatedSolutions={[{label:'Cross-chain Exposure', href:'/solutions/cross-chain-exposure-analysis'},{label:'Stablecoin Risk', href:'/solutions/stablecoin-risk-management'}]}
  />
);

/* ─── Router ─── */

export const Industries = () => (
  <Routes>
    <Route index element={<IndustriesOverview />} />
    <Route path="vasps-exchanges" element={<VASPsExchanges />} />
    <Route path="stablecoin-issuers" element={<StablecoinIssuers />} />
    <Route path="financial-institutions-fintechs" element={<FinancialInstitutions />} />
    <Route path="law-enforcement-investigators" element={<LawEnforcement />} />
    <Route path="regulators-supervisors" element={<Regulators />} />
    <Route path="crypto-payments-psps" element={<CryptoPayments />} />
    <Route path="web3-defi-risk-teams" element={<Web3DeFi />} />
    {/* Legacy routes */}
    <Route path="law-enforcement" element={<LawEnforcement />} />
    <Route path="financial-institutions" element={<FinancialInstitutions />} />
    <Route path="centralized-exchanges" element={<VASPsExchanges />} />
    <Route path="tax-agencies" element={<Regulators />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);