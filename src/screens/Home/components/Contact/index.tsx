import { Button } from 'components/Button';
import { Heading2 } from 'components/Headings';
import * as S from './styles';

export function Contact() {
  return (
    <section>
      <Heading2>Don’t be shy, say hi</Heading2>

      <S.Content>
        <S.Description>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </S.Description>

        <Button as="a" href="mailto:douglaspigoulart@gmail.com">
          Say hello
        </Button>
      </S.Content>
    </section>
  );
}
