import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { NavigationProps } from '.';

type ContainerProps = {
  $isOpen: NavigationProps['isOpen'];
};

const containerModifiers = {
  isOpen: () => css`
    pointer-events: auto;
  `,
  isClosed: () => css`
    pointer-events: none;
  `,
};

export const Container = styled(motion.nav)<ContainerProps>`
  ${({ theme, $isOpen }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.background};
    position: fixed;
    left: 0;
    top: 0;
    z-index: ${theme.layers.menu};

    padding: 0 calc(${theme.grid.gutter} / 2);

    ${$isOpen && containerModifiers.isOpen()}
    ${!$isOpen && containerModifiers.isClosed()}
  `}
`;
