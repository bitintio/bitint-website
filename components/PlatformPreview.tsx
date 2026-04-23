import React, { useState } from 'react';
import clsx from 'clsx';
import { Activity, Network, ShieldCheck, Briefcase, LayoutDashboard } from 'lucide-react';

const tabs = [
  {
    id: 'monitoring',
    label: 'Monitoring',
    icon: Activity,
    image: '/screenshots/screenshot_8_Monitoring_Module_2.png',
    alt: 'Real-time monitoring and rule-based alerts'
  },
  {
    id: 'investigation',
    label: 'Investigation',
    icon: Network,
    image: '/screenshots/screenshot_5_Investigation_Module_1.png',
    alt: 'Graph-based fund tracing and clustering'
  },
  {
    id: 'screening',
    label: 'Wallet Screening',
    icon: ShieldCheck,
    image: '/screenshots/screenshot_6_Wallet_Screening_Module_1.png',
    alt: 'Sanctions and risk screening'
  },
  {
    id: 'cases',
    label: 'Cases',
    icon: Briefcase,
    image: '/screenshots/screenshot_11_Case_Manager_Module_1.png',
    alt: 'Investigation case management'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    image: '/screenshots/screenshot_2_Dashboard_Module_2.png',
    alt: 'High-level operational overview'
  }
];

export const PlatformPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-surface p-1.5 rounded-full border border-border shadow-sm">
        {tabs.map((tab, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                isActive 
                  ? "bg-brand text-black shadow-md" 
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
              )}
            >
              <tab.icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Screenshot Frame */}
      <div className="w-full rounded-xl border border-border bg-surface shadow-2xl overflow-hidden relative aspect-[16/9] md:aspect-[16/10]">
        
        {/* Mock Browser Header (Subtle) */}
        <div className="bg-surface-light border-b border-border p-3 flex items-center gap-2">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1"></div>
        </div>

        {/* Image Container with Crossfade */}
        <div className="relative w-full h-[calc(100%-45px)] bg-slate-100 overflow-hidden">
          {tabs.map((tab, i) => (
            <img
              key={tab.id}
              src={tab.image}
              alt={tab.alt}
              className={clsx(
                "absolute inset-0 w-full h-full object-cover object-left-top transition-opacity duration-500 ease-in-out",
                activeTab === i ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
