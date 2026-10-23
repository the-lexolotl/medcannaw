import type { Host, ProgrammeEvent } from '@/app/events/events-data'

type EventCardProps = {
  event: ProgrammeEvent
  host: Host
}

export default function EventCard({ event, host }: EventCardProps) {
  const {
    title, subtitle, time, format, location, address, mapHref, summary,
    description, topics, topicsLabel, afterTopics, bookingHref, ctaLabel, statusNote,
  } = event

  const hasMore = Boolean(description?.length || topics?.length || afterTopics?.length)
  const hostInitial = host.name.trim().charAt(0).toUpperCase()

  return (
    <article className="event-card">
      <div className="event-card__host">
        {host.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={host.logo} alt="" className="event-card__host-logo" />
        ) : (
          <span className="event-card__host-logo event-card__host-mark" aria-hidden="true">
            {hostInitial}
          </span>
        )}
        <div className="event-card__host-text">
          <span className="event-card__host-label">Hosted by</span>
          <a href={host.href} target="_blank" rel="noopener noreferrer" className="event-card__host-name">
            {host.name}
          </a>
        </div>
      </div>

      <span className="event-card__tag">{format}</span>

      <div>
        <h3>{title}</h3>
        {subtitle && <p className="event-card__sub">{subtitle}</p>}
      </div>

      <p className="event-card__meta">
        <span>{time ?? 'Time to be confirmed'}</span>
        {location && <span> · {location}</span>}
      </p>

      {address && (
        <p className="event-card__address">
          <span>{address}</span>
          {mapHref && (
            <a href={mapHref} target="_blank" rel="noopener noreferrer" className="event-card__map-link">
              Open in maps<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          )}
        </p>
      )}

      <p className="event-card__summary">{summary}</p>

      {hasMore && (
        <details className="event-card__details">
          <summary>More about this session</summary>
          <div className="event-card__details-body">
            {description?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {topics && topics.length > 0 && (
              <>
                {topicsLabel && <p className="event-card__topics-label">{topicsLabel}</p>}
                <ul>
                  {topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </>
            )}
            {afterTopics?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </details>
      )}

      {bookingHref ? (
        <a href={bookingHref} className="btn btn-primary event-card__cta" target="_blank" rel="noopener noreferrer">
          {ctaLabel ?? 'Book on Eventbrite'}
        </a>
      ) : (
        statusNote && <p className="event-card__status">{statusNote}</p>
      )}
    </article>
  )
}
