import { Button } from 'components/Button';
import { FormMessage } from 'components/FormMessage';
import { useForm } from 'hooks/useForm';
import * as S from './styles';

type NewsletterFormValues = {
  email: string | null;
};

export function NewsletterForm() {
  const { values, handleInput, message, setMessage, handleSubmit, isLoading } =
    useForm<NewsletterFormValues>({
      initialValues: {
        email: null,
      },
    });

  const messages: { [key: string]: string } = {
    'Member Exists': 'Ops. Email already registered.',
  };

  const handleSubscribeToNewsletter = async () => {
    if (!values.email) {
      setMessage({
        type: 'error',
        content: 'Email is required.',
      });
      return;
    }

    await fetch('/api/newsletter/add', {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
      }),
    }).then(async (response) => {
      if (!response.ok) {
        const apiError = (await response.json()).error as string;
        setMessage({
          type: 'error',
          content: messages?.[apiError] ?? 'An error has occorred.',
        });
        return;
      }

      setMessage({
        type: 'success',
        content: 'Nice! You are in 😎.',
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSubscribeToNewsletter)}>
      <S.InputWrapper>
        <S.SubscribeInput
          name="email"
          onInputChange={(v: string) => handleInput('email', v)}
          placeholder="johndoe@email.com"
          hasError={message?.type === 'error'}
        />
        <Button type="submit" disabled={isLoading}>
          Subscribe
        </Button>
      </S.InputWrapper>

      {!!message && (
        <FormMessage type={message.type}>{message.content}</FormMessage>
      )}
    </form>
  );
}
