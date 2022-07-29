import styled, { css } from 'styled-components';

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.heights.xlarge};
    color: ${theme.colors.text};
    font-weight: ${theme.font.weights.bold};
  `}
`;
