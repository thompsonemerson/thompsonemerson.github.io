import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TextSlider() {
  const textRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['front-end', 'back-end', 'mobile dev', 'speaker'],
      cursorChar: '_',
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1400,
      loop: true
    })
  }, [])

  return (
    <>
      <h2>
        I'm a <span ref={textRef}></span>
      </h2>

      <style jsx>{`
        h2 {
          font-weight: 300;
          font-size: 3rem;
        }

        span {
          font-weight: 700;
          color: var(--color-neon);
        }

        @media (min-width: 700px) {
          h2 {
            font-size: 5rem;
          }
        }
      `}</style>
    </>
  )
}
