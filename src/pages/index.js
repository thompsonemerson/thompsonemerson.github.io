import Header from '../components/Header'
import Footer from '../components/Footer'
import TextSlider from '../components/TextSlider'

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div>
          <img src="/images/emoji-thompson.min.png" alt="desenho de um personagem de frente ao computador"/>

          <TextSlider />
        </div>
        <Footer />
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
