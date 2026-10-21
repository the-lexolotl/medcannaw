// MCAW 2026 programme data.
// Add or edit events here — the Programme page groups them by date automatically.
// `bookingHref` is optional: until it is set the card shows "Booking link coming soon".

export type HostId = 'mcuk' | 'upa' | 'eeuk'

export type Host = {
  name: string
  logo: string
  href: string
}

export const hosts: Record<HostId, Host> = {
  mcuk: {
    name: 'Medicinal Cannabis UK',
    logo: '/images/partners/medicinal-cannabis-uk.png',
    href: 'https://mcukcic.co.uk',
  },
  upa: {
    name: 'United Patients Alliance',
    logo: '/images/partners/united-patients-alliance.png',
    href: 'https://www.unitedpatientsalliance.org',
  },
  eeuk: {
    name: 'The Entourage Effect UK',
    logo: '/images/partners/the-entourage-effect-uk.png',
    href: 'https://theentourageeffectuk.com',
  },
}

export type ProgrammeEvent = {
  id: string
  host: HostId
  /** ISO date, e.g. 2026-11-02 */
  date: string
  /** Display time, e.g. "6:30pm–8:00pm UK time". Leave undefined when not confirmed. */
  time?: string
  /** Start time in minutes after midnight — only used to order events within a day. */
  startMinutes?: number
  /** Short format label shown as the card tag, e.g. "Online webinar" */
  format: string
  /** Where it takes place, if known */
  location?: string
  title: string
  subtitle?: string
  summary: string
  /** Extra paragraphs, shown under "More about this session" */
  description?: string[]
  /** Optional topic list, shown under "More about this session" */
  topics?: string[]
  topicsLabel?: string
  /** Optional closing paragraphs shown after the topics */
  afterTopics?: string[]
  bookingHref?: string
  /** Shown instead of a booking button, e.g. "Time and platform to be confirmed" */
  statusNote?: string
}

const UPA_NOTE = 'Platform and booking details to be confirmed'

export const events: ProgrammeEvent[] = [
  // ───────────── Sunday 1 November ─────────────
  {
    id: 'eeuk-patient-get-together',
    host: 'eeuk',
    date: '2026-11-01',
    format: 'Onsite & online',
    location: 'Onsite & online',
    title: 'Patient Get-Together',
    subtitle: 'Patient lounges & holistic health',
    summary:
      'A patient get-together featuring patient lounges, a look at the lounge and the role it plays, and a discussion on holistic health.',
    statusNote: 'More details to be confirmed',
  },
  {
    id: 'upa-patient-stories',
    host: 'upa',
    date: '2026-11-01',
    format: 'Live patient panel + audience Q&A',
    title: 'Patient Stories',
    subtitle: '“Why I Became a Patient”',
    summary:
      'The week opens with the people at the heart of the campaign: patients. A 90-minute live patient panel with audience Q&A.',
    topicsLabel: 'Topics',
    topics: [
      'Life before medical cannabis',
      'Discovering cannabis as medicine',
      'Getting a prescription',
      'What has changed',
      'The cost of treatment',
      'NHS vs private access',
      'Stigma and discrimination',
      'What patients still need',
    ],
    statusNote: UPA_NOTE,
  },

  // ───────────── Monday 2 November ─────────────
  {
    id: 'mcuk-together-for-patients',
    host: 'mcuk',
    date: '2026-11-02',
    time: '6:30pm–7:30pm UK time',
    startMinutes: 18 * 60 + 30,
    format: 'Online discussion + audience Q&A',
    location: 'Online',
    title: 'Together for Patients',
    summary:
      'Discover what MCAW is, where it came from, why it matters and why bringing the medical cannabis community together remains important.',
    description: [
      'Medical Cannabis Awareness Week (MCAW) brings the UK medical cannabis community together to share experiences, increase understanding and encourage meaningful discussion around issues affecting patients.',
      'This session looks at what Medical Cannabis Awareness Week is, where it came from and why it is still needed.',
      'We’ll explore the purpose of MCAW, what we hope to achieve through the week and why bringing patients, organisations, professionals and the wider community together remains important.',
      'There will also be an opportunity to ask questions, share your thoughts and take part in the discussion.',
      'Whether you are a patient, carer, healthcare professional, organisation, industry representative or simply interested in learning more, everyone is welcome.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/1999946500821?aff=oddtdtcreator',
  },
  {
    id: 'upa-the-clinics',
    host: 'upa',
    date: '2026-11-02',
    format: 'Panel discussion',
    title: 'The Clinics',
    subtitle: '“Eight Years On: What Is Medical Cannabis Access Actually Like?”',
    summary:
      'Representatives from UK medical cannabis clinics come together to discuss the reality of accessing treatment.',
    topicsLabel: 'Topics',
    topics: [
      'Who is accessing medical cannabis?',
      'Cost of treatment',
      'Patient support',
      'Access barriers',
      'NHS access',
      'Affordability',
      'Patient education',
      'What needs to change?',
    ],
    afterTopics: ['Special segment: Ask the Clinic — questions submitted by patients.'],
    statusNote: UPA_NOTE,
  },

  // ───────────── Tuesday 3 November ─────────────
  {
    id: 'mcuk-patient-voices',
    host: 'mcuk',
    date: '2026-11-03',
    time: '6:30pm–7:30pm UK time',
    startMinutes: 18 * 60 + 30,
    format: 'Online roundtable',
    location: 'Online',
    title: 'Patient Voices',
    subtitle: 'Patient Journeys & Experiences',
    summary:
      'Hear from patients and patient representatives about their CBPM journeys, including access, treatment and the realities of living as a patient.',
    description: [
      'At the heart of Medical Cannabis Awareness Week are the people who actually live with the realities of being a CBPM patient.',
      'This patient-focused session provides an opportunity for patients and patient representatives to share their experiences and talk openly about their journeys with CBPMs.',
      'Discussion will cover topics including access to treatment, navigating treatment pathways, experiences of care and the practical realities of living as a patient.',
      'Lived experience is an important part of understanding where the UK CBPM sector is today and where improvements are still needed.',
      'Join us to listen, learn and discuss the experiences of patients across the community.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003079035316?aff=oddtdtcreator',
  },
  {
    id: 'upa-the-doctors',
    host: 'upa',
    date: '2026-11-03',
    format: 'Panel discussion',
    title: 'The Doctors',
    subtitle: '“Prescribing Cannabis: What Does the Medical Profession Really Think?”',
    summary:
      'A discussion with prescribing doctors and other healthcare professionals. If medical cannabis is legal, why are so few NHS doctors prescribing it?',
    topicsLabel: 'Topics',
    topics: [
      'Evidence vs patient experience',
      'Why some doctors remain cautious',
      'THC and CBD',
      'Side effects and risks',
      'Mental health',
      'Dependency',
      'Drug interactions',
      'Medical education',
      'The future of prescribing',
    ],
    statusNote: UPA_NOTE,
  },

  // ───────────── Wednesday 4 November ─────────────
  {
    id: 'mcuk-understanding-cbpms',
    host: 'mcuk',
    date: '2026-11-04',
    time: '6:30pm–7:30pm UK time',
    startMinutes: 18 * 60 + 30,
    format: 'Online webinar',
    location: 'Online',
    title: 'Understanding CBPMs',
    subtitle: 'Cannabinoids, the Endocannabinoid System & Science',
    summary:
      'Explore the science behind CBPMs, including cannabinoids, the endocannabinoid system and what the current evidence tells us.',
    description: [
      'What do we actually know about the science behind CBPMs?',
      'This educational session explores some of the key science underpinning cannabinoid-based prescription medicines, including cannabinoids, the endocannabinoid system and the current evidence base.',
      'We’ll look at the science in an accessible way, helping patients and members of the wider community better understand the medicines they may encounter as part of CBPM treatment.',
      'The session is an opportunity to learn, ask questions and explore what the evidence currently tells us — as well as where further research is still needed.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003079093490?aff=oddtdtcreator',
  },
  {
    id: 'upa-global-activism-day',
    host: 'upa',
    date: '2026-11-04',
    format: 'Panel discussion',
    title: 'Global Activism Day',
    subtitle: '“Patients Around the World — One Fight, Many Systems”',
    summary:
      'UPA connects with patient activists from around the world to compare how medical cannabis is accessed and regulated.',
    topicsLabel: 'Comparing',
    topics: [
      'Legal access',
      'Prescription costs',
      'Public healthcare',
      'Home cultivation',
      'Patient rights',
      'Criminalisation',
      'Remaining barriers',
    ],
    afterTopics: [
      'Special feature: The Global Patient Declaration — a collaborative statement setting out the principles that patients around the world believe should underpin medical cannabis policy.',
    ],
    statusNote: UPA_NOTE,
  },

  // ───────────── Thursday 5 November ─────────────
  {
    id: 'mcuk-vapourisers',
    host: 'mcuk',
    date: '2026-11-05',
    time: '1:00pm–2:30pm UK time',
    startMinutes: 13 * 60,
    format: 'Live demonstration',
    location: 'Online',
    title: 'Living as a Patient',
    subtitle: 'Vapourisers & Thermal Extraction Devices',
    summary:
      'A practical and educational session exploring vapourisers, thermal extraction devices and considerations for patients using CBPMs.',
    description: [
      'For many patients prescribed CBPMs, understanding how to use their prescribed medicine appropriately is an important part of treatment.',
      'This practical and educational session looks at vapourisers and thermal extraction devices, their role in CBPM use and some of the considerations patients may need to be aware of.',
      'The session will provide an opportunity to learn more about the technology involved, ask questions and better understand the considerations around using devices with prescribed CBPMs.',
      'This session is intended as an educational discussion for patients and the wider community.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003079169718?aff=oddtdtcreator',
  },
  {
    id: 'mcuk-living-as-a-patient',
    host: 'mcuk',
    date: '2026-11-05',
    time: '6:30pm–7:30pm UK time',
    startMinutes: 18 * 60 + 30,
    format: 'Online discussion',
    location: 'Online',
    title: 'Living as a Patient',
    subtitle: 'Access & Patient Experience',
    summary:
      'Explore what it is really like to navigate life as a CBPM patient, from access and treatment pathways to everyday practical challenges.',
    description: [
      'Being prescribed CBPMs is only one part of being a patient. Navigating access to treatment and managing life alongside that treatment can bring a range of practical challenges.',
      'This discussion looks at what it is actually like to navigate life as a CBPM patient, including access, treatment pathways and some of the practical experiences patients encounter along the way.',
      'We’ll explore the realities of the patient journey and the challenges that can exist beyond the consultation room.',
      'Join us for an open discussion focused on patient experience, access and the things that matter in everyday life.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003692617557?aff=oddtdtcreator',
  },
  {
    id: 'upa-the-upa-story',
    host: 'upa',
    date: '2026-11-05',
    format: 'Panel discussion',
    title: 'The UPA Story',
    subtitle: '“Did we actually win?”',
    summary:
      'The story of UPA and the UK patient campaign — then a question for the next generation of activists: “What are we fighting for now?”',
    topicsLabel: 'The timeline',
    topics: [
      'UPA’s beginnings',
      'Patient activism',
      'Parliamentary campaigning',
      'Patients at Parliament',
      'The Billy Caldwell case and the 2018 law change',
      'The reality after legalisation',
      'Brighton Medicinal Cannabis Summit',
      'UPA’s campaigns today',
    ],
    statusNote: UPA_NOTE,
  },

  // ───────────── Friday 6 November ─────────────
  {
    id: 'mcuk-the-community',
    host: 'mcuk',
    date: '2026-11-06',
    time: '6:30pm–7:30pm UK time',
    startMinutes: 18 * 60 + 30,
    format: 'Online roundtable',
    location: 'Online',
    title: 'The Community',
    subtitle: 'Who Are We? How Can We Work Together?',
    summary:
      'A community discussion bringing together patients, organisations, clinics, producers and industry to explore collaboration and shared challenges.',
    description: [
      'The UK CBPM community is made up of many different people and organisations, all with their own experiences, perspectives and roles.',
      'This broad community discussion brings together patient organisations, clinics, producers, industry and other organisations working within the sector to explore who we are, the challenges we share and how we can work together for patients.',
      'What can different parts of the community contribute? Where are the opportunities for collaboration? And how can we make sure patients remain at the centre of what we do?',
      'Join us for an open conversation about the community and the importance of working together.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003692739923?aff=oddtdtcreator',
  },
  {
    id: 'upa-grow-your-own',
    host: 'upa',
    date: '2026-11-06',
    format: 'Discussion',
    title: 'Grow Your Own',
    subtitle: '“Should Medical Cannabis Patients Be Allowed to Grow Their Own Medicine?”',
    summary:
      'A patient-rights and policy discussion around home cultivation, featuring the UPA Grow Your Own campaign.',
    topicsLabel: 'Topics',
    topics: [
      'Why patients want to grow',
      'Affordability',
      'Patient autonomy',
      'Experiences in other countries',
      'Quality and safety',
      'Possible regulatory models',
      'Criminalisation of patients',
      'What legislation could look like',
    ],
    statusNote: UPA_NOTE,
  },

  // ───────────── Saturday 7 November ─────────────
  {
    id: 'mcuk-the-future',
    host: 'mcuk',
    date: '2026-11-07',
    time: '6:30pm–7:30pm UK time',
    startMinutes: 18 * 60 + 30,
    format: 'Online panel',
    location: 'Online',
    title: 'The Future',
    summary:
      'Looking ahead at the future of the UK CBPM sector and patient community, from treatment and research to access and patient advocacy.',
    description: [
      'Where do we go from here?',
      'This session looks towards the future of the UK CBPM sector and the patient community, exploring where things could go next and what changes may lie ahead.',
      'Discussion will include developments in treatment, research, access and the wider patient movement, as well as some of the opportunities and challenges that could shape the years ahead.',
      'The future of CBPM treatment will affect patients, healthcare professionals, organisations and the wider sector — so this is an opportunity to consider what that future could look like and what we want to see from it.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003692810133?aff=oddtdtcreator',
  },
  {
    id: 'upa-future-of-the-campaign',
    host: 'upa',
    date: '2026-11-07',
    format: 'Panel',
    title: 'The Future of the Campaign',
    subtitle: '“Where Do We Go From Here?”',
    summary:
      'The big finale: patients, campaigners, doctors, clinics, researchers and patient organisations come together. Each is asked: “What is the single biggest change patients need to see over the next five years?”',
    description: [
      'UPA then presents its proposed 2027–2030 Campaign Agenda, and the week’s speakers come back together to ask: “What are we going to do next?”',
    ],
    topicsLabel: 'Proposed agenda pillars',
    topics: [
      'NHS access',
      'Affordable medicine',
      'Patient rights',
      'Grow your own',
      'Better medical education',
      'Patient involvement in policy',
      'Independent research',
      'Ending patient stigma',
    ],
    statusNote: UPA_NOTE,
  },

  // ───────────── Sunday 8 November ─────────────
  {
    id: 'mcuk-closing-event',
    host: 'mcuk',
    date: '2026-11-08',
    time: '7:00pm–8:00pm UK time',
    startMinutes: 19 * 60,
    format: 'Online webinar + audience Q&A',
    location: 'Online',
    title: 'Closing Event',
    subtitle: 'Q&A, Reflections & Looking Ahead',
    summary:
      'Join us for a final MCAW Q&A, reflections on the week and a look at what comes next for Medical Cannabis Awareness Week.',
    description: [
      'We’ll bring Medical Cannabis Awareness Week 2026 to a close with an opportunity to reflect on the week and discuss the questions and topics that have come up along the way.',
      'This final session will feature a general Q&A, using questions and subjects raised throughout the week. It’s your opportunity to ask anything you may still be wondering about following the various MCAW sessions.',
      'We’ll also take some time to reflect on the discussions and conversations from across the week before looking ahead to what comes next for MCAW and what we hope to be doing next year.',
      'Thank you for being part of Medical Cannabis Awareness Week 2026 — we hope you’ll join us for the final conversation.',
    ],
    bookingHref: 'https://www.eventbrite.com/e/2003692835208?aff=oddtdtcreator',
  },
]

const dayFormatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
})

const shortFormatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export type ProgrammeDay = {
  date: string
  label: string
  shortLabel: string
  events: ProgrammeEvent[]
}

/** Groups events by date (earliest first); within a day, timed events come first in time order. */
export function groupEventsByDay(list: ProgrammeEvent[] = events): ProgrammeDay[] {
  const byDate = new Map<string, ProgrammeEvent[]>()
  for (const event of list) {
    byDate.set(event.date, [...(byDate.get(event.date) ?? []), event])
  }

  return [...byDate.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, dayEvents]) => {
      const d = new Date(`${date}T00:00:00Z`)
      return {
        date,
        label: dayFormatter.format(d),
        shortLabel: shortFormatter.format(d),
        events: [...dayEvents].sort(
          (a, b) => (a.startMinutes ?? 1e9) - (b.startMinutes ?? 1e9),
        ),
      }
    })
}
