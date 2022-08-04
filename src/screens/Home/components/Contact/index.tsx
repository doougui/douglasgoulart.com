import { Button } from 'components/Button';
import { SectionTitle } from 'components/SectionTitle';
import * as S from './styles';

export function Contact() {
  return (
    <section>
      <SectionTitle>Don’t be shy, say hi</SectionTitle>

      <S.Content>
        <S.Text>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </S.Text>

        <Button as="a" href="/link">
          Say hello
        </Button>
      </S.Content>
    </section>
  );
}
