import React from 'react';
import * as S from './styles';

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

export const Button = React.forwardRef<S.ContainerProps, ButtonProps>(
  ({ children, fullWidth, as, ...props }, ref) => {
    return (
      <S.Container ref={ref} as={as} fullWidth={fullWidth} {...props}>
        {children}
      </S.Container>
    );
  },
);
