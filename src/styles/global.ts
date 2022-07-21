import { createGlobalStyle, css } from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme, removeBg }) => css`
    body {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}

`;

export default GlobalStyles;
