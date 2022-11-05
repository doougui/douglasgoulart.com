import { Button } from 'components/Button';
import { Heading2 } from 'components/Headings';
import * as S from './styles';

export function Contact() {
  return (
    <section>
      <Heading2>Don&apos;t be shy, say hi</Heading2>

      <S.Content>
        <S.Description>
          If you like what you see or just want to say hi, my inbox is always
          open. I&apos;ll try my best to get back to you!
        </S.Description>

        <Button as="a" href="mailto:douglaspigoulart@gmail.com">
          Say hello
        </Button>
      </S.Content>
    </section>
  );
}
