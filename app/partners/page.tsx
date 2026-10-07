import type { Metadata } from 'next'
import Link from 'next/link'
import PartnerCard from '@/components/PartnerCard'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = { title: 'Partners | MCAW' }

type Partner = {
  name: string
  role: 'Host' | 'Partner'
  description: string
  href?: string
  logo?: string
}

// Add new partners here as they're confirmed — each entry becomes a card automatically.
// Drop a logo into public/images/partners/ and point `logo` at it; until then the
// card falls back to a lettermark so nothing looks broken.
const partners: Partner[] = [
  {
    name: 'Medicinal Cannabis UK',
    role: 'Host',
    description:
      'A patient-led Community Interest Company working to improve outcomes for people prescribed cannabis-based medicines across the UK.',
    href: 'https://mcukcic.co.uk',
    logo: '/images/partners/medicinal-cannabis-uk.png',
  },
  {
    name: 'United Patients Alliance',
    role: 'Host',
    description:
      'A leading patient-led organisation advocating for safe, affordable and dignified access to medical cannabis.',
    href: 'https://www.unitedpatientsalliance.org',
    logo: '/images/partners/united-patients-alliance.png',
  },
  {
    name: 'The Entourage Effect UK',
    role: 'Host',
    description:
      'A Lanark-based wellness centre and community hub offering CBD, holistic therapies and free support and advice.',
    href: 'https://theentourageeffectuk.com',
    logo: '/images/partners/the-entourage-effect-uk.png',
  },
  {
    name: "Ricky's Vaps",
    role: 'Partner',
    description:
      'A UK retailer supporting the MCAW programme and the wider medical cannabis community.',
    href: 'https://rickysvaps.co.uk',
    logo: '/images/partners/rickys-vaps.png',
  },
  {
    name: 'Cannabis Trades Association',
    role: 'Partner',
    description:
      'A UK trade association representing businesses across the CBD, hemp and medicinal cannabis sectors.',
    href: 'https://www.cannabistrades.org',
    logo: '/images/partners/cannabis-trades-association.png',
  },
  {
    name: 'Medicinal Cannabis Friendly',
    role: 'Partner',
    description:
      'A directory highlighting UK venues and businesses that welcome medical cannabis patients.',
    href: 'https://www.mcfriendly.co.uk',
    logo: '/images/partners/medicinal-cannabis-friendly.png',
  },
]

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Speakers &amp; Partners</div>
          <h1>Our Partners</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            MCAW is brought together by organisations across the UK medical cannabis
            community — patients, industry, advocacy and healthcare working side by side.
          </p>
        </div>
      </section>

      <div className="seam" />

      <section className="section">
        <div className="container">
          <div className="partner-grid">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}

            <div className="partner-card partner-card--soon">
              <div className="partner-card__logo-slot">
                <span className="partner-card__mark partner-card__mark--soon" aria-hidden="true">+</span>
              </div>
              <div className="partner-card__top">
                <h3 className="partner-card__name">More Partners Coming Soon</h3>
              </div>
              <p className="partner-card__desc">
                We&apos;re confirming more organisations and businesses to join MCAW — check back soon.
              </p>
            </div>
          </div>

          <p style={{ margin: '2.5rem auto 0', maxWidth: '60ch', textAlign: 'center', fontSize: '0.85rem', lineHeight: 1.5 }}>
            <strong>Using the MCAW logo:</strong> the MCAW logo is open for anyone to use in
            support of the campaign. Only the organisations listed on this page are partners
            of MCAW. Any other party using the MCAW logo is not endorsed by the campaign.
          </p>
        </div>
      </section>

      <section className="section section--cool-grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want to get involved?</h2>
          <p style={{ margin: '0 auto 1.5rem', maxWidth: '52ch' }}>
            We&apos;re always looking to bring more organisations and businesses into MCAW.
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
