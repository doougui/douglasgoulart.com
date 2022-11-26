import { useColorTheme } from 'contexts/ColorThemeContext';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './styles';

export function Comments() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();

  const { colorMode } = useColorTheme();

  const isFirst = React.useRef(true);

  React.useEffect(() => {
    if (!isFirst.current || !colorMode) return;

    if (isFirst.current) {
      isFirst.current = false;
    }

    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('async', 'true');
    scriptEl.setAttribute('repo', 'doougui/douglasgoulart.com');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', `github-${colorMode ?? 'dark'}`);
    scriptEl.setAttribute('crossorigin', 'anonymous');

    if (ref) {
      ref.current?.appendChild(scriptEl);
    }
  }, [pathname, colorMode]);

  return <S.Container ref={ref} />;
}
