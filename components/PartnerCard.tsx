type PartnerCardProps = {
  name: string
  role: 'Host' | 'Partner'
  description: string
  href?: string
  logo?: string
}

export default function PartnerCard({ name, role, description, href, logo }: PartnerCardProps) {
  const initial = name.trim().charAt(0).toUpperCase()

  return (
    <div className={`partner-card${role === 'Host' ? ' partner-card--host' : ''}`}>
      <div className="partner-card__logo-slot">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt={`${name} logo`} className="partner-card__logo" />
        ) : (
          <span className="partner-card__mark" aria-hidden="true">{initial}</span>
        )}
      </div>

      <div className="partner-card__top">
        <h3 className="partner-card__name">{name}</h3>
        <span className="partner-card__role">{role}</span>
      </div>

      <p className="partner-card__desc">{description}</p>

      {href && (
        <a href={href} className="partner-card__link" target="_blank" rel="noopener noreferrer">
          Visit website &rarr;
        </a>
      )}
    </div>
  )
}
