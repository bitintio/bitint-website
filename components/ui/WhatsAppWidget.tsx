import React from 'react';
import { Icon } from './Icons';

export const WhatsAppWidget: React.FC = () => {
  return (
    <a 
      href="https://wa.me/16504229155" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        width: 60,
        height: 60,
        background: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.4)';
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" size={32} />
    </a>
  );
};
