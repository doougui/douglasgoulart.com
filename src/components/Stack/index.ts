import styled, { css } from 'styled-components';

type StackProps = {
  spacing: string;
};

export const Stack = styled.div<StackProps>`
  ${({ spacing }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing};
  `}
`;
