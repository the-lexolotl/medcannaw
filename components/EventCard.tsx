type EventCardProps = {
  title: string
  date: string
  time: string
  format: string
  speaker: string
  organisation: string
  description: string
  href: string
}

export default function EventCard({
  title, date, time, format, speaker, organisation, description, href,
}: EventCardProps) {
  return (
    <article className="event-card">
      <span className="event-card__tag">{format}</span>
      <h3>{title}</h3>
      <p className="event-card__meta">{date} · {time}</p>
      <p style={{ fontSize: '0.9rem', color: 'var(--mid-grey)' }}>
        {speaker} · {organisation}
      </p>
      <p>{description}</p>
      <a href={href} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
        Register / Watch
      </a>
    </article>
  )
}