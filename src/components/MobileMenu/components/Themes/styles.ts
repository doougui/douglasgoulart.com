import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  margin-left: auto;
  gap: 5px;
  width: fit-content;
`;

type ThemeProps = {
  isActive: boolean;
};

const themeModifiers = {
  isActive: () => css`
    background: var(--color-textDarker);
  `,
};

export const Theme = styled.span<ThemeProps>`
  ${({ theme, isActive }) => css`
    display: block;
    padding: 1rem 2rem;
    font-size: ${theme.font.sizes.xsmall};
    border-radius: ${theme.border.radius};
    background: var(--color-tertiary);

    ${isActive && themeModifiers.isActive()};
  `}
`;
