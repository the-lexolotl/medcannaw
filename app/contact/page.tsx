'use client'

import { useState } from 'react'
import CircleField from '@/components/CircleField'

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'general' | 'story'>('general')
  const [generalStatus, setGeneralStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [storyStatus, setStoryStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [subject, setSubject] = useState('General enquiry — MCAW website')

  const subjectMap: Record<string, string> = {
    'General enquiry': 'General enquiry — MCAW website',
    'Patient support': 'Patient support — MCAW website',
    'Media enquiry': 'Media enquiry — MCAW website',
    'Partnership': 'Partnership enquiry — MCAW website',
    'Volunteering': 'Volunteering enquiry — MCAW website',
  }

  async function handleGeneralSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGeneralStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mjgdyvyn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setGeneralStatus('success')
      } else {
        setGeneralStatus('error')
      }
    } catch {
      setGeneralStatus('error')
    }
  }

  async function handleStorySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStoryStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mjgdyvyn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStoryStatus('success')
      } else {
        setStoryStatus('error')
      }
    } catch {
      setStoryStatus('error')
    }
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero section--decorative">
        <CircleField variant="corner-tr" tone="on-dark" />
        <div className="container">
          <div className="section-label">Get in touch</div>
          <h1>We&apos;re Here to Help</h1>
          <p className="hero-sub">
            Whether you have a question, want to share your story, or want to get involved —
            we&apos;d love to hear from you. We aim to respond within 3 working days.
          </p>
        </div>
      </section>

      <div className="seam" />

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container contact-layout">

          {/* LEFT: FORM */}
          <div className="contact-form-wrap">

            {/* TAB SWITCHER */}
            <div className="form-tabs">
              <button
                type="button"
                className={`form-tab ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General enquiry
              </button>
              <button
                type="button"
                className={`form-tab ${activeTab === 'story' ? 'active' : ''}`}
                onClick={() => setActiveTab('story')}
              >
                Share your story
              </button>
            </div>

            {/* GENERAL ENQUIRY FORM */}
            {activeTab === 'general' && (
              <>
                {generalStatus === 'success' ? (
                  <div className="form-success">
                    <div className="success-icon">&#10003;</div>
                    <h3>Message sent</h3>
                    <p>Thank you for getting in touch. We&apos;ll get back to you within 3 working days.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleGeneralSubmit}>
                    <input type="hidden" name="_subject" value={subject} />

                    <div className="form-group">
                      <label htmlFor="name">Your name <span className="required">*</span></label>
                      <input type="text" id="name" name="name" placeholder="Full name" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email address <span className="required">*</span></label>
                      <input type="email" id="email" name="email" placeholder="your@email.com" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="enquiry">Type of enquiry <span className="required">*</span></label>
                      <select
                        id="enquiry"
                        name="enquiry_type"
                        required
                        onChange={e => setSubject(subjectMap[e.target.value] || 'Enquiry — MCAW website')}
                      >
                        <option value="" disabled>Please select...</option>
                        <option value="General enquiry">General enquiry</option>
                        <option value="Patient support">Patient support</option>
                        <option value="Media enquiry">Media enquiry</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Volunteering">Volunteering</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your message <span className="required">*</span></label>
                      <textarea id="message" name="message" rows={6} placeholder="Tell us how we can help..." required />
                    </div>

                    <div className="form-group form-check">
                      <input type="checkbox" id="consent" name="consent" required />
                      <label htmlFor="consent">I consent to MCAW storing and using this information to respond to my enquiry. We will never share your details with third parties.</label>
                    </div>

                    <button type="submit" className="btn-submit" disabled={generalStatus === 'sending'}>
                      {generalStatus === 'sending' ? 'Sending...' : 'Send message'}
                    </button>

                    {generalStatus === 'error' && (
                      <p style={{ color: '#c0392b', marginTop: '0.75rem', fontSize: '0.9rem' }}>
                        Something went wrong — please try again.
                      </p>
                    )}
                  </form>
                )}
              </>
            )}

            {/* STORY SUBMISSION FORM */}
            {activeTab === 'story' && (
              <>
                {storyStatus === 'success' ? (
                  <div className="form-success">
                    <div className="success-icon">&#10003;</div>
                    <h3>Story submitted</h3>
                    <p>Thank you for sharing your story. Our team will review it and be in touch within 5 working days.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleStorySubmit} encType="multipart/form-data">
                    <input type="hidden" name="_subject" value="Story submission — MCAW website" />

                    <div className="form-info-box">
                      <p>We welcome stories from patients, carers, clinicians and advocates. Every submission is reviewed by our team before it&apos;s shared as part of the programme.</p>
                    </div>

                    <div className="form-group">
                      <label htmlFor="story_name">Your name <span className="required">*</span></label>
                      <input type="text" id="story_name" name="name" placeholder="Full name" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="story_email">Email address <span className="required">*</span></label>
                      <input type="email" id="story_email" name="email" placeholder="your@email.com" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="author_type">I am a <span className="required">*</span></label>
                      <select id="author_type" name="author_type" required>
                        <option value="" disabled>Please select...</option>
                        <option value="Patient">Patient</option>
                        <option value="Carer">Carer / family member</option>
                        <option value="Clinician">Clinician</option>
                        <option value="Journalist">Journalist</option>
                        <option value="Advocate">Patient advocate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="story_title">Story title <span className="required">*</span></label>
                      <input type="text" id="story_title" name="story_title" placeholder="What would you call your story?" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="bio">Short bio <span className="required">*</span></label>
                      <textarea id="bio" name="bio" rows={3} placeholder="Tell us a little about yourself (max 100 words)" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="story">Your story <span className="required">*</span></label>
                      <textarea id="story" name="story" rows={12} placeholder="Share your experience here..." required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="photos">Photos <span className="optional">(optional)</span></label>
                      <input type="file" id="photos" name="photos" accept="image/*" multiple />
                      <div className="field-hint">You can attach up to 3 images. JPEG or PNG, max 5MB each.</div>
                    </div>

                    <div className="form-group form-check">
                      <input type="checkbox" id="story_consent" name="consent" required />
                      <label htmlFor="story_consent">I confirm this is my own story and I consent to MCAW reviewing and potentially featuring it as part of the campaign.</label>
                    </div>

                    <button type="submit" className="btn-submit" disabled={storyStatus === 'sending'}>
                      {storyStatus === 'sending' ? 'Submitting...' : 'Submit story'}
                    </button>

                    {storyStatus === 'error' && (
                      <p style={{ color: '#c0392b', marginTop: '0.75rem', fontSize: '0.9rem' }}>
                        Something went wrong — please try again.
                      </p>
                    )}
                  </form>
                )}
              </>
            )}
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="contact-info">

            <div className="contact-info-card">
              <h4>Contact details</h4>
              <div className="contact-detail">
                <div className="contact-detail-label">General enquiries</div>
                <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Patient support</div>
                <a href="mailto:support@mcukcic.co.uk">support@mcukcic.co.uk</a>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Media enquiries</div>
                <a href="mailto:press@mcukcic.co.uk">press@mcukcic.co.uk</a>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Partnerships</div>
                <a href="mailto:partners@mcukcic.co.uk">partners@mcukcic.co.uk</a>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Volunteering</div>
                <a href="mailto:volunteer@mcukcic.co.uk">volunteer@mcukcic.co.uk</a>
              </div>
            </div>

            <div className="contact-info-card">
              <h4>Find us online</h4>
              <a href="#" target="_blank" rel="noopener noreferrer" className="contact-social">
                <div className="contact-social-icon" style={{ background: '#eef2fb', color: '#3b5998' }}>f</div>
                <span>Facebook community</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="contact-social">
                <div className="contact-social-icon" style={{ background: '#eeedfb', color: '#5865f2' }}>&#9671;</div>
                <span>Discord server</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="contact-social">
                <div className="contact-social-icon" style={{ background: '#feeeed', color: '#ff0000' }}>&#9654;</div>
                <span>YouTube channel</span>
              </a>
            </div>

            <div className="contact-info-card contact-info-card--tinted">
              <h4>Response times</h4>
              <p>
                We aim to respond to all enquiries within <strong>3 working days</strong>.
                For urgent patient support matters, the community channels of our partner organisations can often
                help sooner.
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                MCAW does not provide medical advice. Always consult your prescribing
                clinician for medical guidance.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}