// MCAW 2026 programme data.
// Add or edit events here — the Programme page groups them by date automatically.
// `bookingHref` is optional: until it is set the card shows "Booking link coming soon".
// `logo` is optional on a host: without one, the card shows a lettermark placeholder.

export type HostId = 'mcuk' | 'upa' | 'pcuk'

export type Host = {
  name: string
  /** Path to a logo in public/images/partners/. Leave undefined to show a placeholder. */
  logo?: string
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
  pcuk: {
    name: 'PatientsCann UK',
    // Logo to follow — drop it into public/images/partners/patientscann-uk.png and add:
    // logo: '/images/partners/patientscann-uk.png',
    href: 'https://patientscann.org.uk',
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
  /** Where it takes place, if known — shown in the meta line next to the time */
  location?: string
  /** Full street address for in-person events, shown with an "Open in maps" link */
  address?: string
  /** Map link for the address */
  mapHref?: string
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
  /** Button text for bookingHref. Defaults to "Book on Eventbrite". */
  ctaLabel?: string
  /** Shown instead of a booking button, e.g. "Time and platform to be confirmed" */
  statusNote?: string
}

const UPA_NOTE = 'Platform and booking details to be confirmed'
const PCUK_NOTE = 'Come along to meet us and other patients.'

const maps = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export const events: ProgrammeEvent[] = [
  // ───────────── Sunday 1 November ─────────────
  {
    id: 'pcuk-standlake-classic-mini',
    host: 'pcuk',
    date: '2026-11-01',
    time: '11:00am until late UK time',
    startMinutes: 11 * 60,
    format: 'Motorsport meet-up',
    location: 'Witney, Oxfordshire',
    address: 'Standlake Arena, A415, Witney, OX29 7PR',
    mapHref: maps('Standlake Arena, A415, Witney OX29 7PR'),
    title: 'Standlake Arena: our #8 Classic Mini',
    summary:
      'On the eighth anniversary of medical cannabis becoming legal in the UK, the PatientsCann UK® Motorsports Team races our #8 Classic Mini for the first time.',
    description: [
      'We are in the non-contact Prod A class. We will talk with spectators and drivers, and show that medical cannabis patients can take part in motorsport. The meeting ends with a Big Bang firework display.',
      'Racing starts at 11:00. Gate prices: adults £20, concessions £15, children (10 to 16) £15, under 10s free, family (2 adults, 2 children) £55. Cheaper late entry after 4pm.',
    ],
    statusNote: 'Come along to cheer on the team and say hello at our car.',
  },
  {
    id: 'upa-patient-stories',
    host: 'upa',
    date: '2026-11-01',
    time: '3:00pm–4:20pm UK time',
    startMinutes: 15 * 60,
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
    id: 'pcuk-burn-pit-lounge',
    host: 'pcuk',
    date: '2026-11-02',
    time: '1:00pm–5:00pm UK time',
    startMinutes: 13 * 60,
    format: 'Patient meet-up',
    location: 'Derry',
    address: '2 London Street, Derry, BT48 6RQ',
    mapHref: maps('2 London Street, Derry, BT48 6RQ'),
    title: 'The Burn Pit Lounge',
    summary:
      'We will visit The Burn Pit Lounge, a patient space in Derry. It is a chance to meet patients in Northern Ireland, listen to their experiences, share useful information and build links across the community.',
    statusNote: PCUK_NOTE,
  },
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
    time: '7:30pm–8:30pm UK time',
    startMinutes: 19 * 60 + 30,
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
    id: 'pcuk-chongyz-lounge',
    host: 'pcuk',
    date: '2026-11-03',
    time: '2:00pm until late UK time',
    startMinutes: 14 * 60,
    format: 'Patient social',
    location: 'Liverpool',
    address: '35 Renshaw Street, Liverpool, L1 2SF',
    mapHref: maps('35 Renshaw Street, Liverpool, L1 2SF'),
    title: 'Patient social at Chongyz Lounge',
    summary:
      'Patients can meet each other, swap experiences and relax in a supportive space, without having to hide or apologise for their prescribed medicine.',
    description: ['Lounge entry is £5. Please bring proof of prescription and ID.'],
    statusNote: PCUK_NOTE,
  },
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
    time: '7:30pm–8:30pm UK time',
    startMinutes: 19 * 60 + 30,
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
    time: '7:30pm–8:30pm UK time',
    startMinutes: 19 * 60 + 30,
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
    id: 'pcuk-awareness-pop-up',
    host: 'pcuk',
    date: '2026-11-05',
    format: 'Public pop-up',
    location: 'Place chosen by you',
    title: 'You choose our awareness pop-up',
    summary:
      'Fill in our short form and help pick where the PatientsCann UK® team holds a public pop-up. It is a chance to take the conversation beyond patient spaces and talk directly with the public.',
    description: [
      'Once the result is in, we will share the place, meeting point and access information.',
      'Fill in the form, share it, and come and see us on the day.',
    ],
    bookingHref: 'https://forms.gle/UWESYJEHGFNzpWS87',
    ctaLabel: 'Choose the place',
  },
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
    time: '7:30pm–8:30pm UK time',
    startMinutes: 19 * 60 + 30,
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
    id: 'pcuk-cosmic-tree',
    host: 'pcuk',
    date: '2026-11-06',
    time: '2:00pm–6:00pm UK time',
    startMinutes: 14 * 60,
    format: 'Patient meet-up + terpene analysis',
    location: 'Gloucester',
    address: '84 Westgate Street, Gloucester, GL1 2NZ',
    mapHref: maps('84 Westgate Street, Gloucester, GL1 2NZ'),
    title: 'Cosmic Tree',
    summary:
      'An afternoon at Cosmic Tree. Another chance to meet patients, share practical information, hear about local experiences and create a supportive community feel.',
    description: [
      'KAST (KA Aromatic Sensory Translation) will join us to carry out terpene analysis for patients. They will test your medicine, give you a terpene breakdown and explain how to understand your medicine better.',
    ],
    statusNote: PCUK_NOTE,
  },
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
    time: '7:00pm–8:30pm UK time',
    startMinutes: 19 * 60,
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
    bookingHref: 'https://www.eventbrite.com/e/upa-mcaw-grow-your-own-tickets-2003234403025?aff=ebdsoporgprofile',
  },

  // ───────────── Saturday 7 November ─────────────
  {
    id: 'pcuk-downing-street',
    host: 'pcuk',
    date: '2026-11-07',
    time: '1:30pm–6:00pm UK time',
    startMinutes: 13 * 60 + 30,
    format: 'Awareness action',
    location: 'London',
    address: '10 Downing Street, London, SW1A 2AA',
    mapHref: maps('10 Downing Street, London, SW1A 2AA'),
    title: 'No. 10 Downing Street awareness action',
    summary:
      'We finish the week at No. 10 Downing Street in London, the home and office of the Prime Minister, taking the patient message to the heart of government.',
    description: [
      'This will be a peaceful, visible awareness action. Medical cannabis has been legal to prescribe for eight years, yet patients still face stigma, misunderstanding and barriers in everyday life.',
      'Alongside the action, PatientsCann UK has written an open letter to the Prime Minister asking them to stand with prescribed medical cannabis patients and tackle the stigma and discrimination they face at work, at home and in public. Everyone who signs will have their name handed in to 10 Downing Street on Saturday 7 November.',
    ],
    topicsLabel: 'On the day',
    topics: [
      '1:30pm: petition hand-in (confirmed)',
      '2:00pm to 6:00pm: planned static protest',
    ],
    afterTopics: [
      'The meeting point will be shared before the day.',
      'Come and stand with patients, or share the action online if you cannot be there.',
    ],
    bookingHref: 'https://patientscann.org.uk/sign-the-letter-no10/',
    ctaLabel: 'Sign the letter to No. 10',
  },
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
    time: '3:00pm–4:20pm UK time',
    startMinutes: 15 * 60,
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
    bookingHref: 'https://www.eventbrite.com/e/upa-mcaw-the-future-of-the-campaign-tickets-2003400606143?aff=ebdsoporgprofile',
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