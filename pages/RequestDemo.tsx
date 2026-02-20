import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const RequestDemo = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('demoRequested', 'true');
      navigate('/thanks');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container-custom max-w-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">Request a Demo</h1>
          <p className="text-text-secondary">See how Bitint provides clarity in complex investigations.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-surface p-8 rounded-xl border border-border">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">First Name</label>
              <input required type="text" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Last Name</label>
              <input required type="text" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Work Email</label>
            <input required type="email" className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors" />
          </div>

          <div>
             <label className="block text-sm font-medium text-text-primary mb-1">Organization Type</label>
             <select className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors">
               <option>Law Enforcement</option>
               <option>Financial Institution</option>
               <option>Exchange / VASP</option>
               <option>Government / Regulator</option>
               <option>Other</option>
             </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Primary Interest</label>
             <select className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors">
               <option>Investigations & Tracing</option>
               <option>Transaction Monitoring (AML)</option>
               <option>Wallet Screening</option>
               <option>API Integration</option>
             </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Message (Optional)</label>
            <textarea className="w-full bg-background border border-border rounded p-2 focus:border-brand focus:outline-none transition-colors h-24"></textarea>
          </div>

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