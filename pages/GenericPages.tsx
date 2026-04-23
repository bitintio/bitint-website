import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { Helmet } from 'react-helmet-async';
import termsContent from '../data/terms.md?raw';
import privacyContent from '../data/privacy.md?raw';

export const Thanks = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-background">
    <div className="text-center p-8 max-w-md">
      <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={32} />
      </div>
      <h1 className="text-3xl font-display font-bold mb-4">Request Received</h1>
      <p className="text-text-secondary mb-8">
        Thank you for your interest in Bitint. Our team will review your organization's details and reach out within 24 hours to schedule your demo.
      </p>
      <div className="flex flex-col gap-3">
        <Button href="/">Return Home</Button>
        <Button href="/resources/case-studies" variant="secondary">Read Case Studies</Button>
      </div>
    </div>
  </div>
);

export const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="text-9xl font-display font-bold text-surface-light">404</h1>
      <p className="text-xl text-text-secondary mb-8">Page not found.</p>
      <Button href="/">Return Home</Button>
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
          prose-a:text-brand prose-a:no-underline hover:prose-a:underline
          prose-li:text-text-secondary prose-li:my-1
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-strong:text-text-primary marker:text-text-secondary
          selection:bg-brand/30">
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
          prose-a:text-brand prose-a:no-underline hover:prose-a:underline
          prose-li:text-text-secondary prose-li:my-1
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-strong:text-text-primary marker:text-text-secondary
          selection:bg-brand/30">
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{termsContent}</ReactMarkdown>
      </div>
    </div>
  </div>
);