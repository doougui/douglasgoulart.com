import meImg from 'assets/me.jpg';
import * as S from './styles';

export function AboutMe() {
  return (
    <S.Container>
      <S.Image src={meImg} alt="Douglas Pinheiro Goulart" placeholder="blur" />

      <S.AboutText>
        <S.Paragraph>
          Hi. My name is Douglas, and I&apos;m a software developer. Nice to
          meet you 👋. Aside from software development, I also like to play some
          games and write about things I learn.
        </S.Paragraph>
        <S.Paragraph>
          One day, I went to visit a technical school. I saw some robots and
          decided to learn programming, and here I am 😀. I&apos;ve been
          studying software development for over 4 years now.
        </S.Paragraph>
        <S.Paragraph>
          While working professionally, I managed to ship products which
          generated value and eased the life of thousands of users whilst
          improving the quality of existing software and creating new, valuable
          software from the beginning.
        </S.Paragraph>
      </S.AboutText>
    </S.Container>
  );
}
