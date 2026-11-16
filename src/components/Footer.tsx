import { Link } from 'react-router-dom'
import { email, instagramUrl, linkedinUrl, phoneHref } from '../data.ts'

export function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">©2026 yUAN HONG</p>
      <div className="footer-cols">
        <div>
          <p>Follow</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div>
          <p>Contact</p>
          <a href={`mailto:${email}`}>Email</a>
          <a href={phoneHref}>Phone</a>
        </div>
        <div>
          <p>Legal</p>
          <Link to="/terms">Terms & Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
