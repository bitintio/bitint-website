import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/ui/Icons';

export const Contact = () => {
  const navigate = useNavigate();
  const onNav = (path: string) => navigate(path);

  const [form, setForm] = useState({ name:'', email:'', org:'', role:'Investigator', team:'1–10', msg:'' });
  const [sent, setSent] = useState(false);

  return (
    <section className="hero-bg" style={{padding:'72px 0', flex:1}}>
      <div className="container-wide">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:60}} className="max-lg:grid-cols-1">
          <div>
            <div className="eyebrow">Talk to us</div>
            <h1 className="display-1" style={{marginTop:18}}>Let's build your <span className="text-gradient">next case</span> together.</h1>
            <p className="muted" style={{fontSize:17, marginTop:18, lineHeight:1.55, maxWidth:480}}>
              Book a 30-minute demo with a Bitint analyst. Bring real addresses — we'll show you live traces, scoring, and exports.
            </p>

            <div style={{display:'grid', gap:16, marginTop:40}}>
              {[
              {i:'mail',  t:'contact@bitint.io',   s:'General inquiries'},
                {i:'phone', t:'+1 (415) 555-0113', s:'Mon–Fri, 9–5 PT'},
              ].map(row => (
                <div key={row.t} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <div style={{
                    width:40, height:40, borderRadius:10,
                    background:'var(--gradient-brand-soft)', color:'var(--violet-600)',
                    display:'grid', placeItems:'center', border:'1px solid rgba(160,43,230,0.18)',
                  }}><Icon name={row.i} size={18} stroke={2}/></div>
                  <div>
                    <div style={{fontWeight:600, fontSize:15}}>{row.t}</div>
                    <div style={{fontSize:13, color:'var(--text-muted)', marginTop:2}}>{row.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{marginTop:40, padding:20, background:'var(--bg-soft)'}}>
              <div style={{display:'flex', gap:10, alignItems:'center', marginBottom:8}}>
                <Icon name="lock" size={16} stroke={2}/>
                <div style={{fontWeight:600, fontSize:13}}>Sensitive inquiry?</div>
              </div>
              <p style={{fontSize:13, color:'var(--text-muted)', lineHeight:1.55}}>
                We support PGP-encrypted email for law-enforcement requests. <button style={{color:'var(--violet-600)', fontWeight:600}}>Download our public key →</button>
              </p>
            </div>
          </div>

          <div className="card" style={{padding:32, boxShadow:'var(--shadow-lg)'}}>
            {sent ? (
              <div style={{textAlign:'center', padding:'40px 20px'}}>
                <div style={{
                  width:56, height:56, borderRadius:'50%',
                  background:'var(--gradient-brand)', color:'#fff',
                  display:'grid', placeItems:'center', margin:'0 auto',
                }}><Icon name="check" size={28} stroke={2.5}/></div>
                <h3 style={{fontSize:22, marginTop:18}}>Message received.</h3>
                <p className="muted" style={{marginTop:10, fontSize:14.5}}>
                  A Bitint analyst will reach out within one business day — usually sooner.
                </p>
                <button className="btn btn-ghost" style={{marginTop:24}} onClick={()=>{ setSent(false); setForm({name:'',email:'',org:'',role:'Investigator',team:'1–10',msg:''}); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={(e)=>{ e.preventDefault(); setSent(true); }}>
                <h3 style={{fontSize:22, marginBottom:6}}>Book a demo</h3>
                <p className="muted" style={{fontSize:14}}>Takes 30 seconds. We respond within one business day.</p>
                <div style={{display:'grid', gap:14, marginTop:22}}>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}} className="max-sm:grid-cols-1">
                    <div className="field">
                      <label>Name</label>
                      <input className="input" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                    </div>
                    <div className="field">
                      <label>Work email</label>
                      <input className="input" type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
                    </div>
                  </div>
                  <div className="field">
                    <label>Organization</label>
                    <input className="input" required value={form.org} onChange={(e)=>setForm({...form, org:e.target.value})}/>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}} className="max-sm:grid-cols-1">
                    <div className="field">
                      <label>Role</label>
                      <select className="select" value={form.role} onChange={(e)=>setForm({...form, role:e.target.value})}>
                        <option>Investigator</option>
                        <option>Compliance</option>
                        <option>Engineering</option>
                        <option>Procurement</option>
                        <option>Executive</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Team size</label>
                      <select className="select" value={form.team} onChange={(e)=>setForm({...form, team:e.target.value})}>
                        <option>1–10</option><option>11–50</option><option>51–200</option><option>200+</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>Tell us about your use case (optional)</label>
                    <textarea className="textarea" rows={4} value={form.msg} onChange={(e)=>setForm({...form, msg:e.target.value})}
                              placeholder="Chains you care about, rough address volume, integrations you use today..."/>
                  </div>
                  <button className="btn btn-primary btn-lg" type="submit" style={{marginTop:6, justifyContent:'center'}}>
                    Request demo <Icon name="arrow-right" size={16} stroke={2}/>
                  </button>
                  <p style={{fontSize:11.5, color:'var(--text-subtle)', textAlign:'center'}}>
                    By submitting, you agree to our privacy policy. We never share your data with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
