import styled, { css, DefaultTheme } from 'styled-components';
import { FormMessageProps } from '.';

type ContainerProps = Pick<FormMessageProps, 'type'>;

const containerTypes = {
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.danger};
  `,
};

export const Container = styled.p<ContainerProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    font-size: ${theme.font.sizes.small};
    ${containerTypes[type](theme)};
  `}
`;
