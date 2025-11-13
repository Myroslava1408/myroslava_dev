'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { contactData } from './contactData'

const ContactComponent: FC = () => {
  return (
    <section
      id='contact'
      className='md: mx-auto max-w-6xl px-6 py-14 text-center max-md:scroll-mt-[100px]'
    >
      <h2 className='text-dark mb-10 text-[35px] font-semibold'>
        Contact <span className='text-primary'>Me</span>
      </h2>
      <div className='max-laptop:flex-col flex w-full flex-row flex-wrap justify-center gap-10 md:justify-between'>
        {contactData.map((contact, idx) => (
          <Link
            key={idx}
            href={contact.href}
            className='flex flex-col items-center transition hover:opacity-80'
          >
            <div className='relative h-[160px] w-[166px]'>
              <div className='absolute'>
                <svg id='wave' width='166' height='160' viewBox='0 0 166 160' fill='none'>
                  <path
                    id='wavePath'
                    fill={contact.waveColor ?? '#608AF5'}
                    d='M85.7852 0.0360206C101.496 -0.682995 115.271 9.49381 128.538 18.7928C142.692 28.7146 159.881 37.6645 164.714 55.3621C169.527 72.985 159.777 90.8774 152.791 107.595C146.594 122.426 138.989 136.503 126.876 145.912C114.885 155.225 100.348 161.615 85.7852 159.641C71.9985 157.773 63.7442 142.784 51.4371 135.689C35.8671 126.713 13.2706 129.457 4.4181 112.735C-4.44637 95.9896 1.49371 73.5911 9.39468 56.2707C16.6576 40.3489 32.0889 32.492 45.5382 22.5914C58.3669 13.1476 70.3688 0.741563 85.7852 0.0360206Z'
                  />
                </svg>
              </div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Image src={contact.icon} width={100} height={100} alt={contact.label} />
              </div>
            </div>
            <span className='mt-2 text-xl font-medium'>{contact.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ContactComponent
