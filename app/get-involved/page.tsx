import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Get Involved | MCAW' }

type Way = {
  id: string
  title: string
  description: string
  cta: { label: string; href: string }
  secondary?: { label: string; href: string }
}

const ways: Way[] = [
  {
    id: 'attend',
    title: 'Attend',
    description: 'Join the programme of panels, workshops and patient stories throughout the week — free, online, open to everyone.',
    cta: { label: 'See the programme', href: '/events' },
  },
  {
    id: 'share',
    title: 'Share your story',
    description: "If you're a patient, carer or family member, your experience can help someone else understand what living with a CBPM prescription is really like.",
    cta: { label: 'Tell us your story', href: '/contact?tab=story' },
    secondary: { label: 'Read patient stories', href: '/learn/stories' },
  },
  {
    id: 'partner',
    title: 'Become a partner',
    description: 'Clinics, pharmacies, advocacy organisations and industry can host sessions, contribute expertise or support the programme.',
    cta: { label: 'Partner with MCAW', href: '/contact?enquiry=Partnership' },
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'MCAW runs on the time of people who care about this community. Help with events, outreach or behind-the-scenes campaign work.',
    cta: { label: 'Offer your time', href: '/contact?enquiry=Volunteering' },
  },
  {
    id: 'support',
    title: 'Support MCAW',
    description: 'Funds raised support participating organisations and patient-led causes, and help keep the campaign free and open to everyone.',
    cta: { label: 'Support the campaign', href: '/contact' },
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Get Involved</div>
          <h1>There&apos;s a Place for You in MCAW</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            Whatever your connection to medical cannabis, there&apos;s a way to take part in
            the campaign.
          </p>
        </div>
      </section>

      <div className="seam" />

      {ways.map((way, i) => (
        <section
          key={way.id}
          id={way.id}
          className={`section involved-row ${i % 2 === 1 ? 'involved-row--tint' : ''}`}
        >
          <div className="container involved-row__inner">
            <h2>{way.title}</h2>
            <p>{way.description}</p>
            <div className="involved-row__actions">
              <Link href={way.cta.href} className="btn btn-secondary">{way.cta.label}</Link>
              {way.secondary && (
                <Link href={way.secondary.href} className="involved-row__link">
                  {way.secondary.label} →
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--black" id="contact" aria-labelledby="contact-heading">
        <div className="container learn-cta-row">
          <div>
            <h2 id="contact-heading">Something else?</h2>
            <p style={{ color: '#d8d8d8' }}>
              Questions, media enquiries or anything that doesn&apos;t fit above — the team is happy
              to help. We aim to reply within 3 working days.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
