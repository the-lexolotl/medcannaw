import ComingSoon from '@/components/ComingSoon'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Partners | MCAW' }

export default function PartnersPage() {
  return (
    <ComingSoon
      eyebrow="Speakers & Partners"
      title="Our Partners Page is Coming Soon"
      message="We're confirming this year's speakers and participating organisations. Check back soon, or sign up to the newsletter to hear as they're announced."
    />
  )
}