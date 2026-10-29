import Link from 'next/link'
import YouTubeEmbed from './YouTubeEmbed'
import ExternalEmbed from './ExternalEmbed'
import { hosts } from '@/app/events/events-data'
import { formatDate, formatLabels, itemPath, type LearnItem } from '@/app/learn/learn-data'

type LearnCardProps = {
  item: LearnItem
}

export default function LearnCard({ item }: LearnCardProps) {
  const host = item.host ? hosts[item.host] : undefined
  const byline = item.author ?? host?.name
  const pagePath = itemPath(item)
  const tag = item.tagLabel
    ?? (item.format === 'download' && item.file
      ? `${formatLabels.download} · ${item.file.type}`
      : formatLabels[item.format])

  const showImage = item.image && item.format !== 'video' && item.format !== 'embed'

  return (
    <article className={`learn-card learn-card--${item.format}`}>
      {item.format === 'video' && item.youtubeId && (
        <YouTubeEmbed id={item.youtubeId} title={item.title} />
      )}

      {item.format === 'embed' && item.embed && (
        <ExternalEmbed {...item.embed} title={item.title} />
      )}

      {showImage && item.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image.src} alt={item.image.alt} className="learn-card__image" loading="lazy" />
      )}

      <div className="learn-card__body">
        <div className="learn-card__tags">
          <span className="learn-card__tag">{tag}</span>
          {item.topic && <span className="learn-card__topic">{item.topic}</span>}
        </div>

        <div>
          <h3 className="learn-card__title">
            {pagePath ? <Link href={pagePath}>{item.title}</Link> : item.title}
          </h3>
          {item.subtitle && <p className="learn-card__subtitle">{item.subtitle}</p>}
        </div>

        {(byline || item.date) && (
          <p className="learn-card__meta">
            {byline && <span>{byline}</span>}
            {byline && item.date && <span aria-hidden="true"> · </span>}
            {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
          </p>
        )}

        {item.quote && item.section === 'stories' && (
          <p className="learn-card__quote">“{item.quote}”</p>
        )}

        <p className="learn-card__summary">{item.summary}</p>

        {item.details && item.details.length > 0 && (
          <details className="event-card__details">
            <summary>More about this resource</summary>
            <div className="event-card__details-body">
              {item.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        )}

        <div className="learn-card__actions">
          {item.file && (
            <>
              <a href={item.file.href} download className="btn btn-primary">
                Download {item.file.type}
                <span className="visually-hidden">: {item.title}</span>
              </a>
              {item.file.type.toUpperCase() === 'PDF' && (
                <a href={item.file.href} target="_blank" rel="noopener noreferrer" className="learn-card__read">
                  Read online<span className="visually-hidden">: {item.title} (opens in a new tab)</span>
                </a>
              )}
              <span className="learn-card__file">
                {item.file.type} · {item.file.size}
              </span>
            </>
          )}

          {item.format === 'link' && item.href && (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {item.ctaLabel ?? 'Visit resource'}
              <span className="visually-hidden">: {item.title} (opens in a new tab)</span>
            </a>
          )}

          {item.format === 'article' && pagePath && (
            <Link href={pagePath} className="btn btn-primary">
              {item.section === 'stories' ? 'Read the story' : 'Read the article'}
              <span className="visually-hidden">: {item.title}</span>
            </Link>
          )}

          {item.format !== 'article' && item.section === 'stories' && pagePath && (
            <Link href={pagePath} className="btn btn-secondary">
              {item.transcript?.length ? 'Story & transcript' : 'Read more'}
              <span className="visually-hidden">: {item.title}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
