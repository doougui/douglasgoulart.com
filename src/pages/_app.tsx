import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from 'styles/global';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { DefaultSeo } from 'next-seo';
import { getAbsoluteUrl } from 'utils/shared/get-absolute-url';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { ColorThemeProvider } from 'contexts/ColorThemeContext';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
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
      <ColorThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ColorThemeProvider>
      {process.env.NODE_ENV !== 'development' && <Analytics />}
    </ThemeProvider>
  );
}

export default App;
