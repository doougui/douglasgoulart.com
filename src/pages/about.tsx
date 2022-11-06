import React from 'react';
import { NextSeo } from 'next-seo';
import { About as AboutScreen } from 'screens/About';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Douglas Pinheiro Goulart"
        description="Douglas is a front-end developer who started learning software development when he was a teenager. He also likes to play some games and write articles about some cool stuff he learns throughout his career."
        canonical={getPageUrl()}
        openGraph={{
          title: 'About | Douglas Pinheiro Goulart',
          description:
            'Douglas is a front-end developer who started learning software development when he was a teenager. He also likes to play some games and write articles about some cool stuff he learns throughout his career.',
        }}
      />
      <AboutScreen />
    </>
  );
}
