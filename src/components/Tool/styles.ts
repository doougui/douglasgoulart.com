import styled, { css } from 'styled-components';
import { ToolProps } from '.';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type DotProps = Pick<ToolProps, 'color'>;

export const Dot = styled.div<DotProps>`
  ${({ color }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${color};
  `}
`;

export const Content = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text};
  `}
`;
