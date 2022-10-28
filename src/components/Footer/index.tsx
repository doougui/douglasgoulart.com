import { Button } from 'components/Button';
import { FormMessage } from 'components/FormMessage';
import { NowPlayingSpotify } from 'components/NowPlayingSpotify';
import { useForm } from 'hooks/useForm';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';

type NewsletterFormValues = {
  email: string | null;
};

export function Footer() {
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
    <S.Container>
      <NowPlayingSpotify />

      <S.Links>
        <section>
          <S.Title>Navigation</S.Title>

          <S.Nav>
            <Link href="/" passHref>
              <S.Link>Home</S.Link>
            </Link>

            <Link href="/about" passHref>
              <S.Link>About</S.Link>
            </Link>

            <Link href="/writings" passHref>
              <S.Link>Writings</S.Link>
            </Link>

            <Link href="/guestbook" passHref>
              <S.Link>Guestbook</S.Link>
            </Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Social</S.Title>

          <S.Nav>
            <Link href="https://github.com/doougui" passHref>
              <S.Link target="_blank">GitHub</S.Link>
            </Link>

            <Link href="https://www.linkedin.com/in/douglaspigoulart/" passHref>
              <S.Link target="_blank">Linkedin</S.Link>
            </Link>

            <Link href="https://twitter.com/oDougui" passHref>
              <S.Link target="_blank">Twitter</S.Link>
            </Link>

            <Link href="mailto:douglaspigoulart@gmail.com" passHref>
              <S.Link target="_blank">E-mail</S.Link>
            </Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Extras</S.Title>

          <S.Nav>
            <Link href="./" passHref>
              <S.Link target="_blank">Newsletter</S.Link>
            </Link>

            <Link href="./" passHref>
              <S.Link target="_blank">Resume</S.Link>
            </Link>

            <Link href="https://gitlab.com/douglaspigoulart" passHref>
              <S.Link target="_blank">GitLab</S.Link>
            </Link>
          </S.Nav>
        </section>

        <S.Newsletter>
          <form onSubmit={handleSubmit(handleSubscribeToNewsletter)}>
            <S.Title>Newsletter</S.Title>
            <S.Description>
              Get new articles delivered to your inbox!
            </S.Description>

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
        </S.Newsletter>
      </S.Links>

      <S.Copyright>© 2022 Douglas Pinheiro Goulart</S.Copyright>
    </S.Container>
  );
}
