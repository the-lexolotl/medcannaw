import type { Metadata } from 'next'
import Link from 'next/link'
import EventCard from '@/components/EventCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import { groupEventsByDay, hosts } from './events-data'

export const metadata: Metadata = {
  title: 'Programme | MCAW',
  description:
    'The Medical Cannabis Awareness Week 2026 programme, 1–8 November: panels, patient stories, workshops and Q&As hosted by MCAW organisers.',
}

export default function EventsPage() {
  const days = groupEventsByDay()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Programme</div>
          <h1>The Programme</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            <strong style={{ color: 'var(--mcaw-white)' }}>1–8 November 2026.</strong> Eight days of
            panels, patient stories, workshops and Q&amp;As, hosted by the organisations behind MCAW.
          </p>
        </div>
      </section>

      <div className="seam" />

      <section className="section programme">
        <div className="container">
          <nav aria-label="Jump to a day" className="programme-nav">
            {days.map((day) => (
              <a key={day.date} href={`#day-${day.date}`} className="programme-nav__link">
                {day.shortLabel}
              </a>
            ))}
          </nav>

          <p className="programme-note">
            All times are UK time. The programme is still growing — more events, details and
            booking links will appear here as they’re confirmed, so check back soon.
          </p>

          {days.map((day) => (
            <section
              key={day.date}
              id={`day-${day.date}`}
              className="programme-day"
              aria-labelledby={`heading-${day.date}`}
            >
              <h2 id={`heading-${day.date}`} className="programme-day__heading">
                {day.label}
              </h2>
              <div className="event-grid">
                {day.events.map((event) => (
                  <EventCard key={event.id} event={event} host={hosts[event.host]} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section section--cool-grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want to host a session?</h2>
          <p style={{ margin: '0 auto 1.5rem', maxWidth: '52ch' }}>
            MCAW is an open campaign. If your organisation would like to be part of the programme, we&apos;d love to hear from you.
          </p>
          <Link href="/get-involved#partner" className="btn btn-primary">
            Become a partner
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
