import type { Metadata } from 'next'
import Link from 'next/link'
import LearnLibrary from '@/components/LearnLibrary'
import { getStories } from '../learn-data'

export const metadata: Metadata = {
  title: 'Patient Stories | MCAW',
  description:
    'Real experiences of living with prescribed cannabis-based medicines, told by patients, carers and families in their own words.',
}

// Quote shown in the lime band at the top of the page
const communityQuote = {
  text: 'MCAW 2026 gives us, the patients, a chance to come together, share our experiences, the knowledge we have gained along the way and the opportunity to steer conversations in the right direction, towards real change, that benefits those that need it most.',
  name: 'Nicola Stevenson – The M-C Fairy',
  role: 'Independent Patient Advocate & MCAW Volunteer',
}

export default function StoriesPage() {
  const stories = getStories()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Learn</div>
          <h1>Patient Stories</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            Real experiences of living with a prescription for cannabis-based medicine — told by
            patients, carers and families, in their own words.
          </p>
        </div>
      </section>

      <div className="seam" />

      <section className="section section--lime-mist" aria-label="A word from the patient community">
        <div className="container">
          <figure className="stories-quote">
            <blockquote className="pull-quote stories-quote__text">
              <p>“{communityQuote.text}”</p>
            </blockquote>
            <figcaption className="stories-quote__caption">
              <strong>{communityQuote.name}</strong>
              <span>{communityQuote.role}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="stories-heading">
        <div className="container">
          <h2 id="stories-heading">Read the stories</h2>
          <LearnLibrary
            items={stories}
            noun={{ one: 'story', many: 'stories' }}
            empty={
              <>
                <h2>The first stories are coming soon</h2>
                <p>
                  We&apos;re working with patients and carers to share their experiences during
                  MCAW. Would you like yours to be one of them?
                </p>
                <Link href="/contact?tab=story" className="btn btn-primary">
                  Share your story
                </Link>
              </>
            }
          />

          {stories.length > 0 && (
            <aside className="story-share" aria-labelledby="story-share-heading">
              <div>
                <h3 id="story-share-heading">Want your story featured here?</h3>
                <p>
                  Patients, carers and families can send us their experience in writing or on
                  video. We&apos;ll review it with you and you choose how you&apos;re named.
                </p>
              </div>
              <Link href="/contact?tab=story" className="btn btn-primary">
                Submit your story
              </Link>
            </aside>
          )}

          <p className="learn-disclaimer">
            Every story is shared with the person&apos;s consent and reflects their own experience.
            It is not medical advice. Read our <Link href="/policies/editorial">editorial policy</Link>{' '}
            and <Link href="/policies/medical-disclaimer">medical disclaimer</Link>.
          </p>
        </div>
      </section>

      <section className="section section--black" aria-labelledby="share-story-heading">
        <div className="container learn-cta-row">
          <div>
            <h2 id="share-story-heading">Your story could help someone else</h2>
            <p style={{ color: '#d8d8d8' }}>
              Patients, carers and families can share their experience in writing or on video.
              Our team reviews every story with you before anything is published, and you choose
              how you&apos;re named.
            </p>
          </div>
          <Link href="/contact?tab=story" className="btn btn-primary">
            Share your story
          </Link>
        </div>
      </section>
    </>
  )
}
