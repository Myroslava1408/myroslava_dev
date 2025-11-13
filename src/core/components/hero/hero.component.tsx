'use client'

import { FC } from 'react'
import Image from 'next/image'

const HeroComponent: FC = () => {
  return (
    <section
      className='grid items-center gap-10 max-md:mt-[100px] max-md:scroll-mt-[100px] md:grid-cols-2'
      id='about'
    >
      <div className='w-full max-w-[570px]'>
        <p className='text-muted split-text text-sm'>Hi!</p>
        <h1 className='mt-2 text-4xl font-bold leading-tight md:text-[44px]'>
          <span className='split-text'>I’m </span>
          <span className='text-primary split-text ml-2'>Myroslava</span>,<br />
          <span className='split-text'>a Front-End Developer</span>
        </h1>
        <p className='text-muted mt-4 max-w-md'>
          Based in Lutsk, Ukraine. Focused on performance, scalability, and clean code.
        </p>
      </div>

      <div className='flex justify-center'>
        <Image
          src='/img/me2.png'
          alt='Developer illustration'
          width={400}
          height={400}
          className='rounded-full'
        />
      </div>
    </section>
  )
}

export default HeroComponent
