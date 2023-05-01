import * as S from './styles';

export function Header() {
  return (
    <header>
      <S.Introduction>Hi there, I&apos;m a...</S.Introduction>
      <S.Role>
        <strong>Full-stack and Mobile developer</strong>{' '}
        <S.RoleAdditional>with an eye for design.</S.RoleAdditional>
      </S.Role>
      <S.Description>
        I&apos;m a Full-stack developer based in Brazil and moved by curiosity.
        I am currently focused on solutions for the web
      </S.Description>
    </header>
  );
}
