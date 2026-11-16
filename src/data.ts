export const nomoUrl = 'https://nomo-tabletop.deed.page/'

export const instagramUrl = 'https://www.instagram.com/alex_yuan_na/'
export const linkedinUrl = 'https://www.linkedin.com/in/yuan-hong-022736181/'
export const email = 'design.by.yuan@gmail.com'
export const phoneDisplay = '+46(0)72 443 72 99'
export const phoneHref = 'tel:+46724437299'
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=%C3%96stra+Strandgatan+30%2C+90333+Umea%2C+Sweden'

export const heroSlides = [
  {
    id: 'pebble',
    title: 'PEBBLE',
    subtitle: 'Cisco for your work and life balance',
    soon: false,
  },
  {
    id: 'cuda',
    title: 'CUDA',
    subtitle: 'Underground mining safety',
    soon: true,
  },
  {
    id: 'mori',
    title: 'MORI',
    subtitle: 'Home robot and nature companion',
    soon: false,
  },
  {
    id: 'xbloom',
    title: 'xBloom Studio',
    subtitle: 'Ultimate speciality coffee',
    soon: false,
  },
]

export type Work = {
  title: string
  subtitle: string
  href?: string
  image?: string
}

export const workRows: Work[][] = [
  [
    {
      title: 'Nomo',
      subtitle: 'Tabletop project',
      href: nomoUrl,
      image: `${import.meta.env.BASE_URL}nomo-hero.jpg`,
    },
    { title: 'PEBBLE', subtitle: 'Work-life balance communication' },
  ],
  [
    { title: 'NORA', subtitle: 'Multigen family privacy and comfort' },
    { title: 'Mori', subtitle: 'Home Robot & Nature Companion' },
  ],
  [
    { title: 'Xiaomi Portable Vacuum', subtitle: 'Less mess More freedom' },
    { title: 'DIMSUM', subtitle: 'Culture inspired furniture series' },
    { title: 'Next Gen Robot Vacuum', subtitle: 'innovative robot vacuum cleaning solution' },
  ],
  [
    { title: 'CUDA', subtitle: 'Underground mining safety system' },
    { title: 'BD Spot', subtitle: 'electric screwdriver' },
  ],
]
