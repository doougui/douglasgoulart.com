import { NextSeo } from 'next-seo';
import { Guestbook as GuestbookScreen } from 'screens/Guestbook';

export default function Guestbook() {
  return (
    <>
      <NextSeo
        title="Guestbook | Douglas Pinheiro Goulart"
        description="Leave a message to the people of the future"
      />
      <GuestbookScreen />
    </>
  );
}
