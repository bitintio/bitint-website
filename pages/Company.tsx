import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Icon } from '../components/ui/Icons';
import { NotFound } from './GenericPages';

const About = () => (
    <div className="container-custom py-24">
        <Helmet>
            <title>About Us | Bitint</title>
            <meta name="description" content="Bitint was founded by former intelligence officers and cryptographers to bring scientific rigor to crypto forensics." />
        </Helmet>
        <h1 className="display-2 font-display font-bold mb-8">About Bitint</h1>
        <p className="text-xl text-text-secondary max-w-3xl mb-16" style={{lineHeight: 1.6}}>
            We believe that blockchain transparency shouldn't be a guessing game.
            Bitint was founded by former intelligence officers and cryptographers to bring scientific rigor to crypto forensics.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-bold mb-6">Our Principles</h3>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="p-2 rounded" style={{background: 'var(--surface-2)', color: 'var(--violet-600)'}}><Icon name="flag" size={20} /></div>
                        <div>
                            <h4 className="font-bold mb-1">Accuracy First</h4>
                            <p className="text-text-secondary">We prefer "Unknown" over a false positive. In our line of work, being wrong destroys lives.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="p-2 rounded" style={{background: 'var(--surface-2)', color: 'var(--violet-600)'}}><Icon name="shield" size={20} /></div>
                        <div>
                            <h4 className="font-bold mb-1">Privacy by Design</h4>
                            <p className="text-text-secondary">We trace funds, not people. We only unmask entities when evidence supports it.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="p-2 rounded" style={{background: 'var(--surface-2)', color: 'var(--violet-600)'}}><Icon name="check" size={20} /></div>
                        <div>
                            <h4 className="font-bold mb-1">Transparency & Trust</h4>
                            <p className="text-text-secondary">Every attribution is sourced and scored. We believe in explainable intelligence, not black boxes.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="p-2 rounded" style={{background: 'var(--surface-2)', color: 'var(--violet-600)'}}><Icon name="users" size={20} /></div>
                        <div>
                            <h4 className="font-bold mb-1">Mission-Driven</h4>
                            <p className="text-text-secondary">We exist to make blockchain ecosystems safer for legitimate users, institutions, and governments alike.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-6">Leadership</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-surface border border-border rounded-xl text-center">
                        <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" style={{background: 'var(--gradient-brand-soft)', color: 'var(--violet-600)'}}>GH</div>
                        <div className="font-bold text-lg">Gal Hadad</div>
                        <div className="text-text-secondary text-sm mt-1">Co-Founder & CEO</div>
                    </div>
                    <div className="p-6 bg-surface border border-border rounded-xl text-center">
                        <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" style={{background: 'var(--gradient-brand-soft)', color: 'var(--violet-600)'}}>AE</div>
                        <div className="font-bold text-lg">Avi Elmaleh</div>
                        <div className="text-text-secondary text-sm mt-1">Co-Founder</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Careers = () => (
    <div className="container-custom py-24">
        <Helmet>
            <title>Careers | Bitint</title>
            <meta name="description" content="Join the mission. Build the tools that secure the future of finance." />
        </Helmet>
        <h1 className="display-2 font-display font-bold mb-6">Join the Mission</h1>
        <p className="text-xl text-text-secondary mb-12">Build the tools that secure the future of finance.</p>

        <div className="space-y-4 max-w-4xl">
            {[
                { title: 'Senior Rust Engineer', team: 'Data Ingestion', loc: 'Remote' },
                { title: 'Graph Data Scientist', team: 'Intelligence', loc: 'London / Remote' },
                { title: 'Intelligence Analyst', team: 'Investigations', loc: 'Washington DC' },
                { title: 'Solutions Architect', team: 'Sales Engineering', loc: 'New York' },
            ].map((job, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface border border-border rounded-lg" style={{transition: 'border-color .15s ease'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--violet-500)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
                    <div>
                        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                        <p className="text-text-secondary text-sm">{job.team} • {job.loc}</p>
                    </div>
                    <Link to="/contact" className="btn btn-ghost btn-sm mt-4 md:mt-0">Apply Now</Link>
                </div>
            ))}
        </div>
    </div>
);

const Security = () => (
    <div className="container-custom py-24">
        <Helmet>
            <title>Security & Trust | Bitint</title>
            <meta name="description" content="Security is our core competency. SOC2 Type II and ISO 27001 compliant." />
        </Helmet>
        <div className="max-w-3xl">
            <h1 className="display-2 font-display font-bold mb-8 flex items-center gap-3"><span style={{color: 'var(--violet-600)'}}><Icon name="shield" size={40} /></span> Security & Trust</h1>
            <p className="text-lg text-text-secondary mb-12" style={{lineHeight: 1.6}}>
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
                <a href="mailto:contact@bitint.io" className="btn btn-ghost">Report a Vulnerability</a>
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
        <Helmet>
            <title>Partners | Bitint</title>
            <meta name="description" content="Technology and investigative partners for complex asset recovery." />
        </Helmet>
        <h1 className="display-2 font-display font-bold mb-8">Partners</h1>
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-surface border border-border rounded-xl p-8">
                <div style={{color: 'var(--violet-600)', marginBottom: 16}}><Icon name="plug" size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">Technology Partners</h3>
                <p className="text-text-secondary mb-6" style={{lineHeight: 1.6}}>Integrate Bitint data directly into your platform. We offer OEM and white-label agreements for exchanges and wallet providers.</p>
                <Link to="/contact" className="btn btn-ghost">Become a Partner</Link>
            </div>
            <div className="bg-surface border border-border rounded-xl p-8">
                <div style={{color: 'var(--violet-600)', marginBottom: 16}}><Icon name="users" size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">Investigative Partners</h3>
                <p className="text-text-secondary mb-6" style={{lineHeight: 1.6}}>We work with certified forensic accounting firms and private intelligence agencies to support complex asset recovery cases.</p>
                <Link to="/contact" className="btn btn-ghost">Join Network</Link>
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
            <Route path="contact" element={<Link to="/contact" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};