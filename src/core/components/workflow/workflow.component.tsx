'use client'

import { FC } from 'react'
import Image from 'next/image'
import { workflowData } from './workflowData'

const WorkFlowComponent: FC = () => {
  return (
    <section id='workflow' className='mx-auto max-w-6xl px-6 py-20'>
      <h2 className='mb-16 text-center text-3xl font-bold md:text-4xl'>
        🧠 My <span className='text-primary'>Workflow</span> / How I Work
      </h2>

      <div className='border-primary/40 relative space-y-16 border-l-2 pl-8'>
        {workflowData.map((item, idx) => (
          <div
            key={idx}
            className={`group flex flex-col items-center gap-8 md:flex-row ${
              item.reverse ? 'text-right md:flex-row-reverse md:text-left' : ''
            }`}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={96}
              height={96}
              className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105'
            />
            <div>
              <h3 className='text-primary mb-2 text-xl font-semibold'>{item.title}</h3>
              <p className='text-dark/80'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkFlowComponent
