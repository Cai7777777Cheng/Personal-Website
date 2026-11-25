import { Link } from 'react-router-dom'

export function Legal() {
  return (
    <main className="legal">
      <p className="kicker">Legal</p>
      <h1>Terms & Privacy</h1>
      <p>
        This page is a personal portfolio. Nothing here is for sale, and the site does not ask you
        to create an account.
      </p>
      <p>
        Project pictures are flat gray placeholders. The Nomo card opens a separate site. Email
        and phone links leave this site only when you choose them.
      </p>
      <p>Those services keep their own terms and privacy policies.</p>
      <Link className="text-link" to="/">
        Back to the homepage
      </Link>
    </main>
  )
}
