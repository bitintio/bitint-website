import { BlogPost, CaseStudy, GlossaryTerm, FaqItem } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'tracing-cross-chain-laundering',
    title: 'De-mystifying Cross-Chain Laundering Patterns',
    excerpt: 'How sophistication in bridge-hopping requires a new heuristics model for investigators.',
    category: 'Investigations',
    date: 'Oct 12, 2023',
    readTime: '8 min',
    content: 'Cross-chain laundering has evolved significantly since the early days of Bitcoin mixers. Today, sophisticated threat actors use a complex web of bridges, decentralized exchanges (DEXs), and privacy-preserving protocols to obfuscate the flow of illicit funds across multiple blockchains.\n\nThe challenge for investigators is no longer just following a single ledger, but tracking value as it hops from Ethereum to Arbitrum, then to Avalanche, and finally to a centralized exchange on Tron. This requires a new heuristics model that can correlate transactions across disparate networks based on timing, amounts, and known entity behavior. Bitint\'s cross-chain attribution engine automatically detects these bridge-hopping patterns, scoring them based on multi-chain clustering algorithms to provide a cohesive investigation timeline.'
  },
  {
    slug: 'stablecoin-compliance-2024',
    title: 'The New Standard for Stablecoin Issuer Compliance',
    excerpt: 'Why freeze-and-seize capabilities are no longer enough for regulatory approval.',
    category: 'Compliance',
    date: 'Nov 04, 2023',
    readTime: '6 min',
    content: 'As regulatory scrutiny intensifies globally, stablecoin issuers are facing unprecedented pressure to ensure their platforms are not used for sanctions evasion, terrorist financing, or large-scale fraud. Historically, the ability to freeze specific addresses upon receiving a court order was considered sufficient compliance.\n\nHowever, the new standard demands proactive risk management. Issuers must now leverage real-time transaction monitoring and predictive entity intelligence to identify high-risk exposure before law enforcement intervenes. Continuous portfolio screening against global sanctions lists, darknet market interactions, and known scam clusters is no longer optional. Bitint provides the real-time alerting infrastructure necessary to achieve and maintain this elevated standard of compliance.'
  },
  {
    slug: 'pig-butchering-funds-recovery',
    title: 'Tactical Approaches to "Pig Butchering" Recovery',
    excerpt: 'Combining OSINT with on-chain clustering to identify exit nodes in large-scale scam networks.',
    category: 'Law Enforcement',
    date: 'Dec 15, 2023',
    readTime: '12 min',
    content: '"Pig butchering" scams represent a multi-billion dollar illicit industry characterized by massive scale and organized operational structures. Victims are slowly groomed over weeks or months before their funds are funneled into complex laundering networks.\n\nRecovering these funds requires a tactical approach combining Open-Source Intelligence (OSINT) with advanced on-chain clustering. Investigators must look beyond the immediate deposit addresses to identify the consolidation wallets and ultimate exit nodes used by the syndicates. By mapping the entire flow of funds and identifying the centralized exchanges where the funds are off-ramped, law enforcement can execute targeted freezing orders. Bitint\'s automated peeling chain detection and vast entity database accelerate this process, turning months of manual tracing into hours of efficient analysis.'
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
  { term: 'Anti-Money Laundering (AML)', definition: 'Laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income.', category: 'Compliance', slug: 'aml' },
  { term: 'Know Your Customer (KYC)', definition: 'The mandatory process of identifying and verifying the identity of the client when opening an account and periodically over time.', category: 'Compliance', slug: 'kyc' },
  { term: 'Chain-Hopping', definition: 'The practice of moving assets across different blockchains, usually via bridges, to break the trace of funds during an investigation.', category: 'Typology', slug: 'chain-hopping' },
  { term: 'Over-the-Counter (OTC) Broker', definition: 'A dealer who facilitates high-volume crypto trades off public exchange order books. Malicious actors sometimes use rogue OTC brokers to cash out illicit funds.', category: 'Entities', slug: 'otc-broker' },
  { term: 'Darknet Market (DNM)', definition: 'A commercial website on the dark web that operates via the Tor routing protocol, often heavily reliant on cryptocurrency for illicit transactions.', category: 'Entities', slug: 'darknet-market' },
  { term: 'Ransomware', definition: 'Malicious software that encrypts a victim\'s files. The attacker then demands cryptocurrency as a ransom to restore access.', category: 'Security', slug: 'ransomware' },
  { term: 'Pig Butchering Scam', definition: 'A long-term fraud where scammers build a relationship with victims before convincing them to invest in fraudulent crypto platforms.', category: 'Typology', slug: 'pig-butchering' },
  { term: 'Sanctions Screening', definition: 'The process of checking wallet addresses against government regulatory lists to ensure compliance with international law.', category: 'Compliance', slug: 'sanctions-screening' },
  { term: 'OFAC SDN List', definition: 'The Office of Foreign Assets Control\'s Specially Designated Nationals list, which includes individuals, entities, and crypto addresses prohibited from the US financial system.', category: 'Compliance', slug: 'ofac-sdn' },
  { term: 'Unhosted Wallet', definition: 'A cryptocurrency wallet managed directly by the user (self-custody), rather than by a centralized service provider.', category: 'Tech', slug: 'unhosted-wallet' },
  { term: 'VASP', definition: 'Virtual Asset Service Provider. Any business that conducts the exchange, transfer, or safekeeping of virtual assets on behalf of clients.', category: 'Entities', slug: 'vasp' },
  { term: 'Wash Trading', definition: 'A form of market manipulation where an entity simultaneously buys and sells the same asset to create misleading, artificial activity in the marketplace.', category: 'Typology', slug: 'wash-trading' },
  { term: 'Heuristic Engine', definition: 'A system that uses behavioral patterns and rules (heuristics) to probabilistically cluster wallet addresses belonging to the same entity.', category: 'Tech', slug: 'heuristic-engine' },
  { term: 'Unspent Transaction Output (UTXO)', definition: 'The unspent output of a transaction that can be used as an input for a new transaction, fundamental to how Bitcoin tracks ownership.', category: 'Tech', slug: 'utxo' },
  { term: 'Deterministic Data', definition: 'Absolute, mathematically verifiable blockchain data, as opposed to probabilistic data inferred through human or algorithmic heuristics.', category: 'Tech', slug: 'deterministic-data' },
  { term: 'Change Address', definition: 'An address automatically generated by a wallet to collect the remaining change (UTXOs) from a transaction.', category: 'Tech', slug: 'change-address' },
  { term: 'Decentralized Exchange (DEX)', definition: 'A peer-to-peer marketplace where users trade cryptocurrencies directly without an intermediary or central authority.', category: 'Entities', slug: 'dex' },
  { term: 'Cross-Chain Bridge', definition: 'A protocol connecting two independent blockchains, allowing the transfer of assets or data between them.', category: 'Infrastructure', slug: 'cross-chain-bridge' },
  { term: 'Suspicious Activity Report (SAR)', definition: 'A document that financial institutions must file with authorities following a suspected incident of money laundering or fraud.', category: 'Compliance', slug: 'sar' },
  { term: 'Smart Contract', definition: 'A self-executing contract with the terms of the agreement directly written into lines of code deployed on a blockchain.', category: 'Tech', slug: 'smart-contract' },
  { term: 'Flash Loan Attack', definition: 'An exploit where an attacker borrows a massive amount of crypto without collateral, manipulates market prices, and repays the loan in the same transaction block.', category: 'Security', slug: 'flash-loan-attack' }
];

export const faqs: FaqItem[] = [
  { question: "How is your confidence score calculated?", answer: "Our scores are deterministic aggregates of 4 factors: Source reliability (OSINT vs. Partner), Heuristic strength (Clustering vs. Exact Match), Hop distance, and Temporal relevance. We do not use 'black box' AI for scoring; every score represents a traceable logic path.", category: "Platform" },
  { question: "Can we export data for court proceedings?", answer: "Yes. The 'Evidence Package' export creates a hash-stamped PDF and CSV bundle including the full graph state, decision logs, and analyst annotations, designed to establish a chain of custody.", category: "Legal" },
  { question: "Do you cover Layer 2 networks?", answer: "We support Arbitrum, Optimism, Base, and zkSync Era with full tracing capabilities including bridge-crossing attribution.", category: "Coverage" },
  { question: "What is the deployment model?", answer: "We offer SaaS (SOC2 Type II compliant) and on-premise air-gapped deployments for classified environments.", category: "Security" },
];