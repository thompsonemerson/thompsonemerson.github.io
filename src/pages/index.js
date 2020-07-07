import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TextSlider from '../components/TextSlider'

export default function Home() {
  const [key, setKey] = useState(1)
  const [clicks, setClicks] = useState(0)

  const setEmoji = (number = false) => {
    if (number) {
      setKey(number)
      return
    }

    const imgs = [1, 2, 3, 10]
    const rand = Math.round(Math.random() * 3)

    setKey(imgs[rand])
  }

  useEffect(setEmoji, [])

  useEffect(() => {
    if (clicks === 10) setEmoji(6)
    if (clicks === 20) setEmoji(7)
    if (clicks === 30) setEmoji(8)
    if (clicks === 40) {
      setEmoji(9)
      setClicks(0)
    }
  }, [clicks])

  const mouseEnterLink = () => setEmoji(5)
  const mouseLeaveLink = () => setEmoji()

  return (
    <>
      <main onClick={() => setClicks(clicks + 1)}>
        <Header />
        <div>
          <img src={`/images/emoji-thompson-${key}.png`} alt="desenho de um personagem alegre de frente ao computador, piscando um olho e com um sorriso no rosto"/>

          <TextSlider />
        </div>
        <Footer mouseEnter={mouseEnterLink} mouseLeave={mouseLeaveLink} />
      </main>

      <style jsx>{`
        main {
          align-items: center;
          background-color: var(--color-dark);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 16px;
          user-select: none;
        }

        img {
          display: block;
          width: 90px;
          margin: 0 auto 8px;
          pointer-events: none;
        }

        @media (min-width: 700px) {
          img {
            width: 140px;
          }
        }
      `}</style>
    </>
  )
}
