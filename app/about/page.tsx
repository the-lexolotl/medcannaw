import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About | MCAW' }

const voices = [
  { title: 'Patients', description: 'Sharing experiences and having their voices heard.' },
  { title: 'Healthcare professionals', description: 'Providing reliable, responsible education.' },
  { title: 'Researchers & academics', description: 'Sharing emerging evidence and developments.' },
  { title: 'Clinics & pharmacies', description: 'Contributing to conversations around treatment and access.' },
  { title: 'Industry organisations', description: 'Supporting education and responsible engagement.' },
  { title: 'Advocacy organisations & charities', description: 'Highlighting the issues affecting patients.' },
  { title: 'Patient advocates & creators', description: 'Helping reach new audiences.' },
  { title: 'The wider public', description: 'Learning about medical cannabis without stigma.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">About</div>
          <h1>Together for Patients</h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            A UK-wide campaign dedicated to raising awareness, sharing knowledge and bringing
            people together around medical cannabis and the experiences of the patients who
            rely on it.
          </p>
        </div>
      </section>

      <div className="seam" />

      <section className="section">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">Why MCAW exists</div>
            <div className="editorial__body">
              <p>
                MCAW exists because there is still a significant gap between the reality of
                medical cannabis treatment and public understanding of it. Patients can face
                stigma, misunderstanding, difficulties accessing treatment, concerns about
                travelling or using their medication in public, and a lack of clear,
                accessible information.
              </p>
              <p style={{ color: 'var(--mid-grey)' }}>
                MCAW brings patients, healthcare professionals, clinics, pharmacies,
                organisations, advocates, researchers, businesses and members of the wider
                community together for a week of conversations, education, patient stories
                and community events. But MCAW is about more than one week.
              </p>
            </div>
          </div>

          <p className="pull-quote">We believe awareness can help change that.</p>
        </div>
      </section>

      <section className="section section--cool-grey">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">Where MCAW began</div>
            <div className="editorial__body">
              <p>
                Medical Cannabis Awareness Week was created from a simple idea: bring the
                community together and give people a platform to talk openly about medical
                cannabis.
              </p>
              <p style={{ color: 'var(--mid-grey)' }}>
                The first MCAW grew from work already being carried out across the UK
                medical cannabis community. Patients, advocates, organisations and industry
                professionals were all working to improve understanding in their own spaces
                — MCAW brought those voices together under one shared campaign, designed from
                the start to be collaborative rather than to represent a single organisation
                or perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">MCAW today</div>
            <div className="editorial__body">
              <p>
                MCAW is evolving into a collaborative annual awareness campaign that brings
                the UK medical cannabis community together — a programme of online events,
                educational sessions, patient stories, discussions, Q&amp;As, guest speakers
                and community activities.
              </p>
              <p style={{ color: 'var(--mid-grey)' }}>
                You might join a live discussion, hear a patient's story, learn more about
                CBPMs, ask a healthcare professional a question, discover an organisation
                working in the sector, or simply take the opportunity to learn something new.
                There is no single voice that represents the entire medical cannabis
                community.
              </p>
            </div>
          </div>

          <p className="pull-quote">MCAW is about making space for many voices.</p>
        </div>
      </section>

      <section className="section section--cool-grey">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">The role of MCUK</div>
            <div className="editorial__body">
              <p>
                As MCAW develops, Medical Cannabis UK (MCUK) is taking responsibility for
                coordinating and developing the campaign. MCUK is a patient-led Community
                Interest Company working to improve outcomes for people prescribed
                Cannabis Based Prescription Medicines (CBPMs) across the UK, and we believe
                MCAW is closely aligned with that mission.
              </p>
              <p style={{ color: 'var(--mid-grey)' }}>
                Our intention is not to make MCAW exclusively an MCUK campaign. Instead, we
                want to provide the structure, continuity and resources needed for it to
                grow while keeping collaboration at its core — coordinating the annual
                campaign, developing its programme, supporting participating organisations
                and contributors, and ensuring MCAW remains accessible to the wider
                community.
              </p>
            </div>
          </div>

          <p className="pull-quote">
            MCAW belongs to the community. MCUK&apos;s role is to help bring that community
            together.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">Looking forward</div>
            <div className="editorial__body">
              <p>
                Our ambition is for Medical Cannabis Awareness Week to become a recognised
                annual fixture in the UK medical cannabis calendar. As the campaign grows,
                we want to expand the range of people involved and the subjects we can
                explore — creating more opportunities across the community.
              </p>
            </div>
          </div>

          <div className="voices-grid">
            {voices.map((voice) => (
              <div key={voice.title} className="voice-card">
                <h4>{voice.title}</h4>
                <p>{voice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cool-grey">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">Beyond one week</div>
            <div className="editorial__body">
              <p>
                Medical cannabis awareness should not begin and end with a single week in
                November. MCAW provides a focal point for the community — a moment each
                year when we can come together, celebrate progress, acknowledge the
                challenges that remain and start important conversations. But the work
                continues throughout the year.
              </p>
              <p style={{ color: 'var(--mid-grey)' }}>
                The stories shared during MCAW can challenge stigma. The information
                discussed during its events can help people make better-informed decisions.
                The connections made through the campaign can lead to collaboration. And the
                conversations started during one week can continue long afterwards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="seam" />

      <section className="section section--black statement">
        <div className="container">
          <p className="display" style={{ marginBottom: 0 }}>
            One week. Many voices. One community.
          </p>
          <p>Medical Cannabis Awareness Week — Together for Patients.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/events" className="btn btn-primary">Explore the Programme</Link>
            <Link href="/get-involved" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}