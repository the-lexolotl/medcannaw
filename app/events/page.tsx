import EventCard from '@/components/EventCard'

export const metadata = { title: 'Programme | MCAW' }

const events = [
  {
    title: 'Patient Voices: Living with CBPMs',
    date: '12 Oct 2026',
    time: '6:00 PM',
    format: 'Panel',
    speaker: 'Panel of patients',
    organisation: 'MCAW Community',
    description: 'Real patients share their experiences of accessing and living with prescribed cannabis-based medicines.',
    href: '#',
  },
  {
    title: 'Understanding the Evidence',
    date: '13 Oct 2026',
    time: '1:00 PM',
    format: 'Workshop',
    speaker: 'Dr. TBC',
    organisation: 'Partner Clinic',
    description: 'A clear, evidence-aware look at what we know — and don\'t yet know — about CBPMs.',
    href: '#',
  },
]

export default function EventsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Programme</span>
        <h1>The MCAW Programme</h1>
        <p style={{ maxWidth: '65ch' }}>
          Panels, workshops, Q&amp;As and patient stories running throughout the week.
        </p>
        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}