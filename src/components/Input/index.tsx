import React from 'react';
import * as S from './styles';

export type InputProps = {
  hasError?: boolean;
  initialValue?: string;
  onInputChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
  initialValue = '',
  hasError = false,
  onInputChange,
  ...props
}: InputProps) {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    if (onInputChange) onInputChange(newValue);
  };

  return (
    <S.Container
      {...props}
      value={value}
      onChange={onChange}
      hasError={hasError}
    />
  );
}
