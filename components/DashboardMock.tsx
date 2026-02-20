import React, { useState } from 'react';

const GraphView = () => (
  <svg viewBox="0 0 800 400" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="800" height="400" fill="url(#grid)" />
    
    {/* Nodes */}
    <g className="animate-fade-in">
       <circle cx="200" cy="200" r="20" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
       <circle cx="400" cy="150" r="15" fill="#334155" stroke="#475569" strokeWidth="2" />
       <circle cx="400" cy="250" r="15" fill="#334155" stroke="#475569" strokeWidth="2" />
       <circle cx="600" cy="200" r="30" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
       
       {/* Edges */}
       <line x1="220" y1="200" x2="385" y2="150" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,5" />
       <line x1="220" y1="200" x2="385" y2="250" stroke="#fbbf24" strokeWidth="2" />
       <line x1="415" y1="150" x2="570" y2="200" stroke="#94a3b8" strokeWidth="1" />
       <line x1="415" y1="250" x2="570" y2="200" stroke="#94a3b8" strokeWidth="1" />
       
       {/* Labels */}
       <text x="200" y="240" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">0x4a...9f</text>
       <text x="600" y="250" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Sanctioned Entity</text>
    </g>
  </svg>
);

const AlertsView = () => (
  <div className="w-full h-full bg-slate-900 p-6 rounded-lg overflow-y-auto font-mono text-sm">
    <div className="flex justify-between text-slate-400 border-b border-slate-700 pb-2 mb-4">
      <span>TIMESTAMP</span>
      <span>SEVERITY</span>
      <span>TYPE</span>
      <span>VALUE</span>
    </div>
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex justify-between items-center py-3 border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer group">
        <span className="text-slate-300">2023-10-24 14:0{i}:22</span>
        <span className={`px-2 py-1 rounded text-xs font-bold ${i === 1 ? 'bg-red-500/20 text-red-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
          {i === 1 ? 'CRITICAL' : 'HIGH'}
        </span>
        <span className="text-slate-200">{i === 1 ? 'Direct Exposure' : 'Structuring'}</span>
        <span className="text-slate-400 group-hover:text-white">$12,{i}00.00</span>
      </div>
    ))}
  </div>
);

const EntityProfile = () => (
  <div className="w-full h-full bg-slate-900 p-6 rounded-lg grid grid-cols-2 gap-6">
    <div className="col-span-1 border-r border-slate-800 pr-6">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
         <span className="text-2xl">⚠️</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">Lazarus Group (Cluster)</h3>
      <p className="text-slate-400 text-sm mb-4">DPRK State-sponsored cyber threat actor.</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
           <span className="text-slate-500">Confidence Score</span>
           <span className="text-yellow-500 font-bold">98.5%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
           <div className="h-full bg-yellow-500 w-[98.5%]"></div>
        </div>
      </div>
    </div>
    <div className="col-span-1 space-y-4">
       <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Known Addresses</h4>
       <div className="space-y-2">
         {['bc1qxy2...', '0x7a23...', 'T9yBq...'].map(addr => (
           <div key={addr} className="bg-slate-800 p-2 rounded text-xs font-mono text-slate-300 flex justify-between">
             <span>{addr}</span>
             <span className="text-red-400">High Risk</span>
           </div>
         ))}
       </div>
    </div>
  </div>
);

export const DashboardMock: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Graph View', 'Alerts View', 'Entity Profile'];

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
      {/* Mock Browser Chrome */}
      <div className="bg-slate-900 border-b border-slate-800 p-3 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="bg-slate-950 px-4 py-1 rounded-md text-xs text-slate-500 font-mono flex-1 text-center">
          https://platform.bitint.com/investigations/case-2941
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-900/50">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === i ? 'text-brand border-b-2 border-brand bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="h-[400px] bg-slate-950 relative">
        {activeTab === 0 && <GraphView />}
        {activeTab === 1 && <AlertsView />}
        {activeTab === 2 && <EntityProfile />}
      </div>
    </div>
  );
};