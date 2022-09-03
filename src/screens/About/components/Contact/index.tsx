import { Button } from 'components/Button';
import { Heading2 } from 'components/Headings';
import { Stack } from 'components/Stack';

export function Contact() {
  return (
    <Stack as="section" spacing="2rem">
      <Heading2>Do you like what you see?</Heading2>

      <Button as="a" href="mailto:douglaspigoulart@gmail.com">
        Send me a message
      </Button>
    </Stack>
  );
}
