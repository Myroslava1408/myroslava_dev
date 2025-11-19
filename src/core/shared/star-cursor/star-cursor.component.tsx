'use client'

import { useEffect } from 'react'

export default function StarCursor() {
  useEffect(() => {
    // створюємо fixed контейнер, який покриває ВСЮ сторінку
    const container = document.createElement('div')
    container.id = 'star-cursor-layer'
    container.style.position = 'fixed'
    container.style.inset = '0'
    container.style.pointerEvents = 'none'
    container.style.zIndex = '999999' // поверх усього
    document.body.appendChild(container)

    let x1 = 0,
      y1 = 0

    const vh = window.innerHeight
    const dist_to_draw = 50
    const delay = 1000

    const fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem']
    const colors = ['#E23636', '#F9F3EE', '#E1F8DC', '#B8AFE6', '#AEE1CD', '#5EB0E5']

    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

    const selRand = (o: string[]) => o[rand(0, o.length - 1)]

    const distanceTo = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

    const shouldDraw = (x: number, y: number) => distanceTo(x1, y1, x, y) >= dist_to_draw

    const addStr = (x: number, y: number) => {
      const str = document.createElement('div')
      str.innerHTML = '&#10022;'
      str.className = 'star-cursor-item'
      str.style.position = 'absolute'
      str.style.top = `${y + rand(-20, 20)}px`
      str.style.left = `${x}px`
      str.style.color = selRand(colors)
      str.style.fontSize = selRand(fsize)

      container.appendChild(str)

      const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize)

      str.animate(
        {
          translate: `0 ${y + fs > vh ? vh - y : fs}px`,
          opacity: 0,
          transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`,
        },
        { duration: delay, fill: 'forwards' },
      )

      setTimeout(() => str.remove(), delay)
    }

    const handler = (e: MouseEvent) => {
      if (shouldDraw(e.clientX, e.clientY)) {
        addStr(e.clientX, e.clientY)
        x1 = e.clientX
        y1 = e.clientY
      }
    }

    window.addEventListener('mousemove', handler)

    return () => {
      window.removeEventListener('mousemove', handler)
      container.remove()
    }
  }, [])

  return (
    <style>{`
      .star-cursor-item {
        transform-style: preserve-3d;
        pointer-events: none;
      }
      .star-cursor-item::before {
        content: '\\2726';
        position: absolute;
        inset: 0;
        color: inherit;
        text-shadow: 0 0 .8em #fff5;
      }
    `}</style>
  )
}
