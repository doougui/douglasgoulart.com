import { Input } from 'components/Input';
import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const subscribeInputModifiers = {
  hasError: () => css`
    border-right: none;
  `,
};

export const SubscribeInput = styled(Input)`
  ${({ hasError }) => css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    min-width: 10rem;
    ${hasError && subscribeInputModifiers.hasError()}
  `}
`;
