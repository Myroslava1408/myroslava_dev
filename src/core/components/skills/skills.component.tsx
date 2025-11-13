'use client'

import { FC } from 'react'
import Image from 'next/image'
import { frontendSkills, apiSkills, toolsSkills } from './skillsData'

const SkillsComponent: FC = () => {
  return (
    <section id='skills' className='mx-auto max-w-6xl px-6 py-14 max-md:scroll-mt-[100px]'>
      <h2 className='text-dark mb-10 text-center text-[35px] font-semibold'>
        Technical <span className='text-primary'>Skills</span>
      </h2>

      <div className='grid gap-6 md:grid-cols-3'>
        {/* Frontend */}
        <SkillCard
          title='Frontend'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          skills={frontendSkills}
          extra='⚡ Optimization of page speed'
        />

        {/* API & Data */}
        <SkillCard
          title='API & Data'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
          skills={apiSkills}
        />

        {/* Tools & Environments */}
        <SkillCard
          title='Tools & Environments'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
          skills={toolsSkills}
        />
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  icon: string
  skills: typeof frontendSkills
  extra?: string
}

const SkillCard: FC<SkillCardProps> = ({ title, icon, skills, extra }) => (
  <div className='rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg'>
    <div className='mb-4 flex justify-center'>
      <Image src={icon} alt={`${title} icon`} width={64} height={64} />
    </div>
    <h3 className='mb-3 text-lg font-semibold'>{title}</h3>
    <div className='flex flex-wrap justify-center gap-2 text-sm'>
      {skills.map((tech, idx) => (
        <span
          key={idx}
          className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'
        >
          <Image src={tech.src} alt={tech.label} width={16} height={16} /> {tech.label}
        </span>
      ))}
      {extra && (
        <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
          {extra}
        </span>
      )}
    </div>
  </div>
)

export default SkillsComponent
