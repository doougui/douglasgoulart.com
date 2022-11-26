import { createGlobalStyle, css } from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  .yt-lite::before {
    content: none !important;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
      color: var(--color-text);
    }

    body {
      font-family: ${theme.font.family};

      ${!removeBg &&
      css`
        background-color: var(--color-background);
      `}
    }
  `}

`;

export default GlobalStyles;
