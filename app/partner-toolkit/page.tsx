import { UserButton } from '@clerk/nextjs'

const RESOURCES = [
  {
    category: 'Brand',
    items: [
      { label: 'MCAW Logo Pack (SVG + PNG)', href: '/partner-toolkit-files/mcaw-logo-pack.zip' },
      { label: 'Brand Guidelines (PDF)', href: '/partner-toolkit-files/mcaw-brand-guidelines.pdf' },
    ],
  },
  {
    category: 'Templates',
    items: [
      { label: 'Social Media Template Pack', href: '/partner-toolkit-files/mcaw-social-templates.zip' },
      { label: 'Email Signature Template', href: '/partner-toolkit-files/mcaw-email-signature.zip' },
    ],
  },
  {
    category: 'Press',
    items: [
      { label: 'Press Packet (PDF)', href: '/partner-toolkit-files/mcaw-press-packet.pdf' },
    ],
  },
  {
    category: 'Forms',
    items: [
      { label: 'Content Review Form', href: '/partner-toolkit-files/mcaw-content-review-form.pdf' },
    ],
  },
]

export default function PartnerToolkitPage() {
  return (
    <div className="partners-page">
      <div className="container">
        <div className="partners-header">
          <div>
            <span className="partners-eyebrow">Partners Only</span>
            <h1>Partner Toolkit</h1>
            <p>Everything approved MCAW partners need — logos, templates, brand guidelines and press materials.</p>
          </div>
          <UserButton />
        </div>

        {RESOURCES.map((group) => (
          <section key={group.category} className="partners-group">
            <h2>{group.category}</h2>
            <div className="partners-grid">
              {group.items.map((item) => (
                <a key={item.href} href={item.href} className="partners-card" download>
                  <span className="partners-card-label">{item.label}</span>
                  <span className="partners-card-cta">Download &rarr;</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}