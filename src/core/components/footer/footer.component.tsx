'use client'

import { FC } from 'react'

const FooterComponent: FC = () => {
  return (
    <footer className='relative flex h-[86px] w-full items-end justify-center overflow-hidden py-6 text-center text-sm text-white md:mt-10 md:h-[320px]'>
      <div className="absolute inset-0 bg-[url('/img/bg-footer.png')] bg-[length:100%_auto] bg-center bg-no-repeat" />

      <p className='relative z-10 mb-[-24px] text-[12px] md:mb-5 md:mb-[-12px] md:text-[20px]'>
        Developed By Myroslava Yatsuk
      </p>
    </footer>
  )
}

export default FooterComponent
