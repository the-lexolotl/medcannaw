import { redirect } from 'next/navigation'

// There's no Learn overview page — /learn sends people to Resources.
export default function LearnPage() {
  redirect('/learn/resources')
}
