import { RiCheckFill, RiCloseFill } from 'react-icons/ri';
import * as S from './styles';

export type FormMessageTypes = 'error' | 'success';

export type FormMessageProps = {
  type: FormMessageTypes;
  children: React.ReactNode;
};

export function FormMessage({ type, children }: FormMessageProps) {
  const Icon = {
    error: RiCloseFill,
    success: RiCheckFill,
  }[type];

  return (
    <S.Container type={type}>
      <Icon size={25} />
      {children}
    </S.Container>
  );
}
