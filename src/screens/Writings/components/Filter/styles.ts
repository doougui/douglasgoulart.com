import { Input } from 'components/Input';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Order = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};

    display: flex;
    align-items: center;
    gap: 5px;

    padding: 0 1.5rem;
  `}
`;

export const OrderText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.heights.small};
    color: ${theme.colors.textDark};
    white-space: nowrap;
  `}
`;

export const SearchInput = styled(Input)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const SelectedOrder = styled.select`
  ${({ theme }) => css`
    background: transparent;
    color: inherit;
    border: none;
    font-weight: ${theme.font.weights.bold};
  `}
`;
