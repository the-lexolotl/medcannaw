import ComingSoon from '@/components/ComingSoon'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Programme | MCAW' }

export default function EventsPage() {
  return (
    <ComingSoon
      eyebrow="Programme"
      title="The Programme is Coming Together"
      message="We're building this year's line-up of panels, workshops, Q&As and patient stories. Sign up to the newsletter and we'll let you know the moment it's live."
    />
  )
}