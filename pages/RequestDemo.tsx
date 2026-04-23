import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Helmet } from 'react-helmet-async';

export const RequestDemo = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xaqdldwa', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        localStorage.setItem('demoRequested', 'true');
        navigate('/thanks');
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <Helmet>
        <title>Request a Demo | Bitint</title>
        <meta name="description" content="Request a personalized demo of the Bitint blockchain intelligence platform." />
      </Helmet>
      <div className="container-custom max-w-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">Request a Demo</h1>
          <p className="text-text-secondary">See how Bitint provides clarity in complex investigations.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-surface p-8 rounded-xl border border-border">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">First Name</label>
              <input name="firstName" required type="text" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Last Name</label>
              <input name="lastName" required type="text" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Work Email</label>
            <input name="email" required type="email" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Organization Type</label>
            <select name="orgType" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors">
              <option>Law Enforcement</option>
              <option>Financial Institution</option>
              <option>Exchange / VASP</option>
              <option>Government / Regulator</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Primary Interest</label>
            <select name="interest" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors">
              <option>Investigations & Tracing</option>
              <option>Transaction Monitoring (AML)</option>
              <option>Wallet Screening</option>
              <option>API Integration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Message (Optional)</label>
            <textarea name="message" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors h-24"></textarea>
          </div>

          {/* Honeypot Spam Protection */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Access'}
          </Button>

          <p className="text-xs text-text-secondary text-center mt-4">
            By submitting, you agree to our <a href="/legal/terms" className="underline">Terms</a> and <a href="/legal/privacy" className="underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};