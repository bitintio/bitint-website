import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

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
  <div className="container-custom py-24 max-w-3xl">
    <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
    <div className="prose dark:prose-invert prose-yellow max-w-none">
      <p>Last Updated: October 2023</p>
      <p>This is a placeholder privacy policy for the Bitint demo application.</p>
      <h3>1. Data Collection</h3>
      <p>We collect information necessary to provide blockchain intelligence services...</p>
      <h3>2. Data Usage</h3>
      <p>Your data is used solely for the purpose of...</p>
      {/* More legal lorem ipsum would go here */}
    </div>
  </div>
);

export const Terms = () => (
  <div className="container-custom py-24 max-w-3xl">
    <h1 className="text-4xl font-display font-bold mb-8">Terms & Conditions</h1>
    <div className="prose dark:prose-invert prose-yellow max-w-none">
      <p>Last Updated: October 2023</p>
      <p>These terms govern your use of the Bitint platform.</p>
      <h3>1. Acceptable Use</h3>
      <p>You agree not to use the platform for any illegal activities...</p>
    </div>
  </div>
);