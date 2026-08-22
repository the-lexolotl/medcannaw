import NewsletterSignup from '@/components/NewsletterSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscribe — MCAW Newsletter',
  description: 'Sign up for the MCAW newsletter and get programme announcements, patient stories, and campaign updates straight to your inbox.',
  openGraph: {
    title: 'Subscribe — MCAW Newsletter',
    description: 'Sign up for the MCAW newsletter and get programme announcements, patient stories, and campaign updates straight to your inbox.',
  },
}

export default function NewsletterPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Stay connected</div>
          <h1>MCAW Newsletter</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            Programme announcements, patient stories, and updates from the UK cannabis medicine
            space — straight to your inbox. Free, always.
          </p>
        </div>
      </section>

      {/* SIGNUP SECTION */}
      <section className="section">
        <div className="newsletter-layout">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}>

            {/* LEFT — what to expect */}
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What to expect</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-number">01</div>
                  <div className="activity-body">
                    <h3>Programme announcements</h3>
                    <p>New events, speakers, and formats added to the MCAW programme as the week comes together.</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-number">02</div>
                  <div className="activity-body">
                    <h3>Patient stories</h3>
                    <p>Real experiences from people accessing and living with prescribed cannabis-based medicines.</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-number">03</div>
                  <div className="activity-body">
                    <h3>UK cannabis space</h3>
                    <p>Relevant developments in UK cannabis medicine — policy, research, and what it means for patients.</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-number">04</div>
                  <div className="activity-body">
                    <h3>No spam, ever</h3>
                    <p>We send when we have something worth saying. Unsubscribe any time, no questions asked.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — signup form */}
            <div style={{ position: 'sticky', top: '84px' }}>
              <NewsletterSignup variant="card" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}