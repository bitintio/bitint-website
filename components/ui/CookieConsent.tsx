import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bitint_cookie_consent');
    if (consent === 'accepted') {
      loadTidio();
    } else if (!consent) {
      // Small delay to not aggressively pop up instantly on page load
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadTidio = () => {
    if (!document.getElementById('tidio-script')) {
      const script = document.createElement('script');
      script.id = 'tidio-script';
      script.src = "//code.tidio.co/rlhgxblbi23vkfese4wscnhhbo6dnvxa.js";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  const handleAccept = () => {
    localStorage.setItem('bitint_cookie_consent', 'accepted');
    setShow(false);
    loadTidio();
  };

  const handleDecline = () => {
    localStorage.setItem('bitint_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: 24, zIndex: 9999,
      maxWidth: 380, background: 'var(--surface)',
      border: '1px solid var(--border)', borderRadius: 16,
      padding: 24, boxShadow: 'var(--shadow-lg)',
      display: 'flex', flexDirection: 'column', gap: 16,
      animation: 'slideUp 0.3s ease-out'
    }}>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div>
        <h4 style={{margin: '0 0 8px 0', fontSize: 16, fontWeight: 700}}>Cookie Consent</h4>
        <p style={{margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5}}>
          We use cookies to improve your experience and provide chat support. 
          By clicking "Accept", you consent to our use of non-essential cookies. 
          Read our <Link to="/privacy-policy" style={{textDecoration: 'underline', color: 'var(--violet-600)'}}>Privacy Policy</Link>.
        </p>
      </div>
      <div style={{display: 'flex', gap: 10}}>
        <button onClick={handleAccept} className="btn btn-primary" style={{flex: 1, padding: '8px 16px', fontSize: 13, justifyContent: 'center'}}>Accept</button>
        <button onClick={handleDecline} className="btn btn-ghost" style={{flex: 1, padding: '8px 16px', fontSize: 13, justifyContent: 'center'}}>Decline</button>
      </div>
    </div>
  );
};
