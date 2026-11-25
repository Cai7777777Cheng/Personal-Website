import { Hero } from '../components/Hero.tsx'
import { WorkCard } from '../components/WorkCard.tsx'
import { email, phoneDisplay, phoneHref, workRows } from '../data.ts'

const rowClass = ['row-a', 'row-b']

export function Home() {
  return (
    <main>
      <Hero />

      <section className="about" id="about">
        <div className="about-row">
          <p className="kicker">About</p>
          <h1>
            An industrial designer, brings ideas into commercial and social impact by delivering
            physical and digital experiences.
          </h1>
        </div>
      </section>

      <section className="works" id="works" aria-label="Selected works">
        <div className="hairline" />
        <p className="kicker">Selected works</p>
        {workRows.map((row, index) => (
          <div className={`works-row ${rowClass[index]}`} key={row[0].title}>
            {row.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        ))}
      </section>

      <section className="contact" id="contact">
        <p className="kicker">Contact</p>
        <div className="contact-links">
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </section>
    </main>
  )
}
