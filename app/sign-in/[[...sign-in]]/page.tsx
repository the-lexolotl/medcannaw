import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="partner-signin">
      <div className="partner-signin-inner">
        <h1>Partner Sign In</h1>
        <p>Access is restricted to approved MCAW partners.</p>
        <SignIn appearance={{ variables: { colorPrimary: '#BED221' } }} />
      </div>
    </div>
  )
}