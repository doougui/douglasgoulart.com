import { NextSeo } from 'next-seo';
import { Guestbook as GuestbookScreen } from 'screens/Guestbook';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function Guestbook() {
  return (
    <>
      <NextSeo
        title="Guestbook | Douglas Pinheiro Goulart"
        description="Leave a message to the people of the future"
        canonical={getPageUrl()}
        openGraph={{
          title: 'Guestbook | Douglas Pinheiro Goulart',
          description: 'Leave a message to the people of the future',
        }}
      />
      <GuestbookScreen />
    </>
  );
}
