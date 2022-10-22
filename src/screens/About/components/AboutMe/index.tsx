import { Image } from 'components/Image';
import meImg from 'assets/me.jpg';
import * as S from './styles';

export function AboutMe() {
  return (
    <S.Container>
      <S.ImageBox>
        <Image src={meImg} alt="Douglas Pinheiro Goulart" placeholder="blur" />
      </S.ImageBox>

      <S.AboutText>
        <S.Paragraph>
          I&lsquo;m a UI developer based in Barcelona. I&lsquo;m interested in
          design systems, web3, user/dev experience and under engineering.
        </S.Paragraph>
        <S.Paragraph>
          I&lsquo;m currently doing UI/DX at Rainbow to help create the
          world&lsquo;s friendliest wallet.
        </S.Paragraph>
        <S.Paragraph>
          Previously, I worked at Modulz. Where I co-created Radix, designed the
          Stitches API and led the developer community.
        </S.Paragraph>
      </S.AboutText>
    </S.Container>
  );
}
