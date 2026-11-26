export const nomoUrl =
  'https://cai7777777cheng.github.io/Cai7777777Cheng-table-game-robot-website/'

export const hapticlinkUrl = 'https://cai7777777cheng.github.io/HapticLink-Website/'

export const email = '2867798209@qq.com'
export const phoneDisplay = '+86 13701898886'
export const phoneHref = 'tel:+8613701898886'

type HeroSlide = {
  id: string
  title: string
  subtitle: string
  image?: string
  alt?: string
  href?: string
  sentence?: boolean
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'nomo',
    title: 'NOMO',
    subtitle: "Feels the table's atmosphere and each player's mood in real time.",
    image: `${import.meta.env.BASE_URL}nomo-hero.jpg`,
    alt: 'Nomo on the table between two players',
    href: nomoUrl,
    sentence: true,
  },
  {
    id: 'hapticlink',
    title: 'HAPTICLINK',
    subtitle: 'Helps visually impaired individuals experience mainstream visual games.',
    image: `${import.meta.env.BASE_URL}hapticlink-hero.jpg`,
    alt: 'HapticLink headband and wrist band',
    href: hapticlinkUrl,
    sentence: true,
  },
  {
    id: 'coralra',
    title: 'Coralra',
    subtitle: 'Aims to raise eco-awareness and help protect endangered coral species.',
    image: `${import.meta.env.BASE_URL}coralra-hero.jpg`,
    alt: 'Coralra vessel with the Coralra logo',
    sentence: true,
  },
  {
    id: 'walkora',
    title: 'Walkora',
    subtitle: 'Helps older adults stay active with easier everyday dog walks.',
    image: `${import.meta.env.BASE_URL}walkora-hero.jpg`,
    alt: 'Walkora handheld device',
    sentence: true,
  },
]

export type Work = {
  title: string
  subtitle: string
  href?: string
  image?: string
  onDark?: boolean
}

export const workRows: Work[][] = [
  [
    {
      title: 'Nomo',
      subtitle: "Feels the table's atmosphere and each player's mood in real time.",
      href: nomoUrl,
      image: `${import.meta.env.BASE_URL}nomo-hero.jpg`,
    },
    {
      title: 'Coralra',
      subtitle: 'Aims to raise eco-awareness and help protect endangered coral species.',
      image: `${import.meta.env.BASE_URL}coralra-card.jpg`,
      onDark: true,
    },
  ],
  [
    {
      title: 'HAPTICLINK',
      subtitle: 'Helps visually impaired individuals experience mainstream visual games.',
      href: hapticlinkUrl,
      image: `${import.meta.env.BASE_URL}hapticlink-card.jpg`,
    },
    {
      title: 'Walkora',
      subtitle: 'Helps older adults stay active with easier everyday dog walks.',
      image: `${import.meta.env.BASE_URL}walkora-hero.jpg`,
    },
  ],
]

export type ProfileRow = {
  place: string
  detail: string
  when: string
  href?: string
}

export const educationRows: ProfileRow[] = [
  {
    place: 'The Hong Kong Polytechnic University',
    detail: 'MDes Smart Service Design',
    when: '2025.09-2026.11',
  },
  {
    place: 'Dalian University of Technology',
    detail: 'BEng Industrial Design',
    when: '2021.09-2025.06',
  },
]

export const experienceRows: ProfileRow[] = [
  {
    place: 'SF Technology',
    detail: 'Product Manager Intern',
    when: '2026.06-2026.10',
  },
  {
    place: 'Shokz',
    detail: 'Industrial Designer Intern',
    when: '2026.01-2026.04',
  },
]
