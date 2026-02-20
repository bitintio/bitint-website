import { BlogPost, CaseStudy, GlossaryTerm, FaqItem } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'tracing-cross-chain-laundering',
    title: 'De-mystifying Cross-Chain Laundering Patterns',
    excerpt: 'How sophistication in bridge-hopping requires a new heuristics model for investigators.',
    category: 'Investigations',
    date: 'Oct 12, 2023',
    readTime: '8 min',
    content: 'Full content placeholder...'
  },
  {
    slug: 'stablecoin-compliance-2024',
    title: 'The New Standard for Stablecoin Issuer Compliance',
    excerpt: 'Why freeze-and-seize capabilities are no longer enough for regulatory approval.',
    category: 'Compliance',
    date: 'Nov 04, 2023',
    readTime: '6 min',
    content: 'Full content placeholder...'
  },
  {
    slug: 'pig-butchering-funds-recovery',
    title: 'Tactical Approaches to "Pig Butchering" Recovery',
    excerpt: 'Combining OSINT with on-chain clustering to identify exit nodes in large-scale scam networks.',
    category: 'Law Enforcement',
    date: 'Dec 15, 2023',
    readTime: '12 min',
    content: 'Full content placeholder...'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'exchange-hack-recovery',
    title: 'Recovering $45M from a Tier-1 Exchange Breach',
    clientType: 'Centralized Exchange',
    outcome: 'Assets Frozen',
    summary: 'When a major CEX hot wallet was drained, Bitint tracing enabled LE to freeze assets at 4 distinct off-ramps within 2 hours.',
    challenge: 'Attacker used 3 different bridges and a mixer immediately after the breach.',
    solution: 'Bitint automated peeling chain detection identified the changeless outputs before they entered the mixer.',
    results: ['90% of funds located', '$45M frozen', 'Attribution to known APT']
  },
  {
    slug: 'tax-evasion-nft',
    title: 'Uncovering Wash Trading in High-Value NFT Collections',
    clientType: 'Tax Agency',
    outcome: 'Revenue Recovered',
    summary: 'Identifying artificial loss generation through circular NFT trading among controlled wallets.',
    challenge: 'Wallets appeared unconnected on surface level analysis.',
    solution: 'Heuristic analysis of gas funding sources revealed a single controller funding 50+ wallets.',
    results: ['$12M in tax liability identified', 'Pattern matched across 4 other collections']
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  { term: 'Dusting Attack', definition: 'A malicious activity where small amounts of crypto are sent to many wallets to de-anonymize owners.', category: 'Security', slug: 'dusting-attack' },
  { term: 'Peeling Chain', definition: 'A technique to launder large amounts of crypto by sending small amounts to exchanges through a long series of transactions.', category: 'Typology', slug: 'peeling-chain' },
  { term: 'Zero-Knowledge Proof', definition: 'A method by which one party can prove to another that they know a value x, without conveying any information apart from the fact that they know the value x.', category: 'Tech', slug: 'zk-proof' },
  { term: 'Mixer', definition: 'A service that mixes potentially identifiable or "tainted" cryptocurrency funds with others to obscure the trail back to the fund\'s original source.', category: 'Infrastructure', slug: 'mixer' },
];

export const faqs: FaqItem[] = [
  { question: "How is your confidence score calculated?", answer: "Our scores are deterministic aggregates of 4 factors: Source reliability (OSINT vs. Partner), Heuristic strength (Clustering vs. Exact Match), Hop distance, and Temporal relevance. We do not use 'black box' AI for scoring; every score represents a traceable logic path.", category: "Platform" },
  { question: "Can we export data for court proceedings?", answer: "Yes. The 'Evidence Package' export creates a hash-stamped PDF and CSV bundle including the full graph state, decision logs, and analyst annotations, designed to establish a chain of custody.", category: "Legal" },
  { question: "Do you cover Layer 2 networks?", answer: "We support Arbitrum, Optimism, Base, and zkSync Era with full tracing capabilities including bridge-crossing attribution.", category: "Coverage" },
  { question: "What is the deployment model?", answer: "We offer SaaS (SOC2 Type II compliant) and on-premise air-gapped deployments for classified environments.", category: "Security" },
];