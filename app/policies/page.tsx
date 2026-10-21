import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Policies',
  description: 'MCAW policies including privacy, cookies, safeguarding, and community standards.',
}

const policies = [
  { href: '/policies/cookies', title: 'Cookie policy', desc: 'How we use cookies and similar technologies on our website.' },
  { href: '/policies/privacy', title: 'Privacy policy', desc: 'How we collect, use, and protect your personal data.' },
  { href: '/policies/terms', title: 'Terms & conditions', desc: 'The terms governing your use of the MCAW website and services.' },
  { href: '/policies/raffle-terms', title: 'Raffle terms & conditions', desc: 'The terms for the MCAW 2026 Prize Raffle, including eligibility, the draw and prizes.' },
  { href: '/policies/complaints', title: 'Complaints policy', desc: 'How to raise a complaint and what to expect from us.' },
  { href: '/policies/community-standards', title: 'Free speech & community standards', desc: 'How MCAW approaches freedom of expression and community moderation.' },
  { href: '/policies/social-media', title: 'Social media policy', desc: 'Standards for social media use by those representing MCAW online.' },
  { href: '/policies/safeguarding', title: 'Safeguarding policy', desc: 'Our commitment to the safety and wellbeing of vulnerable people.' },
  { href: '/policies/medical-disclaimer', title: 'Medical disclaimer', desc: 'Important information about the nature of content on this site.' },
  { href: '/policies/editorial', title: 'Editorial policy', desc: 'How we review, edit, and publish content on the MCAW website.' },
  { href: '/policies/accessibility', title: 'Accessibility statement', desc: 'Our commitment to making this site accessible to everyone.' },
  { href: '/policies/data-retention', title: 'Data retention policy', desc: 'How long we keep your data and when we delete it.' },
]

export default function Policies() {
  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Governance</div>
            <h1>Our policies</h1>
            <p className="hero-sub">Transparency is one of our core values. These policies set out how MCAW operates, how we handle your data, and what you can expect from us.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="resource-grid">
              {policies.map(policy => (
                <Link key={policy.href} href={policy.href} className="resource-card">
                  <div className="resource-icon icon-green">&#9679;</div>
                  <div className="resource-body">
                    <h3>{policy.title}</h3>
                    <p>{policy.desc}</p>
                    <span className="resource-link">Read policy &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container content-narrow">
            <div className="info-box">
              <p><strong>Medical Cannabis Awareness Week</strong> is an event organised by a group of organisations working together.</p>
              <p>Relevant company information, including registration details, can be found on each organiser&apos;s own website. For any questions about our policies, please <Link href="/contact">get in touch</Link>.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}