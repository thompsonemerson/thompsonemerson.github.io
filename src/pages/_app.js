import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="theme-color" content="#090f29"></meta>
        <link rel="shortcut icon" href="/images/icon-192.png" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>Emerson Thompson | Full-Stack Developer</title>
        <meta name="description" content="Developer Web & Mobile, A speaker fond of technology"/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-20904103-7" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-20904103-7');
              `,
          }}
        />
      </Head>

      <style jsx global>{`
        :root {
          --color-dark: #090f29;
          --color-neon: #58fda1;
          --color-grey: #d6d6d6;

          --font-silka: 'Silka', sans-serif;
        }

        @font-face {
          font-family: Silka;
          font-weight: 500;
          src: url('/fonts/silka-medium-webfont.ttf');
        }

        @font-face {
          font-family: Silka;
          font-weight: 700;
          src: url('/fonts/silka-semibold-webfont.ttf');
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
        }

        html {
          font-size: 60.5%;
          background-color: var(--color-dark);
        }

        body {
          font-family: var(--font-silka);
          font-weight: 500;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  )
}
