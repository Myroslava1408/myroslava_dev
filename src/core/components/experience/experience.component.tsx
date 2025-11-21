'use client'

import { FC } from 'react'
import Image from 'next/image'
import { experienceData } from './experienceData'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const ExperienceComponent: FC = () => {
  return (
    <section id='experience' className='mx-auto max-w-6xl px-6 py-14 max-md:scroll-mt-[100px]'>
      <motion.h2
        className='mb-10 text-center text-[35px] font-semibold text-dark'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My <span className='text-primary'>Experience</span>
      </motion.h2>

      <motion.div
        className='grid gap-6 md:grid-cols-3'
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        {experienceData.map((item, idx) =>
          item.link ? (
            <motion.a
              key={idx}
              href={item.link}
              target='_blank'
              className='block overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'
              variants={itemVariants}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={192}
                height={192}
                className='h-48 w-full object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold'>{item.title}</h4>
                <p className='mt-1 text-sm text-muted'>{item.description}</p>
              </div>
            </motion.a>
          ) : (
            <motion.div
              key={idx}
              className='overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'
              variants={itemVariants}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={192}
                height={192}
                className='h-48 w-full object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold'>{item.title}</h4>
                <p className='mt-1 text-sm text-muted'>{item.description}</p>
              </div>
            </motion.div>
          ),
        )}
      </motion.div>
    </section>
  )
}

export default ExperienceComponent
