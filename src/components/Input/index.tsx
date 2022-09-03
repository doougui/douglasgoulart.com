import React from 'react';
import * as S from './styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <S.Container {...props} />;
}
