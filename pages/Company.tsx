import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Shield, Flag, Users, Handshake, Mail, Lock } from 'lucide-react';
import { NotFound } from './GenericPages';

const About = () => (
    <div className="container-custom py-24">
        <h1 className="text-5xl font-display font-bold mb-8">About Bitint</h1>
        <p className="text-xl text-text-secondary max-w-3xl mb-16">
            We believe that blockchain transparency shouldn't be a guessing game. 
            Bitint was founded by former intelligence officers and cryptographers to bring scientific rigor to crypto forensics.
        </p>
        
        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-bold mb-4">Our Principles</h3>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <div className="bg-surface-light p-2 rounded"><Flag size={20}/></div>
                        <div>
                            <h4 className="font-bold">Accuracy First</h4>
                            <p className="text-text-secondary">We prefer "Unknown" over a false positive. In our line of work, being wrong destroys lives.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="bg-surface-light p-2 rounded"><Lock size={20}/></div>
                        <div>
                            <h4 className="font-bold">Privacy by Design</h4>
                            <p className="text-text-secondary">We trace funds, not people. We only unmask entities when evidence supports it.</p>
                        </div>
                    </li>
                </ul>
            </div>
             <div>
                <h3 className="text-2xl font-bold mb-4">Leadership</h3>
                <div className="grid grid-cols-2 gap-4">
                    {['CEO', 'CTO', 'Head of Intelligence', 'General Counsel'].map(role => (
                        <div key={role} className="p-4 bg-surface border border-border rounded text-center">
                            <div className="w-16 h-16 bg-surface-light rounded-full mx-auto mb-3"></div>
                            <div className="font-bold">{role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Careers = () => (
    <div className="container-custom py-24">
        <h1 className="text-5xl font-display font-bold mb-6">Join the Mission</h1>
        <p className="text-xl text-text-secondary mb-12">Build the tools that secure the future of finance.</p>
        
        <div className="space-y-4 max-w-4xl">
            {[
                { title: 'Senior Rust Engineer', team: 'Data Ingestion', loc: 'Remote' },
                { title: 'Graph Data Scientist', team: 'Intelligence', loc: 'London / Remote' },
                { title: 'Intelligence Analyst', team: 'Investigations', loc: 'Washington DC' },
                { title: 'Solutions Architect', team: 'Sales Engineering', loc: 'New York' },
            ].map((job, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface border border-border rounded-lg hover:border-brand transition-colors">
                    <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <p className="text-text-secondary text-sm">{job.team} • {job.loc}</p>
                    </div>
                    <Button variant="secondary" size="sm" className="mt-4 md:mt-0" href="/company/contact">Apply Now</Button>
                </div>
            ))}
        </div>
    </div>
);

const Security = () => (
    <div className="container-custom py-24">
        <div className="max-w-3xl">
            <h1 className="text-4xl font-display font-bold mb-8 flex items-center gap-3"><Shield className="text-brand"/> Security & Trust</h1>
            <p className="text-lg text-text-secondary mb-12">
                Security is our core competency. We maintain a rigorous security posture aligned with SOC2 Type II and ISO 27001 frameworks.
            </p>
            
            <div className="bg-surface border border-border rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Vulnerability Disclosure Policy</h2>
                <p className="text-text-secondary mb-4">
                    Bitint takes the security of our systems seriously. If you believe you have found a security vulnerability in our platform, we encourage you to let us know right away.
                </p>
                <h3 className="font-bold mt-6 mb-2">Scope</h3>
                <ul className="list-disc list-inside text-text-secondary mb-4 space-y-1">
                    <li>*.bitint.com</li>
                    <li>Bitint API endpoints</li>
                </ul>
                 <h3 className="font-bold mt-6 mb-2">Safe Harbor</h3>
                 <p className="text-text-secondary mb-6 text-sm">
                     We will not pursue legal action against researchers who report issues in good faith and comply with this policy.
                 </p>
                 <Button href="mailto:security@example.com" variant="outline">Report a Vulnerability</Button>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Certifications (In Process)</h2>
            <div className="flex gap-4">
                 <div className="px-4 py-2 border border-border rounded bg-surface text-sm font-mono text-text-secondary">SOC2 Type II</div>
                 <div className="px-4 py-2 border border-border rounded bg-surface text-sm font-mono text-text-secondary">ISO 27001</div>
            </div>
        </div>
    </div>
);

const Partners = () => (
     <div className="container-custom py-24">
        <h1 className="text-5xl font-display font-bold mb-8">Partners</h1>
        <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-surface border border-border rounded-xl p-8">
                 <Handshake className="text-brand mb-4" size={32}/>
                 <h3 className="text-2xl font-bold mb-4">Technology Partners</h3>
                 <p className="text-text-secondary mb-6">Integrate Bitint data directly into your platform. We offer OEM and white-label agreements for exchanges and wallet providers.</p>
                 <Button href="/company/contact" variant="secondary">Become a Partner</Button>
             </div>
             <div className="bg-surface border border-border rounded-xl p-8">
                 <Users className="text-brand mb-4" size={32}/>
                 <h3 className="text-2xl font-bold mb-4">Investigative Partners</h3>
                 <p className="text-text-secondary mb-6">We work with certified forensic accounting firms and private intelligence agencies to support complex asset recovery cases.</p>
                 <Button href="/company/contact" variant="secondary">Join Network</Button>
             </div>
        </div>
    </div>
);

export const Company = () => {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="careers" element={<Careers />} />
      <Route path="security" element={<Security />} />
      <Route path="partners" element={<Partners />} />
      <Route path="contact" element={<Link to="/request-demo" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};