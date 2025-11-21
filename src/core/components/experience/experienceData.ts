export interface ExperienceItem {
  title: string
  description: string
  image: string
  link?: string
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'Frontend Development Course',
    description: 'View Certificate (PDF)',
    image: '/img/certificate.png',
    link: 'https://lms.beetroot.academy/diploma/clmf2byv1t7y90813qk041hwv',
  },
  {
    title: 'Freelance Projects',
    description: 'Developed websites for small businesses & personal brands',
    image: '/img/upwork.webp',
  },
  {
    title: 'Web Studio Developer',
    description: 'Part of a team creating landing pages and corporate websites',
    image: '/img/team.webp',
  },
]
