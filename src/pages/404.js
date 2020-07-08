import Link from 'next/link'

export default function PageNotFound() {
  return(
    <>
      <main>
        <img src={`/images/emoji-thompson-6.png`} alt="desenho de um personagem de frente ao computador"/>
        <div className="code-area">
          <span style={{ color: '#777', fontStyle: 'italic'}}>
            // 404
          </span>
          <span>
            <span style={{ color: '#d65562' }}>if </span>
            (<span style={{ color: '#4ca8ef'}}>!</span><span style={{ fontStyle: 'italic', color: '#bdbdbd'}}>page</span>)
            {' {'}
          </span>
          <span>
            <span style={{ paddingLeft: '15px', color: '#2796ec' }}>
              <i style={{ width: '10px', display: 'inline-block' }}></i>throw
            </span>
            <span>
              (<span style={{ color: '#a6a61f' }}>'page not found'</span>);
            </span>
            <span style={{ display: 'block' }}>{'}'}</span>
            <span style={{ color: '#777', fontStyle: 'italic' }}>
              // <Link href="/"><a>Go home!</a></Link>
            </span>
          </span>
        </div>
      </main>

      <style jsx>{`
        main {
          align-items: center;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          padding: 24px;
          user-select: none;
        }

        img {
          display: block;
          width: 30vw;
          min-width: 90px;
          max-width: 140px;
          margin: 0 auto 8px;
          pointer-events: none;
        }

        a {
          color: #ffffff;
        }

        .code-area {
          font-size: 1.8vw;
          line-height: 1.5;
        }

        .code-area > span {
          display: block;
        }

        @media screen and (max-width: 600px) {
          .code-area {
            width: 200px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}
