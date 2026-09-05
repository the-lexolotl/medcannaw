import { UserButton } from '@clerk/nextjs'

const RESOURCES = [
  {
    category: 'Brand',
    items: [
      { label: 'MCAW Logo Pack (SVG + PNG)', href: '/partner-toolkit-files/mcaw-logo-pack.zip', type: 'download' },
      { label: 'Brand Guidelines (PDF)', href: '/partner-toolkit-files/mcaw-brand-guidelines.pdf', type: 'download' },
    ],
  },
  {
    category: 'Templates',
    items: [
      { label: 'Social Media Template Pack', href: '/partner-toolkit-files/mcaw-social-templates.zip', type: 'download' },
      { label: 'Email Signature Template', href: '/partner-toolkit-files/mcaw-email-signature.zip', type: 'download' },
    ],
  },
  {
    category: 'Press',
    items: [
      { label: 'Press Packet (PDF)', href: '/partner-toolkit-files/mcaw-press-packet.pdf', type: 'download' },
    ],
  },
  {
    category: 'Forms',
    items: [
      { label: 'Content Review Form', href: 'https://forms.gle/FcargDf1eU5jSDW57', type: 'link' },
    ],
  },
]

const CONTACTS = [
  { role: 'Project Lead', name: 'Lex Wolfe', email: 'lex@mcukcic.co.uk' },
  { role: 'Co-Lead', name: 'Lee Bailey', email: 'lee@mcukcic.co.uk' },
  { role: 'General Enquiries', name: null, email: 'events@mcukcic.co.uk' },
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
              {group.items.map((item) => {
                const isDownload = item.type === 'download'
                return (
                    <a
                    key={item.href}
                    href={item.href}
                    className="partners-card"
                    download={isDownload}
                    target={isDownload ? undefined : '_blank'}
                    rel={isDownload ? undefined : 'noopener noreferrer'}
                  >
                    <span className="partners-card-label">{item.label}</span>
                    <span className="partners-card-cta">
                      {isDownload ? 'Download' : 'Open Form'} &rarr;
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        ))}

        <section className="partners-group">
          <h2>Contact</h2>
          <div className="partners-contact-grid">
            {CONTACTS.map((contact) => (
              <div key={contact.email} className="partners-contact-card">
                <span className="partners-contact-role">{contact.role}</span>
                {contact.name && <span className="partners-contact-name">{contact.name}</span>}
                <a href={`mailto:${contact.email}`} className="partners-contact-email">
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}