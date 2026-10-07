import type { Host, ProgrammeEvent } from '@/app/events/events-data'

type EventCardProps = {
  event: ProgrammeEvent
  host: Host
}

export default function EventCard({ event, host }: EventCardProps) {
  const {
    title, subtitle, time, format, location, summary,
    description, topics, topicsLabel, afterTopics, bookingHref, statusNote,
  } = event

  const hasMore = Boolean(description?.length || topics?.length || afterTopics?.length)

  return (
    <article className="event-card">
      <div className="event-card__host">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={host.logo} alt="" className="event-card__host-logo" />
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
          Book on Eventbrite
        </a>
      ) : (
        statusNote && <p className="event-card__status">{statusNote}</p>
      )}
    </article>
  )
}
