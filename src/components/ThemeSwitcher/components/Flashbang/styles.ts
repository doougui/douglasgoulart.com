import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type ContainerProps = {
  isOpen: boolean;
};

const containerModifiers = {
  isOpen: () => css`
    pointer-events: auto;
  `,
};

export const Container = styled(motion.div)<ContainerProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    pointer-events: none;

    background: white;

    z-index: ${theme.layers.alwaysOnTop};

    ${isOpen && containerModifiers.isOpen()}
  `}
`;
