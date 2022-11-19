import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from 'styles/global';
import { PageProvider } from 'components/PageProvider';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { DefaultSeo } from 'next-seo';
import { getAbsoluteUrl } from 'utils/shared/get-absolute-url';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Douglas Pinheiro Goulart</title>
        <link rel="icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <meta
          name="description"
          content="Front-end software developer based in Brazil and focused on web solutions"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Douglas Pinheiro Goulart" />
        <meta name="theme-color" content="#107BEB" />
      </Head>
      <DefaultSeo
        openGraph={{
          url: getAbsoluteUrl(),
          title: 'Douglas Pinheiro Goulart',
          type: 'website',
          locale: 'en_US',
          description:
            'Front-end software developer based in Brazil and focused on web solutions',
          images: [
            {
              url: `${getAbsoluteUrl()}/img/card.jpg`,
              secureUrl: `${getAbsoluteUrl()}/img/card.jpg`,
              width: 1200,
              height: 630,
              alt: 'Front-end and Mobile developer with an eye for design.',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Douglas Pinheiro Goulart',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            httpEquiv: 'content-type',
            content: 'text/html; charset=utf-8',
          },
        ]}
      />
      <NextNProgress
        color="#107BEB"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <PageProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </PageProvider>
      {process.env.NODE_ENV !== 'development' && <Analytics />}
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
