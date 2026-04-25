import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icons';

export const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check localStorage
    const isRegistered = localStorage.getItem('bitint_newsletter_registered');
    if (isRegistered) return;

    const dismissedAt = localStorage.getItem('bitint_newsletter_dismissed_at');
    if (dismissedAt) {
      const daysSinceDismissed = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) return;
    }

    let triggered = false;

    const showPopup = () => {
      if (triggered) return;
      triggered = true;
      setIsVisible(true);
    };

    // 1. Time-Delay (10s)
    const timer = setTimeout(showPopup, 10000);

    // 2. Scroll Depth (50%)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && (scrollY / docHeight) >= 0.5) {
        showPopup();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. Exit-Intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        showPopup();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Accessibility: Focus trap & Esc key
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissPopup();
      }
      
      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Focus first element on open
    setTimeout(() => {
      const input = dialogRef.current?.querySelector('input');
      if (input) input.focus();
    }, 100);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const dismissPopup = () => {
    setIsVisible(false);
    localStorage.setItem('bitint_newsletter_dismissed_at', Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      localStorage.setItem('bitint_newsletter_registered', 'true');
      setTimeout(() => setIsVisible(false), 3000);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{
          background: 'rgba(10, 10, 26, 0.6)', 
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease-out forwards'
        }}
        onClick={dismissPopup}
      >
        <div 
          ref={dialogRef}
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="newsletter-title"
          className="relative w-full max-w-md bg-surface border border-border shadow-lg rounded-2xl overflow-hidden"
          style={{ animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Decorative Gradient Header */}
          <div style={{ height: 6, background: 'var(--gradient-brand)' }} />
          
          <button 
            onClick={dismissPopup}
            className="absolute top-4 right-4 flex items-center justify-center text-text-muted hover:text-text transition-colors"
            style={{ width: 44, height: 44, borderRadius: '50%' }}
            aria-label="Close dialog"
          >
            <Icon name="x" size={24} />
          </button>

          <div className="p-8 pt-10">
            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(16, 185, 129, 0.15)', color: '#10b981'}}>
                  <Icon name="check" size={32} />
                </div>
                <h2 className="text-2xl font-bold font-display mb-2">You're subscribed!</h2>
                <p className="text-text-secondary">Watch your inbox for the latest intelligence.</p>
              </div>
            ) : (
              <>
                <h2 id="newsletter-title" className="text-2xl font-bold font-display leading-tight mb-4 pr-8">
                  Master blockchain intelligence and crypto compliance in just 2 minutes a week.
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Get exclusive weekly insights delivered straight to your inbox. Stay ahead of the curve with our expert analysis.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input 
                      id="newsletter-email"
                      type="email" 
                      required
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                      style={{ height: 48 }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full btn btn-primary flex justify-center items-center font-bold text-white rounded-xl"
                    style={{ height: 48, background: 'var(--gradient-brand)' }}
                  >
                    {status === 'submitting' ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                  <div className="text-center mt-6">
                    <button 
                      type="button" 
                      onClick={dismissPopup}
                      className="text-text-subtle hover:text-text-secondary text-sm underline decoration-transparent hover:decoration-current transition-all"
                      style={{ padding: '8px 16px', minHeight: 44 }}
                    >
                      No thanks, I'll pass
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};
