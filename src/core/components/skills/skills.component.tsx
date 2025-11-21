'use client'

import { FC } from 'react'
import Image from 'next/image'
import { frontendSkills, apiSkills, toolsSkills } from './skillsData'
import { motion } from 'framer-motion'
import { DomeGallery } from '@/core/shared/dome-gallery'

const SkillsComponent: FC = () => {
  return (
    <section id='skills' className='mx-auto max-w-6xl px-6 py-14 max-md:scroll-mt-[100px]'>
      <motion.h2
        className='text-center text-[35px] font-semibold text-dark'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Technical <span className='text-primary'>Skills</span>
      </motion.h2>

      <motion.div
        className={'max-laptop:h-[55vh] m-auto mt-10 h-[72vh] w-auto'}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <DomeGallery />
      </motion.div>
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
