import { Heading1 } from 'components/Headings';
import { Link } from 'components/Link';
import styled, { css } from 'styled-components';

export const Heading = styled.header`
  margin-bottom: 2rem;
`;

export const Title = styled(Heading1)``;

export const Caption = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 1rem;
    text-align: center;
    font-size: ${theme.font.sizes.small};

    a {
      color: inherit;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.heights.xlarge};

    ${Link} {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.heights.xlarge};
    }

    h2 {
      margin-top: 3rem;
    }

    p {
      color: ${theme.colors.text};
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    *:not(pre) code {
      font-size: ${theme.font.sizes.medium};
      background: ${theme.colors.tertiary};
    }

    ol,
    ul {
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding-left: 2em;

      li {
        font-size: ${theme.font.sizes.large};
        line-height: ${theme.font.heights.xlarge};

        &::marker {
          color: ${theme.colors.textDark};
        }
      }
    }
  `}
`;

export const RelatedTopics = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.heights.small};
    margin-top: 4rem;

    ${Link} {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.heights.small};
    }
  `}
`;
