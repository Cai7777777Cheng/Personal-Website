import type { ProfileRow } from '../data.ts'
import { educationRows, experienceRows } from '../data.ts'

function ProfileTable({
  id,
  label,
  rows,
}: {
  id: string
  label: string
  rows: ProfileRow[]
}) {
  return (
    <section className="profile-block" aria-labelledby={id}>
      <div className="hairline" />
      <div className="profile-grid">
        <p className="kicker" id={id}>
          {label}
        </p>
        <div className="profile-rows">
          {rows.map((row) => (
            <div key={`${row.place}-${row.detail}`}>
              <div className="profile-row">
                {row.href ? (
                  <a className="who" href={row.href} target="_blank" rel="noreferrer">
                    {row.place}
                  </a>
                ) : (
                  <span className="who">{row.place}</span>
                )}
                <span className="role">{row.detail}</span>
                <span className="when">{row.when}</span>
              </div>
              <div className="hairline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <main className="profile">
      <a
        className="resume-label"
        href={`${import.meta.env.BASE_URL}Peng-Chengxu-Resume.pdf`}
        download="Peng-Chengxu-Resume.pdf"
      >
        Download Resume
      </a>
      <ProfileTable id="education-label" label="Education" rows={educationRows} />
      <ProfileTable id="experience-label" label="Experience" rows={experienceRows} />
    </main>
  )
}
