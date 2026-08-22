import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Get Involved | MCAW' }

const ways = [
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
    cta: { label: 'Tell us your story', href: '/contact' },
  },
  {
    id: 'partner',
    title: 'Become a partner',
    description: 'Clinics, pharmacies, advocacy organisations and industry can host sessions, contribute expertise or support the programme.',
    cta: { label: 'Partner with MCAW', href: '/contact' },
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'MCAW runs on the time of people who care about this community. Help with events, outreach or behind-the-scenes campaign work.',
    cta: { label: 'Get in touch', href: '/contact' },
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
            <Link href={way.cta.href} className="btn btn-secondary">{way.cta.label}</Link>
          </div>
        </section>
      ))}
    </>
  )
}