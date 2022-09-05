import { MutedText } from 'components/MutedText';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Introduction = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    color: ${theme.colors.text};
  `}
`;

export const Role = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.heights.xxlarge};
    color: ${theme.colors.text};
    font-weight: ${theme.font.weights.normal};
  `}
`;

export const RoleAdditional = styled.span`
  ${media.lessThan('medium')`
    display: none;
  `};
`;

export const Description = styled(MutedText)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.heights.small};

    ${media.lessThan('medium')`
      display: none;
    `};
  `}
`;
