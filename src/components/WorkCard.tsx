import type { Work } from '../data.ts'

export function WorkCard({ work }: { work: Work }) {
  const copy = (
    <span className="card-copy">
      <span className="card-title">{work.title}</span>
      <span className="card-sub">{work.subtitle}</span>
    </span>
  )

  if (work.href) {
    return (
      <a className="card card-link" href={work.href} target="_blank" rel="noreferrer">
        <span className="placeholder" role="img" aria-label={`${work.title} placeholder`} />
        {copy}
      </a>
    )
  }

  return (
    <article className="card">
      <span className="placeholder" role="img" aria-label={`${work.title} placeholder`} />
      {copy}
    </article>
  )
}
