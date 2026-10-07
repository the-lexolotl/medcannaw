import type { Metadata } from 'next'
import Link from 'next/link'
import CircleField from '@/components/CircleField'

export const metadata: Metadata = {
  title: 'An Open Campaign for Everyone | MCAW',
  description:
    'Medical Cannabis Awareness Week is an open campaign for everyone. There’s a place for anyone who wants to get involved and add something positive to the conversation. Together for Patients.',
}

export default function OpenCampaignPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Our statement</div>
          <h1>An Open Campaign for Everyone</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            Medical Cannabis Awareness Week (MCAW) started with a simple idea:{' '}
            <strong style={{ color: 'var(--mcaw-white)' }}>bringing people together.</strong>
          </p>
        </div>
      </section>

      <div className="seam" />

      <article className="statement-doc">
        {/* Introduction */}
        <section className="statement-doc__section">
          <div className="statement-doc__column">
            <p className="statement-doc__lead">
              Patients, families, advocates, healthcare professionals, researchers,
              organisations and businesses all have a part to play in helping people understand
              cannabis-based prescription medicines (CBPMs) and the lives of the people who
              rely on them.
            </p>
            <p>
              MCAW is an <strong>open campaign</strong>. It belongs to everyone, and there’s
              a place for anyone who wants to get involved and add something positive to the
              conversation.
            </p>
            <p>It isn’t about one organisation, one group or one person’s voice.</p>
            <p className="statement-doc__quote">
              It’s about all of us working together for patients.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="statement-doc__section" aria-labelledby="history">
          <div className="statement-doc__column">
            <h2 id="history">A campaign with a story</h2>
            <p>MCAW has been bringing people together for several years.</p>
            <p>
              The campaign began in 2020, when the UK medical cannabis community was still
              finding its voice. Patients and others got together to raise awareness, share
              their experiences and help more people understand what life with a medical
              cannabis prescription is really like.
            </p>
            <p>
              Since then, MCAW has been a friendly space for patients, healthcare professionals,
              organisations, advocates and others to join the conversation.
            </p>
          </div>

          <div className="statement-doc__column">
            <p>That story matters.</p>
            <p>
              It reminds us that MCAW has always been bigger than any one event, organisation
              or person. It grew because people who care about the same community and the same
              patients decided to get together.
            </p>
          </div>
        </section>

        {/* A place for everyone */}
        <section className="statement-doc__section" aria-labelledby="everyone">
          <div className="statement-doc__column">
            <h2 id="everyone">A place for everyone</h2>
            <p>
              One of the best things about the medical cannabis community is how wonderfully
              varied it is.
            </p>
            <ul className="statement-doc__list">
              <li>There are patient-led groups doing incredible work.</li>
              <li>
                There are clinics and healthcare professionals helping patients navigate
                treatment.
              </li>
              <li>There are researchers working to improve our understanding of CBPMs.</li>
              <li>There are organisations campaigning for change.</li>
              <li>There are businesses supporting patients in different ways.</li>
              <li>
                And there are thousands of individual patients whose lived experiences are an
                essential part of the conversation.
              </li>
            </ul>
            <p>MCAW wants to make space for all of them.</p>
            <p>
              Everyone brings something different, and nobody has to give up their own identity
              or independence to join in.
            </p>
            <p className="statement-doc__quote">
              You can be part of MCAW while still being completely yourself.
            </p>
            <p>
              MCAW is a shared banner to gather under. It doesn’t replace the organisations and
              communities that make this sector so great.
            </p>
          </div>
        </section>

        {/* Coming together */}
        <section className="statement-doc__section" aria-labelledby="banner">
          <div className="statement-doc__column">
            <h2 id="banner">Coming together under one banner</h2>
            <p>
              The idea behind MCAW is simple:{' '}
              <strong>where we share a goal, why not help each other get there?</strong>
            </p>
            <ul className="statement-doc__list">
              <li>Patient groups can introduce their work to new audiences.</li>
              <li>Clinics can share useful educational information.</li>
              <li>Researchers can help make science more accessible.</li>
              <li>Organisations can highlight campaigns and initiatives.</li>
              <li>Patients can share their stories and experiences.</li>
              <li>And everyone can help amplify the voices of others.</li>
            </ul>
            <p>
              When we shout about each other’s work, good things reach far more people.
            </p>
            <p>
              Someone who discovers one part of the community through MCAW might go on to
              find another organisation, another resource, another patient story or another
              way to get involved.
            </p>
            <p className="statement-doc__quote">
              When we help one another, everybody’s reach becomes a little wider.
            </p>
          </div>
        </section>

        {/* Disagreement */}
        <section className="statement-doc__section" aria-labelledby="agree">
          <div className="statement-doc__column">
            <h2 id="agree">We don’t have to agree on everything</h2>
            <p>The medical cannabis community is diverse, and that’s a good thing.</p>
            <p>We won’t always agree.</p>
            <p>
              Different organisations have different experiences, priorities and ideas about
              how things should change. That’s natural, and those differences can spark really
              important conversations.
            </p>
            <p>
              <strong>But disagreeing doesn’t have to mean dividing.</strong>
            </p>
            <ul className="statement-doc__list">
              <li>We can disagree and still listen to one another.</li>
              <li>We can have different approaches and still share a platform.</li>
              <li>We can run separate organisations and still promote each other’s work.</li>
              <li>
                And we can have different ideas about the future while recognising the things
                we have in common today.
              </li>
            </ul>
            <p className="statement-doc__quote">
              Unity doesn’t mean everyone saying the same thing.
            </p>
            <p>It means standing alongside one another when we can.</p>
          </div>
        </section>

        {/* Focus */}
        <section className="statement-doc__section" aria-labelledby="focus">
          <div className="statement-doc__column">
            <h2 id="focus">Let’s keep our eyes on what matters</h2>
            <p>There are real challenges facing patients.</p>
            <ul className="statement-doc__list statement-doc__list--strong">
              <li>Access.</li>
              <li>Affordability.</li>
              <li>Availability.</li>
              <li>Education.</li>
              <li>Stigma.</li>
              <li>Understanding among healthcare professionals.</li>
              <li>The quality and consistency of patient experiences.</li>
              <li>Better evidence and better support.</li>
            </ul>
            <p>
              These challenges are bigger than any one organisation, and they won’t be solved by
              working against each other.
            </p>
            <p>Our community has so much knowledge, experience, passion and determination.</p>
            <p>
              Imagine what we can do when we put all that energy into working together.
            </p>
            <p className="statement-doc__quote">
              The patients we’re here for deserve that.
            </p>
            <p>
              MCAW isn’t about deciding who’s right, who gets the credit or whose voice
              matters most.
            </p>
            <p>It’s about giving more voices the chance to be heard.</p>
          </div>
        </section>

        {/* Together for Patients */}
        <section
          className="statement-doc__section statement-doc__section--tint"
          aria-labelledby="together"
        >
          <div className="statement-doc__column">
            <h2 id="together">Our theme for 2026</h2>
            <p>That’s why this year’s theme is:</p>
            <p className="statement-doc__theme">Together for Patients</p>
            <p>
              <strong>It’s an invitation.</strong>
            </p>
            <ul className="statement-doc__list">
              <li>To patient groups.</li>
              <li>To clinics and healthcare professionals.</li>
              <li>To researchers.</li>
              <li>To charities and campaigners.</li>
              <li>To businesses and organisations.</li>
              <li>To advocates.</li>
              <li>And to every patient who wants to share their experience.</li>
            </ul>
            <p>You don’t have to agree with everyone.</p>
            <p>You don’t have to belong to the same organisation.</p>
            <p>You don’t have to approach things in the same way.</p>
            <p>
              <strong>
                You just need to care about making things better for patients and be up for
                working together where we can.
              </strong>
            </p>
            <p>MCAW has a history built on people coming together.</p>
            <p style={{ marginBottom: 0 }}>We’d love its future to be built the same way.</p>
          </div>
        </section>
      </article>

      <div className="seam" />

      {/* Closing statement */}
      <section className="section section--black statement section--decorative">
        <CircleField variant="both" tone="on-dark" />
        <div className="container">
          <p className="statement-kicker">Many organisations. Many experiences. Many voices.</p>
          <p className="display" style={{ marginBottom: 0 }}>
            One shared opportunity to come together for patients.
          </p>
          <p className="statement-signoff">MCAW is for everyone. Together for Patients.</p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            <Link href="/get-involved" className="btn btn-primary">
              Get Involved
            </Link>
            <Link
              href="/get-involved#partner"
              className="btn btn-secondary"
              style={{ borderColor: '#fff', color: '#fff' }}
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
