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
    image:
      'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Web Studio Developer',
    description: 'Part of a team creating landing pages and corporate websites',
    image:
      'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&auto=format&fit=crop&q=60',
  },
]
