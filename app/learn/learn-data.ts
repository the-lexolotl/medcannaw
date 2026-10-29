// MCAW Learn data — Resources and Patient Stories.
//
// Add an item to `items` below and it appears on /learn/resources or /learn/stories
// automatically. The card layout is picked from `format`:
//
//   video     → YouTube player (needs `youtubeId`)
//   embed     → any other iframe embed, e.g. Canva, Google Slides, a PDF viewer (needs `embed.src`)
//   download  → file download button (needs `file` — put the file in public/learn/)
//   link      → button to an external page (needs `href`)
//   article   → written piece with its own page (needs `slug` + `body`):
//               stories → /learn/stories/<slug>, resources → /learn/resources/<slug>
//
// Any story with a `slug` gets its own page — so a video story can have a page too,
// with a transcript and extra words alongside the video.
//
// Writing `body` for articles — one entry per block:
//   'A plain string'            → a paragraph
//   '## Heading'                → a section heading
//   '- List item'               → a bullet point (consecutive items are grouped into one list)
//   { image, alt, caption }     → an image from public/images/learn/
//
// `draft: true` items only show when running locally (npm run dev), never on the live site.
// Use it to preview new content before it goes public.

import type { HostId } from '@/app/events/events-data'

export type LearnSection = 'resources' | 'stories'
export type LearnFormat = 'video' | 'download' | 'embed' | 'article' | 'link'
export type EmbedAspect = '16/9' | '4/3' | '1/1' | '3/4'

export type BodyImage = { image: string; alt: string; caption?: string }
export type BodyBlock = string | BodyImage

export type LearnItem = {
  id: string
  section: LearnSection
  format: LearnFormat
  title: string
  /** Optional second line under the title */
  subtitle?: string
  /** One or two sentences shown on the card */
  summary: string
  /** Optional extra paragraphs, tucked under "More about this resource" on the card */
  details?: string[]
  /** Optional replacement for the format tag on the card, e.g. "PDF guide" */
  tagLabel?: string
  /** Optional topic label shown on the card, e.g. "Getting a prescription" */
  topic?: string
  /** Organisation behind it — uses the same hosts as the Programme page */
  host?: HostId
  /** How the person has agreed to be credited, e.g. "Sam, patient since 2020" */
  author?: string
  /** Articles: the author's role, shown under their name, e.g. "Director of Operations, EthVida CIC" */
  authorRole?: string
  /** Articles: the author's or organisation's website, linked under their name */
  authorUrl?: string
  /** ISO date, e.g. 2026-11-03. Used for ordering (newest first) and shown on the card. */
  date?: string

  /** format: 'video' — the ID from the YouTube link (youtube.com/watch?v=THIS_PART) */
  youtubeId?: string
  /**
   * format: 'embed' — use ONE of:
   *   src:  the iframe src from the provider's embed code (Canva, Google Slides…)
   *   html: the full embed code, for script-based widgets like POWR — paste it between backticks
   * provider: name shown on the "load content" panel when using html, e.g. 'POWR'
   * href: optional link for "Open in a new tab" (used automatically with src)
   */
  embed?: { src?: string; html?: string; provider?: string; href?: string; aspect?: EmbedAspect }
  /**
   * File in public/learn/, e.g. { href: '/learn/guide.pdf', type: 'PDF', size: '1.2 MB' }.
   * Required for format 'download'; on any other format it adds a download button too.
   */
  file?: { href: string; type: string; size: string }
  /** format: 'link' — the external page */
  href?: string
  /** Button text for links. Defaults to "Visit resource". */
  ctaLabel?: string

  /** Gives the item its own page at /learn/stories/<slug> or /learn/resources/<slug> */
  slug?: string
  /** Stories: a short line in their words, shown large */
  quote?: string
  /** Articles: the written piece — see "Writing `body`" at the top of this file */
  body?: BodyBlock[]
  /** Articles: sources listed at the end under "References & further reading" */
  references?: { label: string; href: string }[]
  /** Articles: a disclaimer shown in a box at the end of the article */
  disclaimer?: string
  /** Videos: transcript, one string per paragraph (shown on the story page) */
  transcript?: string[]
  /** Optional image for article, link and download cards — put it in public/images/learn/ */
  image?: { src: string; alt: string }

  /** Only visible on localhost */
  draft?: boolean
}

const items: LearnItem[] = [
  // ───────────── Resources ─────────────
  {
    id: 'cta-roadside-survival-guide-driving',
    section: 'resources',
    format: 'download',
    tagLabel: 'PDF guide',
    title: 'So, You Were Stopped by the Police: Driving',
    subtitle: 'A Roadside Survival Guide for Medical Cannabis Patients and All Motorists',
    summary:
      'If you have been stopped by police while driving with a medical cannabis prescription, this guide explains what may happen next, what roadside tests can and cannot prove, and how to respond calmly and lawfully.',
    details: [
      'It is designed for medical cannabis patients and all motorists across the UK who need clear information about police stops, saliva testing, impairment assessments, arrest, custody and evidential blood samples.',
      'The Roadside Survival Guide also explains the difference between having THC in your body and being impaired, when the medical defence may apply in Great Britain, what evidence you should keep, and what steps to take if you believe something went wrong. It is a practical public information resource and does not replace legal or medical advice.',
      'UK-wide edition. Legal review date: 31 July 2026.',
    ],
    topic: 'Driving & the law',
    author: 'Cannabis Trades Association',
    image: {
      src: '/images/learn/cta-roadside-survival-guide-driving.jpg',
      alt: 'Cover of the Cannabis Trades Association guide “So, You Were Stopped by the Police: Driving”',
    },
    file: { href: '/learn/cta-roadside-survival-guide-driving.pdf', type: 'PDF', size: '685 KB' },
  },

  {
    id: 'ethvida-magnificent-world-of-terpenes',
    section: 'resources',
    format: 'article',
    tagLabel: 'Article',
    slug: 'the-magnificent-world-of-terpenes',
    title: 'The Magnificent World of Terpenes',
    summary:
      'What terpenes are, the ones most commonly found in cannabis, and why getting to know the smells that work for you can help you have better-informed conversations about your medicine.',
    topic: 'Terpenes',
    author: 'Esme I',
    authorRole: 'Director of Operations, EthVida CIC',
    authorUrl: 'https://www.ethvida.com',
    date: '2026-10-29',
    image: {
      src: '/images/learn/ethvida-terpene-profile.png',
      alt: 'Example terpene profile pie chart: pinene 55%, linalool 25%, caryophyllene 15%, limonene 5%',
    },
    body: [
      'Today I want to talk to you about cannabis’s beautiful and vast array of terpenes. As the flower that it is, it comes in all shapes, sizes and colours, and the different smells are truly what make this plant medicine so diverse and unique in how it can treat a multitude of symptoms and have many effects on the body.',
      'Terpenes create the smell, taste and pigments of a plant. Becoming aware and getting to know which terpenes work for you will change your relationship with cannabis for the better, save you money and even change the way you interact with and choose other non-cannabis products and plants. The nose really does know — let’s find out why.',
      '## What Are Terpenes and Their Medicinal Properties?',
      'Open up the container with your cannabis in, or go and smell some coffee. When you take a whiff of these natural smells, you are inhaling plant terpenes! Terpenes are the chemical compounds that create smells. Have you ever wondered why some cannabis chemovars have names that describe what they smell of, like Pineapple Express and Lemon Haze?',
      'That is because the exact same terpenes that exist inside an actual lemon and pineapple are also naturally present in cannabis flowers, and in many other plants, herbs, fruits and vegetables too. They also affect how you feel however you consume them, and their medicinal value is immensely underrated and rarely acknowledged — yet they have been used in medicine for centuries.',
      'If you are an essential oil lover, you will know the power of scent and aromatherapy. These extracted terpenes can modulate the way immune cells behave, and they have antibacterial, antimicrobial, anti-inflammatory, sedative and even anti-tumour benefits, amongst many others. So, in addition to your bud’s cannabinoids, it’s packing these extra holistic health benefits too.',
      '## Common Terpenes Found in Cannabis',
      'Here is a list of some common terpenes found in the cannabis plant:',
      '- Limonene – energising and uplifting',
      '- Trans-nerolidol – helps with depression and is stimulating',
      '- Humulene – relaxing and helps with sleep',
      '- Myrcene – sedative and muscle relaxant',
      '- Pinene – helps with memory and is anti-inflammatory',
      '- Linalool – helps with sleep and is relaxing',
      '- Alpha-bisabolol – anti-inflammatory and pain relief',
      '- Beta-caryophyllene – pain relief and antioxidant',
      'There are terpenes you may be familiar with from the ingredients lists on household products, such as cleaning products. Limonene, pinene and linalool are commonly found in citrus, pine and lavender-scented kitchen and bathroom products, including perfumes, skincare, candles and floor cleaners. If you can smell it, then it’s a terpene.',
      '## How Terpenes Influence Our Experience of Cannabis',
      'Citrus, lemon, pine and eucalyptus are associated with uplifting, invigorating, pick-me-up and energising smells for most people. Limonene, the dominant terpene in lemon juice, is also commonly the dominant terpene in what would be identified as a sativa-dominant flower. Consumers look to these for an energetic and stimulating experience, instead of the heavy, relaxed body feeling that may target sleep, like linalool, which can be more sedating.',
      'Cannabis plants, whether THC, CBD or CBG dominant, all contain multiple combinations of terpenes, called a profile. When your buds have a terpene profile to view before you purchase, this is how you really get to know their true power and whether they are right for you.',
      {
        image: '/images/learn/ethvida-terpene-profile.png',
        alt: 'Example terpene profile pie chart: pinene 55%, linalool 25%, caryophyllene 15% and limonene 5%, illustrated with a pine sprig, lavender, a pepper mill and a lemon slice.',
        caption: 'An example terpene profile pie chart.',
      },
      'With my clients, some of the first questions I ask are: “What are your favourite smells? What smells do you like that relax you?” This gives a baseline guide to which dominant terpenes might work well in cannabis for that person.',
      '## Why More THC Doesn’t Always Mean Better Medicine',
      'I am a firm believer and word-spreader that a higher THC % is not always where the magic happens. In fact, for a lot of people a high THC content doesn’t help them medicinally, and it can completely deter someone from trusting that this plant medicine can bring them a better quality of life. A perfectly paired terpene profile, alongside balanced cannabinoids complementing each other, is the path to individually tailored medical cannabis. A knowledgeable practitioner keeps note of a patient’s preferred terpenes and how those cannabis chemovars (strains) are affecting them, as well as their cannabinoid intake.',
      'This is valuable knowledge to gain for yourself, so I invite you to start really smelling your buds. What smells good to you might not smell great to someone else. Your reaction to a smell is your body giving you a message — smell is one of your five senses for a very important reason, and that is investigating! What is for you, what is not for you, and how it can benefit you. Most days, when I am unsure what would be best for my symptoms, I let my nose guide me through my prescription to the flower that would be best for that moment.',
      '## Individual Sensitivities and Experience',
      'From my personal experience, I have discovered that limonene is far too stimulating for me and can end up causing my anxiety to flare up, so I make sure that what I am prescribed has no limonene present at all, or that it is one of the less dominant terpenes on the pie chart.',
      'After further loving research into what works for me and what doesn’t, I discovered that some terpenes can cause allergic reactions and aggravate a histamine response. While studies are testing CBD as a mast cell stabiliser, some of the terpenes it carries can be disruptive.',
      'Terpenes to avoid if you suffer from MCAS or are prone to allergic reactions are limonene, alpha- and beta-pinene, ocimene and terpinolene. You may be able to tolerate some of these as minor terpenes in a profile, or not at all.',
      '## Making Informed Choices About Your Cannabis Medicine',
      'You can start opening up the conversation about terpenes with your prescribing doctor or budtender to refine your search. They may already have a good idea of what works for you, or they may need more information and details about your preferences to help you get the most holistic potential from your medicine.',
      'Having a better understanding of the full spectrum of a cannabis plant’s overall profile, and how it can make us feel, leads the way to decreasing the chances of undesired side effects, getting the most from our medicine and learning much more about ourselves alongside plants.',
      'Begin to take note of the terpenes you come across and consume — keeping a medicine and symptoms diary can help you keep track of what is helpful and what to avoid. “Get curious” is my message to you today, so start your journey into curated cannabis and better health.',
      'At EthVida, we are advocating for better medical cannabis practices and educational resources for practitioners and patients. Stay tuned to learn more about terpenes and how medical cannabis could improve your quality of life.',
    ],
    references: [
      {
        label: 'Medicinal properties of terpenes found in Cannabis sativa and Humulus lupulus — ScienceDirect',
        href: 'https://share.google/Y3ZMnOWiTjoqp3IvH',
      },
      {
        label: 'Therapeutic and Medicinal Uses of Terpenes — PMC',
        href: 'https://share.google/Ag05QjI7ZVGY9SVaG',
      },
      {
        label: 'Cannabis Training & Certification — Trichome Institute',
        href: 'https://share.google/L5vkPkR0TQgLoDf3Q',
      },
    ],
    disclaimer:
      'Please note: all advice given is based on various healthcare models that have been shown to support patients sustainably and were backed by Public Health England (PHE), whose health improvement work passed to the Office for Health Improvement and Disparities (OHID) in 2021. Nonetheless, you should run any changes to your routine by your GP, as they are your primary healthcare provider and first point of contact, and by your prescribing clinician. It is also important that any other healthcare professionals involved in your care are involved in any goal planning. Don’t forget they hold your medical records and are familiar with your health needs: this will help everyone be on the same page, and will also enable you to plan more realistically and not overestimate your capacity, which could negatively affect your health.',
  },

  // ───────────── Patient stories ─────────────
  {
    id: 'getting-myself-back',
    section: 'stories',
    format: 'article',
    slug: 'getting-myself-back',
    title: 'Getting Myself Back: My Medical Cannabis Journey',
    summary:
      'Lex was first prescribed medical cannabis in 2019, aged 19, as one of the UK’s early patients. From years of feeling numb on psychiatric medication, to fighting an eviction threat over a legal prescription, this is how the journey has gone — and how much access has changed since.',
    topic: 'Access & stigma',
    author: 'Lex Wolfe',
    date: '2026-10-29',
    quote: 'No patient should have to fight for the right to take their prescribed medicine at home.',
    body: [
      '## Before',
      'I’ve had mental health struggles for as long as I can remember. By the time I was eight, I was on psychiatric medication, and over the years that list only grew: antidepressants, mood stabilisers, risperidone, different formulations of methylphenidate, sleep medication. Looking back, I was dealing with a lot at once: chronic pain from Ehlers-Danlos syndrome, anxiety rooted in autism and C-PTSD, ADHD, and constant problems with sleep and appetite.',
      'The medication was meant to help, but taking so much of it through such formative years came at a cost. I was angry and confused a lot of the time. While my friends were working out who they were and what they wanted from the future, I felt lost, with no passion for anything. Over time, all that medication left me emotionally numb, flat and foggy, almost zombie-like. I started putting myself in dangerous situations just to feel something. I grew up without really knowing who I was.',
      '## Finding something that worked',
      'I’ve been pro-cannabis for as long as I’ve known it existed. I tried it occasionally as a young teenager, and I quickly noticed it was doing more for me than getting me high. I slept better and my body hurt less. So I started using it whenever I could, mostly for sleep.',
      'At 17, with a bit more financial stability, I started using it daily for pain and sleep. There’s a history of addiction in my family, and I wanted to avoid opiate painkillers. Over time I came off all my pain medication and my antidepressants. Then at 18 I was told I had to stop taking Concerta XL for my ADHD because of postural orthostatic tachycardia.',
      '## Getting a prescription',
      'When medical cannabis became legal to prescribe in the UK, I knew that was the route I wanted. I got my first prescription in 2019, at 19, for pain and anxiety.',
      'Being an early patient wasn’t easy. Back then, prescriptions were only for people who had exhausted almost every other treatment option, and there was very little information or support to help you through it. Just registering with a clinic cost several hundred pounds, and an appointment with a doctor was another couple of hundred on top. Getting that appointment took weeks, with a lot of paperwork to submit first.',
      'After the appointment, my case went to a multidisciplinary review board for approval, which took several more weeks. Only once I was approved could my first prescription be written. And because products had to be imported to order, the import didn’t even start until then. That part alone could take months.',
      'Even once I had my medication, the problems didn’t stop. Product quality was often awful, and a lot of doctors were clearly still working it out as they went.',
      '## How far things have come',
      'I’ve watched the industry grow up alongside me. Today there are loads of prescribing clinics, hundreds of products available, and the quality is in a completely different league to those early days.',
      'The process today is almost unrecognisable. You can now be prescribed if you have a qualifying condition and have tried two or more conventional medications. Most clinics don’t charge for registration or appointments at all. You still need an appointment with a doctor, but review boards meet far more often, so the whole thing can take as little as a few days. Products are now imported based on predicted prescribing, so by the time your pharmacy receives your prescription the medication is usually already in stock, and it’s often out for delivery the same or next day. Prices have dropped too, with some products now as low as £2.95 a gram.',
      'That wider choice changed my treatment in ways I didn’t expect. I mainly use flower, and with so many more options available to try, I noticed that some genuinely helped with my focus, which mattered a lot after losing my ADHD medication. Now I’m shifting from just managing pain and sleep to treating each part of my health with products targeted to specific symptoms, and looking at my health more holistically.',
      '## What changed, and what didn’t',
      'My day-to-day didn’t change much when I got my prescription, because I’d been self-medicating for years. What changed was the reassurance. I’m no longer breaking the law, I don’t have to deal with dealers, and I know exactly what I’m taking, where it came from, and that it’s been tested.',
      '## When legal isn’t enough',
      'Having a prescription didn’t mean everyone accepted it. Between 2021 and 2023, while I was living in supported accommodation, the provider took issue with me taking my medication in my own home, and threatened to evict me over it. It didn’t seem to matter to them that a doctor had prescribed it.',
      'It was one of the most stressful periods of my life. I was constantly panicking, genuinely believing I was going to end up homeless for taking the medicine my doctor had prescribed.',
      'I didn’t let it go. I took my complaint to the Housing Ombudsman, and they ruled in my favour. No patient should have to fight for the right to take their prescribed medicine at home.',
      '## The stigma',
      'Stigma is a complicated one for me. I was 19 when I was first prescribed (I’m 27 now), young enough that a lot of people assumed I just wanted a legal way to get high.',
      'I’m a self-professed stoner with a prescription. I enjoy cannabis and I love the culture and community around it, but that doesn’t change how much it helps me.',
      'At home, it’s a different story. My family are all pro-cannabis, and several of them use it themselves. My mum has recently been prescribed medical cannabis too, for chronic pain from Ehlers-Danlos like me.',
      'Some of my family do worry about overuse, so having guidance from doctors is reassuring.',
      '## Where I’d like things to go',
      'I hope that one day patients will be able to get their medication in whatever way works best for them, whether that’s choosing it in person at a dispensary, having it prescribed by a doctor like we do now, or growing it themselves.',
      'Beyond that, I hope cannabis becomes available to everyone and a normal part of life, the same way alcohol is. I long for the day people can go to the pub and have a couple of joints rather than a couple of pints.',
      'I don’t think anyone can use cannabis without getting at least some benefit from it, even if it’s just feeling more relaxed. Stress is one of the most common reasons people get signed off work, after all.',
      '## If you’re where I was',
      'The UK prescription cannabis industry has changed massively since the beginning, and it’s still evolving. It isn’t the slow, expensive, confusing process I went through in 2019. If you’re considering the move to prescription cannabis, you might as well try it.',
    ],
  },
]

// ───────────── Helpers used by the pages (no need to edit below) ─────────────

const showDrafts = process.env.NODE_ENV !== 'production'

function byNewest(a: LearnItem, b: LearnItem) {
  if (a.date && b.date) return b.date.localeCompare(a.date)
  if (a.date) return -1
  if (b.date) return 1
  return 0
}

const visible = items.filter((item) => showDrafts || !item.draft).sort(byNewest)

export function getResources() {
  return visible.filter((item) => item.section === 'resources')
}

export function getStories() {
  return visible.filter((item) => item.section === 'stories')
}

export function getStoryBySlug(slug: string) {
  return getStories().find((item) => item.slug === slug)
}

export function getResourceBySlug(slug: string) {
  return getResources().find((item) => item.slug === slug)
}

/** The item's own page, if it has a slug: /learn/stories/<slug> or /learn/resources/<slug> */
export function itemPath(item: LearnItem) {
  return item.slug ? `/learn/${item.section}/${item.slug}` : undefined
}

export const formatLabels: Record<LearnFormat, string> = {
  video: 'Video',
  download: 'Download',
  embed: 'Interactive',
  article: 'Written',
  link: 'Link',
}

/** Plural labels for the filter buttons */
export const formatFilterLabels: Record<LearnFormat, string> = {
  video: 'Videos',
  download: 'Downloads',
  embed: 'Interactive',
  article: 'Written',
  link: 'Links',
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
