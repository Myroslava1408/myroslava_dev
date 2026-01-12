'use client'

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroComponent: FC = () => {
  return (
    <section
      className='grid items-center gap-10 max-md:mt-[100px] max-md:scroll-mt-[100px] md:grid-cols-2'
      id='about'
    >
      <motion.div
        className='w-full max-w-[570px]'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className='split-text text-sm text-muted'>Hi!</p>
        <h1 className='mt-2 text-4xl font-bold leading-tight md:text-[44px]'>
          <span className='split-text'>I’m </span>
          <span className='split-text ml-2 text-primary'>Myroslava</span>,<br />
          <span className='split-text'>a Front-End Developer</span>
        </h1>
        <p className='mt-4 max-w-md text-muted'>
          Based in Lutsk, Ukraine. Frontend developer creating clean, intuitive, and user-friendly
          interfaces. Skilled at handling complex UI elements, optimizing UX, and delivering
          high-quality results. Detail-oriented, quick to learn, and focused on building products
          that look and perform better than expected.
        </p>
        <a
          href='/Myroslava_Yatsuk_Frontend_CV.pdf'
          download
          className='mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90'
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        className='flex justify-center'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src='/img/me2.png'
          alt='Developer illustration'
          width={400}
          height={400}
          className='rounded-full'
        />
      </motion.div>
    </section>
  )
}

export default HeroComponent
