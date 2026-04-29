import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';
import { CTASection } from './Home';
import { SubPage, WorkflowSteps } from '../components/PageLayout';

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

const PlatformOverview = () => {
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
                  display:'grid', placeItems:'center', border:'1px solid rgba(160,43,230,0.18)',
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
                      <div style={{width:20, height:20, borderRadius:6, background:'var(--gradient-brand-soft)', color:'var(--violet-600)', display:'grid', placeItems:'center', border:'1px solid rgba(160,43,230,0.2)'}}>
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

/* ─── Sub-pages ─── */

const WalletScreening = () => (
  <SubPage
    seo={{title:'Wallet Screening', desc:'Real-time wallet risk screening across 150+ chains with explainable risk scores.'}}
    hero={{eyebrow:'Wallet Screening', title:'Screen any wallet. Know the risk before you transact.', subtitle:'Sub-300ms API responses with full attribution provenance. Every risk score is explainable, auditable, and defensible — not a black-box number.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Submit an address', desc:'Via API, dashboard, or bulk upload. Supports all major chain formats.'},
        {step:'2', title:'Risk analysis runs', desc:'Our engine checks sanctions lists, clustering data, transaction patterns, entity attribution, and counterparty exposure.'},
        {step:'3', title:'Receive a scored result', desc:'A 0–100 risk score with full breakdown: which signals fired, confidence levels, and source references.'},
        {step:'4', title:'Act on the result', desc:'Approve, escalate, or block — with a full audit trail for every decision.'},
      ]}/> },
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Regulators expect you to explain your risk decisions. Bitint's Explainable Risk Scoring gives compliance teams the evidence they need — not just a number, but the reasoning behind it. Every screening result includes attribution sources, confidence scores, and a clear, auditable evidence trail.</p>},
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Sanctions Screening', href:'/solutions/sanctions-screening'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Financial Institutions', href:'/industries/financial-institutions-fintechs'}]}
  />
);

const TransactionMonitoring = () => (
  <SubPage
    seo={{title:'Transaction Monitoring', desc:'Streaming transaction alerts with tunable rules and real-time compliance workflows.'}}
    hero={{eyebrow:'Transaction Monitoring', title:'Monitor every transaction. Alert on what matters.', subtitle:'Streaming alerts with 40+ configurable rule primitives. Tune thresholds, set counterparty exposure limits, and receive real-time notifications shaped to your SOPs.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Define your monitoring rules', desc:'Set thresholds for transaction amounts, counterparty risk, sanctions exposure, velocity, and behavioral patterns.'},
        {step:'2', title:'Ingest transaction streams', desc:'Connect via API or direct integration. Bitint processes transactions in real time as they hit the chain.'},
        {step:'3', title:'Receive prioritized alerts', desc:'Alerts fire with full context: the triggering rule, the transaction graph, and the risk assessment.'},
        {step:'4', title:'Investigate and resolve', desc:'One-click escalation to investigation workflows. Every alert resolution is logged for audit.'},
      ]}/> },
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Generic monitoring tools flood compliance teams with false positives. Bitint's rule engine is designed by compliance professionals — tunable, explainable, and built to reduce noise while catching real risk. Every alert ships with enough context to make a decision without switching tools.</p>},
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Case Reporting', href:'/solutions/case-reporting-audit-trails'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Crypto Payments', href:'/industries/crypto-payments-psps'}]}
  />
);

const InvestigationGraph = () => (
  <SubPage
    seo={{title:'Investigation Graph', desc:'Graph-first investigation workflows with automatic clustering and evidence trail generation.'}}
    hero={{eyebrow:'Investigation Graph', title:'Trace funds. Build cases. Follow every path.', subtitle:'A graph-native investigation environment that automatically clusters addresses, identifies entities, and generates case-ready evidence packages.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Start with any address or transaction', desc:'Seed your investigation from a wallet, transaction hash, entity name, or imported case data.'},
        {step:'2', title:'Expand the graph', desc:'Automatic clustering, cross-chain bridge detection, and counterparty identification. Follow funds through mixers, DEXs, and bridges.'},
        {step:'3', title:'Annotate and collaborate', desc:'Add notes, tag entities, share graph states with team members. All actions are version-controlled.'},
        {step:'4', title:'Export the evidence', desc:'Generate court-ready PDF reports, signed data exports, and structured evidence packages.'},
      ]}/> },
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Investigations succeed or fail based on the quality of the graph. Bitint's investigation environment is built for analysts who need to follow funds across chains, through mixers, and into real-world entities — with every step documented and defensible.</p>},
    ]}
    relatedSolutions={[{label:'Crypto Investigations', href:'/solutions/crypto-investigations'},{label:'Cross-chain Exposure', href:'/solutions/cross-chain-exposure-analysis'}]}
    relatedIndustries={[{label:'Law Enforcement', href:'/industries/law-enforcement-investigators'},{label:'Regulators', href:'/industries/regulators-supervisors'}]}
  />
);

const CrossChainTracing = () => (
  <SubPage
    seo={{title:'Cross-chain Tracing', desc:'Follow funds across 150+ chains through bridges, DEXs, and cross-chain protocols.'}}
    hero={{eyebrow:'Cross-chain Tracing', title:'Funds don\'t stay on one chain. Neither should your tools.', subtitle:'Automatic bridge detection, cross-chain hop resolution, and unified transaction timelines across 150+ chains. See the full picture, not just one network.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Detect cross-chain movement', desc:'Our engine automatically identifies when funds move through bridges, wrapped token protocols, and cross-chain DEXs.'},
        {step:'2', title:'Resolve the destination', desc:'Map the source transaction to its destination chain, preserving the attribution and risk context.'},
        {step:'3', title:'Build a unified timeline', desc:'See every hop on a single timeline — regardless of which chains are involved.'},
      ]}/> },
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Illicit actors deliberately use cross-chain bridges to break traceability. Bitint resolves these hops natively — no manual chain-hopping, no losing the trail at a bridge contract.</p>},
    ]}
    relatedSolutions={[{label:'Cross-chain Exposure Analysis', href:'/solutions/cross-chain-exposure-analysis'},{label:'Crypto Investigations', href:'/solutions/crypto-investigations'}]}
    relatedIndustries={[{label:'Law Enforcement', href:'/industries/law-enforcement-investigators'},{label:'Web3 / DeFi Risk', href:'/industries/web3-defi-risk-teams'}]}
  />
);

const EntityIntelligence = () => (
  <SubPage
    seo={{title:'Entity Intelligence', desc:'Curated, sourced, scored entity attribution for 280M+ blockchain entities.'}}
    hero={{eyebrow:'Entity Intelligence', title:'Know who you\'re dealing with. Every entity, sourced and scored.', subtitle:'280M+ entity attributions — human-reviewed, confidence-scored, and versioned. No unexplained labels, no black-box clustering.'}}
    sections={[
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Attribution quality determines investigation quality. Every Bitint entity label carries a confidence score (0–100), the heuristic chain that produced it, and a link to the last human reviewer. You can diff attribution over time to see when and why labels changed.</p>},
    ]}
    relatedSolutions={[{label:'VASP Due Diligence', href:'/solutions/vasp-counterparty-due-diligence'},{label:'Sanctions Screening', href:'/solutions/sanctions-screening'}]}
    relatedIndustries={[{label:'Financial Institutions', href:'/industries/financial-institutions-fintechs'},{label:'Regulators', href:'/industries/regulators-supervisors'}]}
  />
);

const ExplainableRiskScoring = () => (
  <SubPage
    seo={{title:'Explainable Risk Scoring', desc:'Auditable, transparent risk scoring with full attribution provenance and Verifiable Logic.'}}
    hero={{eyebrow:'Explainable Risk Scoring', title:'Every score has a reason. Every reason has a source.', subtitle:'Transparent risk intelligence that compliance teams can defend to regulators, auditors, and courts via Courtroom-Ready Attribution. No black boxes. No unexplained numbers.'}}
    sections={[
      {title:'How it works', content: <WorkflowSteps steps={[
        {step:'1', title:'Multi-signal analysis', desc:'Sanctions lists, clustering data, behavioral patterns, counterparty exposure, and entity attribution are all evaluated.'},
        {step:'2', title:'Weighted scoring', desc:'Each signal contributes to the final score with an explicit weight. You can see exactly which signals moved the score.'},
        {step:'3', title:'Source attribution', desc:'Every factor links back to its data source — OFAC SDN list, cluster co-spend heuristic, partner intelligence feed, or analyst review.'},
        {step:'4', title:'Audit trail', desc:'The full scoring rationale is preserved as an immutable record. Replay any score at any point in time.'},
      ]}/> },
      {title:'Why it matters', content: <p className="muted" style={{fontSize:16, lineHeight:1.65, maxWidth:720}}>Regulators increasingly demand that compliance teams explain their risk decisions — not just show a number. Explainable Risk Scoring is not a feature; it's a regulatory requirement that most tools fail to meet. Bitint builds Evidence-Based Intelligence and transparent scoring into every result by default.</p>},
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Case Reporting', href:'/solutions/case-reporting-audit-trails'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Stablecoin Issuers', href:'/industries/stablecoin-issuers'}]}
  />
);

const APIPage = () => (
  <SubPage
    seo={{title:'API & Data Layer', desc:'REST API, WebSocket streams, and SDKs for screening, monitoring, and investigation workflows.'}}
    hero={{eyebrow:'API & Data Layer', title:'Your stack. Our intelligence.', subtitle:'A clean REST API with sub-300ms screening, WebSocket streams for real-time monitoring, and SDKs in Python, TypeScript, and Go. Plug into your existing infrastructure.'}}
    sections={[
      {title:'Integration options', content: <WorkflowSteps steps={[
        {step:'→', title:'REST API', desc:'Screening, entity lookup, transaction tracing, and bulk operations. OpenAPI spec included.'},
        {step:'→', title:'WebSocket Streams', desc:'Real-time transaction and alert streams. Subscribe to address sets, entity types, or risk thresholds.'},
        {step:'→', title:'SDKs', desc:'Python, TypeScript, and Go. Typed, documented, and maintained.'},
        {step:'→', title:'SIEM Plugins', desc:'Splunk, Elastic, Sentinel — pre-built connectors for your security stack.'},
      ]}/> },
    ]}
    relatedSolutions={[{label:'AML / KYT Compliance', href:'/solutions/aml-kyt-compliance'},{label:'Sanctions Screening', href:'/solutions/sanctions-screening'}]}
    relatedIndustries={[{label:'VASPs & Exchanges', href:'/industries/vasps-exchanges'},{label:'Crypto Payments', href:'/industries/crypto-payments-psps'}]}
  />
);

/* ─── Router ─── */

export const Platform = () => (
  <Routes>
    <Route index element={<PlatformOverview />} />
    <Route path="wallet-screening" element={<WalletScreening />} />
    <Route path="transaction-monitoring" element={<TransactionMonitoring />} />
    <Route path="investigation-graph" element={<InvestigationGraph />} />
    <Route path="cross-chain-tracing" element={<CrossChainTracing />} />
    <Route path="entity-intelligence" element={<EntityIntelligence />} />
    <Route path="explainable-risk-scoring" element={<ExplainableRiskScoring />} />
    <Route path="api" element={<APIPage />} />
  </Routes>
);