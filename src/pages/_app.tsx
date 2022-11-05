import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from 'styles/global';

import { PageProvider } from 'components/PageProvider';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <PageProvider>
        <Head>
          <title>Douglas Pinheiro Goulart</title>
          <link rel="icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-192.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <NextNProgress
          color="#107BEB"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </PageProvider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
