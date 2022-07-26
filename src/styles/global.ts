import { createGlobalStyle, css } from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/Poppins-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/Inter-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/Poppins-Bold.ttf') format('truetype');
  }

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

  html, body, #__next {
    height: 100%;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
      color: ${theme.colors.text};
    }

    body {
      font-family: ${theme.font.family};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.background};
      `}
    }
  `}

`;

export default GlobalStyles;
