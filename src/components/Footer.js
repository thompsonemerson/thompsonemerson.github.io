export default function Footer({ mouseEnter, mouseLeave }) {
  return (
    <>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <a
          href="https://github.com/thompsonemerson/"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <a
          href="https://codepen.io/thompsonemerson/"
          target="_blank"
          rel="noopener"
        >
          Codepen
        </a>
        <a
          href="https://linkedin.com/in/thompsonemerson/"
          target="_blank"
          rel="noopener"
        >
          Linkedin
        </a>
      </div>

      <style jsx>{`
        div {
          display: flex;
          pointer-events: all;
        }

        a {
          position: relative;
          display: inline-block;
          margin: 0 4px;
          padding: 4px 8px;
          font-size: 1.3rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--color-grey);
          transition: all 350ms linear;
          z-index: 1;
        }

        a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-grey);
          transition: all 350ms linear;
          z-index: -1;
        }

        a:hover {
          color: var(--color-dark);
        }

        a:hover::after {
          height: 100%;
          background-color: var(--color-neon);
        }
      `}</style>
    </>
  )
}
