import styled, { css } from 'styled-components';
import { FormMessageProps } from '.';

type ContainerProps = Pick<FormMessageProps, 'type'>;

const containerTypes = {
  success: () => css`
    color: var(--color-success);
  `,
  error: () => css`
    color: var(--color-danger);
  `,
};

export const Container = styled.p<ContainerProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    font-size: ${theme.font.sizes.small};
    ${containerTypes[type]()};
  `}
`;
