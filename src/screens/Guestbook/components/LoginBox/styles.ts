import { MutedText } from 'components/MutedText';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 3rem;
    background-color: var(--color-secondary);
    border-radius: ${theme.border.radius};
    margin-top: 2rem;
  `}
`;

export const Description = styled(MutedText)`
  margin-top: 0.5rem;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const Actions = styled.div`
  margin-top: 3rem;
`;

export const InformationUsage = styled.p`
  ${({ theme }) => css`
    color: var(--color-textDarker);
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 1rem;
  `}
`;
