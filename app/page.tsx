import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'
import CircleField from '@/components/CircleField'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section section--black section--decorative">
        <CircleField variant="both" tone="on-dark" />
        <div className="container">
          <span className="eyebrow">Medical Cannabis Awareness Week</span>
          <h1 className="display">Together for Patients.</h1>
          <p style={{ maxWidth: '55ch', fontSize: '1.15rem', color: '#e6e6e6' }}>
            A UK-wide awareness, education and community campaign bringing patients,
            healthcare professionals, organisations and industry together to improve
            understanding of prescribed cannabis-based medicines.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/events" className="btn btn-primary">Explore the Programme</Link>
            <Link href="/get-involved" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <div className="seam" />

      {/* What is MCAW — editorial layout */}
      <section className="section">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">What is MCAW?</div>
            <div className="editorial__body">
              <p>
                MCAW brings patients, clinicians, researchers and advocacy organisations
                together for a week of education, honest conversation and shared
                experience — challenging stigma and improving understanding of prescribed
                cannabis-based medicines across the UK.
              </p>
              <p style={{ color: 'var(--mid-grey)' }}>
                It's a campaign, not just a website: panels, patient stories, workshops
                and Q&amp;As running throughout the week, with space for every part of the
                community to take part.
              </p>
              <Link href="/about" className="btn btn-secondary" style={{ marginTop: '0.5rem' }}>
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme preview */}
      <section className="section section--lime-mist section--decorative">
        <CircleField variant="corner-tr" tone="on-light" />
        <div className="container">
          <h2>The Programme</h2>
          <p>Panels, patient stories, workshops and Q&amp;As running throughout the week.</p>
          <Link href="/events" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            See the full programme
          </Link>
        </div>
      </section>

      {/* Why MCAW matters */}
      <section className="section">
        <div className="container">
          <h2>Why MCAW Matters</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Patient Voices</h3>
              <p>Real experiences from people living with prescribed cannabis-based medicines.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Education</h3>
              <p>Clear, evidence-aware information for patients, families and professionals.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Community</h3>
              <p>Bringing patients, clinicians and organisations together in one place.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Access &amp; Awareness</h3>
              <p>Improving understanding of patient access and challenging stigma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="section section--cool-grey" id="get-involved">
        <div className="container">
          <h2>Get Involved</h2>
          <p>Whatever your connection to MCAW, there's a way to take part.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/events" className="btn btn-primary">Attend an event</Link>
            <Link href="/get-involved#share" className="btn btn-secondary">Share your story</Link>
            <Link href="/get-involved#partner" className="btn btn-secondary">Become a partner</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <NewsletterSignup variant="card" />
        </div>
      </section>
    </>
  )
}