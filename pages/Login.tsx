import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, BitintLogo } from '../components/ui/Icons';
import { InvestigationGraph } from '../components/ProductMockups';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div style={{
      minHeight:'100vh',
      display:'grid', gridTemplateColumns:'1fr 1.1fr',
    }} className="max-lg:grid-cols-1">
      <div style={{
        padding:'60px 56px',
        display:'flex', flexDirection:'column', justifyContent:'center',
        background:'var(--bg)',
      }} className="max-sm:px-6">
        <div style={{maxWidth:420, width:'100%', margin:'0 auto'}}>
          <BitintLogo size={34} showWordmark={true} />
          <h1 className="display-3" style={{marginTop:28, fontSize:34}}>Welcome back.</h1>
          <p className="muted" style={{marginTop:10, fontSize:15}}>Sign in to your Bitint workspace.</p>

          <div style={{display:'flex', gap:10, marginTop:28}}>
            <button className="btn btn-ghost" style={{flex:1, justifyContent:'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="btn btn-ghost" style={{flex:1, justifyContent:'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="1" width="10" height="10"/><rect x="13" y="1" width="10" height="10"/><rect x="1" y="13" width="10" height="10"/><rect x="13" y="13" width="10" height="10"/></svg>
              Microsoft
            </button>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:12, margin:'22px 0'}}>
            <div style={{flex:1, height:1, background:'var(--border)'}}/>
            <span style={{fontSize:11, color:'var(--text-subtle)', fontFamily:'var(--font-mono)', letterSpacing:'0.06em'}}>OR</span>
            <div style={{flex:1, height:1, background:'var(--border)'}}/>
          </div>

          <form onSubmit={(e)=>{ e.preventDefault(); setLoading(true); setTimeout(()=>{ setLoading(false); navigate('/platform'); }, 900); }}>
            <div className="field">
              <label>Work email</label>
              <input className="input" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="analyst@agency.gov"/>
            </div>
            <div className="field" style={{marginTop:14}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <label>Password</label>
                <button type="button" style={{fontSize:12, color:'var(--violet-600)', fontWeight:500}}>Forgot?</button>
              </div>
              <input className="input" type="password" required value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="••••••••"/>
            </div>
            <label style={{display:'flex', gap:8, alignItems:'center', marginTop:14, fontSize:13, color:'var(--text-muted)'}}>
              <input type="checkbox" defaultChecked/> Keep me signed in on this device
            </label>
            <button type="submit" className="btn btn-primary btn-lg" style={{marginTop:20, width:'100%', justifyContent:'center'}} disabled={loading}>
              {loading ? 'Signing in...' : <>Sign in <Icon name="arrow-right" size={15} stroke={2}/></>}
            </button>
          </form>
          <p style={{fontSize:13, color:'var(--text-muted)', marginTop:22, textAlign:'center'}}>
            Need access? <button onClick={() => navigate('/contact')} style={{color:'var(--violet-600)', fontWeight:600}}>Contact your admin</button>
          </p>
          <p style={{fontSize:11, color:'var(--text-subtle)', marginTop:30, textAlign:'center', lineHeight:1.6}}>
            Protected by SSO, FIDO2, and device trust. <br/>SOC 2 Type II · ISO 27001 · SAML/OIDC ready.
          </p>
        </div>
      </div>

      <div style={{
        background: 'radial-gradient(1000px 600px at 30% 20%, rgba(91,76,255,0.45), transparent 55%),'
                  + 'radial-gradient(700px 500px at 80% 80%, rgba(62,166,255,0.35), transparent 55%),'
                  + 'linear-gradient(135deg, #1a1466 0%, #07061a 100%)',
        position:'relative', overflow:'hidden', color:'#f5f4ff',
      }} className="max-lg:hidden">
        <div aria-hidden style={{
          position:'absolute', inset:0,
          backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize:'22px 22px',
        }}/>
        <div style={{
          position:'absolute', inset:0, display:'flex', flexDirection:'column',
          justifyContent:'center', padding:'60px 56px',
        }}>
          <div style={{maxWidth:520}}>
            <div className="eyebrow" style={{background:'rgba(255,255,255,0.08)', color:'#c5bcff', borderColor:'rgba(197,188,255,0.25)'}}>
              Live graph
            </div>
            <h2 className="display-2" style={{color:'#fff', marginTop:18, fontSize:44}}>
              Your cases,<br/>
              <span style={{
                background:'linear-gradient(135deg, #c5bcff, #9dd5ff)',
                WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
              }}>already in progress.</span>
            </h2>
            <p style={{color:'rgba(245,244,255,0.7)', marginTop:14, fontSize:15, lineHeight:1.55}}>
              Pick up where you left off. 22 new alerts, 3 active investigations, and today's watchlist sync are waiting.
            </p>

            <div style={{
              marginTop:40,
              borderRadius:16, overflow:'hidden',
              border:'1px solid rgba(255,255,255,0.1)',
              background:'rgba(7,6,26,0.6)',
              height:280,
            }}>
              <InvestigationGraph animated={true} />
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14, marginTop:24}}>
              {[
                {v:'22', l:'new alerts'},
                {v:'3', l:'investigations'},
                {v:'31', l:'watchlist'},
              ].map(s => (
                <div key={s.l} style={{
                  padding:14, borderRadius:12,
                  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, color:'#fff'}}>{s.v}</div>
                  <div style={{fontSize:11.5, color:'rgba(245,244,255,0.6)', marginTop:2}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
