import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { Helmet } from 'react-helmet-async';
import termsContent from '../data/terms.md?raw';
import privacyContent from '../data/privacy.md?raw';

export const Thanks = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-background">
    <div className="text-center p-8 max-w-md">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'rgba(16, 185, 129, 0.15)', color: '#10b981'}}>
        <Icon name="check" size={32} />
      </div>
      <h1 className="display-2 font-display font-bold mb-4">Request Received</h1>
      <p className="text-text-secondary mb-8" style={{lineHeight: 1.6}}>
        Thank you for your interest in Bitint. Our team will review your organization's details and reach out within 24 hours to schedule your demo.
      </p>
      <div className="flex flex-col gap-3">
        <Link to="/" className="btn btn-primary">Return Home</Link>
        <Link to="/resources" className="btn btn-ghost">Read Resources</Link>
      </div>
    </div>
  </div>
);

export const NotFound = ({ isSearch = false, query = '' }: { isSearch?: boolean, query?: string }) => (
  <div className="min-h-[70vh] flex items-center justify-center bg-background" style={{padding: '40px 20px'}}>
    <div className="text-center max-w-lg w-full">
      <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{background: 'var(--surface-2)', color: 'var(--text-muted)'}}>
        <Icon name="search" size={36} stroke={1.5} />
      </div>
      <h1 className="display-2 font-display font-bold mb-4">
        {isSearch ? "No results found" : "Page not found"}
      </h1>
      <p className="text-lg text-text-secondary mb-10" style={{lineHeight: 1.6}}>
        {isSearch 
          ? `We couldn't find anything matching "${query}". Try adjusting your search terms or explore our resources.`
          : "The page you're looking for doesn't exist or has been moved."}
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/" className="btn btn-primary btn-lg">Return to Homepage</Link>
        <Link to="/contact" className="btn btn-ghost btn-lg">Contact Support</Link>
      </div>
    </div>
  </div>
);

export const Privacy = () => (
  <div className="container-custom py-24">
    <Helmet>
      <title>Privacy Policy | Bitint</title>
      <meta name="description" content="Bitint Privacy Policy and data handling practices." />
    </Helmet>
    <div className="max-w-3xl mx-auto">
      <div className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-semibold
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-[var(--violet-500)] prose-a:no-underline hover:prose-a:underline
          prose-li:text-text-secondary prose-li:my-1
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-strong:text-text-primary marker:text-text-secondary
          selection:bg-[var(--violet-500)]/30">
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{privacyContent}</ReactMarkdown>
      </div>
    </div>
  </div>
);

export const Terms = () => (
  <div className="container-custom py-24">
    <Helmet>
      <title>Terms & Conditions | Bitint</title>
      <meta name="description" content="Bitint Terms and Conditions of service." />
    </Helmet>
    <div className="max-w-3xl mx-auto">
      <div className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-semibold
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-[var(--violet-500)] prose-a:no-underline hover:prose-a:underline
          prose-li:text-text-secondary prose-li:my-1
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-strong:text-text-primary marker:text-text-secondary
          selection:bg-[var(--violet-500)]/30">
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{termsContent}</ReactMarkdown>
      </div>
    </div>
  </div>
);