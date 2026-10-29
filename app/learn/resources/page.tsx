import type { Metadata } from 'next'
import Link from 'next/link'
import LearnLibrary from '@/components/LearnLibrary'
import NewsletterSignup from '@/components/NewsletterSignup'
import { getResources } from '../learn-data'

export const metadata: Metadata = {
  title: 'Resources | MCAW',
  description:
    'Guides, downloads and videos about prescribed cannabis-based medicines, shared by the organisations behind Medical Cannabis Awareness Week.',
}

export default function ResourcesPage() {
  const resources = getResources()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Learn</div>
          <h1>Resources</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            Guides, downloads and videos to help patients, families and professionals understand
            prescribed cannabis-based medicines — shared by the organisations behind MCAW.
          </p>
        </div>
      </section>

      <div className="seam" />

      <section className="section">
        <div className="container">
          <LearnLibrary
            items={resources}
            noun={{ one: 'resource', many: 'resources' }}
            empty={
              <>
                <h2>Resources are on their way</h2>
                <p>
                  We&apos;re adding guides, videos and downloads from MCAW partners now. Check back
                  during the week, 1–8 November, or sign up below for updates.
                </p>
              </>
            }
          />

          <p className="learn-disclaimer">
            Resources are shared for information and are not medical advice. Always talk to your
            prescribing clinician about your treatment. Read our{' '}
            <Link href="/policies/medical-disclaimer">medical disclaimer</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cool-grey">
        <div className="container learn-cta-row">
          <div>
            <h2>Have a resource to share?</h2>
            <p>
              Partner organisations can put forward guides, videos and tools for the MCAW library.
              Everything is reviewed before it&apos;s added.
            </p>
          </div>
          <Link href="/contact?enquiry=Partnership" className="btn btn-primary">
            Suggest a resource
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <NewsletterSignup variant="card" />
        </div>
      </section>
    </>
  )
}
