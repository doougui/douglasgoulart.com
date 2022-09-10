import * as S from './styles';

type ToggleProps = {
  toggle: () => void;
};

export function Toggle({ toggle }: ToggleProps) {
  return (
    <S.Button type="button" onClick={toggle}>
      <S.Container>
        <S.BurgerStroke
          variants={{
            closed: {},
            open: { rotate: '-45deg', y: 3 },
          }}
        />
        <S.BurgerStroke
          variants={{
            closed: {},
            open: { rotate: '45deg', y: -4 },
          }}
        />
      </S.Container>
    </S.Button>
  );
}
