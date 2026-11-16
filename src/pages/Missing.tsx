import { Link } from 'react-router-dom'

export function Missing() {
  return (
    <main className="legal">
      <p className="kicker">404</p>
      <h1>This page isn’t here</h1>
      <p>The homepage still has the work, the about statement, and contact.</p>
      <Link className="text-link" to="/">
        Back to the homepage
      </Link>
    </main>
  )
}
