import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TextSlider from '../components/TextSlider'

export default function Home() {
  const [imgKey, setImgKey] = useState(null)
  const [clicks, setClicks] = useState(0)

  const mapClicks = {
    10: 6,
    20: 7,
    30: 8,
    40: 9
  }

  const setEmoji = (number = false) => {
    if (number) {
      setImgKey(number)
      return
    }

    const imgs = [1, 2, 3, 10]
    const rand = Math.round(Math.random() * 3)

    setImgKey(imgs[rand])
  }

  useEffect(setEmoji, [])

  useEffect(() => {
    if (mapClicks[clicks]) {
      setEmoji(mapClicks[clicks])

      if (clicks === 40) setClicks(0)
    }
  }, [clicks])

  const mouseEnterLink = () => setEmoji(5)
  const mouseLeaveLink = () => setEmoji()

  return (
    <>
      <main onClick={() => setClicks(clicks + 1)}>
        <Header />

        <div>
          {imgKey && (
            <img
              src={`/images/emoji-thompson-${imgKey}.png`}
              alt="desenho de um personagem de frente ao computador"
            />
          )}
          <TextSlider />
        </div>

        <Footer mouseEnter={mouseEnterLink} mouseLeave={mouseLeaveLink} />
      </main>

      <style jsx>{`
        main {
          align-items: center;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 24px;
          user-select: none;
        }

        div {
          width: 100%;
          text-align: center;
        }

        img {
          display: block;
          width: 30vw;
          min-width: 90px;
          max-width: 140px;
          margin: 0 auto 8px;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}
