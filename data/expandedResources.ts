export const RESOURCES_DATA = [
  // BLOG
  { id: 'b1', type: 'blog', title: 'The Evolution of Cross-Chain Obfuscation', desc: 'How illicit actors are using bridges to break traceability, and how we track them.', date: 'Oct 12, 2023', tags: ['Investigations', 'Cross-chain'] },
  { id: 'b2', type: 'blog', title: 'Sanctions Evasion Tactics in Q3', desc: 'An analysis of recent OFAC designations and the on-chain behavior of sanctioned entities.', date: 'Aug 04, 2023', tags: ['Sanctions', 'Research'] },
  { id: 'b3', type: 'blog', title: 'Uncovering Pig Butchering Networks', desc: 'Tracing multi-million dollar scam networks through consolidation wallets.', date: 'Dec 10, 2023', tags: ['Scams', 'Analysis'] },
  { id: 'b4', type: 'blog', title: 'The State of Mixer Usage in 2024', desc: 'Volume shifts and alternative privacy preservation methods observed on-chain.', date: 'Jan 15, 2024', tags: ['Privacy', 'Research'] },

  // FUNDAMENTALS
  { id: 'f1', type: 'fundamentals', slug: 'white-box-risk-scoring', title: 'What is White-box Risk Scoring?', desc: 'Understanding the difference between opaque risk numbers and defensible intelligence.', date: '', tags: ['Compliance', 'Methodology'],
    content: `In the early days of blockchain intelligence, risk scoring was largely a black-box exercise. Compliance teams would input an address into a platform and receive a seemingly arbitrary score—often a red/yellow/green indicator or a number from 1 to 100. While this allowed for rapid, automated screening, it failed a critical requirement of modern financial compliance: **explainability**.

## The Problem with Black-Box Intelligence
When a regulator, auditor, or law enforcement agency asks *why* a particular customer was offboarded or why a transaction was flagged, pointing to a proprietary vendor algorithm is insufficient. A black-box system provides a conclusion without the investigative working necessary to defend that conclusion in court or during an audit.

This creates significant friction:
*   **False Positives:** Without knowing how a score is derived, teams cannot tune their policies or confidently clear false alarms.
*   **Regulatory Defensibility:** Institutions are ultimately responsible for their compliance decisions. Relying on an opaque third-party score introduces unacceptable regulatory risk.

## Enter White-Box Risk Scoring
White-box risk scoring flips this paradigm. A white-box system doesn't just deliver a score; it provides the entire cryptographic and heuristic trail used to calculate it. 

Bitint's architecture is fundamentally white-box. When an address is flagged for interacting with a sanctioned entity, the platform exposes the exact transactional graph:
1.  The specific hops (distance) between the queried address and the illicit entity.
2.  The exact volume of funds transferred.
3.  The specific clustering heuristics applied to attribute the illicit address.

By exposing the underlying logic, compliance teams can move from reactive box-checking to proactive risk management, generating truly defensible, audit-ready evidence trails.`
  },
  { id: 'f2', type: 'fundamentals', slug: 'utxo-vs-account-based', title: 'UTXO vs Account-Based Tracing', desc: 'The technical differences between tracing Bitcoin (UTXO model) and Ethereum (Account model), and why it matters for evidence building.', date: '', tags: ['Technical', 'Fundamentals'],
    content: `When conducting blockchain forensics, investigators must understand the underlying accounting model of the network they are analyzing. The two primary architectures are the **UTXO (Unspent Transaction Output) model**, popularized by Bitcoin, and the **Account-based model**, utilized by Ethereum and most smart contract platforms.

## The UTXO Model (Bitcoin)
Think of UTXOs like physical cash. If you have a $20 bill (one UTXO) and want to buy a $5 coffee, you don't just deduct $5. You hand over the $20 bill, and the cashier hands you back $15 in change. 

In Bitcoin, transactions work identically. A transaction consumes existing inputs entirely and creates new outputs. One output goes to the payee, and the remaining balance goes to a "change address" controlled by the sender.
*   **Forensic Advantage:** The need for change addresses allows investigators to use "change heuristics" to cluster addresses together. If an algorithm can confidently identify the change address, it can map the user's entire wallet cluster, significantly enhancing entity resolution.

## The Account Model (Ethereum)
The Account model operates like a traditional bank account. You have a single address (account) with a balance. When you send 5 ETH, the network simply deducts 5 ETH from your balance and adds it to the recipient's balance.
*   **Forensic Challenge:** Because there are no change addresses, clustering heuristics used on Bitcoin do not apply. Investigators cannot group multiple Ethereum addresses simply based on transaction structures.
*   **Forensic Solution:** Tracing on Ethereum requires behavioral heuristics—analyzing gas funding sources, smart contract interactions, and cross-chain bridge usage to link disparate accounts to a single controller.

Understanding these structural differences is the foundation of accurate blockchain intelligence and multi-chain investigations.`
  },
  { id: 'f3', type: 'fundamentals', slug: 'entity-clustering-heuristics', title: 'Entity Clustering Heuristics', desc: 'How blockchain intelligence platforms determine that multiple anonymous addresses are controlled by the same entity.', date: '', tags: ['Technical', 'Data Science'],
    content: `Blockchain addresses are pseudonymous. A single user, exchange, or darknet market might control millions of distinct addresses. **Entity Clustering** is the data science process of identifying these addresses and grouping them into a single, cohesive entity.

## Common Heuristics
Clustering relies on algorithms that detect specific on-chain behaviors indicating shared control:

### 1. Co-spending (Common-Input) Heuristic
Primarily used on UTXO blockchains (like Bitcoin). If a transaction utilizes multiple addresses as inputs to fund a single payment, we can cryptographically assume that all those input addresses are controlled by the same entity possessing the private keys.

### 2. Change Address Detection
When a user sends a partial balance, the remainder is sent to a newly generated change address. By programmatically identifying which output is the payment and which is the change (based on round numbers, script types, or address reuse), platforms can continuously map an entity's growing wallet infrastructure.

### 3. Gas Funding Links (Account Model)
On Ethereum, accounts need native tokens (ETH) to pay for gas. If a single "parent" address consistently funds dozens of fresh "child" addresses with exactly 0.05 ETH just before those child addresses execute smart contracts, a behavioral heuristic can cluster them together as a coordinated operation.

## Deterministic vs. Probabilistic
Legacy tools often use probabilistic clustering—guessing ownership based on timing. This leads to massive false positives. Modern intelligence requires **deterministic** resolution, relying on strict cryptographic proofs and verified intelligence sources to ensure that when a cluster is labeled, the attribution is undeniable.`
  },
  { id: 'f4', type: 'fundamentals', slug: 'understanding-peeling-chains', title: 'Understanding Peeling Chains', desc: 'A deep dive into how laundering operations programmatically split funds across thousands of transactions.', date: '', tags: ['Typologies', 'Methodology'],
    content: `A **Peeling Chain** is one of the most common and persistent money laundering typologies observed on UTXO-based blockchains like Bitcoin. It is designed to obfuscate the origin of illicit funds by breaking a massive, highly visible balance into thousands of small, low-profile transactions.

## How it Works
Imagine a hacker steals 1,000 BTC. Moving 1,000 BTC directly to an exchange would trigger instant compliance alerts. Instead, the hacker initiates a peeling chain:
1.  The 1,000 BTC is sent to a new address.
2.  A small amount (e.g., 2 BTC) is "peeled" off and sent to a deposit address at an exchange or a mixer.
3.  The remaining 998 BTC is sent to a new change address controlled by the hacker.
4.  From the 998 BTC address, another 1.5 BTC is peeled off to a different exchange.
5.  The remaining 996.5 BTC is sent to yet another change address.

This process is automated and repeats hundreds or thousands of times. The visual representation on a block explorer looks like a long chain with small outputs breaking off at every link.

## Detecting and Defeating Peeling Chains
Manual investigation of a peeling chain is nearly impossible due to the sheer volume of transactions. However, because the structure is highly programmatic, it leaves a distinct forensic footprint.

Advanced blockchain intelligence platforms use automated traversal algorithms to instantly map the entire chain. By identifying the persistent "change" path, investigators can isolate the primary laundering route and instantly aggregate all the small "peeled" outputs to identify which exchanges are receiving the stolen funds.`
  },
  { id: 'f5', type: 'fundamentals', slug: 'travel-rule-crypto', title: 'The Travel Rule in Crypto', desc: 'A primer on FATF Recommendation 16 and what it means for VASPs exchanging transaction data.', date: '', tags: ['Regulation', 'Compliance'],
    content: `The **Travel Rule** is a global regulatory standard implemented by the Financial Action Task Force (FATF). Originally designed for traditional wire transfers (Recommendation 16), it mandates that financial institutions share specific identifying information about the sender and receiver during a transaction. 

In 2019, FATF officially extended this requirement to Virtual Asset Service Providers (VASPs).

## What Does it Require?
When a user at Exchange A sends crypto to a user at Exchange B (exceeding a certain threshold, typically $1,000 USD/EUR), Exchange A must transmit the following data to Exchange B:
*   Originator's name and account number (wallet address).
*   Originator's physical address, national identity number, or date of birth.
*   Beneficiary's name and account number.

## The Technical Challenge
Unlike bank wires via SWIFT, blockchain transactions do not inherently carry PII (Personally Identifiable Information). If Exchange A sends BTC, the blockchain only records the alphanumeric addresses. 

Therefore, VASPs must use out-of-band communication protocols (like TRP, VerifyVASP, or Sygna) to securely transmit the required PII *alongside* the blockchain transaction.

## The Role of Blockchain Intelligence
Before transmitting sensitive customer data to a counterparty VASP, an exchange must perform **Counterparty Due Diligence**. They must use blockchain intelligence to verify that the destination address actually belongs to a regulated VASP and not an illicit darknet market, a sanctioned entity, or an unhosted wallet.

Integrating real-time wallet screening allows compliance teams to automatically classify counterparties, ensuring Travel Rule data is only shared with compliant, safe institutions.`
  },

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
