'use client'
import { useState, useRef, useEffect, FC } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const HeaderComponent: FC = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const spansRef = useRef<HTMLSpanElement[]>([])

  const toggleMenu = () => setOpen((prev) => !prev)

  useEffect(() => {
    const menu = menuRef.current
    const spans = spansRef.current

    if (!menu || spans.length !== 3) return

    if (open) {
      gsap.to(menu, { right: 0, duration: 0.4, ease: 'power2.out' })
      spans[0].classList.add('rotate-45', 'translate-y-[8px]')
      spans[1].classList.add('opacity-0')
      spans[2].classList.add('-rotate-45', '-translate-y-[8px]')
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(menu, { right: '-225px', duration: 0.4, ease: 'power2.in' })
      spans[0].classList.remove('rotate-45', 'translate-y-[8px]')
      spans[1].classList.remove('opacity-0')
      spans[2].classList.remove('-rotate-45', '-translate-y-[8px]')
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className='z-10 mx-auto flex max-w-6xl items-center justify-between p-4 max-md:fixed max-md:w-full max-md:bg-white max-md:pr-6 md:p-6'>
      <Image src='/img/logo2.webp' alt='logo' width={150} height={100} />

      <nav className='text-dark/80 hidden gap-8 text-sm md:flex'>
        {['about', 'skills', 'experience'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      <a
        href='#contact'
        className='bg-primary hidden rounded-md px-5 py-2 text-sm text-white transition hover:bg-blue-600 md:flex'
      >
        Contact Me
      </a>

      {/* Бургер меню */}
      <button
        onClick={toggleMenu}
        className='z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 text-black md:hidden'
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) spansRef.current[i] = el
            }}
            className='bg-dark block h-0.5 w-6 transition-all duration-300'
          />
        ))}
      </button>

      {/* Мобільне меню */}
      <div
        ref={menuRef}
        className='text-dark/80 fixed right-[-225px] top-0 z-10 flex h-full w-[225px] flex-col items-center justify-center space-y-6 bg-white text-base shadow-lg transition-all duration-300 md:hidden'
      >
        {['about', 'skills', 'experience', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={handleLinkClick}
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            {section === 'contact'
              ? 'Contact Me'
              : section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </header>
  )
}

export default HeaderComponent
