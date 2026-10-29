import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import LearnCard from '@/components/LearnCard'
import ArticleBody from '@/components/ArticleBody'
import { formatDate, getStories, getStoryBySlug } from '../../learn-data'

type StoryPageProps = {
  params: Promise<{ slug: string }>
}

// Only stories listed in learn-data.ts have pages — anything else is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return getStories()
    .filter((story) => story.slug)
    .map((story) => ({ slug: story.slug as string }))
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return { title: 'Patient Stories | MCAW' }
  return {
    title: `${story.title} | Patient Stories | MCAW`,
    description: story.summary,
  }
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) notFound()

  const more = getStories()
    .filter((other) => other.id !== story.id)
    .slice(0, 2)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Patient Story</div>
          <h1 className="story-title">{story.title}</h1>
          {(story.author || story.date) && (
            <p className="hero-sub story-byline" style={{ marginBottom: 0 }}>
              {story.author && <strong style={{ color: 'var(--mcaw-white)' }}>{story.author}</strong>}
              {story.author && story.date && ' · '}
              {story.date && <time dateTime={story.date}>{formatDate(story.date)}</time>}
            </p>
          )}
        </div>
      </section>

      <div className="seam" />

      <article className="section">
        <div className="container story-article">
          {story.youtubeId && (
            <div className="story-article__media">
              <YouTubeEmbed id={story.youtubeId} title={story.title} />
            </div>
          )}

          {story.quote && (
            <blockquote className="pull-quote">
              <p>“{story.quote}”</p>
            </blockquote>
          )}

          {story.body && story.body.length > 0 ? (
            <ArticleBody blocks={story.body} />
          ) : (
            <p className="story-article__lead">{story.summary}</p>
          )}

          {story.transcript && story.transcript.length > 0 && (
            <details className="story-transcript">
              <summary>Read the transcript</summary>
              <div className="story-transcript__body">
                {story.transcript.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          )}

          <aside className="story-note" aria-label="About this story">
            <p>
              This story is shared with consent and reflects one person&apos;s experience. It is not
              medical advice — always talk to your prescribing clinician about your treatment. Read
              our <Link href="/policies/editorial">editorial policy</Link> and{' '}
              <Link href="/policies/medical-disclaimer">medical disclaimer</Link>.
            </p>
          </aside>

          <Link href="/learn/stories" className="story-back">
            ← All patient stories
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section section--warm-white" aria-labelledby="more-stories-heading">
          <div className="container">
            <h2 id="more-stories-heading">More stories</h2>
            <div className="learn-grid">
              {more.map((item) => (
                <LearnCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--black" aria-labelledby="share-story-heading">
        <div className="container learn-cta-row">
          <div>
            <h2 id="share-story-heading">Your story could help someone else</h2>
            <p style={{ color: '#d8d8d8' }}>
              Share your experience in writing or on video. We review every story with you before
              anything is published.
            </p>
          </div>
          <Link href="/contact?tab=story" className="btn btn-primary">
            Share your story
          </Link>
        </div>
      </section>
    </>
  )
}
