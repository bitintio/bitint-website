export const RESOURCES_DATA = [
  // BLOG
  { id: 'b1', type: 'blog', title: 'The Evolution of Cross-Chain Obfuscation', desc: 'How illicit actors are using bridges to break traceability, and how we track them.', date: 'Oct 12, 2023', tags: ['Investigations', 'Cross-chain'] },
  { id: 'b2', type: 'blog', title: 'Sanctions Evasion Tactics in Q3', desc: 'An analysis of recent OFAC designations and the on-chain behavior of sanctioned entities.', date: 'Aug 04, 2023', tags: ['Sanctions', 'Research'] },
  { id: 'b3', type: 'blog', title: 'Uncovering Pig Butchering Networks', desc: 'Tracing multi-million dollar scam networks through consolidation wallets.', date: 'Dec 10, 2023', tags: ['Scams', 'Analysis'] },
  { id: 'b4', type: 'blog', title: 'The State of Mixer Usage in 2024', desc: 'Volume shifts and alternative privacy preservation methods observed on-chain.', date: 'Jan 15, 2024', tags: ['Privacy', 'Research'] },

  // FUNDAMENTALS
  { id: 'f1', type: 'fundamentals', title: 'What is White-box Risk Scoring?', desc: 'Understanding the difference between opaque risk numbers and defensible intelligence.', date: 'Sep 28, 2023', tags: ['Compliance', 'Methodology'] },
  { id: 'f2', type: 'fundamentals', title: 'UTXO vs Account-Based Tracing', desc: 'The technical differences between tracing Bitcoin (UTXO model) and Ethereum (Account model), and why it matters for evidence building.', date: 'Jul 22, 2023', tags: ['Technical', 'Fundamentals'] },
  { id: 'f3', type: 'fundamentals', title: 'Entity Clustering Heuristics', desc: 'How blockchain intelligence platforms determine that multiple anonymous addresses are controlled by the same entity.', date: 'Oct 05, 2023', tags: ['Technical', 'Data Science'] },
  { id: 'f4', type: 'fundamentals', title: 'Understanding Peeling Chains', desc: 'A deep dive into how laundering operations programmatically split funds across thousands of transactions.', date: 'Nov 12, 2023', tags: ['Typologies', 'Methodology'] },
  { id: 'f5', type: 'fundamentals', title: 'The Travel Rule in Crypto', desc: 'A primer on FATF Recommendation 16 and what it means for VASPs exchanging transaction data.', date: 'Jan 05, 2024', tags: ['Regulation', 'Compliance'] },

  // FAQ
  { id: 'q1', type: 'faq', title: 'How does Bitint handle false positives?', desc: 'Our approach uses deterministic entity resolution rather than probabilistic guessing, significantly reducing alert fatigue compared to legacy tools.', date: '', tags: ['Product', 'FAQ'] },
  { id: 'q2', type: 'faq', title: 'Which blockchains does Bitint support?', desc: 'We natively support over 150+ blockchains including Bitcoin, Ethereum, Tron, BSC, Polygon, Solana, Avalanche, and major Layer 2 networks.', date: '', tags: ['Coverage', 'FAQ'] },
  { id: 'q3', type: 'faq', title: 'Can Bitint trace funds through decentralized exchanges (DEXs)?', desc: 'Yes. Our engine automatically parses smart contract events to trace value swapped through automated market makers like Uniswap and Curve.', date: '', tags: ['Tracing', 'FAQ'] },
  { id: 'q4', type: 'faq', title: 'How fast is the Transaction Monitoring API?', desc: 'Our API delivers risk scores and attribution data within 200ms of a transaction being broadcast to the mempool.', date: '', tags: ['API', 'FAQ'] },
  { id: 'q5', type: 'faq', title: 'Are Bitint\'s reports court-admissible?', desc: 'Yes. We provide complete, mathematically verifiable data provenance. Our reports have been used successfully in numerous global jurisdictions.', date: '', tags: ['Legal', 'FAQ'] },
  { id: 'q6', type: 'faq', title: 'Does Bitint monitor indirect exposure?', desc: 'Yes, our platform calculates multi-hop exposure, allowing you to set policies based on funds that are 2, 3, or N hops away from a sanctioned entity.', date: '', tags: ['Compliance', 'FAQ'] },
  { id: 'q7', type: 'faq', title: 'Do you offer an on-premise solution?', desc: 'Bitint offers dedicated private cloud deployments and VPC peering for institutions with strict data residency requirements.', date: '', tags: ['Enterprise', 'FAQ'] },

  // GLOSSARY (20 items)
  { id: 'g1', type: 'glossary', title: 'AML (Anti-Money Laundering)', desc: 'Regulations and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income.', date: '', tags: ['Glossary'] },
  { id: 'g2', type: 'glossary', title: 'Attribution', desc: 'The process of linking a pseudonymous blockchain address to a real-world entity, service, or individual.', date: '', tags: ['Glossary'] },
  { id: 'g3', type: 'glossary', title: 'Bridge', desc: 'A protocol connecting two separate blockchains, allowing the transfer of assets or data between them.', date: '', tags: ['Glossary'] },
  { id: 'g4', type: 'glossary', title: 'Chain Hopping', desc: 'A money laundering technique involving the rapid transfer of assets across different blockchains to obscure the trail.', date: '', tags: ['Glossary'] },
  { id: 'g5', type: 'glossary', title: 'Change Address', desc: 'In a UTXO model like Bitcoin, a new address generated to receive the remaining funds (change) from a transaction.', date: '', tags: ['Glossary'] },
  { id: 'g6', type: 'glossary', title: 'Clustering', desc: 'Data science heuristics used to group multiple blockchain addresses controlled by the same entity.', date: '', tags: ['Glossary'] },
  { id: 'g7', type: 'glossary', title: 'Darknet Market (DNM)', desc: 'Commercial websites operating on dark web networks (like Tor) frequently used for illicit goods, primarily transacting in cryptocurrency.', date: '', tags: ['Glossary'] },
  { id: 'g8', type: 'glossary', title: 'DEX (Decentralized Exchange)', desc: 'A peer-to-peer marketplace where transactions occur directly between crypto traders without an intermediary.', date: '', tags: ['Glossary'] },
  { id: 'g9', type: 'glossary', title: 'Dusting Attack', desc: 'Sending tiny amounts of crypto ("dust") to many addresses to unmask the privacy of the wallet owners.', date: '', tags: ['Glossary'] },
  { id: 'g10', type: 'glossary', title: 'Entity Resolution', desc: 'The process of determining whether multiple records (or addresses) refer to the same real-world entity.', date: '', tags: ['Glossary'] },
  { id: 'g11', type: 'glossary', title: 'Exit Node', desc: 'The final destination where illicit cryptocurrency is consolidated before being cashed out to fiat currency.', date: '', tags: ['Glossary'] },
  { id: 'g12', type: 'glossary', title: 'Heuristics', desc: 'Rules or algorithms used in blockchain analysis to make educated assumptions about address ownership or transaction patterns.', date: '', tags: ['Glossary'] },
  { id: 'g13', type: 'glossary', title: 'KYC (Know Your Customer)', desc: 'The mandatory process of identifying and verifying the client\'s identity when opening an account.', date: '', tags: ['Glossary'] },
  { id: 'g14', type: 'glossary', title: 'Mempool', desc: 'The waiting area for transactions that have been broadcast to the network but not yet confirmed in a block.', date: '', tags: ['Glossary'] },
  { id: 'g15', type: 'glossary', title: 'Mixer (Tumbler)', desc: 'A service that obfuscates the origin of cryptocurrency by pooling and scrambling funds from multiple users.', date: '', tags: ['Glossary'] },
  { id: 'g16', type: 'glossary', title: 'OFAC', desc: 'The Office of Foreign Assets Control, a US agency that administers and enforces economic and trade sanctions.', date: '', tags: ['Glossary'] },
  { id: 'g17', type: 'glossary', title: 'Peel Chain', desc: 'A laundering technique where a large balance is broken down via a series of transactions, "peeling" off small amounts each time.', date: '', tags: ['Glossary'] },
  { id: 'g18', type: 'glossary', title: 'SAR (Suspicious Activity Report)', desc: 'A document that financial institutions must file with FinCEN following a suspected incident of money laundering or fraud.', date: '', tags: ['Glossary'] },
  { id: 'g19', type: 'glossary', title: 'UTXO (Unspent Transaction Output)', desc: 'The amount of digital currency remaining after a cryptocurrency transaction is executed, used as inputs for new transactions.', date: '', tags: ['Glossary'] },
  { id: 'g20', type: 'glossary', title: 'VASP (Virtual Asset Service Provider)', desc: 'Any entity that provides services related to virtual assets, such as exchanges, custodians, or wallet providers.', date: '', tags: ['Glossary'] },
  { id: 'g21', type: 'glossary', title: 'Wash Trading', desc: 'A form of market manipulation where an entity simultaneously sells and buys the same assets to create false activity.', date: '', tags: ['Glossary'] },
];
