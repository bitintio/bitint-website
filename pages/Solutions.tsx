import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';
import { CTASection } from './Home';
import { SubPage, WorkflowSteps } from '../components/PageLayout';

/* ─── Solutions Overview (preserved & improved) ─── */

const SolutionsOverview = () => {
  const navigate = useNavigate();
  const onNav = (path: string) => navigate(path);

  const solutions = [
    {key:'aml-kyt-compliance', icon:'shield', title:'AML / KYT Compliance', desc:'Automate Travel Rule workflows, SAR filing, and ongoing due diligence with explainable risk data.', stat:'SOC 2 · ISO 27001'},
    {key:'sanctions-screening', icon:'filter', title:'Sanctions Screening', desc:'OFAC, EU, UN sanctions checks with sub-300ms API responses and full attribution provenance.', stat:'<300ms p50'},
    {key:'crypto-investigations', icon:'graph', title:'Crypto Investigations', desc:'Graph-first case work with automatic clustering, cross-chain tracing, and court-ready evidence trails.', stat:'10x faster unwinds'},
    {key:'stablecoin-risk-management', icon:'database', title:'Stablecoin Risk Management', desc:'Monitor issuer exposure, redemption risk, and reserve composition across stablecoin networks.', stat:'Real-time feeds'},
    {key:'vasp-counterparty-due-diligence', icon:'users', title:'VASP & Counterparty Due Diligence', desc:'Assess counterparty risk, exchange exposure, and entity-level compliance posture.', stat:'280M+ entities'},
    {key:'case-reporting-audit-trails', icon:'clipboard', title:'Case Reporting & Audit Trails', desc:'Export defensible evidence packages — signed, timestamped, and regulator-ready.', stat:'Audit-ready'},
    {key:'cross-chain-exposure-analysis', icon:'globe', title:'Cross-chain Exposure Analysis', desc:'Map multi-chain risk surfaces, bridge exposure, and protocol-level counterparty risk.', stat:'150+ chains'},
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
              <Link key={s.key} to={`/solutions/${s.key}`} className="card flex flex-col" style={{padding:24, position:'relative', overflow:'hidden', textDecoration:'none'}}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                  border:'1px solid rgba(160,43,230,0.18)',
                  display:'grid', placeItems:'center',
                }}><Icon name={s.icon} size={22} stroke={2}/></div>
                <h3 style={{fontSize:20, marginTop:18}}>{s.title}</h3>
                <p className="muted" style={{fontSize:14, marginTop:8, lineHeight:1.55, flex:1}}>{s.desc}</p>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:22}}>
                  <span className="tag mono" style={{fontSize:10}}>{s.stat}</span>
                  <Icon name="arrow-up-right" size={16} stroke={2}/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNav={onNav}/>
    </>
  );
};

/* ─── Sub-pages ─── */

const AMLCompliance = () => (
  <SubPage
    seo={{title:'AML / KYT Compliance', desc:'Automate Travel Rule, SAR workflows, and ongoing KYT with explainable blockchain intelligence.'}}
    hero={{eyebrow:'AML / KYT Compliance', title:'Compliance that explains itself.', subtitle:'Automate Travel Rule workflows, SAR filing, and ongoing transaction monitoring with white-box risk data that regulators can audit and analysts can trust.'}}
    sections={[
      {title:'The operational problem', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Most compliance tools give you a risk score and expect you to trust it. When regulators ask "why did you approve this transaction?" you need more than a number — you need the reasoning, the data sources, and the evidence trail. Bitint provides all three by default.</p>},
      {title:'How Bitint solves it', content: <WorkflowSteps steps={[
        {step:'1', title:'Screen incoming and outgoing transactions', desc:'Every transaction is scored against sanctions lists, entity attribution data, behavioral patterns, and counterparty exposure.'},
        {step:'2', title:'Flag and prioritize', desc:'Configurable alert rules surface genuine risk and suppress noise. Every flag includes the scoring rationale.'},
        {step:'3', title:'Investigate and document', desc:'One-click escalation to the investigation graph. Annotate findings, attach evidence, and build the case.'},
        {step:'4', title:'File and export', desc:'Generate SAR-ready packets, audit trail exports, and regulator-formatted reports.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'Sanctions Screening', href:'/solutions/sanctions-screening'},{label:'Case Reporting', href:'/solutions/case-reporting-audit-trails'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Financial Institutions', href:'/industries/financial-institutions-fintechs'}]}
  />
);

const SanctionsScreening = () => (
  <SubPage
    seo={{title:'Sanctions Screening', desc:'Real-time OFAC, EU, and UN sanctions screening for blockchain addresses and entities.'}}
    hero={{eyebrow:'Sanctions Screening', title:'Screen against every list. Explain every result.', subtitle:'Real-time sanctions checks against OFAC SDN, EU consolidated lists, UN sanctions, and country-specific designations — with full attribution for every match.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Submit address or entity', desc:'API call, dashboard lookup, or batch file upload. Sub-300ms response times.'},
        {step:'2', title:'Match against sanctions lists', desc:'OFAC SDN, EU, UN, and 30+ country-specific lists. Updated within minutes of list changes.'},
        {step:'3', title:'Return scored result', desc:'Each match includes the list source, match confidence, and the specific designation entry.'},
      ]}/> },
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Sanctions violations carry severe penalties. Bitint's sanctions screening is designed for zero false negatives on sanctioned addresses — while minimizing false positives through entity-level matching rather than simple address comparison.</p>},
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'VASP Due Diligence', href:'/solutions/vasp-counterparty-due-diligence'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Stablecoin Issuers', href:'/industries/stablecoin-issuers'}]}
  />
);

const CryptoInvestigations = () => (
  <SubPage
    seo={{title:'Crypto Investigations', desc:'Trace, cluster, and build court-ready cases with graph-first investigation workflows.'}}
    hero={{eyebrow:'Crypto Investigations', title:'Trace the funds. Build the case.', subtitle:'From initial tip to court-ready evidence package. Follow funds through mixers, bridges, and DeFi protocols with automatic clustering and cross-chain resolution.'}}
    sections={[
      {title:'Investigation workflow', content: <WorkflowSteps steps={[
        {step:'1', title:'Seed the case', desc:'Start from an address, transaction hash, entity name, or imported exchange data.'},
        {step:'2', title:'Expand and trace', desc:'Automatic clustering, counterparty identification, and cross-chain bridge detection.'},
        {step:'3', title:'Analyze patterns', desc:'Identify mixer usage, peel chains, consolidation patterns, and off-ramp behavior.'},
        {step:'4', title:'Export evidence', desc:'Court-ready PDFs, signed data exports, and structured evidence packages with chain-of-custody metadata.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'Cross-chain Exposure', href:'/solutions/cross-chain-exposure-analysis'},{label:'Case Reporting', href:'/solutions/case-reporting-audit-trails'}]}
    relatedIndustries={[{label:'Law Enforcement', href:'/industries/law-enforcement-investigators'},{label:'Regulators', href:'/industries/regulators-supervisors'}]}
  />
);

const StablecoinRisk = () => (
  <SubPage
    seo={{title:'Stablecoin Risk Management', desc:'Monitor stablecoin issuer exposure, redemption risk, and reserve composition.'}}
    hero={{eyebrow:'Stablecoin Risk Management', title:'Monitor stablecoin exposure before it becomes a problem.', subtitle:'Track issuer concentration, redemption risk, reserve composition, and counterparty exposure across major stablecoin networks in real time.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Stablecoin depegs and issuer failures can cascade through your portfolio in minutes. Bitint monitors stablecoin networks at the protocol level — giving treasury teams, compliance officers, and risk managers the data they need to act before exposure materializes.</p>},
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Cross-chain Exposure', href:'/solutions/cross-chain-exposure-analysis'}]}
    relatedIndustries={[{label:'Stablecoin Issuers', href:'/industries/stablecoin-issuers'},{label:'Financial Institutions', href:'/industries/financial-institutions-fintechs'}]}
  />
);

const VASPDueDiligence = () => (
  <SubPage
    seo={{title:'VASP & Counterparty Due Diligence', desc:'Assess exchange and counterparty compliance posture with entity-level intelligence.'}}
    hero={{eyebrow:'VASP & Counterparty Due Diligence', title:'Know your counterparty. Not just their address.', subtitle:'Entity-level compliance assessments for VASPs, exchanges, OTC desks, and custodians. Understand exposure before you transact.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Entity identification', desc:'Map addresses to entities using 280M+ attributions with confidence scoring.'},
        {step:'2', title:'Risk profile generation', desc:'Aggregate risk signals across all known addresses for a counterparty entity.'},
        {step:'3', title:'Ongoing monitoring', desc:'Receive alerts when counterparty risk profiles change — new sanctions exposure, unusual volume patterns, or compliance incidents.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'Sanctions Screening', href:'/solutions/sanctions-screening'},{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Financial Institutions', href:'/industries/financial-institutions-fintechs'}]}
  />
);

const CaseReporting = () => (
  <SubPage
    seo={{title:'Case Reporting & Audit Trails', desc:'Export defensible, timestamped evidence packages for regulators, auditors, and courts.'}}
    hero={{eyebrow:'Case Reporting & Audit Trails', title:'Every action documented. Every export defensible.', subtitle:'Signed, timestamped evidence packages that meet the evidentiary standards of regulators, auditors, and courts. Built for compliance teams that answer to examiners.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>When a regulator asks "show me the trail," you need more than screenshots. Bitint's audit trail system records every screening, investigation action, risk decision, and export with immutable timestamps and analyst attribution. Every report is signed and reproducible.</p>},
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Crypto Investigations', href:'/solutions/crypto-investigations'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Law Enforcement', href:'/industries/law-enforcement-investigators'}]}
  />
);

const CrossChainExposure = () => (
  <SubPage
    seo={{title:'Cross-chain Exposure Analysis', desc:'Map multi-chain risk surfaces, bridge exposure, and protocol-level counterparty risk.'}}
    hero={{eyebrow:'Cross-chain Exposure Analysis', title:'Risk doesn\'t stop at the bridge. Neither do we.', subtitle:'Unified exposure analysis across 150+ chains. Map bridge usage, cross-chain counterparty risk, and protocol-level exposure in a single view.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Cross-chain bridges are increasingly used to obscure fund flows and evade chain-specific monitoring. Bitint's cross-chain exposure analysis follows funds through bridges, wrapped token protocols, and cross-chain DEXs — preserving the full attribution context at every hop.</p>},
    ]}
    relatedSolutions={[{label:'Crypto Investigations', href:'/solutions/crypto-investigations'},{label:'Stablecoin Risk', href:'/solutions/stablecoin-risk-management'}]}
    relatedIndustries={[{label:'Web3 / DeFi Risk', href:'/industries/web3-defi-risk-teams'},{label:'Law Enforcement', href:'/industries/law-enforcement-investigators'}]}
  />
);

/* ─── Router ─── */

export const Solutions = () => (
  <Routes>
    <Route index element={<SolutionsOverview />} />
    <Route path="aml-kyt-compliance" element={<AMLCompliance />} />
    <Route path="sanctions-screening" element={<SanctionsScreening />} />
    <Route path="crypto-investigations" element={<CryptoInvestigations />} />
    <Route path="stablecoin-risk-management" element={<StablecoinRisk />} />
    <Route path="vasp-counterparty-due-diligence" element={<VASPDueDiligence />} />
    <Route path="case-reporting-audit-trails" element={<CaseReporting />} />
    <Route path="cross-chain-exposure-analysis" element={<CrossChainExposure />} />
    {/* Legacy route */}
    <Route path="investigations" element={<CryptoInvestigations />} />
  </Routes>
);