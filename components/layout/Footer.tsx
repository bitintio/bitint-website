import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-black text-sm">B</span>
              </div>
              <span className="font-display font-bold text-lg text-text-primary">Bitint</span>
            </Link>
            <p className="text-sm text-text-secondary mb-6 max-w-sm">
              Blockchain intelligence for teams that demand certainty. Tracing, monitoring, and attribution for the world's most critical financial investigations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-brand"><Twitter size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-brand"><Linkedin size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-brand"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/platform" className="hover:text-brand">Overview</Link></li>
              <li><Link to="/platform/coverage" className="hover:text-brand">Coverage & Data</Link></li>
              <li><Link to="/platform/attribution" className="hover:text-brand">Attribution</Link></li>
              <li><Link to="/platform/auditability" className="hover:text-brand">Audit Trails</Link></li>
              <li><Link to="/platform/integrations" className="hover:text-brand">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/solutions/investigations" className="hover:text-brand">Investigations</Link></li>
              <li><Link to="/solutions/monitoring" className="hover:text-brand">Monitoring</Link></li>
              <li><Link to="/solutions/screening" className="hover:text-brand">Screening</Link></li>
              <li><Link to="/solutions/entity-intel" className="hover:text-brand">Entity Intel</Link></li>
              <li><Link to="/solutions/alerts" className="hover:text-brand">Alerts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/company/about" className="hover:text-brand">About Us</Link></li>
              <li><Link to="/company/careers" className="hover:text-brand">Careers</Link></li>
              <li><Link to="/company/partners" className="hover:text-brand">Partners</Link></li>
              <li><Link to="/company/security" className="hover:text-brand">Security</Link></li>
              <li><Link to="/company/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>
          
           <div>
            <h4 className="font-bold text-text-primary mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/resources/blog" className="hover:text-brand">Blog</Link></li>
              <li><Link to="/resources/case-studies" className="hover:text-brand">Case Studies</Link></li>
              <li><Link to="/resources/fundamentals" className="hover:text-brand">Fundamentals</Link></li>
              <li><Link to="/resources/glossary" className="hover:text-brand">Glossary</Link></li>
              <li><Link to="/resources/faq" className="hover:text-brand">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-text-secondary">
            <span>© {new Date().getFullYear()} Bitint. All rights reserved.</span>
            <Link to="/legal/privacy" className="hover:text-brand">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-brand">Terms & Conditions</Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Shield size={14} className="text-brand" />
            <span>Security Reporting: security@bitint.example.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};