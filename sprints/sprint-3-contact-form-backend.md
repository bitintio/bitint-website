# Sprint 3 — Contact Form Backend

## Goal
Replace the simulated demo request form with a real submission mechanism that delivers form data to the Bitint team.

---

## Prerequisites
- Sprint 1 completed (project builds)
- Decision on backend approach (see options below)

---

## Options (Choose One)

### Option A: Formspree (No Backend Required) — RECOMMENDED
**Best for**: Quick deployment, no server-side code needed.

1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a new form → get endpoint URL: `https://formspree.io/f/xxxxxxxx`
3. Update `RequestDemo.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const formData = new FormData(e.currentTarget);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    });
    
    if (response.ok) {
      navigate('/thanks');
    } else {
      alert('Submission failed. Please try again.');
    }
  } catch (error) {
    alert('Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

4. Add `name` attributes to all form inputs:
```html
<input name="firstName" ... />
<input name="lastName" ... />
<input name="email" ... />
<select name="orgType" ... />
<select name="interest" ... />
<textarea name="message" ... />
```

### Option B: Email via Resend API + Serverless Function
**Best for**: More control, custom email templates.

1. Sign up at https://resend.com
2. Create an API endpoint (can be a simple Express server or serverless function on the same Ubuntu server):

```ts
// server/api/demo-request.ts
import express from 'express';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/demo-request', async (req, res) => {
  const { firstName, lastName, email, orgType, interest, message } = req.body;
  
  await resend.emails.send({
    from: 'noreply@bitint.io',
    to: 'demos@bitint.io',
    subject: `Demo Request: ${firstName} ${lastName} - ${orgType}`,
    html: `<h2>New Demo Request</h2>
           <p><strong>Name:</strong> ${firstName} ${lastName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Organization:</strong> ${orgType}</p>
           <p><strong>Interest:</strong> ${interest}</p>
           <p><strong>Message:</strong> ${message || 'N/A'}</p>`,
  });
  
  res.json({ success: true });
});
```

### Option C: Google Sheets Integration via Google Apps Script
**Best for**: Non-technical team wants to see submissions in a spreadsheet.

1. Create a Google Sheet
2. Deploy a Google Apps Script web app that accepts POST requests
3. Frontend sends form data to the script URL
4. Data is appended to the spreadsheet

---

## Tasks (Using Option A — Formspree)

### 3.1 — Add Name Attributes to Form Inputs
In `RequestDemo.tsx`, add `name` attributes to every form field:
- `name="firstName"` on First Name input
- `name="lastName"` on Last Name input  
- `name="email"` on Work Email input
- `name="orgType"` on Organization Type select
- `name="interest"` on Primary Interest select
- `name="message"` on Message textarea

### 3.2 — Update Form Submit Handler
Replace the simulated `handleSubmit` with real Formspree submission (see Option A code above).

### 3.3 — Add Basic Form Validation Feedback
Add visual error states:
- Required fields show red border on submit without value
- Email field validates format
- Submit button shows loading spinner

### 3.4 — Test Submission
1. Fill out the form with test data
2. Submit and verify it redirects to `/thanks`
3. Check Formspree dashboard for received submission
4. Check email notification from Formspree

### 3.5 — Add Honeypot Spam Protection
Add a hidden field for basic bot protection:
```html
<input type="text" name="_gotcha" style={{ display: 'none' }} />
```
Formspree ignores submissions where this field is filled in (bots fill all fields).

---

## Verification Checklist
- [ ] All form inputs have `name` attributes
- [ ] Form submits to Formspree (or chosen backend)
- [ ] Success redirects to `/thanks` page
- [ ] Failed submission shows error message
- [ ] Loading state shown during submission
- [ ] Spam honeypot field is present but hidden
- [ ] Test submission appears in Formspree dashboard
- [ ] `npm run build` still succeeds

---

## Agent Instructions

1. The human needs to choose which option (A/B/C) and provide credentials
2. Ask for the Formspree form ID (or chosen service credentials)
3. If no preference is given, default to Option A (Formspree)
4. Add `name` attributes to every form field first
5. Then update the submit handler
6. Test with `npm run dev`

**Next**: Proceed to Sprint 4.
