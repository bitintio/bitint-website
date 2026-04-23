import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts, caseStudies, glossaryTerms } from '../data/content';
import { Button } from '../components/ui/Button';
import { FileText, BookOpen, HelpCircle, ArrowLeft, ChevronDown, CheckCircle } from 'lucide-react';
import { NotFound } from './GenericPages';

const ResourceCard = ({ title, category, link, type }: any) => (
  <Link to={link} className="block p-6 bg-surface border border-border rounded-lg hover:border-brand transition-colors group h-full">
    <div className="text-xs font-mono text-brand mb-2 uppercase">{category}</div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors">{title}</h3>
    <div className="flex items-center text-sm text-text-secondary">
      {type === 'blog' && <FileText size={16} className="mr-2" />}
      {type === 'case' && <BookOpen size={16} className="mr-2" />}
      <span>Read more &rarr;</span>
    </div>
  </Link>
);

const ResourcesIndex = () => (
  <div className="container-custom py-24">
    <Helmet>
      <title>Resources | Bitint</title>
      <meta name="description" content="Read our latest blockchain intelligence research, case studies, and glossary." />
    </Helmet>
    <h1 className="text-5xl font-display font-bold mb-8">Resources</h1>
    <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
      <Button href="/resources/blog" variant="secondary">Blog</Button>
      <Button href="/resources/case-studies" variant="secondary">Case Studies</Button>
      <Button href="/resources/glossary" variant="secondary">Glossary</Button>
      <Button href="/resources/fundamentals" variant="secondary">Fundamentals</Button>
      <Button href="/resources/faq" variant="secondary">FAQ</Button>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.slice(0, 3).map(post => (
        <ResourceCard key={post.slug} title={post.title} category="Blog" link={`/resources/blog/${post.slug}`} type="blog" />
      ))}
      {caseStudies.slice(0, 2).map(cs => (
        <ResourceCard key={cs.slug} title={cs.title} category="Case Study" link={`/resources/case-studies/${cs.slug}`} type="case" />
      ))}
    </div>
  </div>
);

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <NotFound />;

  return (
    <div className="container-custom py-24 max-w-3xl">
      <Helmet>
        <title>{post.title} | Bitint Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Link to="/resources/blog" className="inline-flex items-center text-sm text-text-secondary hover:text-brand mb-8"><ArrowLeft size={16} className="mr-1" /> Back to Blog</Link>
      <div className="text-brand font-mono mb-4">{post.category} • {post.readTime}</div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">{post.title}</h1>
      <div className="prose dark:prose-invert prose-yellow max-w-none">
        <p className="lead text-xl text-text-secondary">{post.excerpt}</p>
        <hr className="border-border my-8" />
        {/* Placeholder for content rendering */}
        <p>{post.content}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>The Heuristic Challenge</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
};

const Glossary = () => (
  <div className="container-custom py-24">
    <Helmet>
      <title>Blockchain Glossary | Bitint</title>
      <meta name="description" content="Definitions for common blockchain and cryptocurrency forensics terms." />
    </Helmet>
    <div className="mb-12">
      <div className="text-brand font-mono text-sm mb-2">RESOURCES / GLOSSARY</div>
      <h1 className="text-4xl font-display font-bold mb-4">Glossary</h1>
    </div>
    <div className="grid gap-6">
      {glossaryTerms.map(term => (
        <div key={term.slug} className="p-6 bg-surface border border-border rounded-lg">
          <h3 className="text-xl font-bold text-brand mb-2">{term.term}</h3>
          <p className="text-text-secondary">{term.definition}</p>
        </div>
      ))}
    </div>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      q: "What blockchains do you currently support?",
      a: "Bitint indexes over 30+ chains natively. We provide full coverage for Bitcoin & Forks (BTC, BCH, LTC, DOGE), EVM-compatible chains (Ethereum, Arbitrum, Optimism, Base), and we are currently in beta for Solana (SOL, SPL Tokens)."
    },
    {
      q: "How does Bitint's clustering actually work?",
      a: "We do not believe in a 'black box' approach. We use a combination of deterministic data (e.g., shared deposit sweeps) and proprietary behavioral heuristics to map complex trails across chains, mixers, and bridges. Every cluster is assigned a Confidence Score, and we show you exactly why the link was made."
    },
    {
      q: "Can I screen addresses automatically?",
      a: "Yes. Our Wallet Screening module allows you to instantly check addresses against centralized sanctions lists (like OFAC), criminal databases, and our continuous risk heuristics. You can do this via the UI, bulk CSV upload, or REST API."
    },
    {
      q: "Do you provide an API for SIEM and Case Management integrations?",
      a: "Absolutely. We offer high-throughput REST endpoints and Webhooks. This allows you to receive real-time POST requests when a monitored wallet moves funds or triggers a specific rule, integrating seamlessly into tools like Splunk or Datadog."
    },
    {
      q: "What is an 'Uncertainty Zone'?",
      a: "When tracing funds through advanced mixing services or privacy protocols, deterministic tracing can break. Instead of presenting false positives, Bitint flags these jumps as 'Uncertainty Zones', allowing analysts to make probabilistic evaluations based on time and volume heuristics."
    }
  ];

  return (
    <div className="container-custom py-24 max-w-3xl border-x border-border/50 min-h-screen bg-surface/30">
      <Helmet>
        <title>Frequently Asked Questions | Bitint</title>
        <meta name="description" content="Answers to the most common questions about the Bitint blockchain intelligence platform." />
      </Helmet>
      
      <div className="mb-12">
        <div className="text-brand font-mono text-sm mb-2">RESOURCES / FAQ</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-text-secondary text-lg">Details on data coverage, heuristics, and platform capabilities.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-surface rounded-xl border border-border p-6 hover:border-brand/30 transition-colors">
            <h3 className="text-lg font-bold mb-3 flex items-start gap-2">
              <HelpCircle className="text-brand shrink-0 mt-0.5" size={20} />
              {faq.q}
            </h3>
            <p className="text-text-secondary pl-7">{faq.a}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-8 bg-brand/10 border border-brand/20 rounded-xl text-center">
        <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
        <p className="text-text-secondary mb-6">Our technical team is ready to walk you through the platform.</p>
        <Button href="/company/contact" variant="primary">Contact Sales</Button>
      </div>
    </div>
  );
};

const Fundamentals = () => (
    <div className="container-custom py-24 max-w-4xl min-h-screen">
      <Helmet>
        <title>Blockchain Intelligence Fundamentals | Bitint</title>
        <meta name="description" content="Understanding the core concepts of tracebility, heuristic clustering, and rule-based escalation." />
      </Helmet>
      
      <div className="mb-16 pb-8 border-b border-border">
        <div className="text-brand font-mono text-sm mb-2">RESOURCES / FUNDAMENTALS</div>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">The Fundamentals of Intelligence</h1>
        <p className="text-xl text-text-secondary">
          While blockchains are public ledgers, extracting actionable intelligence requires moving from raw block data to confident entity attribution. Here is how Bitint approaches the intelligence lifecycle.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert prose-yellow max-w-none">
        <h2>1. The Glass Box Approach to Heuristics</h2>
        <p>
          Determining who owns a wallet requires advanced clustering. Many tools provide a "black box" answer, stating definitively who owns an address. Bitint uses a <strong>Glass Box</strong> approach.
        </p>
        <p>
          When you use the <strong>Graph Investigation</strong> module, you aren't just seeing a link; you are given a <em>Confidence Score</em>. We explain exactly why nodes are clustered—whether it's a confirmed OFAC match, a shared deposit sweep heuristic, or a probabilistically-linked co-spend. This is critical for generating court-ready evidence.
        </p>

        <h2>2. Proactive Monitoring vs. Reactive Tracing</h2>
        <p>
          Tracing funds after an incident is only half the battle. Modern compliance requires proactive <strong>Rule-based Monitoring</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Watchlists:</strong> Continuously monitor thousands of addresses simultaneously.</li>
          <li><strong>Condition Triggers:</strong> Escalate alerts only when specific conditions are met (e.g., exposure to darknet markets exceeding $10,000).</li>
          <li><strong>Real-time Triage:</strong> Triage alerts as Critical, High, or Low before assigning them to analysts in the Case Manager.</li>
        </ul>

        <h2>3. Escaping the "Spreadsheet Trap"</h2>
        <p>
          Without proper infrastructure, investigators rely on scattered CSV files, disparate notes, and fragmented URLs. Bitint's <strong>Case Management</strong> layer unifies the workflow.
        </p>
        <p>
          When an analyst screens a wallet and flags it for sanctions exposure, that finding is immediately attachable to an active Case. Visual annotations from the Graph Investigation canvas are saved immortally to the audit log, ensuring that evidence is structured, auditable, and easily exportable.
        </p>

        <div className="my-12 p-8 bg-surface border border-border rounded-xl">
          <h3 className="text-2xl font-bold mb-4 mt-0">The Intelligence Workflow</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-brand font-bold mb-1">01. Screen</div>
              <p className="text-sm text-text-secondary m-0">Instantly evaluate addresses against risk databases.</p>
            </div>
            <div>
              <div className="text-brand font-bold mb-1">02. Trace</div>
              <p className="text-sm text-text-secondary m-0">Visually map fund flows and defeat obfuscation.</p>
            </div>
            <div>
              <div className="text-brand font-bold mb-1">03. Alert</div>
              <p className="text-sm text-text-secondary m-0">Automate detection to maintain continuous compliance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
);

export const ResourcesRoutes = () => {
  return (
    <Routes>
      <Route index element={<ResourcesIndex />} />
      <Route path="blog" element={<ResourcesIndex />} /> 
      <Route path="blog/:slug" element={<BlogDetail />} />
      <Route path="glossary" element={<Glossary />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="fundamentals" element={<Fundamentals />} />
      <Route path="case-studies" element={<ResourcesIndex />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};