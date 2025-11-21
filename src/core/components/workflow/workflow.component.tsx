'use client'

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { workflowData } from './workflowData'

const WorkFlowComponent: FC = () => {
  return (
    <section id='workflow' className='mx-auto max-w-6xl px-6 py-20'>
      <h2 className='mb-16 text-center text-3xl font-bold md:text-4xl'>
        🧠 My <span className='text-primary'>Workflow</span> / How I Work
      </h2>

      <div className='relative space-y-16 border-l-2 border-primary/40 pl-8'>
        {workflowData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: item.reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className={`group flex flex-col items-center gap-8 md:flex-row ${
              item.reverse ? 'text-right md:flex-row-reverse md:text-left' : ''
            }`}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={96}
              height={96}
              className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110'
            />
            <div>
              <h3 className='mb-2 text-xl font-semibold text-primary transition group-hover:translate-x-1'>
                {item.title}
              </h3>
              <p className='text-dark/80'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WorkFlowComponent
