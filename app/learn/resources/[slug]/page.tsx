import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ArticleBody from '@/components/ArticleBody'
import LearnCard from '@/components/LearnCard'
import { formatDate, getResourceBySlug, getResources } from '../../learn-data'

type ResourcePageProps = {
  params: Promise<{ slug: string }>
}

// Only resources with a slug in learn-data.ts have pages — anything else is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return getResources()
    .filter((resource) => resource.slug)
    .map((resource) => ({ slug: resource.slug as string }))
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = getResourceBySlug(slug)
  if (!resource) return { title: 'Resources | MCAW' }
  return {
    title: `${resource.title} | Resources | MCAW`,
    description: resource.summary,
  }
}

export default async function ResourceArticlePage({ params }: ResourcePageProps) {
  const { slug } = await params
  const resource = getResourceBySlug(slug)
  if (!resource) notFound()

  const more = getResources()
    .filter((other) => other.id !== resource.id)
    .slice(0, 2)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{resource.topic ? `Resource · ${resource.topic}` : 'Resource'}</div>
          <h1 className="story-title">{resource.title}</h1>
          {(resource.author || resource.date) && (
            <p className="hero-sub story-byline" style={{ marginBottom: 0 }}>
              {resource.author && <strong style={{ color: 'var(--mcaw-white)' }}>{resource.author}</strong>}
              {resource.authorRole && <>, {resource.authorRole}</>}
              {(resource.author || resource.authorRole) && resource.date && ' · '}
              {resource.date && <time dateTime={resource.date}>{formatDate(resource.date)}</time>}
            </p>
          )}
        </div>
      </section>

      <div className="seam" />

      <article className="section">
        <div className="container story-article">
          {resource.body && resource.body.length > 0 ? (
            <ArticleBody blocks={resource.body} />
          ) : (
            <p className="story-article__lead">{resource.summary}</p>
          )}

          {resource.author && (
            <div className="article-author">
              <strong>{resource.author}</strong>
              {resource.authorRole && <span>{resource.authorRole}</span>}
              {resource.authorUrl && (
                <a href={resource.authorUrl} target="_blank" rel="noopener noreferrer">
                  {resource.authorUrl.replace(/^https?:\/\//, '')}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          )}

          {resource.references && resource.references.length > 0 && (
            <section className="article-references" aria-labelledby="references-heading">
              <h2 id="references-heading">References &amp; further reading</h2>
              <ul>
                {resource.references.map((reference) => (
                  <li key={reference.href}>
                    <a href={reference.href} target="_blank" rel="noopener noreferrer">
                      {reference.label}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {resource.disclaimer && (
            <aside className="article-disclaimer" aria-labelledby="article-disclaimer-heading">
              <h2 id="article-disclaimer-heading">Disclaimer</h2>
              <p>{resource.disclaimer}</p>
            </aside>
          )}

          <aside className="story-note" aria-label="About this resource">
            <p>
              Resources are shared for information and are not medical advice — always talk to your
              prescribing clinician about your treatment. Read our{' '}
              <Link href="/policies/editorial">editorial policy</Link> and{' '}
              <Link href="/policies/medical-disclaimer">medical disclaimer</Link>.
            </p>
          </aside>

          <Link href="/learn/resources" className="story-back">
            ← All resources
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section section--warm-white" aria-labelledby="more-resources-heading">
          <div className="container">
            <h2 id="more-resources-heading">More resources</h2>
            <div className="learn-grid">
              {more.map((item) => (
                <LearnCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
