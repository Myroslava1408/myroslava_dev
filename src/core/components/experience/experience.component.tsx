'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { experienceData } from './experienceData'

const ExperienceComponent: FC = () => {
  return (
    <section id='experience' className='mx-auto max-w-6xl px-6 py-14 max-md:scroll-mt-[100px]'>
      <h2 className='text-dark mb-10 text-center text-[35px] font-semibold'>
        My <span className='text-primary'>Experience</span>
      </h2>

      <div className='grid gap-6 md:grid-cols-3'>
        {experienceData.map((item, idx) =>
          item.link ? (
            <Link
              key={idx}
              href={item.link}
              target='_blank'
              className='block overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'
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
                <p className='text-muted mt-1 text-sm'>{item.description}</p>
              </div>
            </Link>
          ) : (
            <div
              key={idx}
              className='overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'
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
                <p className='text-muted mt-1 text-sm'>{item.description}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

export default ExperienceComponent
