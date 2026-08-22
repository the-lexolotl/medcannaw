'use client';

import { useState } from 'react';

export default function NewsletterSignup({ variant = 'card' }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const isCompact = variant === 'compact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thanks! Please check your inbox to confirm.');
        setEmail('');
        setFirstName('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Unable to connect. Please try again later.');
    }
  };

  // ---------- COMPACT (footer) VARIANT ----------
  if (isCompact) {
    return (
      <div>
        <h5 style={{
          fontFamily: 'var(--font-heading)',
          color: '#BED221',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>
          Get campaign updates
        </h5>

        {status === 'success' ? (
          <p style={{ fontFamily: 'var(--font-body)', color: '#d8d8d8', fontSize: '0.9rem', lineHeight: 1.5 }}>
            {message}
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              aria-label="First name"
              style={compactInputStyle}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Email address"
              style={compactInputStyle}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                backgroundColor: status === 'loading' ? '#9AAA1A' : '#BED221',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                padding: '0.65rem 1rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>

            {status === 'error' && (
              <p style={{ color: '#e3a671', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>{message}</p>
            )}

            <p style={{ fontSize: '0.72rem', color: '#9a9a9a', fontFamily: 'var(--font-body)', lineHeight: 1.5, marginTop: '0.2rem' }}>
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    );
  }

  // ---------- CARD (homepage / page section) VARIANT ----------
  return (
    <section style={{
      backgroundColor: '#F4F7D9',
      border: '2px solid #000',
      borderRadius: '6px',
      padding: '2.5rem',
      maxWidth: '560px',
      margin: '0 auto',
    }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: '#000', fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Stay in the loop
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: '#000', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Get updates on programme announcements, patient stories and campaign news — straight to your inbox.
      </p>

      {status === 'success' ? (
        <div style={{
          backgroundColor: '#E8EEB0',
          border: '2px solid #000',
          borderRadius: '4px',
          padding: '1rem 1.25rem',
          color: '#000',
          fontFamily: 'var(--font-body)',
        }}>
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="firstName" style={labelStyle}>First name (optional)</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>Email address <span style={{ color: '#c0392b' }}>*</span></label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </div>

          {status === 'error' && (
            <p style={{ color: '#c0392b', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>{message}</p>
          )}

          <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%' }}>
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>

          <p style={{ fontSize: '0.78rem', color: '#3a3a3a', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
            By subscribing, you agree to receive emails from MCUK. You can unsubscribe at any time.
            We handle your data in accordance with our{' '}
            <a href="/policies/privacy" style={{ color: '#000', fontWeight: 700 }}>Privacy Policy</a>.
          </p>
        </form>
      )}
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.9rem',
  fontWeight: 700,
  color: '#000',
  marginBottom: '0.4rem',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '4px',
  border: '2px solid #000',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: '#000',
  backgroundColor: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};

const compactInputStyle = {
  width: '100%',
  padding: '0.6rem 0.85rem',
  borderRadius: '4px',
  border: '1px solid #4a4a4a',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: '#000',
  backgroundColor: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};